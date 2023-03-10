import { ShouldRender, RenderEvent } from "../deps.ts";
import PaginationEvent from "../pagination.ts";
import BakeryBase from "./main.ts";
import Mustache from "https://cdn.jsdelivr.net/npm/mustache/mustache.js";

const DATA_KEY = "routing_data";

const NavigationEventKey = "NavigationEvent";

class NavigateEvent extends Event {
  constructor() {
    super(NavigationEventKey);
  }
}

class MatchEvent extends Event {
  readonly #matchs: boolean;
  readonly #params: Record<string, string>;

  constructor(matches: boolean, params: Record<string, string>) {
    super("MatchChanged", { bubbles: true, composed: true });

    this.#matchs = matches;
    this.#params = params;
  }

  get Matches() {
    return this.#matchs;
  }

  get Params() {
    return this.#params;
  }
}

export abstract class UrlBuilder extends BakeryBase {
  #skip = 0;
  #take = 50;

  get #language() {
    if (navigator.languages != undefined) return navigator.languages[0];
    return navigator.language;
  }

  get #options() {
    return {
      locale: this.#language,
      skip: this.#skip.toString(),
      take: this.#take.toString(),
      ...(this.use_context((ctx) => ctx) ?? {}),
    };
  }

  constructor() {
    super();

    this.addEventListener(PaginationEvent.Key, (e) => {
      if (!(e instanceof PaginationEvent)) return;

      this.#skip = e.Skip;
      this.#take = e.Take;
    });
  }

  Render(url: string) {
    const opts = this.#options;
    // deno-lint-ignore no-explicit-any
    return (Mustache as any).render(url, opts);
  }
}

export default abstract class Router extends BakeryBase {
  abstract path: string;
  abstract exact: boolean;

  #previous = false;

  constructor() {
    super();
    document.addEventListener(NavigationEventKey, () =>
      this.dispatchEvent(new ShouldRender())
    );
    self.addEventListener("popstate", () =>
      this.dispatchEvent(new ShouldRender())
    );

    self.addEventListener(RenderEvent.Key, () => {
      const current = this.Matches;
      if (current.match)
        this.provide_context(DATA_KEY, {
          used: current.used,
          params: current.params,
        });

      if (current.match === this.#previous) return;

      this.#previous = current.match;
      this.dispatchEvent(new MatchEvent(current.match, current.params));
    });
  }

  static Push(url: string) {
    window.history.pushState({}, "", url);
    document.dispatchEvent(new NavigateEvent());
  }

  static Replace(url: string) {
    window.history.replaceState({}, "", url);
    document.dispatchEvent(new NavigateEvent());
  }

  Push(url: string) {
    Router.Push(url);
  }

  Replace(url: string) {
    Router.Replace(url);
  }

  get params() {
    return this.Matches.params;
  }

  get Matches() {
    // deno-lint-ignore no-explicit-any
    const existing: any = this.use_context((ctx) => ctx[DATA_KEY]);
    const { used, params } = existing ?? { used: 0, params: {} };
    const final_params = { ...params };
    const path_parts = window.location.pathname
      .split("/")
      .filter((p) => p)
      .slice(used);
    const check_parts = this.path.split("/").filter((p) => p);
    if (path_parts.length < check_parts.length)
      return { match: false, params: {} };

    const exact = this.exact;
    if (exact && path_parts.length !== check_parts.length)
      return { match: false, params: {} };

    for (let i = 0; i < check_parts.length; i++) {
      const check_part = check_parts[i];
      const path_part = path_parts[i];

      if (check_part.startsWith(":"))
        final_params[check_part.replace(":", "")] = path_part;
      else if (path_part === check_part) continue;
      else return { match: false, params: {} };
    }

    return {
      match: true,
      params: final_params,
      used: used + check_parts.length,
    };
  }
}

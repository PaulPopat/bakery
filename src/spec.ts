type Nightised<T> = { light: T; dark: T };

type ZIndex = number;
type ZIndexes = Record<string, ZIndex>;
export const z_indexes: ZIndexes = {
  popup: 1,
  overlay: 2,
};

type Border = { width: string; render: string; radius: string };
type Borders = Record<string, Border>;
export const borders: Borders = {
  body: {
    width: "2px",
    render: "solid",
    radius: "0.5rem",
  },
  small: {
    width: "1px",
    render: "solid",
    radius: "0.25rem",
  },
};

type Spacing = [string, string, string, string];
type Spacings = Record<string, Spacing>;
export const spacings: Spacings = {
  zero: ["0", "0", "0", "0"],
  block: ["0.75rem", "1rem", "0.75rem", "1rem"],
  small_block: ["0.5rem", "0.75rem", "0.5rem", "0.75rem"],
  input: ["1rem", "0.75rem", "0.25rem", "0.75rem"],
  badge: ["0.1rem", "0.25rem", "0rem", "0.25rem"],
  paragraph: ["0.5rem", "0", "0.5rem", "0"],
  heading: ["1rem", "0", "1rem", "0"],
  display_heading: ["2rem", "0", "2rem", "0"],
};

type ScreenSize = { query: string; width: string };
type ScreenSizes = Record<string, ScreenSize>;
export const screen_sizes: ScreenSizes = {
  xs: { query: "(min-width: 0)", width: "320px" },
  sm: { query: "(min-width: 420px)", width: "410px" },
  md: { query: "(min-width: 600px)", width: "580px" },
  lg: { query: "(min-width: 1100px)", width: "1050px" },
  xl: { query: "(min-width: 1440px)", width: "1350px" },
};

type Colour = Nightised<{
  background: [number, number, number];
  foreground: string;
}>;
type Colours = Record<string, Colour>;
export const colours: Colours = {
  body: {
    light: {
      background: [249, 244, 239],
      foreground: "#716040",
    },
    dark: {
      background: [22, 22, 26],
      foreground: "#94a1b2",
    },
  },
  headline: {
    light: {
      background: [249, 244, 239],
      foreground: "#020826",
    },
    dark: {
      background: [22, 22, 26],
      foreground: "#fffffe",
    },
  },
  surface: {
    light: {
      background: [255, 255, 254],
      foreground: "#020826",
    },
    dark: {
      background: [40, 40, 40],
      foreground: "#fffffe",
    },
  },
  primary: {
    light: {
      background: [140, 120, 81],
      foreground: "#fffffe",
    },
    dark: {
      background: [127, 90, 240],
      foreground: "#fffffe",
    },
  },
  contrast: {
    light: {
      background: [234, 221, 207],
      foreground: "#020826",
    },
    dark: {
      background: [44, 182, 125],
      foreground: "#fffffe",
    },
  },
  warning: {
    light: {
      background: [242, 80, 66],
      foreground: "#fffffe",
    },
    dark: {
      background: [225, 97, 98],
      foreground: "#e8e4e6",
    },
  },
  rainbow_0: {
    light: {
      background: [249, 65, 68],
      foreground: "#fffffe",
    },
    dark: {
      background: [249, 65, 68],
      foreground: "#fffffe",
    },
  },
  rainbow_1: {
    light: {
      background: [243, 114, 44],
      foreground: "#fffffe",
    },
    dark: {
      background: [243, 114, 44],
      foreground: "#fffffe",
    },
  },
  rainbow_2: {
    light: {
      background: [248, 150, 30],
      foreground: "#001e1d",
    },
    dark: {
      background: [248, 150, 30],
      foreground: "#001e1d",
    },
  },
  rainbow_3: {
    light: {
      background: [249, 132, 74],
      foreground: "#001e1d",
    },
    dark: {
      background: [249, 132, 74],
      foreground: "#001e1d",
    },
  },
  rainbow_4: {
    light: {
      background: [218, 154, 0],
      foreground: "#001e1d",
    },
    dark: {
      background: [218, 154, 0],
      foreground: "#001e1d",
    },
  },
  rainbow_5: {
    light: {
      background: [144, 190, 109],
      foreground: "#001e1d",
    },
    dark: {
      background: [144, 190, 109],
      foreground: "#001e1d",
    },
  },
  rainbow_6: {
    light: {
      background: [67, 170, 139],
      foreground: "#fffffe",
    },
    dark: {
      background: [67, 170, 139],
      foreground: "#fffffe",
    },
  },
  rainbow_7: {
    light: {
      background: [77, 144, 142],
      foreground: "#fffffe",
    },
    dark: {
      background: [77, 144, 142],
      foreground: "#fffffe",
    },
  },
  rainbow_8: {
    light: {
      background: [87, 117, 144],
      foreground: "#fffffe",
    },
    dark: {
      background: [87, 117, 144],
      foreground: "#fffffe",
    },
  },
  rainbow_9: {
    light: {
      background: [39, 125, 161],
      foreground: "#fffffe",
    },
    dark: {
      background: [39, 125, 161],
      foreground: "#fffffe",
    },
  },
};

type Shadow = Nightised<{
  x: string;
  y: string;
  radius: string;
  spread: string;
  colour: string;
}>;
type Shadows = Record<string, Shadow>;
export const shadows: Shadows = {
  body: {
    light: {
      x: "5px",
      y: "5px",
      radius: "2px",
      spread: "0px",
      colour: "rgba(0,0,0,0.1)",
    },
    dark: {
      x: "5px",
      y: "5px",
      radius: "2px",
      spread: "0px",
      colour: "rgba(171,209,198,0.29)",
    },
  },
  small: {
    light: {
      x: "0px",
      y: "0px",
      radius: "14px",
      spread: "0px",
      colour: "rgba(0,0,0,0.2)",
    },
    dark: {
      x: "0px",
      y: "0px",
      radius: "14px",
      spread: "0px",
      colour: "rgba(171,209,198,0.29)",
    },
  },
};

type TextStyle = {
  font_family: string;
  font_weight: string;
  font_size: string;
  margin: string;
};

export const line_height = "1.2";
type TextStyles = Record<string, TextStyle>;
export const text_styles: TextStyles = {
  h1_display: {
    font_family: "'Poppins', sans-serif",
    font_weight: "100",
    font_size: "5rem",
    margin: "display_heading",
  },
  h1: {
    font_family: "'Poppins', sans-serif",
    font_weight: "500",
    font_size: "3rem",
    margin: "heading",
  },
  h2_display: {
    font_family: "'Poppins', sans-serif",
    font_weight: "100",
    font_size: "4.5rem",
    margin: "display_heading",
  },
  h2: {
    font_family: "'Poppins', sans-serif",
    font_weight: "500",
    font_size: "2.5rem",
    margin: "heading",
  },
  h3_display: {
    font_family: "'Poppins', sans-serif",
    font_weight: "100",
    font_size: "4rem",
    margin: "display_heading",
  },
  h3: {
    font_family: "'Poppins', sans-serif",
    font_weight: "500",
    font_size: "2.25rem",
    margin: "heading",
  },
  h4_display: {
    font_family: "'Poppins', sans-serif",
    font_weight: "100",
    font_size: "3.5rem",
    margin: "display_heading",
  },
  h4: {
    font_family: "'Poppins', sans-serif",
    font_weight: "500",
    font_size: "2rem",
    margin: "heading",
  },
  h5_display: {
    font_family: "'Poppins', sans-serif",
    font_weight: "100",
    font_size: "3rem",
    margin: "display_heading",
  },
  h5: {
    font_family: "'Poppins', sans-serif",
    font_weight: "500",
    font_size: "1.75rem",
    margin: "heading",
  },
  h6_display: {
    font_family: "'Poppins', sans-serif",
    font_weight: "100",
    font_size: "2.5rem",
    margin: "display_heading",
  },
  h6: {
    font_family: "'Poppins', sans-serif",
    font_weight: "500",
    font_size: "1.5rem",
    margin: "heading",
  },
  body_large: {
    font_family: "'Poppins', sans-serif",
    font_weight: "300",
    font_size: "1.5rem",
    margin: "paragraph",
  },
  body: {
    font_family: "'Poppins', sans-serif",
    font_weight: "300",
    font_size: "1rem",
    margin: "paragraph",
  },
  small: {
    font_family: "'Poppins', sans-serif",
    font_weight: "300",
    font_size: "0.6rem",
    margin: "paragraph",
  },
  code: {
    font_family: "'Roboto Mono', monospace",
    font_weight: "400",
    font_size: "1rem",
    margin: "zero",
  },
};

export const animation_speeds: Record<string, string> = {
  fast: "100ms",
  slow: "500ms",
  very_slow: "1000ms",
};

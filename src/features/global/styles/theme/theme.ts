export type ColorType = {
  primary: string;
  secondary: string;
  light: string;
};

export type BackgroundColorType = {
  header: string;
  footer: string;
  primary: string;
  secondary: string;
  light: string;
};

export type ThemeType = {
  text: string;
  color: ColorType;
  backgroundColor: BackgroundColorType;
  screen: {
    mobile: string;
    tablet: string;
  };
};

export const darkTheme: ThemeType = {
  text: "center",
  color: {
    primary: "blue",
    secondary: "#999999",
    light: "#bbbbbb",
  },
  backgroundColor: {
    header: "#ebfbff",
    footer: "#003333",
    primary: "black",
    secondary: "#999999",
    light: "#bbbbbb",
  },
  screen: {
    mobile: "768px",
    tablet: "1024px",
  },
};

export const lightTheme: ThemeType = {
  ...darkTheme,
  color: {
    primary: "black",
    secondary: "#010101",
    light: "#eeeeee",
  },
  backgroundColor: {
    header: "#999999",
    footer: "#999999",
    primary: "wight",
    secondary: "#999999",
    light: "#eeeeee",
  },
};

// console.log(lightTheme);

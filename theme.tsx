


import { theme as chakraTheme } from "@chakra-ui/core";

const colors = chakraTheme.colors;

const fonts = {
  default: "Roboto-Regular, sans-serif",
  heading:"Roboto-Black, sans-serif",
  body: "Roboto-Regular, sans-serif",
  vsr: "Roboto-Regular, sans-serif",
  thin:"Roboto-Thin,sans-serif"
};

const fontWeights= {
  normal: 200,
  medium: 500,
  bold: 700,
};

const breakpoints = ["30em", "48em", "75em", "80em"];

const theme = {
  ...chakraTheme,
  colors,
  fonts: {
    ...chakraTheme.fonts,
    ...fonts
  },
  
  breakpoints
};

export default theme;

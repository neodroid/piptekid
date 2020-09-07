


import { theme as chakraTheme } from "@chakra-ui/core";

const colors = chakraTheme.colors;

const fonts = {
  default: "Montserrat",
  heading:"Montserrat-Black",
  body: "Montserrat",
  vsr: "Montserrat"

};

const fontWeights= {
  normal: 400,
  medium: 500,
  bold: 700,
};

const breakpoints = ["30em", "48em", "62em", "80em"];

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

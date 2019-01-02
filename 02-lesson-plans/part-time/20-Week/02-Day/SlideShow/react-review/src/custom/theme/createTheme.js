import createTheme from "spectacle/lib/themes/default";
import { colors, fonts } from "./utils";

const theme = createTheme(
  {
    primary: colors.white,
    secondary: colors.black,
    tertiary: colors.lightTrilBlue,
    quarternary: colors.darkTrilBlue
  },
  {
    primary: fonts.primary,
    secondary: fonts.secondary
  }
);

export default theme;

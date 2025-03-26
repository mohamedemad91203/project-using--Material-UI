import { cyan, grey } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  palette: {
      // @ts-ignore
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode

            neutral: {
              main: "#647488",
            },

            favColor: {
              main: grey[500],
            },
          }
        : {
            // palette values for dark mode
            neutral: {
              // main: "teal",
            },

            favColor: {
              main: cyan[800],
            },
          }),
    },
});
export default getDesignTokens ;
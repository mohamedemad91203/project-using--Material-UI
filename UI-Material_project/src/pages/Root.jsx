import { Box } from "@mui/material";
import Appbar from "MUI-components/Appbar";
import Drawerr from "MUI-components/Drawer";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import getDesignTokens from "style/MyTheme";
import React from "react";

const drawerWidth = 240;
const Root = () => {
  const [mode, setmyMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  // const darkTheme = createTheme({
  //   palette: {
  //     // @ts-ignore
  //     mode,
  //     ...(mode === "light"
  //       ? {
  //           // palette values for light mode

  //           neutral: {
  //             main: "#647488",
  //           },

  //           favColor: {
  //             main: grey[500],
  //           },
  //         }
  //       : {
  //           // palette values for dark mode
  //           neutral: {
  //             // main: "teal",
  //           },

  //           favColor: {
  //             main: cyan[800],
  //           },
  //         }),
  //   },
  // });

  // palette: {
  //   // @ts-ignore
  //   mode: myMode,
  //   // @ts-ignore

  // },
  // neutral: {
  //   main: "#647488",
  //   contrastexts: "#fff",
  // },

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [noneORblock, setnoneORblock] = useState("none");
  const [drawerType, setdrawerType] = useState("permanent");
  const showDrawer = () => {
    setdrawerType("temporary");
    setnoneORblock("block");
  };
  const hideDrawer = () => {
    setdrawerType("permanent")
    setnoneORblock("none")
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div>
        <Appbar
          drawerWidth={drawerWidth} showDrawer={showDrawer}        
        />

        <Drawerr
          drawerWidth={drawerWidth}
          setmyMode={setmyMode}
          noneORblock={noneORblock}
          drawerType={drawerType} 
          hideDrawer={hideDrawer}        
        />

        <Box
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px` },
            display: "flex",
            justifyContent: " center",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;

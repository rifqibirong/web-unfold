import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey } from "@mui/material/colors";
import React from "react";

const PaletteTheme = (props) => {
  const getTheme = localStorage.getItem("theme");

  const myTheme = createTheme({
    palette: {
      type: localStorage.getItem("theme") === "dark" ? "dark" : "light",
      primary: {
        main: "rgba(196, 196, 196, 0.64)",
        dark: "rgb(10, 11, 11)",
      },
      secondary: {
        light: "#0066ff",
        main: "#0044ff",
        contrastText: "#ffcc00",
      },
      text: {
        primary: getTheme === "dark" ? "#fff" : grey[900],
      },
    },
  });
  return <ThemeProvider theme={myTheme}>{props.children}</ThemeProvider>;
};

export default PaletteTheme;

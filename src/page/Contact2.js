import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import DarkmodeToggle from "../components/ToggleDarkMode";

const useStyles = makeStyles((theme) => ({
  // {console.log(theme.palette.type)}
  wrapper: {
    color: theme.palette.type === "dark" ? "#ffff" : "#333",
    content: [`${theme.palette.type}`],
  },
}));

const Contact2 = () => {
  const themes = localStorage.getItem("theme");
  const classes = useStyles();

  useEffect(() => {
    console.log(themes, "< local theme");
  }, [themes]);
  return (
    // <DarkmodeToggle>
    <div>
      <DarkmodeToggle />
      <h2 className={classes.wrapper}>Contact2</h2>
    </div>
    // </DarkmodeToggle>
  );
};

export default Contact2;

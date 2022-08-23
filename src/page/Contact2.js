import React from "react";
import DarkmodeToggle from "../components/ToggleDarkMode";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  text: {
    color: localStorage.getItem("theme") === "dark" ? "red" : "green",
  },
}));

const Contact2 = () => {
  const classes = useStyle();
  return (
    <div>
      <DarkmodeToggle />
      <h2 className={classes.text}>Contact2</h2>
    </div>
  );
};

export default Contact2;

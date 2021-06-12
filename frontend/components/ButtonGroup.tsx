import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { ButtonSound } from "../src/apis/buttons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "90%",
      margin: "32px auto",
      padding: "32px",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
    button: {
      margin: "4px",
    },
  })
);

function playSound(button: ButtonSound) {
  new Audio("https://www.mirei-button.net" + button.url).play(); // TODO
}

export default function ButtonsGroup(props: { buttons: ButtonSound[] }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.buttons.map((button) => (
        <Button
          variant="contained"
          className={classes.button}
          key={button.url}
          onClick={() => playSound(button)}
        >
          {button.text}
        </Button>
      ))}
    </div>
  );
}

import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { Material } from "../src/apis/materials";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "640px",
      maxWidth: "90%",
      margin: "32px auto",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
  })
);

export default function MaterialList(props: { materials: Material[] }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {props.materials
        .filter((m) => m.visibility)
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .map((m) => {
          return (
            <ListItem key={m.url}>
              <Link href={m.url}>
                <ListItemText>{m.name}</ListItemText>
              </Link>
            </ListItem>
          );
        })}
    </List>
  );
}

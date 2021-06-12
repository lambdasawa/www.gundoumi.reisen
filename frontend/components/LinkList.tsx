import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import RadioIcon from "@material-ui/icons/Radio";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import React from "react";
import { SocialLink } from "../src/apis/socialLink";

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

function buildIcon(icon?: string) {
  switch (icon) {
    case "youtube":
      return <YouTubeIcon />;
    case "twitcasting":
      return <RadioIcon />;
    case "bilibili":
      return <LiveTvIcon />;
    case "openrec":
      return <LiveTvIcon />;
    case "twitter":
      return <TwitterIcon />;
    case "official-shop":
      return <ShoppingCartIcon />;
    case "booth":
      return <ShoppingCartIcon />;
    default:
      return <></>;
  }
}

export default function LinkList(props: { socialLinks: SocialLink[] }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {props.socialLinks.map((link) => {
        return (
          <ListItem key={link.url}>
            <Link href={link.url}>
              <ListItemIcon>{buildIcon(link.icon)}</ListItemIcon>
            </Link>
            <Link href={link.url}>
              <ListItemText>{link.name}</ListItemText>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
}

import AppBar from "@material-ui/core/AppBar";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    tab: {
      textTransform: "none",
      minWidth: 80,
    },
  })
);

const menu = [
  { href: "/sei/tv", name: "MireiTV" },
  // TODO: { href: "/sei/illust", name: "イラスト" },
  { href: "/sei/musics", name: "音楽" },
  { href: "/sei/buttons", name: "美玲ボタン" },
  { href: "/sei/goods", name: "グッズ" },
  { href: "/sei/history", name: "年表" },
  { href: "/sei/links", name: "リンク集" },
  { href: "/sei/materials", name: "素材集" },
];

export default function Header() {
  const classes = useStyles();

  const router = useRouter();

  const [value, setValue] = React.useState(0);

  useEffect(() => {
    setValue(
      location ? menu.findIndex(({ href }) => href === location.pathname) : 0
    );
  });

  return (
    <AppBar position="static" color="default">
      <Tabs
        variant="scrollable"
        textColor="primary"
        indicatorColor="secondary"
        scrollButtons="on"
        aria-label="scrollable force tabs"
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
          router.push(menu[newValue].href);
        }}
      >
        {menu.map((m) => (
          <Tab key={m.href} label={m.name} className={classes.tab}></Tab>
        ))}
      </Tabs>
    </AppBar>
  );
}

import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MuiLink from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import React from "react";

const drawerWidth = 120;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
  })
);

const menu = [
  { href: "/sei/tv", name: "MireiTV" },
  { href: "/sei/illust", name: "イラスト" },
  { href: "/sei/musics", name: "楽曲" },
  { href: "/sei/buttons", name: "美玲ボタン" },
  { href: "/sei/history", name: "年表" },
  { href: "/sei/links", name: "リンク集" },
  { href: "/sei/materials", name: "素材集" },
];

export default function Header() {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menu.map((m) => (
        <ListItem button key={m.href}>
          <Link href={m.href}>
            <ListItemText primary={m.name} />
          </Link>
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>

        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        <Typography variant="h6">
          <MuiLink className="top-logo">
            <Link href="/sei/">郡道美玲ファンサイト</Link>
          </MuiLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

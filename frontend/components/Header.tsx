import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import MuiLink from "@material-ui/core/Link";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Header() {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (url: string) => {
    setAnchorEl(null);
    router.push(url);
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleClose("/sei/history")}>年表</MenuItem>
          <MenuItem onClick={() => handleClose("/sei/links")}>
            リンク集
          </MenuItem>
          <MenuItem onClick={() => handleClose("/sei/illust")}>
            イラスト
          </MenuItem>
          <MenuItem onClick={() => handleClose("/sei/musics")}>楽曲</MenuItem>
          <MenuItem onClick={() => handleClose("/sei/buttons")}>
            美玲ボタン
          </MenuItem>
          <MenuItem onClick={() => handleClose("/sei/tv")}>MireiTV</MenuItem>
          <MenuItem onClick={() => handleClose("/sei/materials")}>
            素材集
          </MenuItem>
        </Menu>
        <Typography variant="h6">
          <MuiLink className="top-logo">
            <Link href="/sei/">郡道美玲ファンサイト</Link>
          </MuiLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

import Link from "@material-ui/core/Link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "100%",
      padding: "8px",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      textAlign: "center",
      color: "rgb(88, 88, 88)",
    },
  })
);

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span>
        このサイトはにじさんじ所属バーチャルライバー郡道美玲さんの非公式ファンサイトです。お問い合わせは
      </span>
      <Link href="https://twitter.com/lambdasawa">こちら</Link>
      <span>。</span>
    </div>
  );
}

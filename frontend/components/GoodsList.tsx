import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "90%",
      margin: "32px auto",
    },
    goods: {
      padding: "8px",
    },
    typography: {},
    paper: {
      padding: "8px",
      textAlign: "center",
    },
    button: {
      margin: "8px",
    },
  })
);

const goodsElements: Record<string, JSX.Element> = {
  "individual-goods": (
    <blockquote className="twitter-tweet">
      <p lang="ja" dir="ltr">
        【！大事！】
        <br />
        <br />
        郡道美玲の初めての個人グッズが遂に！遂に！発売開始しました〜！2周年記念でありバレンタイン記念の期間限定🎈👯👯🎈
        <br />
        全部書き下ろしで頑張って作ったので是非是非お手元にどうぞ〜♥️ナゾのおっさんとは……………？
        <a href="https://t.co/BQBdoqB730">https://t.co/BQBdoqB730</a>{" "}
        <a href="https://t.co/pgbP4i6sqx">pic.twitter.com/pgbP4i6sqx</a>
      </p>
      &mdash; 郡道美玲🐽本日誕生日！ (@g9v9g_mirei){" "}
      <a href="https://twitter.com/g9v9g_mirei/status/1360883439616942080?ref_src=twsrc%5Etfw">
        February 14, 2021
      </a>
    </blockquote>
  ),
  "acrylic-stand": (
    <blockquote className="twitter-tweet">
      <p lang="ja" dir="ltr">
        【にじさんじ新ビジュアルグッズ第4弾 販売決定！】
        <br />
        <br />
        10/15(木)12:00より、郡道美玲、御伽原江良、森中花咲、童田明治
        <br />
        4名の新ビジュアルを使用した
        大判アクリルスタンド、ランダム缶バッジの販売が決定いたしました！
        <br />
        <br />
        詳細はこちら！▽
        <a href="https://t.co/FMpt4GZu36">https://t.co/FMpt4GZu36</a>
        <a href="https://twitter.com/hashtag/%E3%81%AB%E3%81%98%E3%81%95%E3%82%93%E3%81%98%E6%96%B0%E3%83%93%E3%82%B8%E3%83%A5%E3%82%A2%E3%83%AB%E3%82%B0%E3%83%83%E3%82%BA?src=hash&amp;ref_src=twsrc%5Etfw">
          #にじさんじ新ビジュアルグッズ
        </a>{" "}
        <a href="https://t.co/hvmyfS47WO">pic.twitter.com/hvmyfS47WO</a>
      </p>
      &mdash; にじさんじ公式🌈🕒 (@nijisanji_app){" "}
      <a href="https://twitter.com/nijisanji_app/status/1315850302508081152?ref_src=twsrc%5Etfw">
        October 13, 2020
      </a>
    </blockquote>
  ),
  "osanpo-voice": (
    <blockquote className="twitter-tweet">
      <p lang="ja" dir="ltr">
        【郡道美玲 ボイス販売開始！】
        <br />
        <br />
        郡道美玲のボイス販売を開始いたします！
        <br />
        <br />■ おさんぽボイスセット
        <a href="https://t.co/ZRjaCcX92n">https://t.co/ZRjaCcX92n</a>
      </p>
      &mdash; にじさんじ公式🌈🕒 (@nijisanji_app){" "}
      <a href="https://twitter.com/nijisanji_app/status/1184031460006731777?ref_src=twsrc%5Etfw">
        October 15, 2019
      </a>
    </blockquote>
  ),
  "permanent-voice": (
    <blockquote className="twitter-tweet">
      <p lang="ja" dir="ltr">
        【季節ボイス(2018.10-2019.03) 常設販売決定！】
        <br />
        <br />
        にじさんじオフィシャルストアにて、2018年10月から2019年3月までに販売した「にじさんじ季節ボイス」の常設販売が決定いたしました！
        <br />
        販売は本日9/14(月)よりスタートいたします！
        <br />
        <br />
        販売ページはこちら！▽
        <a href="https://t.co/x0hkN2lIN0">https://t.co/x0hkN2lIN0</a>{" "}
        <a href="https://t.co/8lza20LncG">pic.twitter.com/8lza20LncG</a>
      </p>
      &mdash; にじさんじ公式🌈🕒 (@nijisanji_app){" "}
      <a href="https://twitter.com/nijisanji_app/status/1305401022836342785?ref_src=twsrc%5Etfw">
        September 14, 2020
      </a>
    </blockquote>
  ),
};

// TODO: fetch from API
const goods = [
  {
    title: "個人グッズ",
    elementName: "individual-goods",
    url: "https://booth.pm/ja/search/%E9%83%A1%E9%81%93%E7%BE%8E%E7%8E%B2",
  },
  {
    title: "アクリルスタンド",
    elementName: "acrylic-stand",
    url: "https://shop.nijisanji.jp/s/niji/item/detail/SSZS-13304",
  },
  {
    title: "おさんぽボイス",
    elementName: "osanpo-voice",
    url: "https://shop.nijisanji.jp/s/niji/item/detail/dig-00050",
  },
  {
    title: "常設ボイスグッズ",
    elementName: "permanent-voice",
    url: "https://shop.nijisanji.jp/s/niji/item/detail/dig-00109",
  },
];

export default function GoodsList(props: {}) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container>
        {goods.map((g) => (
          <Grid item sm={12} md={6} lg={3} className={classes.goods}>
            <Paper className={classes.paper}>
              <Typography variant="h5" className={classes.typography}>
                {g.title}
              </Typography>
              <Box>{goodsElements[g.elementName]}</Box>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                href={g.url}
              >
                購入はこちらから
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

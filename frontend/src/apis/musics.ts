export type Music = {
  title: string;
  videoId: string;
  start: number;
  end?: number;
  date: Date;
};

export async function fetchMusics(): Promise<Music[]> {
  return Promise.resolve([
    {
      title: "傍若美人",
      videoId: "4mI5madS3dw",
      start: 3634,
      date: new Date(2020, 2 - 1, 20),
    },
    {
      title: "青春アミーゴ",
      videoId: "FAdUv5BL8FY",
      start: 0,
      date: new Date(2020, 3 - 1, 18),
    },
    {
      title: "熱烈歓迎わんだーらんど",
      videoId: "QNM96GEaYq8",
      start: 0,
      date: new Date(2020, 11 - 1, 23),
    },
    {
      title: "クリスマス？なにそれ？おいしいの？",
      videoId: "Cak-CmGBr9Y",
      start: 0,
      date: new Date(2020, 12 - 1, 26),
    },
    {
      title: "Nyanyanyanyanyanyanya!",
      videoId: "fzbCRzvPxMQ",
      start: 0,
      date: new Date(2021, 2 - 1, 3),
    },
    {
      title: "すーぱー☆あふぇくしょん",
      videoId: "-rLmtgLaQZk",
      start: 0,
      date: new Date(2021, 8 - 1, 26),
    },
    {
      title: "Tulip",
      videoId: "jHpG_X8GAkI",
      start: 0,
      date: new Date(2021, 10 - 1, 23),
    },
    {
      title: "ロマンスの神様",
      videoId: "IEqdL7tSwTw",
      start: 0,
      date: new Date(2022, 1 - 1, 17),
    },
    {
      title: "ロキ",
      videoId: "zoynMroawZw",
      start: 15 * 60 + 40,
      end: 19 * 60 + 27,
      date: new Date(2021, 12 - 1, 31),
    },
    {
      title: "DANZEN! ふたりはプリキュア",
      videoId: "Rr1nWSFB75Q",
      start: 2 * 60 + 10,
      end: 3 * 60 + 25,
      date: new Date(2022, 1 - 1, 20),
    },
    {
      title: "ゆりゆららららゆるゆら大事件",
      videoId: "Rr1nWSFB75Q",
      start: 6 * 60 + 12,
      end: 9 * 60 + 56,
      date: new Date(2022, 1 - 1, 20),
    },
    {
      title: "Climax Jump",
      videoId: "Rr1nWSFB75Q",
      start: 13 * 60 + 0,
      end: 16 * 60 + 59,
      date: new Date(2022, 1 - 1, 20),
    },
    {
      title: "ファンサ",
      videoId: "Rr1nWSFB75Q",
      start: 19 * 60 + 39,
      end: 23 * 60 + 43,
      date: new Date(2022, 1 - 1, 20),
    },
  ]);
}

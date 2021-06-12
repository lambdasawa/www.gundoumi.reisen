export type Music = {
  title: string;
  videoId: string;
  start: number;
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
  ]);
}

export type Material = {
  name: string;
  url: string;
  date: Date;
  visibility: boolean;
};

export function fetchMaterials(): Promise<Material[]> {
  return Promise.resolve([
    {
      name: "ぐんかんファイティングポーズRB",
      url: "https://twitter.com/g9v9g_mirei/status/1403923390080045059",
      date: new Date(2021, 6 - 1, 13),
      visibility: true,
    },
    {
      name: "ミミッキュGB",
      url: "https://www.youtube.com/watch?v=XBbDPYfghvQ",
      date: new Date(2021, 4 - 1, 8),
      visibility: true,
    },
    {
      name: "初期衣装 チャイナ衣装 ズボン衣装 表情差分 2 (by @weedman_rgn2012 さん)",
      url: "https://twitter.com/weedman_rgn2012/status/1355516705619906564",
      date: new Date(2021, 3 - 1, 22),
      visibility: true,
    },
    {
      name: "初期衣装 チャイナ衣装 ズボン衣装 表情差分 1 (by @weedman_rgn2012 さん)",
      url: "https://twitter.com/weedman_rgn2012/status/1373675760125239300",
      date: new Date(2021, 1 - 1, 30),
      visibility: true,
    },
    {
      name: "ズボン衣装 透過済み (by @weedman_rgn2012 さん)",
      url: "https://twitter.com/weedman_rgn2012/status/1354992992889659399",
      date: new Date(2021, 1 - 1, 29),
      visibility: true,
    },
    {
      name: "ズボン衣装 透過素材",
      url: "https://twitter.com/g9v9g_mirei/status/1354836303955681284",
      date: new Date(2021, 1 - 1, 29),
      visibility: true,
    },
    {
      name: "ズボン衣装お披露目配信 GBタイム",
      url: "https://youtu.be/VWXbZNnvBdQ?t=2347",
      date: new Date(2021, 1 - 1, 20, 0, 39, 7),
      visibility: true,
    },
    {
      name: "ズボン衣装お披露目配信 素材タイム",
      url: "https://youtu.be/VWXbZNnvBdQ?t=1768",
      date: new Date(2021, 1 - 1, 20),
      visibility: true,
    },
    {
      name: "#郡道美玲クソコラグランプリ",
      url: "https://twitter.com/g9v9g_mirei/status/1321692433587998721",
      date: new Date(2020, 10 - 1, 29),
      visibility: true,
    },
    {
      name: "チャイナ衣装 表情差分 (by @weedman_rgn2012 さん)",
      url: "https://twitter.com/weedman_rgn2012/status/1308817183292547074",
      date: new Date(2020, 9 - 1, 24),
      visibility: true,
    },
    {
      name: "初期衣装 表情差分 (by @weedman_rgn2012 さん)",
      url: "https://twitter.com/weedman_rgn2012/status/1307328181163024387",
      date: new Date(2020, 9 - 1, 20),
      visibility: true,
    },
    {
      name: "チャイナ衣装 素材",
      url: "https://twitter.com/g9v9g_mirei/status/1246849974643486725",
      date: new Date(2020, 4 - 1, 6),
      visibility: true,
    },
    {
      name: "チャイナ衣装お披露目配信 GBタイム 2",
      url: "https://youtu.be/wvyKZYO6C_4?t=3927",
      date: new Date(2020, 4 - 1, 5, 1, 5, 27),
      visibility: true,
    },
    {
      name: "チャイナ衣装お披露目配信 GBタイム 1",
      url: "https://youtu.be/wvyKZYO6C_4?t=2383",
      date: new Date(2020, 4 - 1, 5),
      visibility: true,
    },
    {
      name: "3Dお披露目配信 素材タイム",
      url: "https://youtu.be/4mI5madS3dw?t=753",
      date: new Date(2020, 2 - 1, 20),
      visibility: true,
    },
    {
      name: "大正ロマン衣装お披露目配信 GBタイム 2",
      url: "https://youtu.be/1SKEJAAbctM?t=2323",
      date: new Date(2019, 11 - 1, 17, 0, 38, 43),
      visibility: true,
    },
    {
      name: "大正ロマン衣装お披露目配信 GBタイム 1",
      url: "https://youtu.be/1SKEJAAbctM?t=1389",
      date: new Date(2019, 11 - 1, 17),
      visibility: true,
    },
    {
      name: "夏衣装お披露目配信 GBタイム",
      url: "https://youtu.be/FXkhBY1AgU0?t=960",
      date: new Date(2019, 8 - 1, 30),
      visibility: true,
    },
    {
      name: "2.0 GBタイム",
      url: "https://youtu.be/gq8QrjvbTUI?t=1050",
      date: new Date(2019, 7 - 1, 19),
      visibility: true,
    },
  ]);
}

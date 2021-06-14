export type Event = {
  date: Date;
  text: string;
  url: string;
  additionalProps?: Record<string, string>;
};

export async function fetchEvents(): Promise<Event[]> {
  return Promise.resolve([
    {
      date: new Date(2019, 1 - 1, 17, 0, 0, 0, 0),
      text: "デビュー",
      url: "https://prtimes.jp/main/html/rd/p/000000045.000030865.html",
    },
    {
      date: new Date(2019, 1 - 1, 17, 16, 25, 0, 0),
      text: "待て",
      url: "https://twitter.com/g9v9g_mirei/status/1085800298411483136",
    },
    {
      date: new Date(2019, 2 - 1, 8, 0, 0, 0, 0),
      text: "バレンタインボイス発売",
      url: "https://prtimes.jp/main/html/rd/p/000000046.000030865.html",
    },
    {
      date: new Date(2019, 3 - 1, 1, 0, 0, 0, 0),
      text: "ホワイトデーボイス発売",
      url: "https://prtimes.jp/main/html/rd/p/000000049.000030865.html",
    },
    {
      date: new Date(2019, 4 - 1, 1, 0, 0, 0, 0),
      text: "春満開ボイス発売",
      url: "https://prtimes.jp/main/html/rd/p/000000053.000030865.html",
    },
    {
      date: new Date(2019, 4 - 1, 26, 0, 0, 0, 0),
      text: "GWボイス発売",
      url: "https://prtimes.jp/main/html/rd/p/000000059.000030865.html",
    },
    {
      date: new Date(2019, 6 - 1, 8, 0, 0, 0, 0),
      text: "あめもようボイス発売",
      url: "https://prtimes.jp/main/html/rd/p/000000074.000030865.html",
    },
    {
      date: new Date(2019, 7 - 1, 22, 0, 0, 0, 0),
      text: "夏真っ盛りボイス発売",
      url: "https://twitter.com/g9v9g_mirei/status/1156379651809280000",
    },
    {
      date: new Date(2019, 8 - 1, 21, 0, 0, 0, 0),
      text: "夏まつりボイス発売",
      url: "https://twitter.com/g9v9g_mirei/status/1166563429831852037",
    },
    {
      date: new Date(2019, 9 - 1, 20, 0, 0, 0, 0),
      text: "学園祭ボイス発売",
      url: "https://twitter.com/g9v9g_mirei/status/1243841222126362625",
    },
    {
      date: new Date(2019, 9 - 1, 25, 0, 0, 0, 0),
      text: "一緒におサボりボイス発売",
      url: "https://prtimes.jp/main/html/rd/p/000000089.000030865.html",
    },
    {
      date: new Date(2019, 9 - 1, 25, 0, 0, 0, 1),
      text: "のんだくれ解放ボイス発売",
      url: "https://prtimes.jp/main/html/rd/p/000000089.000030865.html",
    },
    {
      date: new Date(2019, 10 - 1, 24, 0, 0, 0, 0),
      text: "ハロウィンボイス発売",
      url: "https://twitter.com/g9v9g_mirei/status/1187211769304907776",
    },
    {
      date: new Date(2019, 11 - 1, 15, 0, 0, 0, 0),
      text: "秋満喫ボイス発売",
      url: "https://twitter.com/g9v9g_mirei/status/1196696574245556224",
    },
    {
      date: new Date(2019, 12 - 1, 16, 0, 0, 0, 0),
      text: "クリスマスボイス発売",
      url: "https://twitter.com/g9v9g_mirei/status/1209407362332643328",
    },
    {
      date: new Date(2020, 1 - 1, 17, 0, 0, 0, 0),
      text: "年末年始ボイス発売",
      url: "https://twitter.com/g9v9g_mirei/status/1221776946524127232",
    },
    {
      date: new Date(2020, 2 - 1, 12, 0, 0, 0, 0),
      text: "雪遊びボイス発売",
      url: "https://twitter.com/g9v9g_mirei/status/1230830986285334528",
    },
    {
      date: new Date(2020, 3 - 1, 11, 0, 0, 0, 0),
      text: "春休みボイス発売",
      url: "https://twitter.com/g9v9g_mirei/status/1242001441738260486",
    },
    {
      date: new Date(2020, 4 - 1, 8, 0, 0, 0, 0),
      text: "春満開ボイス発売",
      url: "https://twitter.com/g9v9g_mirei/status/1248982022191583236",
    },
    {
      date: new Date(2020, 4 - 1, 23, 0, 0, 0, 0),
      text: "看病ボイス発売",
      url: "https://twitter.com/g9v9g_mirei/status/1255150951393972225",
    },
    {
      date: new Date(2020, 5 - 1, 1, 0, 0, 0, 0),
      text: "試験勉強ボイス発売",
      url: "https://twitter.com/g9v9g_mirei/status/1259230142796165120",
    },
    {
      date: new Date(2020, 6 - 1, 23, 0, 0, 0, 0),
      text: "あめもようボイス発売",
      url: "https://twitter.com/g9v9g_mirei/status/1277977586899906562",
    },
    {
      date: new Date(2020, 7 - 1, 22, 0, 0, 0, 0),
      text: "夏真っ盛りボイス発売",
      url: "https://twitter.com/g9v9g_mirei/status/1286996009403392000",
    },
    {
      date: new Date(2020, 8 - 1, 25, 0, 0, 0, 0),
      text: "怪談ボイス発売",
      url: "https://twitter.com/g9v9g_mirei/status/1300268220646002688",
    },
    {
      date: new Date(2020, 9 - 1, 18, 0, 0, 0, 0),
      text: "お月見ボイス発売",
      url: "https://twitter.com/g9v9g_mirei/status/1300268220646002688",
    },
    {
      date: new Date(2020, 1 - 1, 17, 0, 0, 0, 1),
      text: "リクエストボイス発売 1",
      url: "https://twitter.com/g9v9g_mirei/status/1218082489949835264",
    },
    {
      date: new Date(2020, 10 - 1, 5, 0, 0, 0, 0),
      text: "リクエストボイス発売 2",
      url: "https://twitter.com/nijisanji_app/status/1313026170594697218",
    },
    {
      date: new Date(2020, 12 - 1, 24, 0, 0, 0, 0),
      text: "リクエストボイス発売 3",
      url: "https://twitter.com/nijisanji_app/status/1342017237239128067",
    },
    {
      date: new Date(2021, 1 - 1, 20, 0, 0, 0, 0),
      text: "リクエストボイス発売 4",
      url: "https://twitter.com/nijisanji_app/status/1351801674977800192",
    },
    {
      date: new Date(2021, 3 - 1, 1, 0, 0, 0, 0),
      text: "リクエストボイス発売 5",
      url: "https://twitter.com/nijisanji_app/status/1366297214037942272",
    },
    {
      date: new Date(2021, 4 - 1, 9, 0, 0, 0, 0),
      text: "リクエストボイス発売 6",
      url: "https://twitter.com/nijisanji_app/status/1400406986186018819",
    },
    {
      date: new Date(2021, 6 - 1, 3, 0, 0, 0, 0),
      text: "リクエストボイス発売 7",
      url: "https://twitter.com/nijisanji_app/status/1380452972157620224",
    },
    {
      date: new Date(2019, 7 - 1, 19, 0, 0, 0, 0),
      text: "2.0 お披露目",
      url: "https://www.youtube.com/watch?v=gq8QrjvbTUI",
    },
    {
      date: new Date(2019, 8 - 1, 30, 0, 0, 0, 0),
      text: "新衣装お披露目 1",
      url: "https://www.youtube.com/watch?v=FXkhBY1AgU0",
    },
    {
      date: new Date(2019, 11 - 1, 17, 0, 0, 0, 0),
      text: "新衣装お披露目 2",
      url: "https://www.youtube.com/watch?v=1SKEJAAbctM",
    },
    {
      date: new Date(2020, 2 - 1, 20, 0, 0, 0, 0),
      text: "3Dお披露目",
      url: "https://www.youtube.com/watch?v=4mI5madS3dw",
    },
    {
      date: new Date(2020, 2 - 1, 26, 0, 0, 0, 0),
      text: "Shout in the Rainbow! - 名古屋LIVE",
      url: "https://event.nijisanji.app/japantour2020/nagoya/",
    },
    {
      date: new Date(2020, 4 - 1, 5, 0, 0, 0, 0),
      text: "新衣装お披露目 3",
      url: "https://www.youtube.com/watch?v=wvyKZYO6C_4",
    },
    {
      date: new Date(2021, 1 - 1, 20, 0, 0, 0, 1),
      text: "新衣装お披露目 4",
      url: "https://www.youtube.com/watch?v=VWXbZNnvBdQ",
    },
    {
      date: new Date(2021, 6 - 1, 1, 0, 0, 0, 0),
      text: "郡道先生、それロンです！ 連載開始",
      url: "https://twitter.com/kbJB0DFyGn3avDp/status/1399511253983195136",
    },
    {
      date: new Date(2019, 3 - 1, 11, 0, 0, 0, 0),
      text: "にじさんじMIX UP!! #15 出演",
      url: "https://www.youtube.com/watch?v=qyxN8ExYYOs",
      additionalProps: {
        afterTalk: "https://www.youtube.com/watch?v=4LHf3_6ivno",
      },
    },
    {
      date: new Date(2020, 1 - 1, 2, 0, 0, 0, 0),
      text: "にじさんじ みっくすあっぷ Season2 新春SP #11 出演",
      url: "https://www.youtube.com/watch?v=JNYypt85-jo",
      additionalProps: {
        afterTalk: "https://www.nicovideo.jp/watch/so36173332",
      },
    },
  ]);
}

export type Event = {
  date: Date;
  text: string;
  url: string;
};

export async function fetchEvents(): Promise<Event[]> {
  return Promise.resolve([
    {
      date: new Date(2019, 1 - 1, 17, 0, 0, 0, 0),
      text: "デビュー",
      url: "https://prtimes.jp/main/html/rd/p/000000045.000030865.html",
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
      date: new Date(2021, 1 - 1, 20, 0, 0, 0, 0),
      text: "新衣装お披露目 4",
      url: "https://www.youtube.com/watch?v=VWXbZNnvBdQ",
    },
    {
      date: new Date(2021, 6 - 1, 20, 0, 0, 0, 0),
      text: "郡道先生、それロンです！ 連載開始",
      url: "https://twitter.com/kbJB0DFyGn3avDp/status/1399511253983195136",
    },
  ]);
}

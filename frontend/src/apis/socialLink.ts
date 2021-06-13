export type SocialLink = {
  name: string;
  url: string;
  icon?: string;
};

export function fetchSocialLinks(): Promise<SocialLink[]> {
  return Promise.resolve([
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCeShTCVgZyq2lsBW9QwIJcw",
      icon: "youtube",
    },
    {
      name: "ツイキャス",
      url: "https://twitcasting.tv/g9v9g_mirei",
      icon: "twitcasting",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/g9v9g_mirei",
      icon: "twitter",
    },
    {
      name: "Twitter (サブ)",
      url: "https://twitter.com/kodaimailove",
      icon: "twitter",
    },
    {
      name: "ピン留めツイート",
      url: "https://twitter.com/g9v9g_mirei/status/1214645894022197248",
      icon: "twitter",
    },
    {
      name: "メンバーって何してるの？",
      url: "https://twitter.com/g9v9g_mirei/status/1321789117315784704",
      icon: "twitter",
    },
    {
      name: "衣装一覧",
      url: "https://twitter.com/g9v9g_mirei/status/1356196131076775937",
      icon: "twitter",
    },
    {
      name: "#教えて郡道先生",
      url: "https://twitter.com/hashtag/教えて郡道先生",
      icon: "twitter",
    },
    {
      name: "#3年0組黒板新聞",
      url: "https://twitter.com/hashtag/3年0組黒板新聞",
      icon: "twitter",
    },
    {
      name: "#みれいどんどんクズになる",
      url: "https://twitter.com/hashtag/みれいどんどんクズになる",
      icon: "twitter",
    },
    {
      name: "#こえこえ郡道",
      url: "https://twitter.com/hashtag/こえこえ郡道",
      icon: "twitter",
    },
    {
      name: "BOOTH",
      url: "https://booth.pm/ja/search/%E9%83%A1%E9%81%93%E7%BE%8E%E7%8E%B2",
      icon: "booth",
    },
    {
      name: "オフィシャルストア",
      url: "https://shop.nijisanji.jp/s/niji/artist/054/item",
      icon: "official-shop",
    },
    {
      name: "bilibili",
      url: "https://space.bilibili.com/458154139",
      icon: "bilibili",
    },
    {
      name: "OPENREC.tv",
      url: "https://www.openrec.tv/user/23_gundomirei",
      icon: "openrec",
    },
    {
      name: "YouTube (サブ)",
      url: "https://www.youtube.com/channel/UCnlRcAY5g1ARYx-RZOmcwFA",
      icon: "youtube",
    },
  ]);
}

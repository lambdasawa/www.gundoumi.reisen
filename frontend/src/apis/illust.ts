export type Illust = {
  tweetUrl: string;
};

export async function fetchIllusts(): Promise<Illust[]> {
  return Promise.resolve([
    { tweetUrl: "https://twitter.com/yukinyo_16/status/1403295568860835842" },
    { tweetUrl: "https://twitter.com/37marumu/status/1403621224907894786" },
    { tweetUrl: "https://twitter.com/iori147/status/1403595030971904000" },
    {
      tweetUrl: "https://twitter.com/shimayunyunnnn/status/1403717396888621061",
    },
    {
      tweetUrl: "https://twitter.com/kurutonton_422/status/1403598433802362890",
    },
    { tweetUrl: "https://twitter.com/648__ohita/status/1403307255919910912" },
    { tweetUrl: "https://twitter.com/mu_minn_papa/status/1402998300106629120" },
    { tweetUrl: "https://twitter.com/__4zm/status/1401674786502184965" },
    {
      tweetUrl: "https://twitter.com/Ivte8_Tenoha5/status/1401587193940905985",
    },
    { tweetUrl: "https://twitter.com/suu_PANNDA/status/1402872574447587328" },
  ]);
}

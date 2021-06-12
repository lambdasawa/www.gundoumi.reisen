import type { NextApiRequest, NextApiResponse } from "next";
import * as Parser from "rss-parser";

type Data = string[];

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const feed = await new Parser.default().parseURL(
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCeShTCVgZyq2lsBW9QwIJcw"
  );

  res
    .status(200)
    .json(
      feed.items
        .map((item) => item.link)
        .filter((link): link is string => Boolean(link))
    );
};

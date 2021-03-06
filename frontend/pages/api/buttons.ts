import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const response = await fetch("https://www.mirei-button.net/metadata.json");
  const json = await response.json();

  res.status(200).json(json);
};

export default handler;

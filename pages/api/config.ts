// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Configs = {
  [key: string]: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Configs>) {
  const { METAPHOR_JS_API_BASE_URL = '', METAPHOR_GO_API_BASE_URL = '' } = process.env;

  res.status(200).json({
    METAPHOR_JS_API_BASE_URL,
    METAPHOR_GO_API_BASE_URL,
  });
}

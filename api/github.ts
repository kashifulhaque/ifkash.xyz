const axios = require("axios").default;
import { NowRequest, NowResponse } from "@vercel/node";

export default async (req: NowRequest, res: NowResponse) => {
  try {
    const url: String = "https://api.github.com/users/kashifulhaque";
    const data = await axios.get(url);

    res.json(data.data);
  } catch (err) {
    console.log(err);
  }
};

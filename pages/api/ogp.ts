import type { NextApiRequest, NextApiResponse } from "next";
import openGraphScraper from "open-graph-scraper";

type ResponseData = {
  url: any;
  title: string;
  description: string;
  og: string;
  icon: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { href } = JSON.parse(req.body);
	const options = { url: href, onlyGetOpenGraphInfo: true };
	const ogp = await openGraphScraper(options).then((data) => {
		// OGP によるデータ取得が失敗した場合
		if (!data.result.success) {
			return {
				url: href,
				title: "",
				description: "",
				og: "",
				icon: "",
			};
		}
		// OGP によるデータ取得が成功した場合
		return {
			url: href,
			title: data.result.ogTitle || "",
			description: data.result.ogDescription || "",
			og: data.result.ogImage ? data.result.ogImage[0].url : "",
			icon: "",
		};
	});
	console.log(ogp);
	res.status(200).json(ogp);
}

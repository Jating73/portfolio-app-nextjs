import { NETLIFY } from "../../../helpers/constants";

export default async function hostedProjectHandler(req, res) {
  if (req.method === "POST") {
    res.status(401).json({ message: "Under Process" });
    return;
  }
  if (req.method === "GET") {
    try {
      const url = NETLIFY.BASE_URL + NETLIFY.FETCH_HOSTED_PROJECTS;
      const options = {
        headers: {
          Authorization: `Bearer ${NETLIFY.TOKEN}`,
        },
      };
      let response = await fetch(url, options);
      response = await response.json();
      response = response.filter(item=> {
        return NETLIFY.EXCLUDE_PROJECT_IDS.indexOf(item.id) === -1
      });
      res.status(200).json({
        data: response,
        message: "Fetched Successfully",
      });
    } catch (error) {
      res.status(500).json({
        error: "Something went wrong",
      });
    }
    return;
  }
}

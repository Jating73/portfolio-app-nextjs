import { BACKEND, EXCLUDE_PROJECT_IDS } from "../../helpers/api-utils";

export default async function hostedProjectHandler(req, res) {
  if (req.method === "POST") {
    res.status(401).json({ message: "Under Process" });
  } else {
    const url =
      BACKEND.BASE_URL +
      BACKEND.API_V1 +
      BACKEND.PROJECT_ENDPOINT.PROJECT +
      BACKEND.PROJECT_ENDPOINT.HOSTED_PROJECTS;
    const response = await fetch(url);
    const hostedProjects = await response.json();

    const output = hostedProjects.data.filter((project) => {
      return project.id != EXCLUDE_PROJECT_IDS;
    });

    res.status(200).json({
      data: output,
      message: "Fetched Successfully",
    });
  }
}

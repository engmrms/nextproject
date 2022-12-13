import type { NextApiRequest, NextApiResponse } from "next";
import DTO from "../../model/DTO";
import db from "../../utils/db";

export default async (req: NextApiRequest, res: NextApiResponse<{ projectsData: DTO.IProjects[] }>) => {
  try {
    const projectsCollection = await db.collection("projects").orderBy("created", "desc").get();
    const projectsData = projectsCollection.docs.map(project => ({
      id: project.id,
      ...(project.data() as DTO.IProjects),
    }));
    res.status(200).json({ projectsData });
  } catch (e) {
    res.status(400).end();
  }
};

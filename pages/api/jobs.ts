import type { NextApiRequest, NextApiResponse } from "next";
import DTO from "../../model/DTO";
import db from "../../utils/db";

export default async (req: NextApiRequest, res: NextApiResponse<{ jobsData: DTO.IJob[] }>) => {
  try {
    const jobsCollection = await db.collection("jobs").get();
    const jobsData = jobsCollection.docs.map(job => ({
      id: job.id,
      ...(job.data() as DTO.IJob),
    }));
    res.status(200).json({ jobsData });
  } catch (e) {
    res.status(400).end();
  }
};

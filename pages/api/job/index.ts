import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../utils/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    //const jobCollection = await db.collection("jobs").get();
    //const entriesData = jobCollection.docs.map(job => job.data());

    // if (entriesData.some(entry => entry.slug === slug)) {
    //   res.status(400).end();
    // } else {
    if (req.method !== "POST") res.status(400).end();
    const { id } = await db.collection("jobs").add({
      ...req.body,
      created: new Date().toISOString(),
    });
    res.status(200).json({ id });
    // }
  } catch (e) {
    res.status(400).end();
  }
};

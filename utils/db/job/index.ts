import http from "../http";

const getJobs = async () => {
  return await http.get("api/jobs");
};

export { getJobs };

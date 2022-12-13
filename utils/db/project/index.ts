import http from "../http";

const getProjects = async () => {
  return await http.get("api/projects");
};

export { getProjects };

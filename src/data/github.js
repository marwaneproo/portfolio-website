import axios from "axios";

export const getGithubProjects = async () => {

  const response = await axios.get(
    "https://api.github.com/users/marwaneproo/repos"
  );

  return response.data;

};
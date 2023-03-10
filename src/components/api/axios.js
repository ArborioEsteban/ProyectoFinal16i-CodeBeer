import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

const myAxios = () => {
  const token = sessionStorage.getItem("token");

  return axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default myAxios;

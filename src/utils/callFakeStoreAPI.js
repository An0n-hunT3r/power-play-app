import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

const callFakeStoreAPI = (url, config = {}) => {
  return axiosInstance.request({
    url,
    ...config,
  });
};

export default callFakeStoreAPI;

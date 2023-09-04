import axios from "axios";
import localService from "../services/localService";

const fetcher = axios.create({
  baseURL: "https://elearningnew.cybersoft.edu.vn/api/",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NCIsIkhldEhhblN0cmluZyI6IjIzLzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMzI4OTYwMDAwMCIsIm5iZiI6MTY3MjQxOTYwMCwiZXhwIjoxNzAzNDM3MjAwfQ.sBEpBy6NEqrSq0edQmAlMTJtoOz9ZG_Dam5-tGYZG5M",
  },
});

// Interceptors
fetcher.interceptors.response.use(
  // Success
  (response) => {
    return response.data;
  },

  (error) => {
    return Promise.reject(error.response.data);
  }
);

fetcher.interceptors.request.use(
  (config) => {
    // Authorization
    const { accessToken } = localService.user.get() || {};

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default fetcher;

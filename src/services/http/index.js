import axios from "axios";
import { toast } from "react-toastify";

// use url from .env file
const baseURL = process.env.REACT_APP_DOMAIN_URL;
const axiosInstance = axios.create({
  baseURL,
});

// interceptors request
axiosInstance.interceptors.request.use(
  (config) => {
    // Add api key to the headers if available and where store token
    const apiKey = process.env.REACT_APP_API_KEY;
    if (config.headers) {
      if (apiKey) {
        config.headers.Authorization = `Bearer ${apiKey}`;
      }
    }
    return config;
  },
  (error) => {
    handleErrorResponse(error);
  }
);

// interceptors response
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    handleErrorResponse(error);
  }
);

const handleErrorRequest = (error) => {
  console.log("error response", error);
};

const handleErrorResponse = (error) => {
  if (error.response.status === 401) {
    toast.error("Invalid API key: You must be granted a valid key.");
  }
  if (error.response.status === 404) {
    toast.error("Failed to fetch data. Please try again.");
  }
};

const httpService = {
  updateBaseUrl: (url) => {
    axiosInstance.defaults.baseURL = url;
  },

  get: async (url, config) => {
    const response = await axiosInstance.get(url, config);
    return response.data;
  },

  post: async (url, data, config) => {
    const response = await axiosInstance.post(url, data, config);
    return response.data;
  },

  put: async (url, data, config) => {
    const response = await axiosInstance.put(url, data, config);
    return response.data;
  },

  delete: async (url, config) => {
    const response = await axiosInstance.delete(url, config);
    return response.data;
  },
  all: async (requests) => {
    const response = await axios.all(requests);
    return response;
  },
};

export default httpService;

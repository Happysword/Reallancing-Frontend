// eslint-disable-next-line import/no-unresolved
import axios from 'axios';

const baseURL = 'http://localhost:3000';

axios.interceptors.request.use(
  config => {
    const credConfig = config;
    credConfig.withCredentials = true;
    return credConfig;
  },
  err => Promise.reject(err),
);

export default {
  async fetchJob(id) {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .get(`http://localhost:3000/api/v1/jobs/${id}`, config)
      .then(response => response.data)
      .catch(() => false);
  },
  async fetchAllJobs(page) {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .get(`http://localhost:3000/api/v1/jobs?page=${page}`, config)
      .then(response => response.data)
      .catch(() => false);
  },
  async searchAJob(jobName) {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .get(`http://localhost:3000/api/v1/jobs?headline=${jobName}`, config)
      .then(response => response.data)
      .catch(() => false);
  },
  async fetchProposal(id) {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .get(`http://localhost:3000/api/v1/proposals/${id}`, config)
      .then(response => response.data)
      .catch(() => false);
  },

  async loginUser(user) {
    const request = {
      method: 'POST',
      url: `${baseURL}/api/v1/auth/login`,
      data: user,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await axios(request)
      .then(res => res)
      .catch(err => err.response);

    return response;
  },
};

import axios from 'axios';

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
    return axios
      .get(`http://localhost:3000/api/v1/jobs/${id}`)
      .then(response => response.data)
      .catch(() => false);
  },
};

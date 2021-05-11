// eslint-disable-next-line import/no-unresolved
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
    const config = {
      headers: {
        Authorization:
          ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkyYTNiYWRiZTI4MTQ1NjAzZWZjM2QiLCJpYXQiOjE2MjAyNTU3MjAsImV4cCI6MTYyODAzMTcyMH0.J5AWiTfLAlMDG1t98CnrNcqI1J_MD0S7Q2jUA1A9bSU ',
      },
    };
    return axios
      .get(`http://localhost:3000/api/v1/jobs/${id}`, config)
      .then(response => response.data)
      .catch(() => false);
  },
  async fetchProposal(id) {
    const config = {
      headers: {
        Authorization:
          ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk2YjEyMWE4OGM5MzUwNjBlODAyNjIiLCJpYXQiOjE2MjA2OTE1NzcsImV4cCI6MTYyODQ2NzU3N30.H8k0uklyEctcIDoI8hEor2DB-2r--VTpMz1IOnZ6G7w ',
      },
    };
    return axios
      .get(`http://localhost:3000/api/v1/proposals/${id}`, config)
      .then(response => response.data)
      .catch(() => false);
  },
};

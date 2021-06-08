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
      .get(`${baseURL}/api/v1/jobs/${id}`, config)
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
      .get(`${baseURL}/api/v1/jobs?page=${page}`, config)
      .then(response => response.data)
      .catch(() => false);
  },
  async fetchCurrentUserJobs() {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .get(`${baseURL}/api/v1/users/me/jobs`, config)
      .then(response => response.data)
      .catch(() => false);
  },
  async fetchJobProposals(jobid) {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .get(`${baseURL}/api/v1/jobs/${jobid}/proposals`, config)
      .then(response => response.data)
      .catch(() => false);
  },
  async fetchCurrentFreelancerProposals() {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .get(`${baseURL}/api/v1/proposals`, config)
      .then(response => response.data)
      .catch(() => false);
  },
  async fetchAllCategories() {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .get(`${baseURL}/api/v1/categories`, config)
      .then(response => response.data)
      .catch(() => false);
  },
  async fetchAllSkills() {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .get(`${baseURL}/api/v1/skills`, config)
      .then(response => response.data)
      .catch(() => false);
  },
  async DeleteAJob(id) {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .delete(`${baseURL}/api/v1/jobs/${id}`, config)
      .then(response => response.data)
      .catch(() => false);
  },
  async DeleteAProposal(id) {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .delete(`${baseURL}/api/v1/proposals/${id}`, config)
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
      .get(`${baseURL}/api/v1/jobs?headline=${jobName}`, config)
      .then(response => response.data)
      .catch(() => false);
  },

  async createAProposal(propsalText, proposedRate, jobID) {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .post(
        `${baseURL}/api/v1/jobs/${jobID}/proposals`,
        {
          coverLetter: propsalText,
          proposedHourlyRate: proposedRate,
        },
        config,
      )
      .then(response => response.data)
      .catch(() => false);
  },
  async createAJob(job) {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .post(`${baseURL}/api/v1/jobs`, job, config)
      .then(response => response.data)
      .catch(() => false);
  },
  async SendProposalAcceptance(proposalId) {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .post(
        `http://localhost:3000/api/v1/proposals/${proposalId}/sendProposalAcceptance`,
        {},
        config,
      )
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
      .get(`${baseURL}/api/v1/proposals/${id}`, config)
      .then(response => response.data)
      .catch(() => false);
  },
  async fetchUserProfile(id) {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .get(`${baseURL}/api/v1/users/${id}`, config)
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
  async registerUser(userData) {
    const request = {
      method: 'POST',
      url: `${baseURL}/api/v1/auth/signup`,
      data: userData,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await axios(request)
      .then(res => res)
      .catch(err => err.response);

    return response;
  },
  async getCategories() {
    return axios
      .get(`${baseURL}/api/v1/categories`)
      .then(response => response.data)
      .catch(() => false);
  },
  async getSkills() {
    return axios
      .get(`${baseURL}/api/v1/skills`)
      .then(response => response.data)
      .catch(() => false);
  },
  async getJobs() {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .get(`${baseURL}/api/v1/jobs`, config)
      .then(response => response.data)
      .catch(() => false);
  },
  async getUsers() {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .get(`${baseURL}/api/v1/users`, config)
      .then(response => response.data)
      .catch(() => false);
  },
  async getCategorySkills(catid) {
    return axios
      .get(`${baseURL}/api/v1/skills/${catid}`)
      .then(response => response.data)
      .catch(() => false);
  },

  // Delete Requests

  async deleteUser(userid) {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .delete(`${baseURL}/api/v1/users/${userid}`, config)
      .then(response => response.data)
      .catch(() => false);
  },

  async deleteJob(jobid) {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .delete(`${baseURL}/api/v1/jobs/${jobid}`, config)
      .then(response => response.data)
      .catch(() => false);
  },

  // Statistics
  async getUsersStats() {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .get(`${baseURL}/api/v1/users/user-stats`, config)
      .then(response => response.data)
      .catch(() => false);
  },
  async getFreelancerStats() {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .get(`${baseURL}/api/v1/users/freelancer-stats`, config)
      .then(response => response.data)
      .catch(() => false);
  },
  async getJobsStats() {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .get(`${baseURL}/api/v1/jobs/job-stats`, config)
      .then(response => response.data)
      .catch(() => false);
  },
  async getProposalsMonthly() {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .get(`${baseURL}/api/v1/proposals/monthly-plan`, config)
      .then(response => response.data)
      .catch(() => false);
  },
  async getJobsMonthly() {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .get(`${baseURL}/api/v1/jobs/monthly-plan`, config)
      .then(response => response.data)
      .catch(() => false);
  },
  async getUsersMonthly() {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      },
    };
    return axios
      .get(`${baseURL}/api/v1/users/monthly-plan`, config)
      .then(response => response.data)
      .catch(() => false);
  },
};

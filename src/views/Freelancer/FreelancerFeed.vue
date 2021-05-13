<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="4">
          <h1 class="display-3 font-weight-medium my-3 hidden-sm-and-down">Find Work</h1>
          <h1 class="display-2 font-weight-medium my-5 hidden-md-and-up">Find Work</h1>
        </v-col>
        <v-col cols="8" class="my-0">
          <v-text-field
            v-model="searchText"
            class="my-5"
            outlined
            label="Search for jobs"
            append-icon="mdi-magnify"
            flat
            clearable
            dense
            background-color="white"
          ></v-text-field>
        </v-col>
      </v-row>
      <div v-if="jobs.length">
        <job-card
          v-for="job in jobs"
          :key="job.name"
          :category="job.category"
          :description="job.description"
          :experience="job.experience"
          :duration="job.duration"
          :headline="job.headline"
          :maxHourlyRate="job.maxHourlyRate"
          :minHourlyRate="job.minHourlyRate"
          :skills="job.skills"
          :_id="job._id"
        ></job-card>
      </div>
      <div class="text-center" v-else>
        <h1 class="display-4 font-weight-medium my-10">No Jobs Found</h1>
      </div>
      <v-pagination v-model="page" :length="5"></v-pagination>
    </v-container>
  </div>
</template>

<script>
import JobCard from '../../components/job/JobCard.vue';
import api from '../../api/index';

export default {
  data() {
    return {
      searchText: '',
      jobs: {},
      page: 1,
    };
  },
  components: { JobCard },
  watch: {
    searchText() {
      if (this.searchText) {
        this.searchAJob(this.searchText);
      } else {
        this.fetchAllJobs();
      }
    },
    page() {
      this.fetchAllJobs(this.page);
    },
  },
  mounted() {
    this.fetchAllJobs();
  },
  methods: {
    fetchAllJobs(page) {
      api.fetchAllJobs(page).then(response => {
        console.log(response.data);
        this.jobs = response.data;
      });
    },
    searchAJob(jobName) {
      api.searchAJob(jobName).then(response => {
        this.jobs = response.data;
      });
    },
  },
};
</script>

<style>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>

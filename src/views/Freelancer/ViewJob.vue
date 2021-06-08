<template>
  <div>
    <Loading v-if="loading == false"></Loading>
    <v-container v-if="loading == true">
      <h1 class="display-3 font-weight-medium ma-3">Job details</h1>
      <v-row>
        <v-col cols="12" md="8">
          <v-card color="secondbackground">
            <v-card-title class="mx-5 pa-4 headline font-weight-medium">
              {{ job.headline }}
            </v-card-title>
            <v-divider></v-divider>
            <div class="pa-4">
              <v-card-title class="primary--text">
                {{ job.category }}
              </v-card-title>
              <v-card-text>
                {{ job.description }}
              </v-card-text>
            </div>
            <v-divider></v-divider>
            <v-container>
              <v-row class="pa-4">
                <v-col cols="6" md="4">
                  <v-container>
                    <v-row>
                      <v-col cols="2">
                        <v-icon>mdi-timer</v-icon>
                      </v-col>
                      <v-col cols="8" class="font-weight-bold">
                        ${{ job.minHourlyRate }}/hr-${{ job.maxHourlyRate }}/hr
                        <v-card-subtitle class="ma-0 pa-0 caption"
                          >Hourly</v-card-subtitle
                        >
                      </v-col>
                    </v-row>
                  </v-container>
                </v-col>
                <v-col cols="6" md="4">
                  <v-container>
                    <v-row>
                      <v-col cols="2">
                        <v-icon>mdi-calendar-clock</v-icon>
                      </v-col>
                      <v-col cols="8" class="font-weight-bold">
                        {{ job.duration }}
                        <v-card-subtitle class="ma-0 pa-0 caption"
                          >Project Length</v-card-subtitle
                        >
                      </v-col>
                    </v-row>
                  </v-container>
                </v-col>
                <v-col cols="6" md="4">
                  <v-container>
                    <v-row>
                      <v-col cols="2">
                        <v-icon>mdi-head-cog</v-icon>
                      </v-col>
                      <v-col cols="8" class="font-weight-bold">
                        {{ job.experience }}
                        <v-card-subtitle class="ma-0 pa-0 caption"
                          >Experience</v-card-subtitle
                        >
                      </v-col>
                    </v-row>
                  </v-container>
                </v-col>
              </v-row>
            </v-container>
            <v-divider></v-divider>
            <div class="pa-4">
              <v-card-title> Skills and Expertise </v-card-title>
              <div class="pa-3">
                <v-chip
                  v-for="(skill, i) in job.skills"
                  :key="i"
                  class="ma-2"
                  >{{ skill }}</v-chip
                >
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6" md="4" class="hidden-sm-and-down">
          <v-card>
            <v-container
              fluid
              fill-height
              v-if="!(job.owner == false && type == 'client')"
            >
              <v-row justify="center" align="center">
                <v-col cols="8">
                  <v-btn
                    rounded
                    color="primary"
                    class="ma-2"
                    width="100%"
                    route
                    :to="{
                      name: 'applyjob',
                      params: { id: this.$route.params.id },
                    }"
                    v-if="type == 'freelancer'"
                    >Submit a Proposal</v-btn
                  >
                  <v-btn
                    rounded
                    color="primary"
                    class="ma-2"
                    width="100%"
                    route
                    v-if="type == 'client' && job.owner == true"
                    :to="{
                      name: 'allproposals',
                      params: { id: this.$route.params.id },
                    }"
                    >View Proposals</v-btn
                  >
                  <v-btn
                    rounded
                    color="error"
                    class="ma-2"
                    width="100%"
                    route
                    v-if="type == 'client' && job.owner == true"
                    @click="deleteJob"
                    >Delete Job</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-bottom-navigation
      grow
      fixed
      class="hidden-md-and-up"
      v-if="!(job.owner == false && type == 'client')"
    >
      <v-btn
        color="primary"
        route
        :to="{ name: 'applyjob', params: { id: this.$route.params.id } }"
        v-if="type == 'freelancer'"
      >
        <span class="white--text">Submit a Proposal</span>
        <v-icon class="white--text">mdi-file-document</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        route
        v-if="type == 'client' && job.owner == true"
        :to="{ name: 'allproposals', params: { id: this.$route.params.id } }"
      >
        <span class="white--text">View Proposals</span>
        <v-icon class="white--text">mdi-eye</v-icon>
      </v-btn>
      <v-btn
        color="error"
        route
        v-if="type == 'client' && job.owner == true"
        @click="deleteJob"
      >
        <span class="white--text">Delete Job</span>
        <v-icon class="white--text">mdi-delete</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
import Loading from '../../components/Loading.vue';
import api from '../../api/index';

export default {
  data() {
    return {
      job: {},
      type: '',
      loading: false,
    };
  },
  components: { Loading },
  mounted() {
    this.loading = false;
    this.type = JSON.parse(localStorage.getItem('userData')).type;
    this.fetchJob();
  },
  methods: {
    fetchJob() {
      api.fetchJob(this.$route.params.id).then((response) => {
        this.job = response.data;
        this.loading = true;
      });
    },
    deleteJob() {
      api.DeleteAJob(this.$route.params.id).then(() => {
        this.$router.push('/feed');
        this.$store.state.snackbarMessage = 'Job Deleted';
        this.$store.state.snackbar = true;
        this.$store.state.snackbarColor = 'red';
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

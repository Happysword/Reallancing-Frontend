<template>
  <div>
    <v-container>
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
                        {{ job.minHourlyRate }}LE-{{ job.maxHourlyRate }}LE
                        <v-card-subtitle class="ma-0 pa-0 caption">Hourly</v-card-subtitle>
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
                        <v-card-subtitle class="ma-0 pa-0 caption">Project Length</v-card-subtitle>
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
                        <v-card-subtitle class="ma-0 pa-0 caption">Experience</v-card-subtitle>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-col>
              </v-row>
            </v-container>
            <v-divider></v-divider>
            <div class="pa-4">
              <v-card-title>
                Skills and Expertise
              </v-card-title>
              <div class="pa-3">
                <v-chip v-for="skill in job.skills" :key="skill" class="ma-2">{{ skill }}</v-chip>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6" md="4" class="hidden-sm-and-down">
          <v-card>
            <v-container fluid fill-height>
              <v-row justify="center" align="center">
                <v-col cols="8">
                  <v-btn rounded color="primary" class="ma-2" width="100%">Submit a Proposal</v-btn>
                  <v-btn rounded color="white" class="ma-2" width="100%"
                    ><v-icon class="mx-2">mdi-heart</v-icon>Save Job</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-bottom-navigation grow fixed class="hidden-md-and-up">
      <v-btn color="primary">
        <span class="white--text">Submit a Proposal</span>
        <v-icon class="white--text">mdi-file-document</v-icon>
      </v-btn>
      <v-btn color="white">
        <span>Save Job</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
import api from '../../api/index';

export default {
  data() {
    return {
      job: {},
    };
  },
  mounted() {
    this.fetchJob();
  },
  methods: {
    fetchJob() {
      api.fetchJob(this.$route.params.id).then(response => {
        console.log(response.data);
        this.job = response.data.job;
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

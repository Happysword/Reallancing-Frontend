<template>
  <div>
    <v-container>
      <v-row
        class="ma-2 pt-3 display-1 primary--text"
        color="primary"
        @click="returnBack"
        ><a>
          <v-icon color="primary">mdi-keyboard-backspace</v-icon>
          <span class="text-decoration-underline">View all Proposals</span>
        </a>
      </v-row>
      <v-row>
        <v-col cols="12" md="12" sm="12">
          <v-card color="secondbackground">
            <v-row>
              <v-container fluid fill-height>
                <v-col cols="12" md="8" sm="12">
                  <v-row>
                    <v-col cols="3" md="2" sm="2">
                      <v-avatar
                        color="primary"
                        size="62"
                        alignjustify="center"
                        align="center"
                      >
                        <v-img
                          src="https://picsum.photos/id/11/500/300"
                        ></v-img>
                      </v-avatar>
                    </v-col>
                    <v-col cols="9" md="10" sm="10">
                      <div class="my-2 mx-1">
                        <v-row>
                          <p class="headline">
                            {{ proposal.user.firstName }}
                            {{ proposal.user.lastName }}
                          </p>
                        </v-row>
                        <v-row class="my-0">
                          <v-icon color="primary">mdi-star</v-icon>
                          <div class="body-1 px-1">
                            {{ proposal.user.rating }}
                          </div>
                        </v-row>
                        <v-row class="px-1 my-1">
                          <!-- need to replace the route -->
                          <a :href="`/profiles/${proposal.user._id}`"
                            >View Profile</a
                          >
                        </v-row>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="12" md="2" sm="12" xs="12">
                  <v-btn
                    rounded
                    color="white"
                    class="ma-2"
                    width="100%"
                    id="whitebtn"
                    v-if="type == 'client'"
                  >
                    Decline Candidate
                  </v-btn>
                </v-col>
                <v-col cols="12" md="2" sm="12">
                  <v-btn
                    rounded
                    color="primary"
                    class="ma-2"
                    width="100%"
                    id="greenbtn"
                    v-if="type == 'client'"
                  >
                    Hire Freelancer
                  </v-btn>
                  <v-btn
                    color="error"
                    class="ma-2"
                    width="100%"
                    id="greenbtn"
                    v-if="type == 'freelancer'"
                    @click="deleteProposal"
                  >
                    Delete Proposal
                    <v-icon class="mx-1">mdi-delete</v-icon>
                  </v-btn>
                </v-col>
              </v-container>
            </v-row>
            <v-divider> </v-divider>
            <v-row class="ma-0">
              <v-col cols="12" md="3" sm="5" class="pa-0">
                <div class="pa-3">
                  <strong class="subtitle-1">Applicant</strong>
                  <br />
                  <span class="body-1 font-weight-light">
                    {{ proposal.user.firstName }} has applied to or been invited
                    to your or your company's job {{ proposal.job.headline }}
                  </span>
                </div>
                <v-divider> </v-divider>
                <div class="pa-3">
                  <h3 class="display-2 font-weight-medium">How they match</h3>
                  <div class="pt-1">
                    <v-icon color="primary" class="mr-2"
                      >mdi-check-circle</v-icon
                    >
                    <span class="body-1 font-weight-light"
                      >Worked on jobs like yours</span
                    >
                  </div>
                </div>
                <!-- <v-divider> </v-divider>
                <div class="pa-3">
                  <strong class="subtitle-1">Get a second opinion</strong>
                  <br />
                  <span class="body-1 font-weight-light">
                    Invite coworkers to help you review freelancers
                  </span>
                </div> -->
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="12" md="9" sm="7" class="px-0">
                <div class="px-5">
                  <v-row class="pt-3 px-3">
                    <p class="headline pt-1">Proposal Details</p>
                    <v-spacer></v-spacer>
                    <p class="display-2 font-weight-medium pr-4">
                      ${{ proposal.proposedHourlyRate }}/hr
                    </p>
                  </v-row>
                  <p class="mt-n5 pr-4" align="end">Proposed Hourly Rate</p>
                </div>
                <v-divider class="mx-0"> </v-divider>
                <div class="pa-3">
                  <h2 class="display-2 font-weight-bold pa-3">Cover letter</h2>
                  <p class="body-1 px-8 text-justify">
                    {{ proposal.coverLetter }}
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import api from '../../api/index';

export default {
  data() {
    return {
      proposal: {},
      type: '',
    };
  },
  mounted() {
    this.type = JSON.parse(localStorage.getItem('userData')).type;
    this.fetchProposal();
  },
  methods: {
    returnBack() {
      // this.$router.push(`/proposals/${this.proposal.job.id}`);
      this.$router.go(-1);
    },
    fetchProposal() {
      api.fetchProposal(this.$route.params.id).then((response) => {
        console.log(response.data);
        this.proposal = response.data;
      });
    },
    deleteProposal() {
      // eslint-disable-next-line no-underscore-dangle
      api.DeleteAProposal(this.proposal._id).then((res) => {
        this.$router.go(-1);
        this.$store.state.snackbarMessage = 'Proposal Deleted';
        this.$store.state.snackbar = true;
        this.$store.state.snackbarColor = 'red';
        console.log(res);
      });
    },
  },
};
</script>

<style scoped>
a:hover {
  color: #3d8040;
}
#greenbtn:hover {
  background-color: #316433 !important;
}
#whitebtn:hover {
  background-color: #e2e2e2 !important;
}
.v-divider {
  border-color: rgba(187, 187, 187, 0.678);
}
</style>

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
                          <p class="headline">Jyoti C.</p>
                        </v-row>
                        <v-row>
                          <div>
                            <v-icon>mdi-map-marker</v-icon>
                            Phagwara, India – 9:03pm local time
                          </div>
                        </v-row>
                        <v-row class="px-1 py-2">
                          <!-- need to replace the route -->
                          <a href="/profile">View Profile</a>
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
                  >
                    Hire Freelancer
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
                    Jyoti has applied to or been invited to your or your
                    company's job University web portal using React
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
                <v-divider> </v-divider>
                <div class="pa-3">
                  <strong class="subtitle-1">Get a second opinion</strong>
                  <br />
                  <span class="body-1 font-weight-light">
                    Invite coworkers to help you review freelancers
                  </span>
                </div>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="12" md="9" sm="7" class="px-0">
                <div class="px-5">
                  <v-row class="pt-3 px-3">
                    <p class="headline pt-1">Proposal Details</p>
                    <v-spacer></v-spacer>
                    <p class="display-2 font-weight-medium pr-4">$50.00</p>
                  </v-row>
                  <p class="mt-n5 pr-4" align="end">Proposed Bid</p>
                </div>
                <v-divider class="mx-0"> </v-divider>
                <div class="pa-3">
                  <h2 class="display-2 font-weight-bold pa-3">Cover letter</h2>
                  <p class="body-1 px-8 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro delectus voluptate repellendus odio sequi cum
                    accusamus distinctio asperiores voluptas, odit ipsa
                    praesentium rerum, adipisci maiores eum facilis accusantium
                    tempora voluptates.
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
// import api from '../../api/index';

export default {
  data() {
    return {
      proposal: {},
    };
  },
  mounted() {
    this.fetchProposal();
  },
  methods: {
    returnBack() {
      // this.$router.push(`/proposals/${this.proposal.job.id}`);
      this.$router.push('/');
    },
    // fetchProposal() {
    //   api.fetchProposal(this.$route.params.id).then((response) => {
    //     console.log(response.data);
    //     this.proposal = response.data.proposal;
    //   });
    // },
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

<template>
  <v-card color="secondbackground" :to="'/proposals/' + proposal._id">
    <v-row>
      <v-container fluid fill-height>
        <v-col cols="12" md="8" sm="12">
          <v-row>
            <v-col cols="3" md="2" sm="2">
              <v-avatar color="primary" size="62" alignjustify="center" align="center">
                <v-img src="https://picsum.photos/id/11/500/300"></v-img>
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
                  <!-- <a :href="`/profile/${proposal.user._id}`"
                            >View Profile</a
                          > -->
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-spacer></v-spacer>
      </v-container>
    </v-row>
    <v-divider> </v-divider>
    <v-row class="ma-0">
      <v-col cols="12" md="3" sm="5" class="pa-0">
        <div class="pa-3">
          <strong class="subtitle-1">Applicant</strong>
          <br />
          <span class="body-1 font-weight-light">
            {{ proposal.user.firstName }} has applied to or been invited to your or your company's
            job {{ proposal.job.headline }}
          </span>
        </div>
        <v-divider> </v-divider>
        <div class="pa-3">
          <h3 class="display-2 font-weight-medium">How they match</h3>
          <div class="pt-1">
            <v-icon color="primary" class="mr-2">mdi-check-circle</v-icon>
            <span class="body-1 font-weight-light">Worked on jobs like yours</span>
          </div>
        </div>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="12" md="9" sm="7" class="px-0">
        <div class="px-5">
          <v-row class="pt-3 px-3">
            <p class="headline pt-1">Proposal Details</p>
            <v-spacer></v-spacer>
            <p class="display-2 font-weight-medium pr-4">${{ proposal.proposedHourlyRate }}/hr</p>
          </v-row>
          <p class="mt-n5 pr-4" align="end">Proposed Hourly Rate</p>
        </div>
        <v-divider class="mx-0"> </v-divider>
        <div class="pa-3">
          <h2 class="display-2 font-weight-bold pa-3">Cover letter</h2>
          <p class="body-1 px-8 text-justify">
            {{ proposal.coverLetter | shorten }}
          </p>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    proposal: {},
  },
};
</script>

<style></style>

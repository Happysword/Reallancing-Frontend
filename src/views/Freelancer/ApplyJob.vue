<template>
  <div>
    <v-container>
      <h1 class="display-3 font-weight-medium ma-3">Submit a proposal</h1>
      <v-row>
        <v-col cols="12">
          <v-card color="secondbackground">
            <v-card-title class="mx-5 pa-4 headline font-weight-medium">
              Introduce Yourself
            </v-card-title>
            <v-card-subtitle class="mx-5 px-4"
              >What makes you a strong candidate for this job?</v-card-subtitle
            >
            <v-divider></v-divider>
            <div class="pa-4">
              <v-card-title class="subtitle-2 py-1">
                Message to Client
              </v-card-title>
              <v-card-title class="subtitle-1">
                Describe some of your experiences that make you a great candidate for this job.
                Include any questions you may have about this job, or even request a video call.
              </v-card-title>
              <v-form ref="firstform">
                <v-textarea
                  class="pa-3"
                  outlined
                  name="input-7-4"
                  label="Add cover letter"
                  v-model="coverletter"
                  :rules="[
                    v =>
                      (v || '').length <= 5000 || 'Cover Letter must be less than 5000 characters',
                    v => (v || '').length >= 50 || 'Cover Letter must be more than 50 characters',
                  ]"
                ></v-textarea>
                <v-text-field
                  class="pa-3"
                  outlined
                  label="Proposed Hourly Rate"
                  required
                  v-model="proposedHourlyRate"
                  :rules="[rules.required, rules.min]"
                  dense
                  type="number"
                ></v-text-field>
              </v-form>
            </div>
            <v-divider></v-divider>
            <div class="px-5 py-2">
              <v-btn
                rounded
                color="primary"
                class="ma-2"
                @click="
                  () => {
                    if ($refs.firstform.validate()) createAProposal();
                  }
                "
                >Submit a Proposal</v-btn
              >
            </div>
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
      coverletter: '',
      proposedHourlyRate: 0,
      rules: {
        required: value => !!value || 'Required.',
        min: v => (!!v && v >= 10 && v <= 10000) || 'Hourly Rate Should be between 10 and 10,000',
      },
    };
  },
  methods: {
    createAProposal() {
      api
        .createAProposal(this.coverletter, this.proposedHourlyRate, this.$route.params.id)
        .then(res => {
          if (res) {
            this.$router.push({ name: 'myproposals' });
            this.$store.state.snackbarMessage = 'Proposal Submitted';
            this.$store.state.snackbar = true;
            this.$store.state.snackbarColor = 'primary';
          }
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

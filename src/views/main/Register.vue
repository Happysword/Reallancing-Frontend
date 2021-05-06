<template>
  <v-container class="pt-10">
    <v-row justify="center">
      <v-col
        cols="3"
        class="text-center"
        v-if="$vuetify.breakpoint.width > 750"
        :class="{
          'px-0': $vuetify.breakpoint.width < 1000,
        }"
      >
        <v-btn
          :width="currentStep == i + 1 ? 200 : 180"
          v-for="(step, i) in steps"
          :key="i"
          class="ma-0 px-0 text-none text-h5 button-align"
          elevation="0"
          tile
          height="35"
          text
          fab
          @click="currentStep = i + 1"
          :disabled="maxStep < i + 1"
          :class="{
            'button-active': i + 1 == currentStep,
            'px-2': i + 1 == currentStep,
            'mt-1': i + 1 == currentStep,
            'mb-1': i + 1 == currentStep,
            'lighten-3': i + 1 == currentStep,
          }"
        >
          <v-icon
            class="mr-3"
            :class="{
              'green--text': currentStep == i + 1,
            }"
            >mdi-heart</v-icon
          >
          <span :class="{ 'green--text': i + 1 == currentStep }">{{ step }}</span>
          <v-spacer></v-spacer>
          <v-icon v-if="maxStep <= i + 1">mdi-checkbox-marked-circle-outline</v-icon>
          <v-icon v-else color="primary">mdi-check-decagram</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="8">
        <v-card color="white" class="center-flex ma-0 pa-0" tile elevation="12">
          <v-form>
            <template v-for="(step, i) in steps">
              <v-row
                v-show="currentStep == i + 1"
                no-gutters
                justify="center"
                align="center"
                class="text-h2 font-weight-bold mb-5"
                :key="i"
              >
                <v-col cols="12" class="text-center">
                  <v-card color="secondbackground" elevation="0" class="pa-5 ma-0 border">
                    <v-row no-gutters justify="center" class="mt-3">
                      <v-col cols="12">
                        <h3 class="text-center font-weight-light">{{ step }}</h3></v-col
                      >
                      <v-col class="text-overline grey--text" cols="12">
                        {{ i + 1 }} of {{ steps.length }}
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
                <v-col cols="12" class="text-center pa-10">
                  Main Body
                </v-col>
                <v-col cols="12" class="text-center">
                  <v-card color="secondbackground" elevation="0" class="pa-5 ma-0 border">
                    <v-row justify="space-between">
                      <v-col cols="auto">
                        <v-btn color="grey darken-2" rounded outlined @click="nextStep(i - 1)"
                          >back</v-btn
                        ></v-col
                      >
                      <v-col cols="auto">
                        <v-btn color="primary" rounded @click="nextStep(i + 1)"
                          >Continue</v-btn
                        ></v-col
                      >
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </template>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        'Getting Started',
        'Category',
        'Expertise',
        'Expertise Level',
        'Education',
        'Employment',
        'Languages',
        'Hourly Rate',
        'Titel & Overview',
        'Profile Photo',
        'Location',
        'Phone',
      ],
      currentStep: 1,
      maxStep: 1,
    };
  },
  methods: {
    nextStep(step) {
      this.maxStep = Math.max(this.maxStep, step + 1);
      this.currentStep = step + 1;
    },
  },
};
</script>

<style scoped>
.button-align {
  justify-content: left;
}
.button-active {
  border-left: 5px solid #4caf50 !important;
  font-weight: 700;
  background: #f8f8f8;
  box-shadow: 5px 2px 5px rgba(0, 0, 0, 0.5) !important;
  -webkit-box-shadow: 5px 2px 10px rgba(0, 0, 0, 0.5) !important;
  -moz-box-shadow: 5px 2px 10px rgba(0, 0, 0, 0.5) !important;
}
.border {
  border-top: 1px solid #e0e0e0 !important;
  border-bottom: 1px solid #e0e0e0 !important;
}
</style>

<template>
  <v-container class="pt-10">
    <v-row justify="center">
      <v-col cols="3" class="text-center">
        <v-btn
          width="200"
          v-for="(step, i) in steps"
          color="#A0A0A0"
          :key="i"
          class="ma-0 px-0 font-weight-medium text-none text-h5 button-align"
          elevation="0"
          tile
          height="40"
          text
          fab
          @click="currentStep = i + 1"
          :disabled="maxStep < i + 1"
          :class="{ 'button-active': i + 1 == currentStep }"
        >
          <v-icon class="mr-3">mdi-heart</v-icon>
          <span>{{ step }}</span>
          <v-spacer></v-spacer>
          <v-icon v-if="maxStep <= i + 1">mdi-checkbox-marked-circle-outline</v-icon>
          <v-icon v-else color="green">mdi-check-decagram</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="8">
        <v-card color="white" min-height="400" class="center-flex ma-0 pa-6">
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
                <v-col cols="12" class="text-center">{{ step }}</v-col>
                <v-col cols="12" class="text-center">
                  <v-btn color="primary" outlined @click="nextStep(i + 1)">Continue</v-btn>
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
  border-left: 5px solid green;
  background-color: #fff;
  font-weight: 700;
}
</style>

<template>
  <v-container class="pt-10">
    <!-- Freelancer Form -->
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
          <!-- Title & Overview -->
          <v-form>
            <v-row
              v-show="currentStep == 1"
              no-gutters
              justify="center"
              align="center"
              class="text-h2 font-weight-bold mb-5"
            >
              <v-col cols="12" class="text-center">
                <v-card color="secondbackground" elevation="0" class="pa-5 ma-0 border">
                  <v-row no-gutters justify="center" class="mt-3">
                    <v-col cols="12">
                      <h3 class="text-center font-weight-light">{{ steps[0] }}</h3></v-col
                    >
                    <v-col class="text-overline grey--text" cols="12">
                      1 of {{ steps.length }}
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
              <v-col cols="10" class="text-center px-3 mt-5">
                <v-text-field
                  outlined
                  label="Title"
                  required
                  v-model="jobInfo.title"
                  :rules="[rules.required, rules.min1]"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="10" class="text-center px-3">
                <v-text-field
                  outlined
                  label="Min Hourly Rate"
                  required
                  v-model="jobInfo.minHourlyRate"
                  :rules="[rules.required]"
                  dense
                  type="number"
                ></v-text-field>
              </v-col>
              <v-col cols="10" class="text-center px-3">
                <v-text-field
                  outlined
                  label="Max Hourly Rate"
                  required
                  v-model="jobInfo.maxHourlyRate"
                  :rules="[rules.required]"
                  dense
                  type="number"
                ></v-text-field>
              </v-col>
              <v-col cols="10" class="text-center px-3">
                <v-textarea
                  outlined
                  label="Description"
                  required
                  placeholder="A brief about job you want"
                  v-model="jobInfo.description"
                  :rules="[rules.required, rules.min2]"
                  dense
                ></v-textarea>
              </v-col>
              <v-col cols="12" class="text-center">
                <v-card color="secondbackground" elevation="0" class="pa-5 ma-0 border">
                  <v-row justify="end">
                    <v-col cols="auto">
                      <v-btn color="primary" rounded @click="nextStep(1)">Continue</v-btn></v-col
                    >
                  </v-row>
                </v-card>
              </v-col>
            </v-row>

            <!-- Expertise -->

            <v-row
              v-show="currentStep == 2"
              no-gutters
              justify="center"
              align="center"
              class="text-h2 font-weight-bold mb-5"
            >
              <v-col cols="12" class="text-center">
                <v-card color="secondbackground" elevation="0" class="pa-5 ma-0 border">
                  <v-row no-gutters justify="center" class="mt-3">
                    <v-col cols="12">
                      <h3 class="text-center font-weight-light">{{ steps[1] }}</h3></v-col
                    >
                    <v-col class="text-overline grey--text" cols="12">
                      2 of {{ steps.length }}
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
              <v-col cols="10" class="text-center px-3 mt-5">
                <v-item-group v-model="jobInfo.experience" class="my-2">
                  <v-item
                    v-for="(n, i) in experienceArr"
                    :key="i"
                    v-slot="{ active, toggle }"
                    class="my-2"
                  >
                    <v-chip
                      class="my-2"
                      active-class="primary--text"
                      :input-value="active"
                      @click="toggle"
                      x-large
                    >
                      {{ n }}
                    </v-chip>
                  </v-item>
                </v-item-group>
              </v-col>
              <v-col cols="12" class="text-center">
                <v-card color="secondbackground" elevation="0" class="pa-5 ma-0 border">
                  <v-row justify="space-between">
                    <v-col cols="auto">
                      <v-btn color="grey darken-2" rounded outlined @click="nextStep(0)"
                        >back</v-btn
                      ></v-col
                    >
                    <v-col cols="auto">
                      <v-btn color="primary" rounded @click="nextStep(2)">Continue</v-btn></v-col
                    >
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-form>

          <!-- Category -->
          <v-form>
            <v-row
              v-show="currentStep == 3"
              no-gutters
              justify="center"
              align="center"
              class="text-h2 font-weight-bold mb-5"
            >
              <v-col cols="12" class="text-center">
                <v-card color="secondbackground" elevation="0" class="pa-5 ma-0 border">
                  <v-row no-gutters justify="center" class="mt-3">
                    <v-col cols="12">
                      <h3 class="text-center font-weight-light">{{ steps[2] }}</h3></v-col
                    >
                    <v-col class="text-overline grey--text" cols="12">
                      3 of {{ steps.length }}
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
              <v-chip-group active-class="primary--text" v-model="jobInfo.categoriesIndex">
                <v-chip v-for="(category, i) in categories" :key="i">
                  {{ category.name }}
                </v-chip>
              </v-chip-group>
              <v-col cols="12" class="text-center">
                <v-card color="secondbackground" elevation="0" class="pa-5 ma-0 border">
                  <v-row justify="space-between">
                    <v-col cols="auto">
                      <v-btn color="grey darken-2" rounded outlined @click="nextStep(1)"
                        >back</v-btn
                      ></v-col
                    >
                    <v-col cols="auto">
                      <v-btn color="primary" rounded @click="nextStep(3)">Continue</v-btn></v-col
                    >
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-form>

          <!-- Skills -->
          <v-form>
            <v-row
              v-show="currentStep == 4"
              no-gutters
              justify="center"
              align="center"
              class="text-h2 font-weight-bold mb-5"
            >
              <v-col cols="12" class="text-center">
                <v-card color="secondbackground" elevation="0" class="pa-5 ma-0 border">
                  <v-row no-gutters justify="center" class="mt-3">
                    <v-col cols="12">
                      <h3 class="text-center font-weight-light">{{ steps[3] }}</h3></v-col
                    >
                    <v-col class="text-overline grey--text" cols="12">
                      4 of {{ steps.length }}
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
              <v-chip-group multiple active-class="primary--text" v-model="jobInfo.skillsIndex">
                <v-chip v-for="(skill, i) in skills" :key="i">
                  {{ skill.name }}
                </v-chip>
              </v-chip-group>
              <v-col cols="12" class="text-center">
                <v-card color="secondbackground" elevation="0" class="pa-5 ma-0 border">
                  <v-row justify="space-between">
                    <v-col cols="auto">
                      <v-btn color="grey darken-2" rounded outlined @click="nextStep(2)"
                        >back</v-btn
                      ></v-col
                    >
                    <v-col cols="auto">
                      <v-btn color="primary" rounded @click="nextStep(4)">Continue</v-btn></v-col
                    >
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-form>

          <!-- Duration -->
          <v-form>
            <v-row
              v-show="currentStep == 5"
              no-gutters
              justify="center"
              align="center"
              class="text-h2 font-weight-bold mb-5"
            >
              <v-col cols="12" class="text-center">
                <v-card color="secondbackground" elevation="0" class="pa-5 ma-0 border">
                  <v-row no-gutters justify="center" class="mt-3">
                    <v-col cols="12">
                      <h3 class="text-center font-weight-light">{{ steps[4] }}</h3></v-col
                    >
                    <v-col class="text-overline grey--text" cols="12">
                      1 of {{ steps.length }}
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
              <v-col cols="12" class="text-center pa-10">
                <v-item-group v-model="jobInfo.duration" class="my-2">
                  <v-item
                    v-for="(n, i) in durationArr"
                    :key="i"
                    v-slot="{ active, toggle }"
                    class="my-2"
                  >
                    <v-chip
                      class="my-2"
                      active-class="primary--text"
                      :input-value="active"
                      @click="toggle"
                      x-large
                    >
                      {{ n }}
                    </v-chip>
                  </v-item>
                </v-item-group>
              </v-col>
              <v-col cols="12" class="text-center">
                <v-card color="secondbackground" elevation="0" class="pa-5 ma-0 border">
                  <v-row justify="space-between">
                    <v-col cols="auto">
                      <v-btn color="grey darken-2" rounded outlined @click="nextStep(3)"
                        >back</v-btn
                      ></v-col
                    >
                    <v-col cols="auto">
                      <v-btn color="primary" rounded @click="createJob">Submit</v-btn></v-col
                    >
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from '@/api';

export default {
  data() {
    return {
      steps: ['Title', 'Expertise', 'Category', 'Skills', 'Duration'],
      currentStep: 1,
      maxStep: 1,
      isFreelancer: false,
      mainData: {},
      jobInfo: {},
      freelancerInfo: {},
      valid: true,
      showPassword: false,
      showPasswordConfirm: false,
      experienceArr: ['Entry level', 'Intermediate', 'Expert'],
      durationArr: ['More than 6 months', '3 to 6 months', '1 to 3 months', 'Less than 1 month'],
      rules: {
        required: value => !!value || 'Required.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Not a valid Email';
        },
        min1: v => v.length >= 10 || 'Min 10 characters',
        min2: v => v.length >= 50 || 'Min 50 characters',
      },
      sendRequest: false,
      categories: [],
      categoriesSelected: [],
      skills: [],
      skillsSelected: [],
    };
  },
  methods: {
    fetchAllCategories() {
      api.fetchAllCategories(this.$route.params.id).then(response => {
        this.categories = response.data;
      });
    },
    fetchAllSkills() {
      api.fetchAllSkills(this.$route.params.id).then(response => {
        this.skills = response.data;
      });
    },
    nextStep(step) {
      this.maxStep = Math.max(this.maxStep, step + 1);
      this.currentStep = step + 1;
    },
    createJob() {
      this.jobInfo.skillsIndex.forEach(item => {
        this.skillsSelected.push(this.skills[item].name);
      });
      const job = {
        headline: this.jobInfo.title,
        description: this.jobInfo.description,
        skills: this.skillsSelected,
        category: this.categories[this.jobInfo.categoriesIndex].name,
        experience: this.experienceArr[this.jobInfo.experience],
        minHourlyRate: Number(this.jobInfo.minHourlyRate),
        maxHourlyRate: Number(this.jobInfo.maxHourlyRate),
        duration: this.durationArr[this.jobInfo.duration],
      };
      console.log(job);
      api.createAJob(job).then(() => {
        this.$router.push({ name: 'feed' });
        this.$store.state.snackbarMessage = 'Job Created';
        this.$store.state.snackbar = true;
        this.$store.state.snackbarColor = 'primary';
      });
    },
  },
  mounted() {
    this.fetchAllCategories();
    this.fetchAllSkills();
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

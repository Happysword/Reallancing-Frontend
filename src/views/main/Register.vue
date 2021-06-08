/* eslint-disable implicit-arrow-linebreak */
<template>
  <v-container class="pt-10">
    <!-- Main Form -->
    <v-row justify="center" class="mt-1" v-if="!isFreelancer">
      <v-col cols="auto" class="ma-0 pa-0">
        <v-card color="white" elevation="6" class="pa-5 pt-0" shaped max-width="600px">
          <v-form ref="registerform" v-model="valid">
            <v-row
              no-gutters
              justify="center"
              align="center"
              class="text-h2 font-weight-light ma-5"
            >
              <v-col cols="12" class="text-center">
                <v-avatar height="200" width="200" tile
                  ><v-img src="@/assets/Reallancing_Black.png" height="200" width="200"
                /></v-avatar>
              </v-col>

              <v-col cols="12" class="text-center"> Join Us</v-col>
            </v-row>

            <v-row no-gutters justify="center" align="center" class="px-5 text-h4">
              <v-col cols="10">
                <v-text-field
                  outlined
                  label="First Name"
                  v-model="mainData.firstName"
                  required
                  :rules="[rules.required]"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="10">
                <v-text-field
                  outlined
                  label="ُLast Name"
                  v-model="mainData.lastName"
                  required
                  :rules="[rules.required]"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="10">
                <v-text-field
                  outlined
                  label="ُEmail"
                  v-model="mainData.email"
                  required
                  :rules="[rules.required, rules.email]"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="10">
                <v-text-field
                  outlined
                  label="Password"
                  required
                  v-model="mainData.password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.MinPassLen]"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                  dense
                ></v-text-field
              ></v-col>
              <v-col cols="10">
                <v-text-field
                  outlined
                  label="Confirm Password"
                  required
                  v-model="mainData.passwordConfirm"
                  :append-icon="showPasswordConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[
                    rules.required,
                    rules.passwordMatch(mainData.passwordConfirm, mainData.password),
                  ]"
                  :type="showPasswordConfirm ? 'text' : 'password'"
                  @click:append="showPasswordConfirm = !showPasswordConfirm"
                  dense
                ></v-text-field
              ></v-col>
              <v-col cols="10">
                <v-text-field
                  outlined
                  label="Location"
                  required
                  v-model="mainData.location"
                  :rules="[rules.required]"
                  dense
                ></v-text-field
              ></v-col>
              <v-col cols="10" class="text-center">
                <v-radio-group v-model="mainData.type" mandatory column>
                  <template v-slot:label>
                    <div class="text-center">What do you <strong>want</strong> to be?</div>
                  </template>
                  <v-radio value="freelancer">
                    <template v-slot:label>
                      <div class="text-center">
                        <strong class="success--text">Freelancer</strong>
                      </div>
                    </template>
                  </v-radio>
                  <v-radio value="client">
                    <template v-slot:label>
                      <div class="text-center"><strong class="blue--text">Client</strong></div>
                    </template>
                  </v-radio>
                </v-radio-group>
              </v-col>
            </v-row>

            <v-row justify="center" align="center" class="px-5 mt-0 mb-10">
              <v-col cols="10" class="text-center">
                <v-btn
                  @click.prevent="submitFirstForm"
                  width="70%"
                  rounded
                  outlined
                  color="primary"
                  class="text-h4"
                  >Register</v-btn
                >
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>

    <!-- Freelancer Form -->
    <v-row justify="center" v-if="isFreelancer">
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

      <v-col cols="12" sm="8">
        <v-card color="white" class="center-flex ma-0 pa-0" tile elevation="12">
          <!-- Title & Overview -->
          <v-form ref="firstform">
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
                  v-model="freelancerInfo.title"
                  :rules="[rules.required]"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="10" class="text-center px-3">
                <v-text-field
                  outlined
                  label="Hourly Rate"
                  required
                  v-model="freelancerInfo.hourlyRate"
                  :rules="[rules.required, rules.hourlyRate]"
                  dense
                  type="number"
                ></v-text-field>
              </v-col>
              <v-col cols="10" class="text-center px-3">
                <v-textarea
                  outlined
                  label="Overview"
                  required
                  placeholder="A brief about you"
                  v-model="freelancerInfo.overview"
                  counter
                  :rules="[rules.required, rules.overviewLength]"
                  dense
                ></v-textarea>
              </v-col>
              <v-col cols="12" class="text-center">
                <v-card color="secondbackground" elevation="0" class="pa-5 ma-0 border">
                  <v-row justify="end">
                    <v-col cols="auto">
                      <v-btn
                        color="primary"
                        rounded
                        @click="
                          () => {
                            if ($refs.firstform.validate()) nextStep(1);
                          }
                        "
                        >Continue</v-btn
                      ></v-col
                    >
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-form>

          <!-- Education -->
          <v-form ref="secondform">
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
                <v-text-field
                  outlined
                  label="University"
                  required
                  v-model="freelancerInfo.education.university"
                  :rules="[rules.required]"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="10" class="text-center px-3">
                <v-text-field
                  outlined
                  label="Graduation Year"
                  type="number"
                  v-model="freelancerInfo.education.graduation"
                  :rules="[rules.required, rules.isAYear]"
                  dense
                >
                </v-text-field>
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
                      <v-btn
                        color="primary"
                        rounded
                        @click="
                          () => {
                            if ($refs.secondform.validate()) nextStep(2);
                          }
                        "
                        >Continue</v-btn
                      ></v-col
                    >
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-form>

          <!-- Expertise -->
          <v-form ref="thirdform">
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
              <v-col cols="10" class="text-center px-3 mt-5">
                <v-text-field
                  outlined
                  label="Company"
                  required
                  v-model="freelancerInfo.workExperience.company"
                  :rules="[rules.required]"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="10" class="text-center px-3">
                <v-text-field
                  outlined
                  label="Job Title"
                  required
                  v-model="freelancerInfo.workExperience.jobTitle"
                  :rules="[rules.required]"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="10" class="text-center px-3">
                <v-text-field
                  outlined
                  label="Duration In Months"
                  required
                  v-model="freelancerInfo.workExperience.durationInMonths"
                  :rules="[rules.required, rules.biggerthanzero]"
                  dense
                  type="number"
                ></v-text-field>
              </v-col>
              <v-col cols="10" class="text-center">
                <v-radio-group v-model="freelancerInfo.experienceLevel" mandatory>
                  <template v-slot:label>
                    <div class="text-center">Experience Level</div>
                  </template>
                  <v-radio value="beginner" label="Beginner"> </v-radio>
                  <v-radio value="intermediate" label="Intermediate"> </v-radio>
                  <v-radio value="Expert" label="Expert"> </v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" class="text-center">
                <v-card color="secondbackground" elevation="0" class="pa-5 ma-0 border">
                  <v-row justify="space-between">
                    <v-col cols="auto">
                      <v-btn color="grey darken-2" rounded outlined @click="nextStep(1)"
                        >back</v-btn
                      ></v-col
                    >
                    <v-col cols="auto">
                      <v-btn
                        color="primary"
                        rounded
                        @click="
                          () => {
                            if ($refs.thirdform.validate()) nextStep(3);
                          }
                        "
                        >Continue</v-btn
                      ></v-col
                    >
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-form>

          <!-- Category & Skills -->
          <v-form ref="fourthform">
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

              <v-col cols="10" class="text-center px-3 mt-5">
                <v-select
                  outlined
                  label="Category"
                  required
                  v-model="tempCategory"
                  :rules="[rules.required]"
                  :items="categriesArray"
                  clearable
                  attach
                  return-object
                  chips
                  @change="getCategorySkills"
                ></v-select>
              </v-col>
              <v-col cols="10" class="text-center px-3">
                <v-select
                  :items="skillsArray"
                  v-model="freelancerInfo.skills"
                  label="Skills"
                  clearable
                  attach
                  :rules="[rules.emptyArray]"
                  chips
                  outlined
                  multiple
                ></v-select>
              </v-col>

              <v-col cols="12" class="text-center">
                <v-card color="secondbackground" elevation="0" class="pa-5 ma-0 border">
                  <v-row justify="space-between">
                    <v-col cols="auto">
                      <v-btn color="grey darken-2" rounded outlined @click="nextStep(2)"
                        >back</v-btn
                      ></v-col
                    >
                    <v-col cols="auto">
                      <v-btn
                        color="primary"
                        rounded
                        @click="
                          () => {
                            if ($refs.fourthform.validate()) nextStep(4);
                          }
                        "
                        >Continue</v-btn
                      ></v-col
                    >
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-form>

          <!-- Languages -->
          <v-form ref="fifthform">
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
                      5 of {{ steps.length }}
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>

              <v-col cols="10" class="text-center">
                <v-radio-group v-model="freelancerInfo.languages[0].level" mandatory>
                  <template v-slot:label>
                    <div class="text-center">Arabic Level</div>
                  </template>
                  <v-radio value="basic" label="Basic"> </v-radio>
                  <v-radio value="conversational" label="Conversational"> </v-radio>
                  <v-radio value="fluent" label="Fluent"> </v-radio>
                  <v-radio value="native or bilingual" label="Native or Bilingual"> </v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="10" class="text-center">
                <v-radio-group v-model="freelancerInfo.languages[1].level" mandatory>
                  <template v-slot:label>
                    <div class="text-center">English Level</div>
                  </template>
                  <v-radio value="basic" label="Basic"> </v-radio>
                  <v-radio value="conversational" label="Conversational"> </v-radio>
                  <v-radio value="fluent" label="Fluent"> </v-radio>
                  <v-radio value="native or bilingual" label="Native or Bilingual"> </v-radio>
                </v-radio-group>
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
                      <v-btn
                        color="primary"
                        rounded
                        @click="
                          () => {
                            if ($refs.fifthform.validate()) submitFormFreelancer();
                          }
                        "
                        >Submit</v-btn
                      ></v-col
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
      steps: ['Title & Overview', 'Education', 'Expertise', 'Category & Skills', 'Languages'],
      categriesArray: [],
      skillsArray: [],
      currentStep: 1,
      maxStep: 1,
      isFreelancer: false,
      tempCategory: '',
      mainData: {
        firstName: '',
        lastName: '',
        email: '',
        type: '',
        password: '',
        passwordConfirm: '',
        location: '',
      },
      freelancerInfo: {
        title: '',
        overview: '',
        hourlyRate: null,
        education: {
          university: '',
          graduation: null,
        },
        workExperience: {
          company: '',
          jobTitle: '',
          durationInMonths: null,
        },
        experienceLevel: '',
        category: '',
        skills: [],
        languages: [
          {
            name: 'Arabic',
            level: '',
          },
          {
            name: 'English',
            level: '',
          },
        ],
      },
      valid: true,
      showPassword: false,
      showPasswordConfirm: false,
      rules: {
        required: value => !!value || 'Required.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Not a valid Email';
        },
        isAYear: value => (value >= 1950 && value <= 2025) || 'Must Be between 1960 and 2025',
        hourlyRate: value => (value >= 10 && value <= 2000) || 'Must Be between 10 and 2000',
        biggerthanzero: value => value > 0 || 'Can not work less than 1 month',
        overviewLength: v =>
          // eslint-disable-next-line implicit-arrow-linebreak
          (v.length >= 50 && v.length <= 5000) || 'Min 50 characters, Max 5000 characters',
        emptyArray: v => v.length > 0 || 'Min One Skill is needed',
        passwordMatch: (v1, v2) => v1 === v2 || 'Passwords Do not Match',
        MinPassLen: v => v.length >= 8 || 'Password min 8 Characters',
      },
      sendRequest: false,
    };
  },
  methods: {
    nextStep(step) {
      this.maxStep = Math.max(this.maxStep, step + 1);
      this.currentStep = step + 1;
    },
    async submitFirstForm() {
      // Validate Input
      if (!this.$refs.registerform.validate()) return;

      // Disable the button
      this.sendRequest = true;

      if (this.mainData.type === 'freelancer') {
        this.isFreelancer = true;
      } else {
        // Send the request
        const registerResponse = await api.registerUser({
          ...this.mainData,
        });

        // If the request was successful,
        if (registerResponse.status === 201) {
          // Display success and route to home
          this.$store.state.snackbarMessage = 'Registration Complete. You can Login now';
          this.$store.state.snackbar = true;
          this.$store.state.snackbarColor = 'green accent-4';
          this.$router.push('/login');

          // Reset the Form
          this.$refs.registerform.reset();
          this.mainData = {
            firstName: '',
            lastName: '',
            email: '',
            type: '',
            password: '',
            passwordConfirm: '',
            location: '',
          };
        } else {
          // Display success and route to home
          this.$store.state.snackbarMessage = registerResponse.data.message;
          this.$store.state.snackbar = true;
          this.$store.state.snackbarColor = 'red accent-4';
        }
        // Renable the button
        this.sendRequest = false;
      }
    },
    async submitFormFreelancer() {
      // Disable the button
      this.sendRequest = true;

      // Send the request
      const registerResponse = await api.registerUser({
        ...this.mainData,
        freelancerInfo: this.freelancerInfo,
      });

      // If the request was successful,
      if (registerResponse.status === 201) {
        // Display success and route to home
        this.$store.state.snackbarMessage = 'Welcome to Our Website';
        this.$store.state.snackbar = true;
        this.$store.state.snackbarColor = 'green accent-4';
        this.$router.push('/login');

        // Reset the Form
        this.mainData = {
          firstName: '',
          lastName: '',
          email: '',
          type: '',
          password: '',
          passwordConfirm: '',
          location: '',
        };
        this.freelancerInfo = {
          title: '',
          overview: '',
          hourlyRate: null,
          education: {
            university: '',
            graduation: null,
          },
          workExperience: {
            company: '',
            jobTitle: '',
            durationInMonths: null,
          },
          experienceLevel: '',
          category: '',
          skills: [],
          languages: [
            {
              name: 'Arabic',
              level: '',
            },
            {
              name: 'English',
              level: '',
            },
          ],
        };
      } else {
        // Display success and route to home
        this.$store.state.snackbarMessage = registerResponse.data.message;
        this.$store.state.snackbar = true;
        this.$store.state.snackbarColor = 'red accent-4';
      }
      // Renable the button
      this.sendRequest = false;
    },
    async getCategorySkills() {
      this.freelancerInfo.category = this.tempCategory.value;
      const temp = await api.getCategorySkills(this.tempCategory.id);
      // eslint-disable-next-line no-underscore-dangle
      this.skillsArray = temp.data.map(obj => ({ text: obj.name, value: obj.name }));
    },
  },
  async mounted() {
    const temp = await api.getCategories();
    // eslint-disable-next-line no-underscore-dangle
    this.categriesArray = temp.data.map(obj => ({ text: obj.name, value: obj.name, id: obj._id }));
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

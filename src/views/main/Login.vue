<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <v-card color="white" width="400" height="550" class="center-flex pa-6 rounded-lg">
          <v-form ref="loginform" v-model="valid">
            <v-row
              no-gutters
              justify="center"
              align="center"
              class="text-h2 font-weight-bold mb-10"
            >
              <v-col cols="12" class="text-center">Welcome</v-col>
            </v-row>

            <v-row no-gutters justify="center" align="center" class="px-5 text-h4">
              <v-col cols="12">
                <v-text-field
                  outlined
                  label="ُEmail"
                  v-model="email"
                  required
                  :rules="[rules.required, rules.email]"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  outlined
                  label="Password"
                  required
                  v-model="password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required]"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                ></v-text-field
              ></v-col>
            </v-row>

            <v-row justify="center" align="center" class="px-5">
              <v-col cols="12">
                <v-btn
                  @click="submitForm"
                  width="100%"
                  rounded
                  color="success"
                  class="text-h4 text-none"
                  >Login</v-btn
                >
              </v-col>
            </v-row>

            <v-row class="px-5">
              <v-col cols="12" class="text-center">
                <router-link to="/register" style="text-decoration:none"
                  >Don’t have an account? Sign Up</router-link
                >
              </v-col>
            </v-row>
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
      valid: true,
      showPassword: false,
      password: '',
      email: '',
      rules: {
        required: value => !!value || 'Required.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Not a valid Email';
        },
      },
      sendRequest: false,
    };
  },
  methods: {
    submitForm() {
      // Validate Input
      if (!this.$refs.loginform.validate()) return;

      // Disable the button
      this.sendRequest = true;

      // send the request

      // Renable the button
      this.sendRequest = false;
      this.$refs.loginform.reset();

      // Display success and route to home
      this.$store.state.snackbarMessage = 'Welcome Back to Our Website';
      this.$store.state.snackbar = true;
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.center-flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

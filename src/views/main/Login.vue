<template>
  <v-app
    ><v-main>
      <v-container class="fill-height">
        <v-row justify="center">
          <v-col cols="auto">
            <v-card color="white" width="400" height="550" class="center-flex pa-6 rounded-lg">
              <v-form>
                <v-row
                  no-gutters
                  justify="center"
                  align="center"
                  class="text-h2 font-weight-bold mb-5"
                >
                  <v-col cols="12" class="text-center">Welcome</v-col>
                </v-row>

                <v-row no-gutters justify="center" align="center" class="px-5 text-h4">
                  <v-col cols="12"><v-text-field placeholder="Username"></v-text-field></v-col>
                  <v-col cols="12">
                    <v-text-field placeholder="Password" type="password"></v-text-field
                  ></v-col>
                </v-row>

                <v-row justify="center" align="center" class="px-5">
                  <v-col cols="12">
                    <v-btn width="100%" rounded color="success" class="text-h4 text-none"
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
    </v-main></v-app
  >
</template>

<script>
export default {};
</script>

<style scoped>
.center-flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

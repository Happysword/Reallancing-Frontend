<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
        <v-card color="white" width="450" height="500" class="center-flex pa-5">
          <v-form>
            <v-row no-gutters justify="center" align="center" class="text-h2 font-weight-black">
              <v-col cols="12" class="text-center">Welcome</v-col>
            </v-row>

            <v-row no-gutters justify="center" align="center" class="pa-5 text-h4">
              <v-col cols="12"><v-text-field placeholder="Username"></v-text-field></v-col>
              <v-col cols="12">
                <v-text-field placeholder="Password" type="password"></v-text-field
              ></v-col>
            </v-row>

            <v-row no-gutters justify="center" align="center" class="pa-5">
              <v-btn width="100%" rounded color="success" class="text-h4 text-none"
                >Login</v-btn
              >
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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

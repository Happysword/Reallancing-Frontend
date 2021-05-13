<template>
  <v-card color="secondbackground" :to="'/jobs/' + _id">
    <v-card-title class="mx-5 pa-4 headline font-weight-medium">
      {{ headline }}
    </v-card-title>
    <v-divider></v-divider>
    <div class="pa-4">
      <v-card-title class="primary--text">
        {{ category }}
      </v-card-title>
      <v-card-text>
        {{ description }}
      </v-card-text>
    </div>
    <v-divider></v-divider>
    <v-container>
      <v-row class="pa-4">
        <v-col cols="6" md="4">
          <v-container>
            <v-row>
              <v-col cols="2">
                <v-icon>mdi-timer</v-icon>
              </v-col>
              <v-col cols="8" class="font-weight-bold">
                {{ minHourlyRate }}LE-{{ maxHourlyRate }}LE
                <v-card-subtitle class="ma-0 pa-0 caption">Hourly</v-card-subtitle>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="6" md="4">
          <v-container>
            <v-row>
              <v-col cols="2">
                <v-icon>mdi-calendar-clock</v-icon>
              </v-col>
              <v-col cols="8" class="font-weight-bold">
                {{ duration }}
                <v-card-subtitle class="ma-0 pa-0 caption">Project Length</v-card-subtitle>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="6" md="4">
          <v-container>
            <v-row>
              <v-col cols="2">
                <v-icon>mdi-head-cog</v-icon>
              </v-col>
              <v-col cols="8" class="font-weight-bold">
                {{ experience }}
                <v-card-subtitle class="ma-0 pa-0 caption">Experience</v-card-subtitle>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <div class="pa-4">
      <v-card-title>
        Skills and Expertise
      </v-card-title>
      <div class="pa-3">
        <v-chip v-for="skill in skills" :key="skill" class="ma-2">{{ skill }}</v-chip>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    headline: String,
    category: String,
    description: String,
    minHourlyRate: Number,
    maxHourlyRate: Number,
    duration: String,
    experience: String,
    skills: Array,
    _id: String,
  },
};
</script>

<style></style>

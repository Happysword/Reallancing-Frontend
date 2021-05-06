<template>
  <div>
    <v-container>
      <h1 class="display-3 font-weight-medium ma-3">Job details</h1>
      <v-row>
        <v-col cols="12" md="8">
          <v-card color="secondbackground">
            <v-card-title class="mx-5 pa-4 headline font-weight-medium">
              Unity Multiplayer Websocket server client code expert needed for 2d game.
            </v-card-title>
            <v-divider></v-divider>
            <div class="pa-4">
              <v-card-title class="primary--text">
                Game Development
              </v-card-title>
              <v-card-text>
                Need help migrating current multiplayer game from google cloud to another hosting
                server called akash.network. But their requirements are that the unity game be
                packaged into a docker container/image. Simple tutorial below.
                https://dev.to/tomowatt/running-an-unity-webgl-game-within-docker-5039 Its a 2D,
                5-player multiplayer webgl game, currently uses custom websocket server/client code
                and works on google cloud. I need a freelancer who can work with me on discord to
                get this going.
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
                        $60.00-$65.00
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
                        Less than a month
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
                        Expert
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
                <v-chip v-for="(n, index) in 5" :key="index" class="ma-2">Test</v-chip>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6" md="4">
          <h1 class="display-3 font-weight-medium ma-5">test2</h1>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>

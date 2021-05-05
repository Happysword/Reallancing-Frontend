<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary>
      <!--  -->
    </v-navigation-drawer>
    <v-app-bar app color="white" flat height="65">
      <v-container class="fill-height pa-0">
        <v-row no-gutters justify="space-between" align="center">
          <v-col
            :class="{
              'col-auto': $vuetify.breakpoint.mdAndUp,
              'col-4': $vuetify.breakpoint.sm,
              'col-2': $vuetify.breakpoint.xs,
              'pa-1': $vuetify.breakpoint.smAndDown,
            }"
            v-if="$vuetify.breakpoint.smAndDown"
          >
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          </v-col>
          <v-col
            :class="{
              'col-auto': $vuetify.breakpoint.mdAndUp,
              'col-4': $vuetify.breakpoint.smAndDown,
              'pa-1': $vuetify.breakpoint.smAndDown,
            }"
          >
            <v-avatar size="60" tile>
              <v-img height="45" src="@/assets/logo.png"></v-img>
            </v-avatar>
          </v-col>

          <v-col v-if="!$vuetify.breakpoint.smAndDown" class="pa-0 col-auto">
            <v-btn
              v-for="(link, i) in links"
              :key="i"
              text
              tile
              class="text-h5"
              height="65"
              width="120"
              color="grey darken-1"
              :to="link.to"
            >
              {{ link.title }}
            </v-btn>
          </v-col>

          <v-col
            :class="{
              'col-auto': $vuetify.breakpoint.mdAndUp,
              'col-4': $vuetify.breakpoint.smAndDown,
              'col-6': $vuetify.breakpoint.xs,
              'pa-1': $vuetify.breakpoint.smAndDown,
            }"
          >
            <v-responsive max-width="260">
              <v-text-field
                append-icon="mdi-magnify"
                dense
                flat
                hide-details
                rounded
                solo-inverted
              ></v-text-field>
            </v-responsive>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        title: 'Home',
        to: '/',
      },
      {
        title: 'Admin',
        to: '/admin',
      },
      {
        title: 'Register',
        to: '/register',
      },
      {
        title: 'Login',
        to: '/login',
      },
    ],
    drawer: false,
  }),
};
</script>

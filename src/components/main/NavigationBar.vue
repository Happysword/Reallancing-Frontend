<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary color="topbar">
      <!--  -->
    </v-navigation-drawer>
    <v-app-bar app color="topbar" flat height="70">
      <v-container class="fill-height pa-0">
        <v-row no-gutters justify="space-between" align="center">
          <v-col
            :class="{
              'col-auto': $vuetify.breakpoint.mdAndUp,
              'col-4': $vuetify.breakpoint.sm,
              'col-2': $vuetify.breakpoint.xs,
            }"
            v-if="$vuetify.breakpoint.smAndDown"
          >
            <v-btn icon @click="drawer = !drawer" text color="topbar"
              ><v-icon color="white">mdi-menu</v-icon></v-btn
            >
          </v-col>
          <v-col
            :class="{
              'col-auto': $vuetify.breakpoint.mdAndUp,
              'col-2': $vuetify.breakpoint.smAndDown,
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
              height="70"
              width="120"
              color="white"
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
                flat
                hide-details
                background-color="white"
                rounded
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

<template>
  <v-app-bar id="app-bar" absolute app color="transparent" flat height="75">
    <v-btn class="mr-3" elevation="1" fab small @click="setDrawer(!drawer)">
      <v-icon v-if="value">
        mdi-view-quilt
      </v-icon>

      <v-icon v-else>
        mdi-dots-vertical
      </v-icon>
    </v-btn>

    <v-toolbar-title class="hidden-sm-and-down font-weight-light" v-text="$route.name" />

    <v-spacer />

    <div class="mx-3" />

    <v-btn class="ml-2" min-width="0" exact text @click="logOut">
      <v-icon>mdi-login-variant</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
// Utilities
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'DashboardCoreAppBar',

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapState(['drawer']),
  },

  methods: {
    ...mapMutations({
      setDrawer: 'SET_DRAWER',
    }),
    logOut() {
      localStorage.removeItem('userData');
      localStorage.removeItem('userToken');
      this.$store.state.currentUser = null;
      if (this.$route.name !== 'Home') {
        this.$router.push('/');
      }
    },
  },
};
</script>

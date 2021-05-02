<template>
  <v-main>
    <v-fade-transition mode="out-in">
      <router-view></router-view>
    </v-fade-transition>

    <dashboard-core-footer />
  </v-main>
</template>

<script>
export default {
  name: 'DashboardCoreView',

  components: {
    DashboardCoreFooter: () => import('./Footer'),
  },
};
</script>

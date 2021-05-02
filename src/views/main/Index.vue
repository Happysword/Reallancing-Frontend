<template>
  <v-app>
    <NavigationBar />
    <v-main class="grey lighten-3">
      <v-fade-transition mode="out-in" :appear="true" :duration="200">
        <router-view></router-view>
      </v-fade-transition>
    </v-main>
    <DashboardCoreFooter class="grey lighten-3" />
  </v-app>
</template>

<script>
import NavigationBar from '@/components/main/NavigationBar.vue';

export default {
  components: {
    NavigationBar,
    DashboardCoreFooter: () => import('@/views/dashboard/components/core/Footer'),
  },
  data: () => ({}),
};
</script>

<template>
  <v-app dark>
    <NavigationBar />
    <v-main class="background">
      <v-fade-transition mode="out-in" :appear="true" :duration="200">
        <router-view></router-view>
      </v-fade-transition>
      <!-- SnackBar to show at success of fail -->
      <v-snackbar
        :value="true"
        absolute
        centered
        top
        color="deep-purple accent-4"
        elevation="24"
        v-model="$store.state.snackbar"
        :timeout="3000"
      >
        {{ $store.state.snackbarMessage }}
      </v-snackbar>
    </v-main>
    <DashboardCoreFooter class="grey lighten-4" />
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

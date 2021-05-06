<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :src="barImage"
    mobile-breakpoint="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img :gradient="`to bottom, ${barColor}`" v-bind="props" />
    </template>

    <v-divider class="mb-1" />

    <v-list dense nav style="list-style:none" class="mt-3 mb-3">
      <li class="text-center">
        <v-avatar class="align-self-center" color="white" height="100" width="110">
          <v-img src="@/assets/Reallancing_Black.png" height="80" />
        </v-avatar>
      </li>
      <li class="text-center text-h3 mt-3">
        Admin Panel
      </li>
    </v-list>

    <v-divider class="mb-2" />

    <v-list expand nav>
      <div />

      <template v-for="(item, i) in computedItems">
        <base-item :key="`item-${i}`" :item="item" />
      </template>

      <div />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapState } from 'vuex';
import baseItem from '@/components/base/Item.vue';

export default {
  name: 'DashboardCoreDrawer',

  components: {
    baseItem,
  },
  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    items: [
      {
        icon: 'mdi-view-dashboard',
        title: 'Dashboard',
        to: '/admin',
      },
      {
        icon: 'mdi-account',
        title: 'User Profile',
        to: '/admin/pages/user',
      },
    ],
  }),

  computed: {
    ...mapState(['barColor', 'barImage']),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit('SET_DRAWER', val);
      },
    },
    computedItems() {
      return this.items.map(this.mapItem);
    },
    profile() {
      return {
        avatar: true,
        title: 'Admin Panel',
      };
    },
  },

  methods: {
    mapItem(item) {
      return {
        ...item,
        children: item.children ? item.children.map(this.mapItem) : undefined,
      };
    },
  },
};
</script>

<style lang="sass">
@import '~vuetify/src/styles/tools/_rtl.sass'

#core-navigation-drawer
  .v-list-group__header.v-list-item--active:before
    opacity: .24

  .v-list-item
    &__icon--text,
    &__icon:first-child
      justify-content: center
      text-align: center
      width: 20px

      +ltr()
        margin-right: 24px
        margin-left: 12px !important

      +rtl()
        margin-left: 24px
        margin-right: 12px !important

  .v-list--dense
    .v-list-item
      &__icon--text,
      &__icon:first-child
        margin-top: 10px

  .v-list-group--sub-group
    .v-list-item
      +ltr()
        padding-left: 8px

      +rtl()
        padding-right: 8px

    .v-list-group__header
      +ltr()
        padding-right: 0

      +rtl()
        padding-right: 0

      .v-list-item__icon--text
        margin-top: 19px
        order: 0

      .v-list-group__header__prepend-icon
        order: 2

        +ltr()
          margin-right: 8px

        +rtl()
          margin-left: 8px
</style>

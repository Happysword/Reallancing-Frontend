<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12">
        <base-material-card color="primary" class="px-5 py-3">
          <template v-slot:heading>
            <div class="text-h3 font-weight-medium">
              Users
            </div>

            <div class="text-subtitle-1 font-weight-light">
              Current Users using our Service
            </div>
          </template>
          <v-card-text>
            <v-data-table :headers="headers" :items="items" />
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import baseMaterialCard from '@/components/base/MaterialCard.vue';
import api from '@/api';

export default {
  name: 'DashboardDashboard',
  components: {
    baseMaterialCard,
  },

  data() {
    return {
      headers: [
        {
          sortable: true,
          text: 'Name',
          value: 'name',
        },
        {
          sortable: false,
          text: 'Email',
          value: 'email',
        },
        {
          sortable: true,
          text: 'Type',
          value: 'type',
        },
        {
          sortable: true,
          text: 'Rating',
          value: 'rating',
        },
      ],
      items: [],
    };
  },

  methods: {
    complete(index) {
      this.list[index] = !this.list[index];
    },
  },

  async mounted() {
    const AllUsers = await api.getUsers();
    if (AllUsers.status === 'success') {
      this.items = AllUsers.data.map(obj => ({
        name: `${obj.firstName} ${obj.lastName}`,
        ...obj,
      }));
    }
  },
};
</script>

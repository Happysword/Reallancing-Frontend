<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12">
        <base-material-card color="primary" class="px-5 py-3">
          <template v-slot:heading>
            <div class="text-h3 font-weight-medium">
              Jobs
            </div>

            <div class="text-subtitle-1 font-weight-light">
              Created Jobs by Our Clients
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
          text: 'Headline',
          value: 'headline',
        },
        {
          sortable: false,
          text: 'Category',
          value: 'category',
        },
        {
          sortable: true,
          text: 'Creation Date',
          value: 'date',
        },
        {
          sortable: false,
          text: 'Experience',
          value: 'experience',
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
    const AllJobs = await api.getJobs();
    if (AllJobs.status === 'success') {
      this.items = AllJobs.data.map(obj => ({
        date: obj.createdAt.substr(0, obj.createdAt.indexOf('T')),
        ...obj,
      }));
    }
  },
};
</script>

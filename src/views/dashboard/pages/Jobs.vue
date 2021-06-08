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
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <div class="text-center">
              <v-btn
                color="red darken-2"
                rounded
                class="mt-5"
                :disabled="selectedData.length === 0"
                @click="deleteData"
              >
                Delete</v-btn
              >
            </div>
          </template>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="items"
              :search="search"
              :loading="items.length === 0"
              show-select
              item-key="_id"
              v-model="selectedData"
              :single-select="true"
            />
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
      search: '',
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
      selectedData: [],
    };
  },

  methods: {
    complete(index) {
      this.list[index] = !this.list[index];
    },
    async deleteData() {
      // Set items to empty to create load UI
      this.items = [];

      // Delete the Selected Data
      // eslint-disable-next-line no-underscore-dangle
      await api.deleteJob(this.selectedData[0]._id);
      this.selectedData = [];

      // Read the Data Again
      await this.getJobs();
    },
    async getJobs() {
      const AllJobs = await api.getJobs();
      if (AllJobs.status === 'success') {
        this.items = AllJobs.data.map(obj => ({
          date: obj.createdAt.substr(0, obj.createdAt.indexOf('T')),
          ...obj,
        }));
      }
    },
  },

  async mounted() {
    await this.getJobs();
  },
};
</script>

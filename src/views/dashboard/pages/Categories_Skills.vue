<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="6">
        <base-material-card color="primary" class="px-5 py-3">
          <template v-slot:heading>
            <div class="text-h3 font-weight-medium">
              Categories
            </div>

            <div class="text-subtitle-1 font-weight-light">
              Available Categories For Our Users
            </div>
          </template>
          <v-card-text>
            <v-data-table :headers="Catheaders" :items="Catitems" />
          </v-card-text>
        </base-material-card>
      </v-col>
      <v-col cols="12" md="6">
        <base-material-card color="primary" class="px-5 py-3">
          <template v-slot:heading>
            <div class="text-h3 font-weight-medium">
              Skills
            </div>

            <div class="text-subtitle-1 font-weight-light">
              Available Skills For Our Users
            </div>
          </template>
          <v-card-text>
            <v-data-table :headers="Skillsheaders" :items="Skillitems" />
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
      Skillsheaders: [
        {
          sortable: true,
          text: 'Name',
          value: 'name',
        },
        {
          sortable: false,
          text: 'Categories',
          value: 'newcategories',
        },
      ],
      Catheaders: [
        {
          sortable: true,
          text: 'Name',
          value: 'name',
        },
      ],
      Catitems: [],
      Skillitems: [],
    };
  },

  methods: {
    complete(index) {
      this.list[index] = !this.list[index];
    },
    arrayToString(array) {
      return array.map(obj => obj.name);
    },
  },

  async mounted() {
    const AllCategs = await api.getCategories();
    const AllSkills = await api.getSkills();
    if (AllCategs.status === 'success' && AllSkills.status === 'success') {
      this.Catitems = AllCategs.data;
      this.Skillitems = AllSkills.data.map(obj => ({
        newcategories: this.arrayToString(obj.categories),
        ...obj,
      }));
    }
  },
};
</script>

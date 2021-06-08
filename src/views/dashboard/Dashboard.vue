<template>
  <v-container id="dashboard" fluid tag="section">
    <Loading v-if="loading" />
    <v-row v-else>
      <v-col cols="12" lg="4">
        <base-material-chart-card
          :data="ProposalChart.data"
          :options="ProposalChart.options"
          :responsive-options="ProposalChart.responsiveOptions"
          color="info"
          hover-reveal
          type="Bar"
        >
          <h4 class="card-title font-weight-light mt-2 ml-2">
            Proposals
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            Proposals in Months
          </p>
        </base-material-chart-card>
      </v-col>
      <v-col cols="12" lg="4">
        <base-material-chart-card
          :data="UserChart.data"
          :options="UserChart.options"
          :responsive-options="UserChart.responsiveOptions"
          color="primary"
          hover-reveal
          type="Bar"
        >
          <h4 class="card-title font-weight-light mt-2 ml-2">
            Users
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            User Registration in Months
          </p>
        </base-material-chart-card>
      </v-col>
      <v-col cols="12" lg="4">
        <base-material-chart-card
          :data="JobChart.data"
          :options="JobChart.options"
          :responsive-options="JobChart.responsiveOptions"
          color="pink"
          hover-reveal
          type="Bar"
        >
          <h4 class="card-title font-weight-light mt-2 ml-2">
            Jobs
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            Jobs Creation in Months
          </p>
        </base-material-chart-card>
      </v-col>

      <v-col cols="12" sm="6" lg="4">
        <base-material-stats-card
          color="info"
          icon="mdi-account-cash"
          title="Clients"
          :value="numberOfClients"
          sub-icon="mdi-information-outline"
          sub-text="Total Number of Clients"
        />
      </v-col>

      <v-col cols="12" sm="6" lg="4">
        <base-material-stats-card
          color="primary"
          icon="mdi-account-clock"
          title="Freelancers"
          :value="numberOfFreelancers"
          sub-icon="mdi-information-outline"
          sub-text="Total Number of Freelancers"
        />
      </v-col>

      <v-col cols="12" sm="6" lg="4">
        <base-material-stats-card
          color="pink"
          icon="mdi-hammer-wrench"
          title="Jobs"
          :value="numberOfJobs"
          sub-icon="mdi-information-outline"
          sub-text="Total Number of Jobs"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import baseMaterialChartCard from '@/components/base/MaterialChartCard.vue';
import baseMaterialStatsCard from '@/components/base/MaterialStatsCard.vue';
import Loading from '@/components/Loading.vue';
import api from '@/api';

export default {
  name: 'DashboardDashboard',
  components: {
    baseMaterialStatsCard,
    baseMaterialChartCard,
    Loading,
  },

  data() {
    return {
      ProposalChart: {
        data: {
          labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]],
        },
        options: {
          axisX: {
            showGrid: false,
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0,
          },
        },
        responsiveOptions: [
          [
            'screen and (max-width: 640px)',
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: value => value[0],
              },
            },
          ],
        ],
      },
      UserChart: {
        data: {
          labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]],
        },
        options: {
          axisX: {
            showGrid: false,
          },
          low: 0,
          high: 100,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0,
          },
        },
        responsiveOptions: [
          [
            'screen and (max-width: 640px)',
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: value => value[0],
              },
            },
          ],
        ],
      },
      JobChart: {
        data: {
          labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]],
        },
        options: {
          axisX: {
            showGrid: false,
          },
          low: 0,
          high: 100,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0,
          },
        },
        responsiveOptions: [
          [
            'screen and (max-width: 640px)',
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: value => value[0],
              },
            },
          ],
        ],
      },
      numberOfFreelancers: '0',
      numberOfClients: '0',
      numberOfJobs: '0',
      loading: true,
    };
  },

  methods: {
    complete(index) {
      this.list[index] = !this.list[index];
    },
  },
  async mounted() {
    const userStats = await api.getUsersStats();
    // const FreelancerStats = await api.getFreelancerStats();
    const JobsStats = await api.getJobsStats();
    const ProposalsMonthlyStats = await api.getProposalsMonthly();
    const JobsMonthlyStats = await api.getJobsMonthly();
    const UsersMonthlyStats = await api.getUsersMonthly();

    // Set the Data
    userStats.data.stats.forEach(element => {
      // eslint-disable-next-line no-underscore-dangle
      if (element._id === 'client') {
        this.numberOfClients = String(element.numUsers);
        // eslint-disable-next-line no-underscore-dangle
      } else if (element._id === 'freelancer') {
        this.numberOfFreelancers = String(element.numUsers);
      }
    });
    this.numberOfJobs = String(JobsStats.data.stats[0].numJobs);

    // Graph Data
    this.ProposalChart.data.series[0] = ProposalsMonthlyStats.data.plan.map(
      element => element.total,
    );
    this.ProposalChart.options.high = Math.max(...this.ProposalChart.data.series[0]) + 5;
    this.UserChart.data.series[0] = JobsMonthlyStats.data.plan.map(element => element.total);
    this.UserChart.options.high = Math.max(...this.UserChart.data.series[0]) + 5;
    this.JobChart.data.series[0] = UsersMonthlyStats.data.plan.map(element => element.total);
    this.JobChart.options.high = Math.max(...this.JobChart.data.series[0]) + 5;
    // Remove Loading Screen
    this.loading = false;
  },
};
</script>

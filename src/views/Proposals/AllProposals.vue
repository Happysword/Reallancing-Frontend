<template>
  <div>
    <Loading v-if="loading == false"></Loading>
    <v-container v-if="loading == true">
      <v-row class="ma-2 pt-3 display-1">
        <h1 class="display-3 font-weight-medium">Submitted Proposals</h1>
      </v-row>
      <v-row>
        <v-col cols="12" md="12" sm="12" v-if="proposals.length">
          <proposal-card
            v-for="proposal in proposals"
            :key="proposal._id"
            :proposal="proposal"
          ></proposal-card>
        </v-col>
      </v-row>
      <div class="text-center" v-if="!proposals.length">
        <h1 class="display-4 font-weight-medium my-10">No Proposals Found</h1>
      </div>
    </v-container>
  </div>
</template>

<script>
import ProposalCard from '../../components/proposal/ProposalCard.vue';
import Loading from '../../components/Loading.vue';
import api from '../../api/index';

export default {
  data() {
    return {
      proposals: [],
      loading: false,
    };
  },
  components: { ProposalCard, Loading },
  mounted() {
    this.loading = false;
    this.fetchJobProposals();
  },
  methods: {
    fetchJobProposals() {
      api.fetchJobProposals(this.$route.params.id).then((response) => {
        this.proposals = response.data;
        this.loading = true;
      });
    },
  },
};
</script>

<style></style>

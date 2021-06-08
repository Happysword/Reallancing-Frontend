<template>
  <div>
    <Loading v-if="loading == false"></Loading>
    <v-container v-if="loading == true">
      <v-row>
        <v-col cols="12" md="12" sm="12">
          <v-card color="secondbackground">
            <v-row>
              <v-container fluid fill-height>
                <v-col cols="12" md="8" sm="12">
                  <v-row>
                    <v-col cols="3" md="2" sm="2">
                      <v-avatar
                        color="primary"
                        size="62"
                        alignjustify="center"
                        align="center"
                      >
                        <v-img
                          src="https://picsum.photos/id/11/500/300"
                        ></v-img>
                      </v-avatar>
                    </v-col>
                    <v-col cols="9" md="10" sm="10">
                      <div class="my-2 mx-1">
                        <v-row>
                          <p class="headline">
                            {{ user.firstName }}
                            {{ user.lastName }}
                          </p>
                        </v-row>
                        <v-row class="my-0">
                          <v-icon color="primary">mdi-star</v-icon>
                          <div class="body-1 pr-3">{{ user.rating }}</div>
                          <v-icon color="gray">mdi-map-marker</v-icon>
                          <div class="body-1 font-weight-medium">
                            {{ user.location }}
                          </div>
                        </v-row>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-container>
            </v-row>
            <v-divider> </v-divider>
            <v-row class="ma-0" v-if="user.type == 'freelancer'">
              <v-col cols="12" md="3" sm="5" class="pa-0">
                <div class="px-3 pt-3">
                  <strong class="subtitle-1 font-weight-medium"
                    >View Profile</strong
                  >
                  <p class="body-1 pt-1">
                    <v-icon class="ml-2 mt-n1" color="primary"
                      >mdi-check-outline</v-icon
                    >
                    All Work
                  </p>
                </div>
                <v-divider> </v-divider>
                <div class="pa-3">
                  <h3 class="display-2 font-weight-medium">Category</h3>
                  <v-chip class="ma-1 white--text" color="topbar">
                    <span class="body-2">{{
                      user.freelancerInfo.category
                    }}</span>
                  </v-chip>
                </div>
                <v-divider> </v-divider>
                <div class="pa-3">
                  <h3 class="display-2 font-weight-medium">Skills</h3>
                  <template v-for="(skill, i) in user.freelancerInfo.skills">
                    <v-chip :key="i" class="ma-1 white--text" color="topbar">
                      <span class="body-2">{{ skill }}</span>
                    </v-chip>
                  </template>
                </div>
                <v-divider> </v-divider>
                <div class="pa-3">
                  <h3 class="display-2 font-weight-medium">Experience Level</h3>
                  <v-chip class="ma-1 white--text" color="topbar">
                    <span class="body-2">{{
                      user.freelancerInfo.experienceLevel
                    }}</span>
                  </v-chip>
                </div>
                <v-divider> </v-divider>
                <div
                  class="pa-3"
                  v-if="user.freelancerInfo.languages != undefined"
                >
                  <h3 class="display-2 font-weight-medium">Languages</h3>
                  <template
                    v-for="(language, i) in user.freelancerInfo.languages"
                  >
                    <v-chip :key="i" class="ma-1 white--text" color="topbar">
                      <span class="body-2"
                        >{{ language.name }} | {{ language.level }}</span
                      >
                    </v-chip>
                  </template>
                </div>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="12" md="9" sm="7" class="px-0">
                <div class="px-5">
                  <v-row class="pt-3 px-3">
                    <h2 class="display-3">
                      {{ user.freelancerInfo.title }}
                    </h2>
                    <v-spacer></v-spacer>
                    <p class="display-2 font-weight-medium pr-4 pt-1">
                      ${{ user.freelancerInfo.hourlyRate }}/hr
                    </p>
                  </v-row>
                  <p class="mt-n5 pr-4" align="end">Hourly Rate</p>
                  <li class="display-1 px-8 pb-8 text-justify">
                    {{ user.freelancerInfo.overview }}
                  </li>
                </div>
                <v-divider class="mx-0"> </v-divider>
                <div
                  class="pa-3"
                  v-if="user.freelancerInfo.education != undefined"
                >
                  <h2 class="display-3 pa-3">Education</h2>
                  <div>
                    <ul class="headline px-8 pb-2 font-weight-medium">
                      {{
                        user.freelancerInfo.education.university
                      }}
                    </ul>
                    <li class="display-1 px-8">
                      <strong>Graduation Year: </strong>
                      {{ user.freelancerInfo.education.graduation }}
                    </li>
                  </div>
                </div>
                <v-divider class="mx-0"> </v-divider>
                <div
                  class="pa-3"
                  v-if="user.freelancerInfo.workExperience != undefined"
                >
                  <h2 class="display-3 pa-3">Work History</h2>
                  <template
                    v-for="(work, i) in user.freelancerInfo.workExperience"
                  >
                    <div :key="i">
                      <ul class="headline px-8 pb-2 font-weight-medium">
                        {{
                          work.jobTitle
                        }}
                      </ul>
                      <li class="display-1 px-8">
                        <strong>Company: </strong> {{ work.company }}
                      </li>
                      <li class="display-1 px-8">
                        <strong>Duration: </strong>
                        {{ work.durationInMonths }} months
                      </li>
                    </div>
                  </template>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Loading from '../../components/Loading.vue';
import api from '../../api/index';

export default {
  data() {
    return {
      loading: false,
      user: {
        rating: 1.4,
        _id: '609c5048c6393d1f08471138',
        firstName: 'Ahmed',
        lastName: 'Ali',
        email: 'ali11@gmail.com',
        type: 'freelancer',
        location: 'Giza',
        freelancerInfo: {
          skills: ['cook', 'washing'],
          _id: '609c5049c6393d1f08471139',
          title: 'Front-end Developer',
          overview:
            'Front-end Developer using React framework Front-end Developer using React framework',
          hourlyRate: 30,
          education: {
            university: 'Cairo University',
            graduation: 2012,
          },
          workExperience: [
            {
              _id: '609c5049c6393d1f0847113a',
              company: "Bika's VIP",
              jobTitle: 'Office Boy',
              durationInMonths: 2,
            },
          ],
          experienceLevel: 'beginner',
          category: 'Freelancing',
          languages: [
            {
              _id: '609c5049c6393d1f0847113b',
              name: 'Arabic',
              level: 'basic',
            },
          ],
          userInfo: '609c5048c6393d1f08471138',
          __v: 0,
        },
      },
      currUser: JSON.parse(localStorage.getItem('userData')),
    };
  },
  components: { Loading },
  mounted() {
    this.loading = false;
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      api.fetchUserProfile(this.$route.params.id).then((response) => {
        console.log(response.data);
        this.user = response.data;
        this.loading = true;
      });
    },
  },
  beforeRouteEnter(to, from, next) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData == null) {
      next('/');
    } else {
      next();
    }
  },
};
</script>

<style scoped>
a:hover {
  color: #3d8040;
}
#greenbtn:hover {
  background-color: #316433 !important;
}
#whitebtn:hover {
  background-color: #e2e2e2 !important;
}
.v-divider {
  border-color: rgba(187, 187, 187, 0.678);
}
</style>

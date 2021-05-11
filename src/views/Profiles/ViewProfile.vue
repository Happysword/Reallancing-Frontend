<template>
  <div>
    <v-container>
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
                          <div class="body-1 px-1">
                            {{ user.rating }}
                          </div>
                        </v-row>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="12" md="2" sm="12" xs="12">
                  <v-btn
                    rounded
                    color="white"
                    class="ma-2"
                    width="100%"
                    id="whitebtn"
                  >
                    Hire
                  </v-btn>
                </v-col>
                <v-col cols="12" md="2" sm="12">
                  <v-btn
                    rounded
                    color="primary"
                    class="ma-2"
                    width="100%"
                    id="greenbtn"
                  >
                    Invite
                  </v-btn>
                </v-col>
              </v-container>
            </v-row>
            <v-divider> </v-divider>
            <v-row class="ma-0">
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
                  <h3 class="display-2 font-weight-medium">Skills</h3>
                  <v-chip class="ma-1 white--text" color="topbar">
                    <span class="body-2">Hard Work</span>
                  </v-chip>
                  <v-chip class="ma-1 white--text" color="topbar">
                    <span class="body-2">Presentation Skills</span>
                  </v-chip>
                  <v-chip class="ma-1 white--text" color="topbar">
                    <span class="body-2">Team Work</span>
                  </v-chip>
                </div>
                <!-- <v-divider> </v-divider>
                <div class="pa-3">
                  <strong class="subtitle-1">Get a second opinion</strong>
                  <br />
                  <span class="body-1 font-weight-light">
                    Invite coworkers to help you review freelancers
                  </span>
                </div> -->
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="12" md="9" sm="7" class="px-0">
                <div class="px-5">
                  <v-row class="pt-3 px-3">
                    <p class="headline pt-1 font-weight-medium">
                      Full Stack Developer
                    </p>
                    <v-spacer></v-spacer>
                    <p class="display-2 font-weight-medium pr-4">$555/hr</p>
                  </v-row>
                  <p class="mt-n5 pr-4" align="end">Hourly Rate</p>
                  <p class="body-1 px-8 text-justify">
                    I have more than 6+ years of experience in Web applications.
                    I specialize in developing high-quality UI/UX interfaces.
                    I'm highly skilled in developing web apps. I am highly
                    experienced in HTML, CSS, REACTJS, Redux, Hooks, Javascript,
                    Bootstrap, also have worked with almost all UI libraries. I
                    also have expertise in designing and developing websites
                    from scratch using PSD.
                  </p>
                </div>
                <v-divider class="mx-0"> </v-divider>
                <div class="pa-3">
                  <h2 class="display-2 font-weight-bold pa-3">Work History</h2>
                  <p class="body-1 px-8 text-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tempora iusto cum vel ad adipisci eos suscipit!
                    Exercitationem ullam eum eligendi mollitia vitae soluta
                    error velit id quis. Ad, eaque autem!
                  </p>
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
// import api from '../../api/index';

export default {
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      //   api.fetchProposal(this.$route.params.id).then((response) => {
      //     console.log(response.data);
      //     this.user = response.data;
      //   });
      this.user = {
        rating: 1.4,
        _id: '6096b121a88c935060e80262',
        firstName: 'Ahmaa',
        lastName: 'Ali',
        email: 'ali5@gmail.com',
        type: 'freelancer',
        __v: 0,
        id: '6096b121a88c935060e80262',
      };
    },
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

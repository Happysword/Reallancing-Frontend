<template>
  <div style="background-color:white">
    <!-- Hero Container -->
    <v-container fluid class="hero-container white--text">
      <v-container class="new-container">
        <v-row dense align="center">
          <v-col cols="12" class="center-horizontal">
            <h1
              class="font-weight-bold mb-5 text-center"
              :class="{
                'text-h4': $vuetify.breakpoint.xs,
                'text-h3': $vuetify.breakpoint.sm,
                'text-large': $vuetify.breakpoint.mdAndUp,
              }"
            >
              Your New Career Awaits
            </h1>
            <p
              class="mb-10"
              :class="{
                'text-subtitle-1': $vuetify.breakpoint.xs,
                'text-h5': $vuetify.breakpoint.sm,
                'text-h3': $vuetify.breakpoint.mdAndUp,
              }"
            >
              What are you waiting for?
            </p>
            <v-btn
              rounded
              color="white"
              class="font-weight-medium text-none"
              x-large
              :class="{
                'text-subtitle-1': $vuetify.breakpoint.xs,
                'text-h6': $vuetify.breakpoint.sm,
                'text-h5': $vuetify.breakpoint.mdAndUp,
              }"
              outlined
              >Get Started</v-btn
            >
          </v-col>
          <v-col cols="12" class="center-horizontal mt-5"
            ><v-btn color="white" text @click="scrollto('success-section', 'mycourses-section')"
              ><v-icon size="40" color="white">mdi-chevron-triple-down</v-icon></v-btn
            ></v-col
          >
        </v-row>
      </v-container>
    </v-container>

    <!--Join Now Section-->
    <v-container
      id="success-section"
      class="new-container"
      :class="{
        'mb-0': $vuetify.breakpoint.smAndDown,
        'mt-0': $vuetify.breakpoint.smAndDown,
        'pb-5': $vuetify.breakpoint.mdAndUp,
        'pt-5': $vuetify.breakpoint.mdAndUp,
      }"
    >
      <v-row
        class="mt-10 mb-10"
        :class="{
          'mb-1': $vuetify.breakpoint.smAndDown,
          'mt-1': $vuetify.breakpoint.smAndDown,
        }"
      >
        <v-col
          md="6"
          sm="12"
          class="center-vertical"
          :class="{
            'center-horizontal': $vuetify.breakpoint.smAndDown,
            'pr-3': $vuetify.breakpoint.smAndDown,
            'pr-16': $vuetify.breakpoint.mdAndUp,
          }"
        >
          <h2
            class="mb-10 mt-10 font-weight-bold"
            :class="{
              'text-h3': $vuetify.breakpoint.smAndDown,
              'text-center': $vuetify.breakpoint.smAndDown,
              'text-h2': $vuetify.breakpoint.md,
              'text-large': $vuetify.breakpoint.lgAndUp,
            }"
          >
            Join the world's work marketplace
          </h2>
          <p
            class="mb-5 mt-5 font-weight-light"
            :class="{
              'text-subtitle-1': $vuetify.breakpoint.smAndDown,
              'text-center': $vuetify.breakpoint.smAndDown,
              'text-h3': $vuetify.breakpoint.mdAndUp,
            }"
          >
            Find great talent. Build your business. Take your career to the next level.
          </p>
          <v-btn
            x-large
            width="200"
            height="80"
            to="/register"
            color="blue darken-1"
            class="white--text mb-10 text-h4"
            outlined
            :class="{
              'text-subtitle-1': $vuetify.breakpoint.smAndDown,
              'text-center': $vuetify.breakpoint.smAndDown,
            }"
          >
            Join now
          </v-btn>
        </v-col>
        <v-col v-if="$vuetify.breakpoint.mdAndUp" md="6">
          <v-img height="500" src="../../assets/Mountain-succes.png" class="rounded-img"></v-img>
        </v-col>
      </v-row>
    </v-container>

    <!--Goals Section-->
    <v-container fluid class="goals-section pt-10 pb-10">
      <v-container class="new-container">
        <v-row
          justify="center"
          align="center"
          class="mt-3"
          :class="{
            'mb-5': $vuetify.breakpoint.xs,
          }"
        >
          <v-col
            ><h2
              class="text-center font-weight-bold"
              :class="{
                'text-h3': $vuetify.breakpoint.smAndDown,
                'text-large': $vuetify.breakpoint.mdAndUp,
              }"
            >
              Find great work
            </h2></v-col
          >
        </v-row>
        <v-row>
          <v-col md="3" sm="6" cols="12">
            <v-card color="rgb(245, 245, 245)" elevation="0" class="text-center pa-5">
              <v-icon size="60" color="blue lighten-1" class="mb-8"
                >mdi-transit-connection-variant</v-icon
              >
              <h3 class="mb-3 text-h4 font-weight-light">
                Meet clients you’re excited to work with and take your career or business to new
                heights.
              </h3>
            </v-card>
          </v-col>

          <v-col md="3" sm="6" cols="12">
            <v-card color="rgb(245, 245, 245)" elevation="0" class="text-center pa-5">
              <v-icon size="60" color="blue lighten-1" class="mb-8">mdi-yeast</v-icon>
              <h3 class="mb-3 text-h4 font-weight-light">
                Find opportunities for every stage of your freelance career
              </h3>
            </v-card>
          </v-col>

          <v-col md="3" sm="6" cols="12">
            <v-card color="rgb(245, 245, 245)" elevation="0" class="text-center pa-5">
              <v-icon size="60" color="blue lighten-1" class="mb-8">mdi-timetable</v-icon>
              <h3 class="mb-3 text-h4 font-weight-light">
                Control when, where, and how you work
              </h3>
            </v-card>
          </v-col>

          <v-col md="3" sm="6" cols="12">
            <v-card color="rgb(245, 245, 245)" elevation="0" class="text-center pa-5">
              <v-icon size="60" color="blue lighten-1" class="mb-8">mdi-teach</v-icon>
              <h3 class="mb-3 text-h4 font-weight-light">
                Explore different ways to earn
              </h3>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="auto">
            <v-btn
              x-large
              width="200"
              height="80"
              to="/register"
              color="blue darken-1"
              class="white--text text-h4"
              outlined
              :class="{
                'text-subtitle-1': $vuetify.breakpoint.smAndDown,
                'text-center': $vuetify.breakpoint.smAndDown,
              }"
            >
              Find Work Now
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!--Accesible Section-->
    <v-container
      class="new-container"
      :class="{
        'mb-0': $vuetify.breakpoint.smAndDown,
        'mt-0': $vuetify.breakpoint.smAndDown,
        'pb-5': $vuetify.breakpoint.mdAndUp,
        'pt-5': $vuetify.breakpoint.mdAndUp,
      }"
    >
      <v-row
        class="mt-3 mb-3 accessible-section"
        :class="{
          'mb-1': $vuetify.breakpoint.smAndDown,
          'mt-1': $vuetify.breakpoint.smAndDown,
        }"
      >
        <v-col
          :class="{
            'col-12': $vuetify.breakpoint.smAndDown,
            'col-6': $vuetify.breakpoint.mdAndUp,
          }"
        >
          <v-row
            class="circles-container center-horizontally"
            :class="{
              'ma-10': $vuetify.breakpoint.lgAndUp,
            }"
          >
            <div id="circle-one-outer">
              <div id="circle-one-inner" class="center-horizontal text-center">
                <div class="text-h2">10000+</div>
                <div class="text-h4">ُJobs Done</div>
              </div>
            </div>
            <div id="circle-two-outer">
              <div id="circle-two-inner" class="center-horizontal text-center">
                <div class="text-h2">70+</div>
                <div class="text-h4">ُSkills</div>
              </div>
            </div>
            <div id="circle-three-outer">
              <div id="circle-three-inner" class="center-horizontal text-center">
                <div class="text-h2">50+</div>
                <div class="text-h4">Categories</div>
              </div>
            </div>
          </v-row>
        </v-col>
        <v-col
          class="center-vertical"
          :class="{
            'col-12': $vuetify.breakpoint.smAndDown,
            'col-6': $vuetify.breakpoint.mdAndUp,
            'center-horizontal': $vuetify.breakpoint.smAndDown,
            'pa-10': $vuetify.breakpoint.smAndDown,
            'pr-16': $vuetify.breakpoint.mdAndUp,
          }"
        >
          <h2
            class="mb-10 mt-10 font-weight-bold"
            :class="{
              'text-h3': $vuetify.breakpoint.smAndDown,
              'text-center': $vuetify.breakpoint.smAndDown,
              'text-large': $vuetify.breakpoint.mdAndUp,
            }"
          >
            Hire a pro
          </h2>
          <p
            class="text-h3 mb-5 mt-5 font-weight-light"
            :class="{
              'text-h4': $vuetify.breakpoint.smAndDown,
              'text-center': $vuetify.breakpoint.smAndDown,
            }"
          >
            For any kind of Job or Skill, you will find the perfect match through our talents.
          </p>
        </v-col>
      </v-row>
    </v-container>
    <!--Section -->
    <v-container fluid class="courses-container">
      <Loading type="content" v-if="0"></Loading>
      <v-container v-else fill-height class="courses-section new-container">
        <v-row
          class="mt-10 mb-10"
          :class="{
            'mb-1': $vuetify.breakpoint.smAndDown,
            'mt-1': $vuetify.breakpoint.smAndDown,
          }"
        >
          <v-col
            md="6"
            sm="12"
            :class="{
              'center-horizontal': $vuetify.breakpoint.smAndDown,
              'pr-3': $vuetify.breakpoint.smAndDown,
              'pr-16': $vuetify.breakpoint.mdAndUp,
            }"
          >
            <h2
              class="mb-10 mt-10 font-weight-bold"
              :class="{
                'text-h3': $vuetify.breakpoint.smAndDown,
                'text-center': $vuetify.breakpoint.smAndDown,
                'text-h2': $vuetify.breakpoint.md,
                'text-large': $vuetify.breakpoint.lgAndUp,
              }"
            >
              Top Skills
            </h2>
            <p
              class="mb-5 mt-5 font-weight-light"
              :class="{
                'text-subtitle-1': $vuetify.breakpoint.smAndDown,
                'text-center': $vuetify.breakpoint.smAndDown,
                'text-h3': $vuetify.breakpoint.mdAndUp,
              }"
            >
              The best of what we offer in our diverse set of skills
            </p>
            <v-btn
              x-large
              width="200"
              height="80"
              to="/register"
              color="blue darken-1"
              class="white--text mb-10 text-h4"
              outlined
              :class="{
                'text-subtitle-1': $vuetify.breakpoint.smAndDown,
                'text-center': $vuetify.breakpoint.smAndDown,
              }"
            >
              Become one of us
            </v-btn>
          </v-col>
          <v-col
            :class="{
              'col-6': $vuetify.breakpoint.mdAndUp,
              'col-12': $vuetify.breakpoint.smAndDown,
            }"
          >
            <v-row
              class="text-center bluegrey--text"
              :class="{
                'text-h5': $vuetify.breakpoint.smAndDown,
                'text-h3': $vuetify.breakpoint.mdAndUp,
              }"
            >
              <v-col
                :class="{
                  'col-6': $vuetify.breakpoint.mdAndUp,
                  'col-12': $vuetify.breakpoint.smAndDown,
                }"
                v-for="(item, i) in skills"
                :key="i"
              >
                {{ item }}
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue';

export default {
  name: 'Home',
  components: { Loading },
  methods: {
    scrollto(el, secondaryel) {
      const bodyRect = document.body.getBoundingClientRect().top;
      let element = document.getElementById(el);
      if (element == null) element = document.getElementById(secondaryel);
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    },
  },
  computed: {},
  data: () => ({
    skills: [
      'Data Entry Specialists',
      'Video Editors',
      'Data Analyst',
      'Shopify Developer',
      'Ruby on Rails Developer',
      'Android Developer',
      'Bookkeeper',
      'Content Writer',
      'Copywriter',
      'Database Administrator',
      'Data Scientist',
      'Front-End Developer',
      'Game Developer',
      'Graphic Designer',
      'iOS Developer',
      'Java Developer',
      'JavaScript Developer',
      'Logo Designer',
      'Mobile App Developer',
      'PHP Developer',
      'Python Developer',
      'Resume Writer',
      'SEO Expert',
      'Social Media Manager',
      'Software Developer',
      'Software Engineer',
      'Technical Writer',
      'UI Designer',
      'UX Designer',
      'Virtual Assistant',
      'Web Designer',
      'Wordpress Developer',
    ],
  }),
  created() {},
  // beforeRouteEnter(to, from, next) {
  //   if (localStorage.getItem('userData')) {
  //     next({ name: 'feed' });
  //   } else {
  //     next();
  //   }
  // },
};
</script>

<style scoped>
.courses-section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  margin-top: 30px;
}
.courses-container {
  background-color: rgb(245, 245, 245);
}
.hero-container {
  background: url(../../assets/img-home.jpg) center center/cover no-repeat;
  height: calc(100vh - 70px);
  width: 100%;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
  object-fit: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.center-horizontally {
  text-align: center;
  margin: auto;
}
.center-horizontal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.center-vertical {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.text-large {
  font-size: 5.5rem;
  line-height: 5.5rem;
}
.center-horizontally {
  text-align: center;
  margin: auto;
}
.center-horizontal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.center-vertical {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.text-large {
  font-size: 5.5rem;
  line-height: 5.5rem;
}
.goals-section {
  background-color: rgb(245, 245, 245);
}
.circles-container {
  position: relative;
  overflow: hidden;
  height: 400px;
  max-width: 500px;
}
#circle-one-outer {
  position: absolute;
  top: 0;
  left: 50%;
}
#circle-one-inner {
  position: relative;
  left: -50%;
  border: 5px solid #546e7a;
  color: #546e7a;
  font-size: 32px;
  font-weight: 500;
  border-radius: 50%;
  width: 270px;
  height: 270px;
  z-index: 2;
  background-color: #ffffff;
}
#circle-two-outer {
  position: absolute;
  bottom: 0;
  left: 25%;
}
#circle-two-inner {
  position: relative;
  left: -50%;
  border: 5px solid #546e7a;
  color: #546e7a;
  font-size: 26px;
  font-weight: 500;
  border-radius: 50%;
  width: 230px;
  height: 230px;
  z-index: 1;
  background-color: #ffffff;
}
#circle-three-outer {
  position: absolute;
  bottom: 5%;
  left: 75%;
}
#circle-three-inner {
  position: relative;
  left: -50%;
  border: 5px solid #546e7a;
  color: #546e7a;
  font-size: 22px;
  font-weight: 500;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  z-index: 3;
  background-color: #ffffff;
}

@media (min-width: 1904px) {
  .new-container {
    max-width: 1440px;
  }
}
@media (max-width: 600px) {
  .circles-container {
    height: auto;
    max-width: 500px;
    display: flex;
    justify-content: center;
  }
  #circle-one-outer {
    position: static;
    margin-bottom: 5px;
  }
  #circle-one-inner {
    position: static;
    width: 220px;
    height: 220px;
  }
  #circle-two-outer {
    position: static;
    margin-bottom: 5px;
  }
  #circle-two-inner {
    position: static;
    width: 220px;
    height: 220px;
  }
  #circle-three-inner {
    position: static;
    width: 220px;
    height: 220px;
  }
  #circle-three-outer {
    position: static;
  }
}
</style>

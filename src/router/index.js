import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/views/main/Index'),
    children: [
      {
        name: 'Home',
        path: '/',
        component: () => import('@/views/main/Home'),
      },
      {
        path: '/login',
        component: () => import('@/views/main/Login'),
      },
      {
        path: '/register',
        component: () => import('@/views/main/Register'),
      },
      {
        path: '/jobs/:id',
        name: 'viewjob',
        component: () => import('@/views/Freelancer/ViewJob.vue'),
      },
      {
        path: '/applyjob/:id',
        name: 'applyjob',
        component: () => import('@/views/Freelancer/ApplyJob.vue'),
      },
      {
        path: '/freelancerfeed',
        name: 'freelancerfeed',
        component: () => import('@/views/Freelancer/FreelancerFeed.vue'),
      },
      {
        path: '/myproposals',
        name: 'myproposals',
        component: () => import('@/views/Freelancer/MyProposals.vue'),
      },
      {
        path: '/proposals/:id',
        component: () => import('@/views/Proposals/ViewProposal.vue'),
      },
      {
        path: '/profiles/:id',
        component: () => import('@/views/Profiles/ViewProfile.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('@/views/dashboard/Index'),
    children: [
      // Dashboard
      {
        name: 'Dashboard',
        path: '',
        component: () => import('@/views/dashboard/Dashboard'),
      },
      // Pages
      {
        name: 'User Profile',
        path: 'pages/user',
        component: () => import('@/views/dashboard/pages/UserProfile'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

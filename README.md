<div align="center">
<a href="https://github.com/AbdallahHemdan/Instahelp" rel="noopener">
  
<img src="https://user-images.githubusercontent.com/45081989/122281055-226a6800-ceea-11eb-8c99-30ed70cd748e.png" width="300" height="300">

</div>
  
## Table of Contents

- [About Reallancing](#about-reallancing)
- [Build with](#build-with)
- [Getting Started](#getting-started)
- [Mobile Screenshots](#mobile-screenshots)
- [Desktop Screenshots](#desktop-screenshots)
- [File Structure](#file-structure)
- [Contributors](#contributors)
  
## About Reallancing
> **Reallancing** is a web portal that bridges the gap between clients and freelancers, where clients can post their needed jobs and freelancers can view these job postings and apply for them using appropriate proposals. Clients can view these proposals and choose the suitable applicant and communicate with them using an appropriate method. Freelancers build their own profiles with their skills, define their preferred hourly rate and their desired working hours range. A client posts their job indicating the project’s scope and length. The client also indicates the desired number of freelancers needed and decides whether the project has a fixed price or pays by a fixed hourly rate.
  
### Build with
- [Vue JS](https://vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Vuetify](https://vuetifyjs.com/en/)
  
## Getting Started
> This is an list of needed instructions to set up your project locally, to get a local copy up and running follow these instructuins.

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

  ### Mobile Screenshots

<div align="center">

![Mobile-1](https://user-images.githubusercontent.com/45081989/122280854-ec2ce880-cee9-11eb-9fb6-973a695c54a4.png)

![Mobile-2](https://user-images.githubusercontent.com/45081989/122281626-c05e3280-ceea-11eb-8ca6-c2bab629c13d.png)
  
![Mobile-3](https://user-images.githubusercontent.com/45081989/122281688-d53ac600-ceea-11eb-9114-4f5ad6152820.png)


</div>

### Desktop Screenshots
  
<div align="center">
  
![Screenshot (213)](https://user-images.githubusercontent.com/45081989/122281863-0d420900-ceeb-11eb-8039-2a5815608f36.png)
  
![Screenshot (214)](https://user-images.githubusercontent.com/45081989/122281978-2c409b00-ceeb-11eb-94c3-714bdfe20fac.png)

![Screenshot (215)](https://user-images.githubusercontent.com/45081989/122281992-319de580-ceeb-11eb-9b34-82458d1dc651.png)

![Screenshot (218)](https://user-images.githubusercontent.com/45081989/122282015-38c4f380-ceeb-11eb-92d4-6057d6c8549c.png)

![Screenshot (219)](https://user-images.githubusercontent.com/45081989/122282038-40849800-ceeb-11eb-859e-3c43785a3389.png)
  
![Screenshot (220)](https://user-images.githubusercontent.com/45081989/122282129-5a25df80-ceeb-11eb-8fa0-2e538b39e4d7.png)

![Screenshot (225)](https://user-images.githubusercontent.com/45081989/122282215-7164cd00-ceeb-11eb-8235-29b0525c765c.png)

![Screenshot (228)](https://user-images.githubusercontent.com/45081989/122282264-804b7f80-ceeb-11eb-96ff-ce2135be566d.png)

![Screenshot (232)](https://user-images.githubusercontent.com/45081989/122282283-87728d80-ceeb-11eb-9455-c359a62f29c6.png)

![Screenshot (233)](https://user-images.githubusercontent.com/45081989/122282311-8e999b80-ceeb-11eb-8369-2e44a87ea424.png)
  
![Screenshot (234)](https://user-images.githubusercontent.com/45081989/122282324-935e4f80-ceeb-11eb-8973-ad64606fcf44.png)

![Screenshot (235)](https://user-images.githubusercontent.com/45081989/122282353-99ecc700-ceeb-11eb-8ba7-6fdf3e74457b.png)

![Screenshot (236)](https://user-images.githubusercontent.com/45081989/122282513-c7397500-ceeb-11eb-989b-66965f72a290.png)

![Screenshot (237)](https://user-images.githubusercontent.com/45081989/122282524-caccfc00-ceeb-11eb-8a8b-e502658dcb15.png)

</div>
  
## File Structure
                                    
    Reallancing
    ├── README.md
    ├── LICENSE
    ├── package.json
    ├── vue.config.js
    ├── babel.config.js
    ├── .gitignore
    |
    ├── src
    │   ├── assets
    |   |   ├── PNG
    |   |   
    |   |
    │   ├── components
    |   |   ├── base
    |   |       ├── Card	
    |   |       ├── Item	
    |   |       ├── ItemGroup	
    |   |       ├── ItemSubGroup	
    |   |       ├── MatrialAlert	
    |   |       ├── MaterialCard	
    |   |       ├── MaterialChartCard	
    |   |       ├── MaterialSnackBar	
    |   |       ├── MaterialStatsCard	
    |   |       └── MaterialTabs	
    |   |   ├── job	
    |   |       └── jobcard	
    |   |   ├── main	
    |   |       └── NavigationBar	
    |   |   ├── proposal	
    |   |       └── ProposalCard	
    |   |   ├── Loading	
    |   |   
    │   ├── plugins
    |   |   ├── base
    |   |   ├── chartist
    |   |   └── vuetify
    │   ├── router
    |   |   └── index.js
    |   |
    │   ├── store
    |   |   └── index
    |   |
    │   ├── utilities
    |   |   ├── auth
    |   |   ├── constants
    |   |   ├── firebase
    |   |   └── user
    |   |
    │   ├── views
    |   |   ├── Client
    |   |       └── CreateJob
    |   |   ├── Freelancer
    |   |       ├── ApplyJob
    |   |       ├── Feed
    |   |       ├── MyProposals
    |   |       └── ViewJob
    |   |   ├── Profiles
    |   |      └── ViewProfile
    |   |   ├── Proposals
    |   |       ├── AllProposals
    |   |       └── ViewProposal
    |   |   ├── Main
    |   |       ├── Home
    |   |       ├── Index
    |   |       ├── Login
    |   |       └── Register
    |   |   
    │   └── App.vue
    │   └── main.js
    |   | 
    └── public
        ├── favicon.png
        └── index.html	
  
## Contributors
> Thanks goes to these wonderful people in the frontend team.
<table>
<tr>

<td align="center"><a href="https://github.com/ahmedx3" target="_black"><img src="https://avatars.githubusercontent.com/u/45081989?s=400&u=4df0ab56bb19b52a538a3671dddf15bcca080779&v=4" width="150px;" alt="Ahmed Mostafa"/><br /><sub><b>Ahmed Mostafa</b></sub></a><a href="https://github.com/Happysword/Reallancing-Frontend/commits/master?author=ahmedx3" title="Code">💻</a> <br /></td>

<td align="center"><a href="https://github.com/Happysword" target="_black"><img src="https://avatars.githubusercontent.com/u/45149700?v=4" width="150px;" alt="Seif Eldin ElSaeed"/><br /><sub><b>Seif Eldin ElSaeed</b></sub></a><a href="https://github.com/Happysword/Reallancing-Frontend/commits/master?author=Happysword" title="Code">💻</a> <br /></td>

<td align="center"><a href="https://github.com/naiera-magdy" target="_black"><img src="https://avatars.githubusercontent.com/u/45149700?v=4" width="150px;" alt="Naiera Magdy"/><br /><sub><b>Naiera Magdy</b></sub></a><a href="https://github.com/Happysword/Reallancing-Frontend/commits/master?author=naiera-magdy" title="Code">💻</a> <br /></td>
  
  </tr>
 </table>

<template>
  <div id="app"> 

    <v-app>
      <!-- <v-navigation-drawer app></v-navigation-drawer> -->
      <v-app-bar app>
        <v-tabs>
          <v-tab to="/welcome">Welcome</v-tab>
          <v-tab to="/addtrip">Add Trip</v-tab>
          <v-tab to="/view">View</v-tab>
        </v-tabs>
      </v-app-bar>

      <v-main>

        <v-container fluid>
          <router-view/>  
        </v-container>    
      </v-main>

      <v-footer app>

      </v-footer>

    </v-app>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
      <router-link to="/welcome"> Welcome</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

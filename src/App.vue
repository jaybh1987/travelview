<template>
  <v-app> 

    <v-app-bar
      app
      color="primary"
      dark
    >

      <v-tabs>
          <v-tab>Home</v-tab>
          <v-tab>Add Trip</v-tab>
          <v-tab>View</v-tab>
      </v-tabs>


   </v-app-bar>

    <v-main>
      <Home></Home>
    </v-main> 

  </v-app> 

</template>

<script>

import Home from './components/Home.vue'

export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    //
  }),
};
</script>

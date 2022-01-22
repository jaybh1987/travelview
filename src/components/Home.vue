<template>
  <v-container>
        {{msg}}
  </v-container>
</template>

<script>
  export default {
    name: 'Home',

    data: () => ({
      msg: "Welcome To The Home Page."
    }),
  }
</script>

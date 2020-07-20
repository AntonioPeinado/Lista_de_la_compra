<template>
<div>
  
  <v-app>
     <router-link to="/"></router-link>
     <router-link to="/add"></router-link>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
  </div>
</template>

<script>

export default {
  name: "App",
   components: {
 
   }
};
</script>
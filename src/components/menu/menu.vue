<template>
  <div>
    <v-sheet height="400" class="overflow-hidden" style="position: relative;">
      <v-row class="button " >
        <v-container class="fill-height">
          <v-btn color="pink" dark @click.stop="drawer = !drawer">Menú</v-btn>
        </v-container>
      </v-row>
      <v-navigation-drawer v-model="drawer" absolute temporary >
        <v-list-item >
          <v-list-item-content>
            <v-list-item-title>Menú</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense class="router ">
          <router-link to="/"> <v-icon large color="purple darken-2">mdi-dialpad</v-icon>List </router-link>
          <router-link to="/add"><v-icon right color="primary">mdi-pencil</v-icon>Add </router-link>
        </v-list> 
      </v-navigation-drawer>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "Menu",

  data() {
    return {
      drawer: null,
    };
  }
};
</script>
<style scoped>
.button {
  padding-left: 1rem;
  height: 7rem;
  
}
.router {
  display: grid;
  grid-template-rows: repeat(1, 100%);
  text-align: center;
}
.overflow-hidden {
  background-image: url(listadelacompra.jpg) ;
  
}

</style>
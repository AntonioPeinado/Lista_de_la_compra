<template>
  <v-card outlined>
     <v-list-item-title class='title'>{{product.name}}: =>     
        {{product.ammount}}</v-list-item-title>
    <v-card-title> {{product.comment}}</v-card-title>

    <v-card-actions  class='card-switch'>   
      <v-switch ></v-switch>
     <v-btn text>Detalles  <!--<v-icon right>mdi-pencil</v-icon>--> </v-btn>
    </v-card-actions>
    
  </v-card>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
     .title{
       text-align: center;
     }
   
</style>
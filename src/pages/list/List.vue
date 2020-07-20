<template>
  <div>
    
    <div class='header'>
      
        <v-btn class="mx-2" fab dark color="teal">
      <v-icon dark>mdi-format-list-bulleted-square</v-icon>
    </v-btn>
    </div>
    
    <div class='list-card'>
    <ul class="list">
      
      <li v-for="item in items" :key="item.id" >
           <Product :product="item" class='list-items'></Product>
      </li>
    </ul>
</div>
<Menu />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import  Product  from './Products';
import { ACTION_TYPES } from "../../store/actions";
import { httpService } from "../../http";
import Menu from '../menu/menu';
export default {
  name: "List",
  components: {
    Product,
  },
  computed: {
    ...mapState(["items"])
  },
  Menu,
  methods: {
    ...mapActions({
      getItems: ACTION_TYPES.GET_ITEMS
    })
  },
  mounted() {
    this.getItems(httpService);
  }
};
</script>
<style scoped>
  .list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding-top: 1rem;
    width: 80%;
    list-style:none;
  }
  .header{
    height: 7rem;
    width: 100%;
    margin-bottom: 3rem;
    background-color: rgb(128, 111, 226);   
  }
  .list-items{ 
    background-color: rgb(230, 247, 241);
   box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.418);
  }
  .list-card{
    display: flex;
    width: 100%;
    padding-left: 12rem;
    
  }
 
</style>

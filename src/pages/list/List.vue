<template>
  <div>
    <div class="list-card">
      <ul class="list">
        <li v-for="item in items" :key="item.id">
          <Product :product="item" class="list-items"></Product>
        </li>
      </ul>
    </div>
    <Menu />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Product from "./Products";
import { ACTION_TYPES } from "../../store/actions";
import { httpService } from "../../http";

export default {
  name: "List",

  components: {
    Product
  },

  computed: {
    ...mapState(["items"])
  },

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
  grid-template-columns: repeat(2, 50%);
  gap: 1rem;
  padding: 1rem;
  width: 80%;
  list-style: none;
  
}

.list-items {
  background-color: rgb(230, 247, 241);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.418);
}

</style>

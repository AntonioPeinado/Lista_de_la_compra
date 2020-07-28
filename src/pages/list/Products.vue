<template>
  <v-card outlined>
    <v-list-item-title class="title">
      {{product.name}}: =>
      {{product.ammount}}
    </v-list-item-title>
    <v-card-title>{{product.comment}}</v-card-title>

    <v-card-actions class="card-switch">
      <v-switch :input-value="product.bought" :loading="loading" @change="update" label="comprado?"></v-switch>

      <router-link :to="`/${product.id}`" color="warning" >
        <v-icon color="warning" right class="details">mdi-pencil</v-icon>
      </router-link>

      <v-btn
        color="primary"
        depressed
        right
        class="product__delete"
        @click="deleteCar"
        type="button"
      >Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";
import debounce from "debounce";
import { httpService } from '../../http';

export default {
  name: "Product",
  data() {
    return {
      loading: false,
      initialBounght: this.product.bought,
    };

  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    update: debounce(function (value) {
      if (value === this.product.bought) {
        return;
      }
      this.loading = true;
      this.product.bought = value;
      axios
        .patch(`http://localhost:3005/items/${this.product.id}`, {
          bought: this.product.bought,
          
        })
        .finally(() => {
          this.loading = false;
        });
    }, 1000),
    deleteCar() {
      this.$store.dispatch('DELETE_ITEM',{
        http: httpService,
        id: this.product.id
      })
    },
    
  },
};
</script>

<style scoped>
.title {
  text-align: center;
}
.product__delete {
  margin-left: 5rem;
}
</style>
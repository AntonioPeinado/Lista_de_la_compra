<template>
  <v-card outlined>
    <v-list-item-title class="title">
      {{product.name}}: =>
      {{product.ammount}}
    </v-list-item-title>
    <v-card-title>{{product.comment}}</v-card-title>

    <v-card-actions class="card-switch">
      <v-switch :input-value="product.bought" :loading="loading" @change="update" label="comprado?"></v-switch>

      <router-link to="/Details" color="warning">
        <v-icon color="warning" right class="details">mdi-pencil</v-icon>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";
import debounce from "debounce";
export default {
  name: "Product",
  data() {
    return {
      loading: false,
      initialBounght: this.product.bought
    };
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    update: debounce(function(value) {
      if (value === this.product.bought) {
        return;
      }
      this.loading = true;
      this.product.bought = value;
      axios
        .patch(`http://localhost:3005/items/${this.product.id}`, {
          bought: this.product.bought
        })
        .finally(() => {
          this.loading = false;
        });
    }, 1000)
  }
};
</script>

<style scoped>
.title {
  text-align: center;
}

</style>
<template>
  <div class="conter">
    <v-form
      @submit.stop.prevent="created"
      ref="form"
      v-model="valid"
      lazy-validation
      class="form"
      required
    >
      <v-text-field label="Produc" v-model="name" :rules="productRules"></v-text-field>

      <v-text-field label="Ammount" v-model="ammount" :rules="cantidadRules"></v-text-field>

      <v-text-field label="comment" v-model="comment" :rules="commentRules"></v-text-field>

      <v-btn :disabled="!valid" type="submit" color="primary" class="mr-4" validate>Crear</v-btn>
      <v-btn color="secondary" type="button" class="mr-4" @click="reset">Reset Form</v-btn>
    </v-form>
  </div>
</template>
  


<script>
import { mapActions } from "vuex";
import { ACTION_TYPES } from "../../store/actions";
import { httpService } from "../../http";

const required = (msg) => (value) => Boolean(value) || msg;
export default {
  name: "Add",
   

  data: () => ({
    valid: false,
    name: "",
    productRules: [required("Product is required")],
    ammount: "",
    cantidadRules: [required("Ammount is required")],
    comment: "",
    commentRules: [required("Comment is required")],
   
  }),

  methods: {
    ...mapActions({
      addItem: ACTION_TYPES.ADD_ITEM,
    }),
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    editar() {
      this.$refs.form.disabled();
    },

    created() {
      this.validate();
      if (!this.valid) {
        return;
      }
      let model = {
        name: this.name,
        ammount: this.ammount,
        comment: this.comment,
        bought: false,
      };
     
      this.addItem({ model, http: httpService }).then(() => this.reset());
      
    },
  },
};
</script>
<style scoped>
.form {
  width: 60%;
}
.conter {
  display: flex;
  justify-content: center;
  border: 1px solid black;
  background-color: rgb(219, 248, 248);
  width: 80%;
  padding: 2rem;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.418);
}
</style>


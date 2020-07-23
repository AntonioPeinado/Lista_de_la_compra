<template>
  <div class="conter">
    <v-form ref="form" v-model="valid" class="form" lazy-validation required disabled="true">
      <v-text-field :rules="productRules" label="Product" v-model="name"></v-text-field>

      <v-text-field :rules="cantidadRules" label="Ammount" v-model="ammount" ></v-text-field>

      <v-text-field :rules="commentRules" label="Comment" v-model="comment"></v-text-field>

      <v-btn disabled="true" color="primary" class="mr-4" @click="validate" >Validate</v-btn>

      <v-btn color="secondary" class="mr-4" @click="reset" disabled="true">Reset Form</v-btn>

      <v-btn color="warning" @click="resetValidation" >Edit <v-icon right>mdi-pencil</v-icon></v-btn>
    </v-form>
  </div>
</template>

<script>
import { httpService } from "../../http"; 
const required = msg => value => Boolean(value) || msg;
export default {
  name: "Details",
  data: () => ({
    valid: false,
    name: "",
    productRules: [required  ("Product is required")],
    ammount: "",
    cantidadRules: [required  ("Ammount is required")],
    comment: "",
    commentRules: [required  ("Comment is required")]
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
     details() {
     
  },
 
}
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
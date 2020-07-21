<template>
  <div class='conter'>
    <template>
      <v-form ref="form" v-model="valid" lazy-validation class='form'>
        <v-text-field :rules="productRules" label="Produc" required></v-text-field>

        <v-text-field label="Cantidad" :rules="cantidadRules" required></v-text-field>

        <v-text-field label="comment" :rules="commentRules" required></v-text-field>

        
        <v-btn :disabled="!valid" color="success" class="mr-4" @click=created validate >Crear</v-btn>
        <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
      </v-form>
    </template>
  </div>
</template>
  


<script>
import axios from 'axios';
export default {
  name: "Add",

  data: () => ({
    valid: true,
    product: "",
    productRules: [v => !!v || "Product is required"],
    cantidad: "",
    cantidadRules: [v => !!v || "Cantidad is required"],
    comment: "",
    commentRules: [v => !!v || "Comment is required"]
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
    editar() {
     this.$refs.form.disabled();
    },
      
       created() {
      let post = {
    product: '',
    cantidad: '',
    comment: '',
    bought: false
  };
  axios.post("http://localhost:3005/items", post).then((result) => {
    console.log(result);
  });
 
       }
   
  }
};
</script>
<style scoped>
  .form {
    width: 60%;
    
  }
  .conter{
    display: flex;
    justify-content: center;
    border: 1px solid black;
    background-color: rgb(219, 248, 248);
    width: 80%;
    padding: 2rem;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.418);
  }
</style>


<template>
  <div class="conter">
    <v-form ref="form" v-model="valid" class="form" lazy-validation required>
      <v-text-field :rules="productRules" label="Product" v-model="item.name"></v-text-field>

      <v-text-field :rules="cantidadRules" label=" amount" v-model="item.ammount"></v-text-field>

      <v-text-field :rules="commentRules" label="Comment" v-model="item.comment"></v-text-field>

      <v-btn color="primary" class="mr-4" @click="validate">Validate</v-btn>

      <v-btn color="secondary" class="mr-4" @click="reset">Reset Form</v-btn>

      <v-btn color="warning" type="button">
        Edit
        <v-icon right>mdi-pencil</v-icon>
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
const required = (msg) => (value) => Boolean(value) || msg;
export default {
  name: "Details",
  data: () => ({
    valid: false,
    name: "",
    productRules: [required("Product is required")],
    ammount: "",
    cantidadRules: [required("Ammount is required")],
    comment: "",
    commentRules: [required("Comment is required")],
  }),
  computed: {
    ...mapGetters(['getItemById']),
    item(){
      
    
      return this.getItemById(this.$route.params.id)
    }
  },
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
  background-color: rgb(246, 252, 252);
  width: 80%;
  padding: 2rem;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.418);
}
</style>
<template>

          <div class="header">
      
      <h1 class="header-title">Lista de la compra</h1>
    </div>
   
</template>
<script>
import {mapActions} from 'vuex';
import {ACTION_TYPES} from '../../store/actions';
export default {
    name: 'Header',
      methods: {
    ...mapActions ({
        setMenuOpen: ACTION_TYPES.SET_MENU_OPEN
    })
  },
}
</script>
<style scoped>
    .header {
  display: flex;
  align-items: center;
  height: 7rem;
  width: 100%;
  background-color: rgb(128, 111, 226);
  color: azure;
  
}
.header-title {
  padding-left: 40%;
}
</style>
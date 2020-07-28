import { MUTATION_TYPES } from "./mutations.js";
export const ACTION_TYPES = {
  GET_ITEMS: "GET_ITEMS",
  ADD_ITEM: "ADD_ITEM",
  DELETE_ITEM: "DELETE_ITEM"
};

export const actions = {
  async [ACTION_TYPES.GET_ITEMS](context, http) {
   if(context.state.items.length){
      return;
    
    }
    const { data } = await http.getAll();
    context.commit(MUTATION_TYPES.SET_ITEMS, data);
  },
  async [ACTION_TYPES.ADD_ITEM](context, {http, model}){
    const {data} = await http.post(model);
    context.commit(MUTATION_TYPES.ADD_ITEM, data);
  },
  async [ACTION_TYPES.DELETE_ITEM](context, {http, id}){
    await http.delete(id);
    context.commit('DELETE_CAR', id);
  }
};

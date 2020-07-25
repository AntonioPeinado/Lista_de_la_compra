export const MUTATION_TYPES = {
  SET_ITEMS: "SET_ITEMS",
  ADD_ITEM: "ADD_ITEM",
};

export const mutations = {
         [MUTATION_TYPES.SET_ITEMS](state, items) {
           state.items = items;
         },
         [MUTATION_TYPES.ADD_ITEM](state, item) {
           state.items.push(item);
         },
         DELETE_CAR(state, car) {
           var index = state.cars.findIndex((c) => c.id === car.id);
           state.cars.splice(index);
         },
         DETAILS_CAR(state, car) {
           var index = state.cars.findIndex((c) => c.id === car.id);
           state.cars.splice(index);
         },
       };

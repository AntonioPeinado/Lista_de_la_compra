export const getters = {
    getItemById(state) {
        return (id) => {
            return state.items.find((item) =>String(item.id) === id);
        }
    }
}
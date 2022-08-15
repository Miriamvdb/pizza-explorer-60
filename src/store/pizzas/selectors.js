// sort by popularity
export const selectAllPizzas = (reduxState) => {
  const clonedArray = [...reduxState.pizzas.allPizzas];
  return clonedArray.sort((pizzaA, pizzaB) => pizzaB.bought - pizzaA.bought);
};

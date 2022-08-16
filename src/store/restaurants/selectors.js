export const selectAllRestos = (reduxState) => {
  const clonedArray = [...reduxState.restaurants.allRestos];
  return clonedArray.sort((restoA, restoB) =>
    restoA.name.localeCompare(restoB.name)
  );
};

// Define a parameterized selector -> A parameterized selector is actually
// a functions that returns a function. See how we will call these selectors in component.

// 4. We want a list of restaurant who sells the selected pizza.
export const selectRestoWhoSellsPizza = (pizzaId) => (reduxState) => {
  return reduxState.restaurants.allRestos.filter((resto) =>
    resto.pizzas.includes(pizzaId)
  );
};

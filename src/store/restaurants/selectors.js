export const selectAllRestos = (reduxState) => {
  const clonedArray = [...reduxState.restaurants.allRestos];
  return clonedArray.sort((restoA, restoB) =>
    restoA.name.localeCompare(restoB.name)
  );
};

import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllPizzas } from "../store/pizzas/selectors";
import { selectRestoWhoSellsPizza } from "../store/restaurants/selectors";
import { selectRestoWithPizza } from "../store/selectors";

// WHO SELLS PIZZA?
// 1. Add an HTML <select> field
// 2. Store the value of this <select> in a local state
// 3. Use selectAllPizzas to populate the options

const RestaurantList = () => {
  const allRestos = useSelector(selectRestoWithPizza);
  const allPizzas = useSelector(selectAllPizzas); // 3.
  const [selectedPizza, setSelectedPizza] = useState(allPizzas[0].id); // 2.
  // 5. This selector allows us to change the information we select from the state,
  // whenever we change the selectedPizza in our select tag.
  const restoWhoSellsPizza = useSelector(
    selectRestoWhoSellsPizza(selectedPizza)
  );

  return (
    <div>
      <hr />
      <h2>Restaurants</h2>
      {allRestos.map((resto) => {
        return (
          <div key={resto.id}>
            <h3>{resto.name}</h3>
            <ul>
              {resto.pizzas.map((pizza) => {
                return <li key={pizza.id}>{pizza.name}</li>;
              })}
            </ul>
          </div>
        );
      })}
      <form>
        <h3>Who sells </h3>
        <select
          value={selectedPizza}
          onChange={(event) => setSelectedPizza(parseInt(event.target.value))}
        >
          {allPizzas.map((pizza) => {
            return (
              <option key={pizza.id} value={pizza.id}>
                {pizza.name}
              </option>
            );
          })}
        </select>
      </form>
      <ul>
        {restoWhoSellsPizza.map((restoWithPizza) => {
          return <li key={restoWithPizza.id}>{restoWithPizza.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default RestaurantList;

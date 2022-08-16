import { useSelector } from "react-redux";
import { selectRestoWithPizza } from "../store/selectors";

const RestaurantList = () => {
  const allRestos = useSelector(selectRestoWithPizza);
  console.log(allRestos);

  return (
    <div>
      <hr />
      <h2>Restaurants</h2>
      <div>
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
      </div>
    </div>
  );
};

export default RestaurantList;

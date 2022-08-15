import { useSelector } from "react-redux";
import { selectAllPizzas } from "../pizzas/selectors";
import { selectUser } from "../user/selectors";

const PizzaList = () => {
  const user = useSelector(selectUser);
  const allPizzas = useSelector(selectAllPizzas);

  return (
    <div className="container-pizzalist">
      <h1>Pizza Explorer</h1>
      <p>
        Welcome <b>{user.name}</b>!
      </p>
      <p>
        Amount of pizzas: <b>{allPizzas.length}</b>
      </p>
      <hr />
      {allPizzas.map((pizza, index) => {
        return (
          <div key={index}>
            <h3>{pizza.name}</h3>
            <img src={pizza.image} alt={pizza.name} />
            <p>{pizza.description}</p>
            <p>
              <b>Bought</b> {pizza.bought}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default PizzaList;

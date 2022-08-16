import { useDispatch, useSelector } from "react-redux";
import { selectAllPizzas } from "../pizzas/selectors";
import { selectUser } from "../user/selectors";
import { toggleFav } from "../user/slice";
import { TiHeart, TiHeartOutline } from "react-icons/ti";

const PizzaList = () => {
  const user = useSelector(selectUser);
  const allPizzas = useSelector(selectAllPizzas);
  const dispatch = useDispatch(); // 3.

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
            {/* 4. Dispatch it from the heart button, we'll pass in the id of the */}
            {/* current pizza as parameter so we can add it as a favorite next! */}
            <button onClick={() => dispatch(toggleFav(pizza.id))}>
              {user.favorites.includes(pizza.id) ? (
                <TiHeart />
              ) : (
                <TiHeartOutline />
              )}
            </button>
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

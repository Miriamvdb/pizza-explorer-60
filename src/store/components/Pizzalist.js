import { useDispatch, useSelector } from "react-redux";
import { selectAllPizzas } from "../pizzas/selectors";
import { selectUser } from "../user/selectors";
import { toggleFav } from "../user/slice";
import { TiHeart, TiHeartOutline } from "react-icons/ti";
import "./PizzaList.scss";

const PizzaList = () => {
  const user = useSelector(selectUser);
  const allPizzas = useSelector(selectAllPizzas);
  const dispatch = useDispatch();

  return (
    <div className="pizza-list">
      <h1 style={{ fontSize: "50px" }}>Pizza Explorer</h1>
      <p style={{ fontSize: "15px" }}>
        Welcome <b>{user.name}</b>!
      </p>
      <p style={{ fontSize: "15px" }}>
        Amount of pizzas: <b>{allPizzas.length}</b>
      </p>
      <br />
      <div className="pizzas">
        {allPizzas.map((pizza, index) => {
          return (
            <div key={index}>
              <div className="title-button">
                <h3>{pizza.name}</h3>
                <button
                  className={`fav-toggle ${
                    user.favorites.includes(pizza.id) ? "fav" : ""
                  }`}
                  onClick={() => dispatch(toggleFav(pizza.id))}
                >
                  {user.favorites.includes(pizza.id) ? (
                    <TiHeart style={{ fontSize: "15px", color: "tomato" }} />
                  ) : (
                    <TiHeartOutline
                      style={{ fontSize: "15px", color: "tomato" }}
                    />
                  )}
                </button>
              </div>
              <div
                className="pizza"
                style={{ backgroundImage: `url(${pizza.image})` }}
              >
                <div className="overlay">
                  <p>{pizza.description}</p>
                  <p>
                    <b>Bought</b> {pizza.bought}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PizzaList;

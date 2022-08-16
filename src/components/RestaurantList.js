import { useSelector } from "react-redux";
import { selectAllRestos } from "../store/restaurants/selectors";

const RestaurantList = () => {
  const allRestos = useSelector(selectAllRestos);
  console.log(allRestos);

  return (
    <div>
      <hr />
      <h2>Restaurants</h2>
      <div>
        {allRestos.map((resto, index) => {
          return (
            <div key={index}>
              <h3>{resto.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantList;

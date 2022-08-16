import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPizza } from "../store/pizzas/slice";

const AddPizzaForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const submitNewPizza = (event) => {
    event.preventDefault();
    console.log("Add a new pizza: ", name, description);

    const newPizza = {
      name,
      description,
    };

    dispatch(addNewPizza(newPizza));

    setName("");
    setDescription("");
  };

  return (
    <div className="container-addpizzaform">
      <br />
      <hr />
      <h2>Add a new pizza!</h2>
      <div className="form-newpizza">
        <form onSubmit={submitNewPizza}>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Name of new pizza"
          />
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Describe your new pizza"
          />
          <button type="submit">Add new pizza!</button>
        </form>
      </div>
      <br />
    </div>
  );
};

export default AddPizzaForm;

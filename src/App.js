import "./App.css";
import AddPizzaForm from "./store/components/AddPizzaForm";
import PizzaList from "./store/components/PizzaList";

function App() {
  return (
    <div className="App">
      <PizzaList />
      <AddPizzaForm />
    </div>
  );
}

export default App;

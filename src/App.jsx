import Header from "./components/Header/Header";
import Mealitems from "./components/MealItems/MealItems";
import  {CartContextProvider}  from "./store/CartContext";

function App() {
  return (
    <>
      <CartContextProvider>
        <Header />
        <Mealitems />
      </CartContextProvider>
    </>
  );
}

export default App;

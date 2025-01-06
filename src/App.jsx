import Header from "./components/Header/Header";
import Mealitems from "./components/MealItems/MealItems";
import {CartContextProvider}  from "./store/CartContext";
import {UserProgressContextProvider} from "./store/UserProgressContext"
import Cart from "./components/Cart/Cart"

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Mealitems />
        <Cart/>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;

import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import {CartContextProvider}  from "./store/CartContext";
import {UserProgressContextProvider} from "./store/UserProgressContext"
import Cart from "./components/Cart/Cart"
import Order from "./components/Order/Order"

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart/>
        <Order />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;

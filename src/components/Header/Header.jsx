import { useContext } from "react";
import logo from "../../assets/logo.jpg";
import "./header.css";
import Button from "../UI/Button";
import CartContext from "../../store/CartContext";
import UserProgressContext from "../../store/UserProgressContext";

function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);
  function hendleShowCart() {
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="" />
        <h1>ReactFood</h1>
      </div>
      <nav id="title">
        <Button textOnly onClick={hendleShowCart}>
          Cart ({numberOfCartItems})
        </Button>
      </nav>
    </header>
  );
}

export default Header;

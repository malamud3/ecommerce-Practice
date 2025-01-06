import {useContext} from 'react';
import logo from '../../assets/logo.jpg';
import './header.css';
import Button from '../UI/Button';
import CartContext from '../../store/CartContext';

function Header() {

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  } , 0);
 
    return (
      <header id="main-header">
        <div id="title">
          <img src={logo} alt="" />
          <h1>ReactFood</h1>
        </div>
          <nav id="title">
            <Button textOnly >Cart ({numberOfCartItems})</Button>
          </nav>
      </header>
    );
  }
  
  export default Header;
  
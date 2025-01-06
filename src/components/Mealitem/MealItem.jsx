import { useContext } from "react";
import "./mealItem.css";
import currenctyFormatter from "../../util/formatting.js";
import Button from "../UI/Button";
import CartContext from "../../store/CartContext.jsx";

function Mealitem({ meal }) {
  const cartCtx = useContext(CartContext);

  function addToCartHandler() {
    cartCtx.addItem({meal});
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currenctyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>

        <p id="meal-item-actions">
          <Button onClick={addToCartHandler}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}

export default Mealitem;

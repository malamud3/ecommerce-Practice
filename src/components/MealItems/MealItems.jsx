import Mealitem from "../Mealitem/MealItem";
import { useEffect, useState } from "react";

function Mealitems() {

  const [loadMeals, setLoadMeals] = useState([]);

  useEffect(() => {
    async function loadMeals() {
      const response = await fetch("http://localhost:3000/meals");
      if (response.ok) {
        //...
      }
      const meals = await response.json();
      setLoadMeals(meals);
    }
    loadMeals();
  }, []);

  return (
    <ul id="meals">
        {loadMeals.map((meal) => (
          <Mealitem key={meal.id} meal={meal} />
        ))}     
    </ul>    
  );
}

export default Mealitems;

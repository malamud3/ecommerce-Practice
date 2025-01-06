import { useEffect, useState } from 'react';


export function fetchMeals() {

const [loadMeals, setLoadMeals] = useState([]);

  useEffect(() => {
    async function loadMeals() {
      const response = await fetch('http://localhost:3000/meals');
      if (response.ok) {
        return ;
        }
    const meals = await response.json();
    setLoadMeals(meals);
    }
    loadMeals();

  }, []);



  return loadMeals;
}

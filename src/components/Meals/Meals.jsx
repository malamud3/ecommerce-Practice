import Mealitem from '../Mealitem/MealItem';
import useHttp from '../../hooks/useHttp';
import Error from '../UI/Error';

const requestConfig = {}; 

function Meals() {
  const {
    data: loaedMeals,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <Error title="An error occurred!" message={error} />;
  }
  return (
    <ul id="meals">
      {loaedMeals.map((meal) => (
        <Mealitem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

export default Meals;

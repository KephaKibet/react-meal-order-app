import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css'

const DummyMeals = [
 
    {
      id: 'm1',
      name: 'Samaking',
      description: 'Finest fish and veggies',
      price: 2299,
    },
    {
      id: 'm2',
      name: 'Garlic Bread',
      description: 'A german specialty!',
      price: 1650,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 1299,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 1899,
  },
];
const AvailableMeals = () => {
  const mealsList = DummyMeals.map((meal =>
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price} />
   )
  )
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}


export default AvailableMeals;
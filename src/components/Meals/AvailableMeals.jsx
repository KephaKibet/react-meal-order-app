import classes from './AvailableMeals.module.css'

const DummyMeals = [{}];
const AvailableMeals = () => {
  const mealsList = DummyMeals.map(meal => <li>{meal.name}</li>)
  
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  )
}


export default AvailableMeals;
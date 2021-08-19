import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken 65 Biryani",
    description: "Chicken 65 pieces cooked with Basmati Rice",
    price: 15.99
  },
  {
    id: "m2",
    name: "Dal and Curry",
    description: "Whole cup of Dal with a Fry Curry",
    price: 9.99
  },
  {
    id: "m3",
    name: "Paneer Butter Masala",
    description: "Small cubes of Paneer cooked in Butter Masala",
    price: 12.99
  },
  {
    id: "m4",
    name: "Aloo mutter",
    description: "Potatoes and mutter cooked together",
    price: 11.99
  },
  {
    id: "m5",
    name: "Mutton Dum Biryani",
    description: "Goat pieces cooked with Basmati Rice",
    price: 11.99
  },
  {
    id: "m6",
    name: "Tandoori Roti",
    description: "2 pcs of Tandoori Roti",
    price: 5.99
  }
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

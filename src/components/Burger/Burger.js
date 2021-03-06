import React from "react";
import styles from "./Burger.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";

const burger = props => {
  let transformedIngredients = Object.keys( props.ingredients )
  .map( igKey => {
      return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />;
      } );
  } )
  .reduce((arr, el) => {
      return arr.concat(el)
  }, []);
 {/*Test line to see git issues*/}
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please Add Ingredients</p>;
  }
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;

import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummarry = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
       return <li key={igKey}>
                 <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]} 
              </li>
    }); 
   return (
       <Aux>
           <h3>Your Order</h3>
           <p>The Most expensive burger you will ever buy it comes with no fries or a drink:</p>
           <ul>
               {ingredientSummary}
           </ul>
           <p>Continue to Checkout?</p>
       </Aux>
   );
};

export default orderSummarry;

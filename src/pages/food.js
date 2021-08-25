import React from 'react';
import { Wrapper } from '../components';
import foodMenu from '../assets/data/foodMenu.json';

const FoodMenu = () => (
  <Wrapper title="Food">
    <div id="main" className="alt">
      <div className="inner">
        {
          foodMenu.map((mealObj) => (
            <div key={mealObj.meal}>
              <h2>{mealObj.meal}</h2>
              <ul>
                { mealObj.dishes.map(dish => <li key={dish}>{dish}</li>) }
              </ul>
            </div>
          ))
        }
      </div>
    </div>
  </Wrapper>
);

export default FoodMenu;

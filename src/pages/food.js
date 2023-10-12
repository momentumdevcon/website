import React from 'react'
import { Wrapper } from '../components'
import foodMenu from '../assets/data/foodMenu.json'

const FoodMenu = () => (
  <Wrapper title="Food">
    <div id="main" className="alt">
      <div className="inner">
        {foodMenu.map((mealObj) => (
          <div key={mealObj.meal}>
            <h2>{mealObj.meal}</h2>
            {mealObj.dishes.map((dishes) => (
              <>
                <h3>{dishes.dish}</h3>
                <ul>
                  {dishes.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  </Wrapper>
)
export default FoodMenu

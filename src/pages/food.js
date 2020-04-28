import React from 'react';
import Helmet from 'react-helmet';
import { BannerLanding, Layout } from '../components';
import { createMetaContent, mainTitle, mainDescription } from '../assets/data/metaContent.js';
import foodMenu from '../assets/data/foodMenu.json';
import '../assets/css/schedule.css';

const pageTitle = 'Food - ' + mainTitle;
const scheduleMeta = createMetaContent(pageTitle, mainDescription);

const FoodMenu = () => (
  <Layout>
    <Helmet
      title={pageTitle}
      meta={scheduleMeta}
    />

    <BannerLanding pageName="Food" />

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
  </Layout>
);

export default FoodMenu;

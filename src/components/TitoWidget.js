import React from 'react';
import { Helmet } from 'react-helmet';

export const TitoWidget = ({ source }) => (
  <>
    <Helmet>
      <script src='https://js.tito.io/v2' />
    </Helmet>
    <h4>Payment Options</h4>
    <p>Orders may be paid through PayPal or by invoice. PayPal checkout allows payment via credit/debit card and does not require PayPal login.</p>
    <tito-widget event="the-circuit/momentum-2023" source={ source } />
    <h4>Momentum is a 21-and-up event!</h4>
    <p>We would love to welcome younger developers to our conference but the Hard Rock Casino does not admit anyone under 21 and participants must pass through the casino.</p>
  </>
);

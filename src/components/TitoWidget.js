import React from 'react';
import { Helmet } from 'react-helmet';

export const TitoWidget = ({ source }) => (
  <>
    <Helmet>
      <script src='https://js.tito.io/v2' />
    </Helmet>
    <tito-widget event="the-circuit/momentum-2022" source={ source } />
  </>
);
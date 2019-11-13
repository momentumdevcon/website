import React from 'react';
import Helmet from 'react-helmet';
import { BannerLanding, Layout } from '.';
import { createMetaContent, mainTitle, mainDescription } from '../assets/data/metaContent';

const Wrapper = ({ children, title }) => {
  const pageTitle = `${title} - ${mainTitle}`;
  const meta = createMetaContent(pageTitle, mainDescription);

  return (
    <Layout>
      <Helmet title={pageTitle} meta={meta} />
      <BannerLanding pageName={title} />
      { children }
    </Layout>
  );
};

export default Wrapper;

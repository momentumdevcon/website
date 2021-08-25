import React from 'react';
import Helmet from 'react-helmet';
import { BannerLanding, Layout } from '.';
import { createMetaContent, mainTitle, mainDescription } from '../assets/data/metaContent';

const Wrapper = ({ 
  children,
  metaDescription,
  metaImage,
  title,
  pageTitle = `${title} - ${mainTitle}`,
}) => {
  const meta = createMetaContent(
    pageTitle,
    metaDescription || mainDescription,
    metaImage
  );

  return (
    <Layout page={`${title.toLowerCase()}`}>
      <Helmet title={pageTitle} meta={meta} />
      <BannerLanding pageName={title} />
      <div className={`${title.toLowerCase()}-page-wrapper`}>
        { children }
      </div>
    </Layout>
  );
};

export default Wrapper;

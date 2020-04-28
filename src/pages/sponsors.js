import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Wrapper from '../components/Wrapper';
import { sponsorData } from '../components/SponsorData';
import '../assets/css/sponsors.css';

const Sponsors = ({ data }) => {
  return (
    <Wrapper title='Sponsors'>
      <div className='sponsors-wrapper'>
        {
          Object.keys(sponsorData).map((sponsorLevel) => {
            return (
              <div className='sponsor-level' key={sponsorLevel}>
                <h1>{sponsorLevel}</h1>
                <div className='line' />
                <div className='sponsors'>
                  {sponsorData[sponsorLevel].map(({ company, fileName, link }) => (
                    <div className='sponsor' key={company}>
                      {fileName &&
                      <>
                        <div className='sponsor-circle'>
                          <a href={link} target='_blank' rel="noopener noreferrer">
                            <Img
                              fixed={
                                data.sponsorImages.edges.find(
                                  n => n.node.relativePath === fileName
                                ).node.childImageSharp.image125
                              }
                              alt={`${company} logo`}
                            />
                          </a>
                        </div>
                      </>
                      }
                      <a href={link} target='_blank' rel="noopener noreferrer">
                        <h3>{company}</h3>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        }
      </div>
    </Wrapper>
  );
};

export const query = graphql`
  query {
    sponsorImages: allFile(filter: { sourceInstanceName: { eq: "sponsors" } }) {
      edges {
        node {
          relativePath
          ...sponsorImage
        }
      }
    }
  }
`;

export default Sponsors;

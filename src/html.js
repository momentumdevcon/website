import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              console.log("%c  ", "background-image: url('https://emojis.slackmojis.com/emojis/images/1495224256/2291/conga_party_parrot.gif?1495224256'); background-repeat: no-repeat; background-size:32px; font-size: 32px", "=====> Momentum Developer Conference - March 21, 2019")
              console.log("Tickets ====> https://www.thecircuit.net/the-circuit-events/#!event/2019/3/21/momentum-developer-apos-s-conference")
              `,
            }}
          />
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};

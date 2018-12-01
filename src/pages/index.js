import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/Banner';

// import pic01 from '../assets/images/pic01.jpg';
// import pic02 from '../assets/images/pic02.jpg';
// import pic03 from '../assets/images/pic03.jpg';
// import pic04 from '../assets/images/pic04.jpg';
// import pic05 from '../assets/images/pic05.jpg';
// import pic06 from '../assets/images/pic06.jpg';

const HomeIndex = () => (
  <Layout>
    <Helmet
      title="Momentum Developer Conference"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Banner />
    <div id="main">
      {/* <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Aliquam</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Tempus</h3>
                <p>feugiat amet tempus</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Magna</h3>
                <p>Lorem etiam nullam</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Ipsum</h3>
                <p>Nisl sed aliquam</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Consequat</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Etiam</h3>
                <p>Feugiat amet tempus</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
          </section> */}
      <section id="two">
        <div className="inner">
          <header className="major">
            <h2>What is Momentum?</h2>
          </header>
          <p>Learn from top notch developers</p>
          <p>Receive fresh perspectives on the challenges you face daily</p>
          <p>Share your best practices with others</p>
          <p>Take home tips and tricks you can use tomorrow</p>
          <ul className="actions">
            <li>
              <Link to="/landing" className="button next">
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default HomeIndex;

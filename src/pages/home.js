import React, { Component } from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="home-content">
        <h1>Accueil</h1>
        <p>
          Ce site a été réalisé par{" "}
          <a href="https://www.linkedin.com/in/mikael-trilles-a0a4b5a4/">
            Mikael Trilles
          </a>
          .
        </p>
        <p>
          Ce site utilise les technologies suivantes :
          <ul>
            <li>
              <a href="https://reactjs.org/">React</a>
            </li>
            <li>
              <a href="https://reacttraining.com/react-router/">React Router</a>
            </li>
            <li>
              <a href="https://www.gatsbyjs.org/">Gatsby</a>
            </li>
            <li>
              <a href="https://www.netlify.com/">Netlify</a>
            </li>
            <li>
              <a href="https://www.netlifycms.com/">Netlify CMS</a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Home;
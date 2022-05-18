import React from "react";
import Navigation from "../components/Navigation";

const Credit = () => {
  return (
    <div className="credit">
      <Navigation />
      <div className="credit-content">
        <h1>Crédits</h1>
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

export default Credit;
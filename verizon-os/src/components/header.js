import { Link } from "gatsby";
import React from "react";
import logo from "../images/vz_150_rgb_p.jpg";
import { Title, Body } from '@vds/typography';

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
            <img src={logo} alt="VzLogo"></img>
            <div className="opensource-text">
              <Title size="small">Open Source</Title>
            </div>
        </div>
        {/* <div className="title">
            <Title size="small">Open Source</Title>
        </div> */}
        <div className="navigation">
          <nav>
            <Link to="/home" style={{ textDecoration: 'none' }}><Body size="medium" bold={true}>Home</Body></Link>

            {/* Deprecating Blog Tab Until We Have A Blog Ready */}

            {/* <Link to="/blog"><Body size="large">Blog</Body></Link> */}
            
            <Link to="/projects" style={{ textDecoration: 'none' }}><Body size="medium" bold={true}>Projects</Body></Link>
            <Link to="/community" style={{ textDecoration: 'none' }}><Body size="medium" bold="true">Community</Body></Link>
            <Link to="/attributions" style={{ textDecoration: 'none' }}><Body size="medium" bold={true}>Attributions</Body></Link>
          </nav>
        </div>
      </div>  
    </div>
  </header>
);

export default Header;
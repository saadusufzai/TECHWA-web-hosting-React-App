import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="inner-footer">
          <ul>
            <h3>Web Hosting</h3>
            <li>CPanel</li>
            <li>WHMS</li>
            <li>DOMAIN</li>
          </ul>
          <ul>
            <h3>Web Design Tools</h3>
            <li>Adobe XD</li>
            <li>Figma</li>
            <li>PhotoShop</li>
          </ul>
          <ul>
            <h3>VPS</h3>
            <li>Cloud</li>
            <li>Private Server</li>
            <li>Dedicated Server</li>
          </ul>
          <ul>
            <h3>Contact Us</h3>
            <li>
              {" "}
              <i className="fa fa-map-marker" aria-hidden="true"></i> 120-N Mandi
              Town Bhakkar
            </li>
            <li>
              {" "}
              <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
              saadusufzai@gmail.com
            </li>
            <li>
              {" "}
              <i className="fa fa-link" aria-hidden="true"></i> www.techwa.io
            </li>
            <li>
              {" "}
              <i className="fa fa-phone" aria-hidden="true"></i> 03326877676
            </li>
          </ul>
        </div>
        {/* <div className="social">
        <input type="text" name="Newsletteer" id="newsletter" placeholder="Subscribe to Newsletters">
      </div> */}

        <div className="copyright">
          Copyright 2020 techwa.io | All rights are reserved by TECHWA.IO |
          Developed by <a href="http://github.com/saadusufzai" target="_blank" style={{color: '#fff', marginLeft: '5px'}} > Saad Aslam</a> 
        </div>
      </footer>
    </div>
  );
};

export default Footer;

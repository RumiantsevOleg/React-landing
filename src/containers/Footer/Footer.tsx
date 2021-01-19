import React from "react";
import useStyle from "./Footer.style.js";

const Footer = () => {
  const classes = useStyle();
  return (
    <div className={classes.Footer}>
      <div className={classes.content}>
        <div className={classes.trafalgarWrap}>
          <div className={classes.logoWrap}>
						<div className={classes.logo}>T</div>
            <h3>Trafalgar</h3>
          </div>
          <div>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </div>
          <div className={classes.lastText}>©Trafalgar PTY LTD 2020. All rights reserved</div>
        </div>


        <div className={classes.itemsWrap}>
          <h3>Company</h3>
          <span>About</span>
          <span>Testimonials</span>
          <span>Find a doctor</span>
          <span>Apps</span>
        </div>

        <div className={classes.itemsWrap}>
          <h3>Region</h3>
          <span>Indonesia</span>
          <span>Singapore</span>
          <span>Hongkong</span>
          <span>Canada</span>
        </div>


        <div className={classes.itemsWrap}>
          <h3>Help</h3>
          <span>Help center</span>
          <span>Contact support</span>
          <span>Instructions</span>
          <span>How it works</span>
        </div>

      </div>
    </div>
  );
};

export default Footer;

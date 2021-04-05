import React from "react";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <>
    <div className={classes.footerInfo}>
      <div className={classes.aboutUs}>
        <h6>About Us</h6>
        <p>
          Hey!<br/>
          We are providing  Medicine at your door step in MuzaffarNagar.
        </p>
      </div>
      <div className={classes.quickLinks}>
        <h6>Quick Links</h6>
        <ul class="list-unstyled">
          <li>
            <a className={classes.links}>Supplements</a>
          </li>
          <li>
            <a className={classes.links}>Vitamins</a>
          </li>
          <li>
            <a className={classes.links}>Diet &amp; Nutrition</a>
          </li>
          <li>
            <a className={classes.links}>Tea &amp; Coffee</a>
          </li>
        </ul>
      </div>
      <div className={classes.contactUs}>
        <h6>Contact Info</h6>
        <ul class="list-unstyled">
          <li>
          <i class='fas fa-map-marker-alt' style={{color:"rgb(91, 231, 232)",marginRight: "7px"}}></i>
             Lane No:-13,Gandhi Colony,MuzaffarNagar
          </li>
          <li>
          <i class='fas fa-phone' style={{color:"rgb(91, 231, 232)",marginRight: "7px"}}></i>
            <a href="tel://23923929210" className={classes.links}>+91 8433442963</a>
          </li>
          <li>
          <i class='fas fa-envelope' style={{color:"rgb(91, 231, 232)",marginRight: "7px"}}></i>
              patpatia.arjun5@gmail.com</li>
        </ul>
      </div>
    </div>
      <div className={classes.footerText}>
      <p>
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All rights reserved | Desigined and Developed
              with <i class="fa fa-heart" style={{color:"red"}}></i> by <a className={classes.links}>CoaDiam Technologies Pvt Ltd.</a>
            </p>
    </div>
    </>
  )
};

export default Footer;

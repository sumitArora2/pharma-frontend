import React from "react";
import classes from "./About.module.css";
import bgImage from "../../images/BgImage.jpg";
import Rajendarji from "../../images/RajendarUncleji.jpeg";
import person4 from "../../images/person_4.jpg";
import Ajayji from "../../images/AjayUncleJi.jpeg";
import Arjun from "../../images/Arjun.jpeg"
import Krishna from "../../images/Krishna.jpeg"
import MohanLalJi from "../../images/MohanLalJi.jpeg"
const About = () => {
  return (
    <>
      <div className={classes.banner}>
        <img src={bgImage} className={classes.backgroundImg} />
        <div className={classes.centered}>
          <h1 className={classes.bannerHeading}>ABOUT US</h1>
          <h5>Lorem, ipsum dolor sit amet consectetur adipisicing.</h5>
        </div>
      </div>
      <div className={classes.how}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/p3y2UTTXTQA"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        {/* <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" className={classes.howVideo}></iframe> */}
        <div className={classes.howText}>
          <h2>How We Started</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            repellat, dicta at laboriosam, nemo exercitationem itaque eveniet
            architecto cumque, deleniti commodi molestias repellendus quos sequi
            hic fugiat asperiores illum. Atque, in, fuga excepturi corrupti
            error corporis aliquam unde nostrum quas. Accusantium dolor ratione
            maiores est deleniti nihil? Dignissimos est, sunt nulla illum autem
            in, quibusdam cumque recusandae, laudantium minima repellendus.
          </p>
        </div>
      </div>

      <div className={classes.trust}>
        <div className={classes.trustText}>
          <h2>We Are Trusted Company</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            repellat, dicta at laboriosam, nemo exercitationem itaque eveniet
            architecto cumque, deleniti commodi molestias repellendus quos sequi
            hic fugiat asperiores illum. Atque, in, fuga excepturi corrupti
            error corporis aliquam unde nostrum quas. Accusantium dolor ratione
            maiores est deleniti nihil? Dignissimos est, sunt nulla illum autem
            in, quibusdam cumque recusandae, laudantium minima repellendus.
          </p>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/JLJP_5opjgU"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className={classes.services}>
        <div>
          <i class="fa fa-truck" style={{ fontSize: "40px" }}></i>
          <h5>Free Shipping</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            repellat, dicta
          </p>
        </div>
        <div>
          <i class="fa fa-refresh" style={{ fontSize: "40px" }}></i>
          <h5>Free Returns</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            repellat, dicta
          </p>
        </div>
        <div>
          <i class="fa fa-question-circle" style={{ fontSize: "40px" }}></i>
          <h5>Customer Support</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            repellat, dicta
          </p>
        </div>
      </div>
      <h2 className={classes.teamHead}>The Team</h2>
      <div className={classes.team}>
        <div>
          <img src={MohanLalJi} className={classes.teamImg} />
          <h3>LATE SHREE DR. MOHAN LAL JI PATPATIA</h3>
          <h6>Founder(18/04/1916 - 18-08-2004)</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <div>
        <img src={Rajendarji} className={classes.teamImg} />
          <h3>LATE SHREE RAJENDAR PATPATIA</h3>
          <h6>Co-Founder(31/10/1952 - 11-09-2020)</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <div>
        <img src={Ajayji} className={classes.teamImg} />
          <h3>LATE SHREE AJAY PATPATIA</h3>
          <h6>Co-Founder(16/02/1972 - 15-09-2020)</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <div>
        <img src={Arjun} className={classes.teamImg} />
          <h3>ARJUN PATPATIA</h3>
          <h6>Co-Founder</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <div>
        <img src={Krishna} className={classes.teamImg} />
          <h3>KRISHNA PATPATIA</h3>
          <h6>Co-Founder</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

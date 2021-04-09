import React, { useEffect } from "react";
import classes from "./HomeScreen.module.css";
import bgImage from "../../images/BgImage.jpg";
import product2 from "../../images/product_02.png";
import exprtbg1 from "../../images/bg_1.jpg";
import exprtbg2 from "../../images/bg_2.jpg";
import TrendingProducts from "../../components/TendingProducts/TrendingProducts";
import { useDispatch } from "react-redux";
import { listProducts } from "../../actions/productActions";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch]);
  return (
    <>
      <div className={classes.banner}>
        <img src={bgImage} className={classes.backgroundImg} />
        <div className={classes.centered}>
          <h2 className={classes.subtitle}>
            Effective Medicine, New Medicine Everyday
          </h2>
          <h1 className={classes.bannerHeading}>Welcome To Pharma</h1>
          <p>
            <a href="#" className="btn btn-primary px-5 py-3">
              Shop Now
            </a>
          </p>
        </div>
      </div>

      <div className={classes.couponContainer}>
        <div className={classes.CopBox1}>
          <h5 className={classes.italic}>
            Free <br />
            Shipping
          </h5>
          <h6>Amet sit amet dolor</h6>
          <p>
            Lorem, ipsum dolor sit amet <br />
            consectetur adipisicing.
          </p>
        </div>
        <div className={classes.CopBox2}>
          <h5 className={classes.italic}>
            Season <br />
            Sale 50% Off
          </h5>
          <h6>Amet sit amet dolor</h6>
          <p>
            Lorem, ipsum dolor sit amet <br />
            consectetur adipisicing.
          </p>
        </div>
        <div className={classes.CopBox3}>
          <h5 className={classes.italic}>
            Buy <br />A Gift Card
          </h5>
          <h6>Amet sit amet dolor</h6>
          <p>
            Lorem, ipsum dolor sit amet <br />
            consectetur adipisicing.
          </p>
        </div>
      </div>

      <h4>NEW PRODUCTS</h4>
      <div className={classes.pop_Prods}>
        <div>
          <img src={product2} style={{ maxWidth: "100%", margin: "auto" }} />
          <h5 className={classes.italic}>Chanca Piedra</h5>
          <p>&#8377; 80</p>
        </div>
        <div>
          <img src={product2} style={{ maxWidth: "100%", margin: "auto" }} />
          <h5 className={classes.italic}>Chanca Piedra</h5>
          <p>&#8377; 70</p>
        </div>
        <div>
          <img src={product2} style={{ maxWidth: "100%", margin: "auto" }} />
          <h5 className={classes.italic}>Chanca Piedra</h5>
          <p>&#8377; 70</p>
        </div>
        <div>
          <img src={product2} style={{ maxWidth: "100%", margin: "auto" }} />
          <h5 className={classes.italic}>Chanca Piedra</h5>
          <p>&#8377; 70</p>
        </div>
        <div>
          <img src={product2} style={{ maxWidth: "100%", margin: "auto" }} />
          <h5 className={classes.italic}>Chanca Piedra</h5>
          <p>&#8377; 70</p>
        </div>
        <div>
          <img src={product2} style={{ maxWidth: "100%", margin: "auto" }} />
          <h5 className={classes.italic}>Chanca Piedra</h5>
          <p>&#8377; 70</p>
        </div>
      </div>
      <div>
        <p>
          <a href="#" class="btn btn-info px-5 py-3">
            View All Products
          </a>
        </p>
      </div>

      <TrendingProducts />
      <div className={classes.exprtContainer}>
        <div style={{ position: "relative" }}>
          <img src={exprtbg1} className={classes.exprt} />
          <h1 className={classes.pharmaHeading}>Pharma Products</h1>
          <p className={classes.pharmasubHeading}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            ex ad minus rem odio voluptatem.
          </p>
        </div>
        <div style={{ position: "relative" }}>
          <img src={exprtbg2} className={classes.exprt} />
          <h1 className={classes.exprtHeading}>Rated by Experts</h1>
          <p className={classes.exprtsubHeading}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            ex ad minus rem odio voluptatem.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;

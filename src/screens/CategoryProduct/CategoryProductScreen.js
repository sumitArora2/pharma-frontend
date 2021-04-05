import React, { useEffect } from "react";
import { Card, CardDeck } from "react-bootstrap";
import Rating from "../../components/Rating";
import weight from "../../images/weight.jpg";
import { Link } from "react-router-dom";
import shoe1 from "../../images/shoe-1.png";
import product2 from "../../images/product_02.png";
import { useDispatch, useSelector } from "react-redux";
import { listCategoryProducts } from "../../actions/productActions";
import "./CategoryProduct.css";
import { addToCart } from "../../actions/cartActions";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
const CategoryProduct = ({ history, match }) => {
  const catName = match.params;
  console.log("catName", catName);
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const { error, loading, categoryProducts } = productCategoryList;
  console.log("categoryProducts", categoryProducts);
  console.log("loading", loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCategoryProducts({ categoryName: catName.name }));
  }, []);
  const productDetail = (id) => {
    history.push(`/product/${id}`);
  };
  const addToCartHandler = (id) => {
    history.push(`/cart/${id}?qty=1`);
  };
  const buyNow = (productId) => {
    console.log("productId", productId);
    if (productId) {
      history.push("/login?redirect=shipping");
      dispatch(addToCart(productId, 1));
    }
  };
  console.log("categoryProducts",categoryProducts);
  return (
    <div className="products">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="product-items">
          {categoryProducts &&
            categoryProducts.map((product) => (
              <div key={product._id} className="product">
                <div className="product-content">
                  <div className="product-img">
                    <img
                      src={product.image}
                      alt="product image"
                      style={{ width: "100%" }}
                      onClick={() => productDetail(product._id)}
                    />
                  </div>
                  <div className="product-btns">
                    <button
                      type="button"
                      className="btn-cart"
                      disabled={product.countInStock === 0}
                      onClick={() => addToCartHandler(product._id)}
                    >
                      {" "}
                      add to cart
                      <span>
                        <i class="fas fa-plus"></i>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="btn-buy"
                      onClick={() => buyNow(product._id)}
                    >
                      {" "}
                      buy now
                      <span>
                        <i class="fas fa-shopping-cart"></i>
                      </span>
                    </button>
                  </div>
                </div>

                <div className="product-info">
                  <div className="product-info-top">
                    <h3 className="sm-title">{product.brand}</h3>
                    <div className="rating">
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="far fa-star"></i>
                      </span>
                    </div>
                  </div>
                  <a href="#" className="product-name">
                    {product.name}
                  </a>
                  <p className="product-price">&#8377; {product.mrp}</p>
                  <p className="product-price">&#8377; {product.actualPrice}</p>
                </div>

                <div className="off-info">
                  <h3 className="sm-title">{product.discount}% off</h3>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;

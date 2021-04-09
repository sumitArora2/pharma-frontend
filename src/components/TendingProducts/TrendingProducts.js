import React from 'react'
import './TrendingProducts.css';
import product2 from "../../images/product_02.png";

const TrendingProducts = () => {
    return (
        <div>
           <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>
              Top Rated<b>Products</b>
            </h2>
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
              data-interval="0"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div class="row">
                    <div class="col-sm-3">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img src={product2} className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                          <h4>CHANCA PIEDRA</h4>
                          <p className="item-price">
                          <strike>&#8377; 90</strike> <span>&#8377; 70</span>
                          </p>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href="#" class="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img src={product2} className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                          <h4>CHANCA PIEDRA</h4>
                          <p className="item-price">
                          <strike>&#8377; 90</strike> <span>&#8377; 70</span>
                          </p>
                          <div className="star-rating">
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href="#" class="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img src={product2} className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                          <h4>CHANCA PIEDRA</h4>
                          <p className="item-price">
                          <strike>&#8377; 90</strike> <span>&#8377; 70</span>
                          </p>
                          <div className="star-rating">
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-half-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href="#" class="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img src={product2} class="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                          <h4>CHANCA PIEDRA</h4>
                          <p className="item-price">
                          <strike>&#8377; 90</strike> <span>&#8377; 70</span>
                          </p>
                          <div className="star-rating">
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href="#" class="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div class="row">
                    <div class="col-sm-3">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img src={product2} class="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                          <h4>CHANCA PIEDRA</h4>
                          <p className="item-price">
                          <strike>&#8377; 90</strike> <span>&#8377; 70</span>
                          </p>
                          <div className="star-rating">
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href="#" class="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img src={product2} className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                          <h4>CHANCA PIEDRA</h4>
                          <p className="item-price">
                          <strike>&#8377; 90</strike> <span>&#8377; 70</span>
                          </p>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-half-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href="#" class="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img src={product2} class="img-fluid" alt="" />
                        </div>
                        <div class="thumb-content">
                          <h4>CHANCA PIEDRA</h4>
                          <p class="item-price">
                          <strike>&#8377; 90</strike> <span>&#8377; 70</span>
                          </p>
                          <div class="star-rating">
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href="#" class="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img src={product2} class="img-fluid" alt="" />
                        </div>
                        <div class="thumb-content">
                          <h4>CHANCA PIEDRA</h4>
                          <p class="item-price">
                          <strike>&#8377; 90</strike> <span>&#8377; 70</span>
                          </p>
                          <div class="star-rating">
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href="#" class="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img src={product2} class="img-fluid" alt="" />
                        </div>
                        <div class="thumb-content">
                          <h4>CHANCA PIEDRA</h4>
                          <p class="item-price">
                          <strike>&#8377; 90</strike> <span>&#8377; 70</span>
                          </p>
                          <div class="star-rating">
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href="#" class="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img src={product2} class="img-fluid" alt="" />
                        </div>
                        <div class="thumb-content">
                          <h4>CHANCA PIEDRA</h4>
                          <p class="item-price">
                          <strike>&#8377; 90</strike> <span>&#8377; 70</span>
                          </p>
                          <div class="star-rating">
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href="#" class="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img src={product2} class="img-fluid" alt="" />
                        </div>
                        <div class="thumb-content">
                          <h4>CHANCA PIEDRA</h4>
                          <p class="item-price">
                            <strike>&#8377; 90</strike> <span>&#8377; 70</span>
                          </p>
                          <div class="star-rating">
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href="#" class="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img src={product2} class="img-fluid" alt="" />
                        </div>
                        <div class="thumb-content">
                          <h4>CHANCA PIEDRA</h4>
                          <p class="item-price">
                            <strike>&#8377; 90</strike> <span>&#8377; 70</span>
                          </p>
                          <div class="star-rating">
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href="#" class="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                className="carousel-control-prev"
                href="#myCarousel"
                data-slide="prev"
              >
                <i class="fa fa-angle-left"></i>
              </a>
              <a
                className="carousel-control-next"
                href="#myCarousel"
                data-slide="next"
              >
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default TrendingProducts

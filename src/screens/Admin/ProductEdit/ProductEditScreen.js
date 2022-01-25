import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../../../components/FormContainer";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import { listCategories } from "../../../actions/categoryActions";
import {
  listProductDetails,
  updateProduct,
} from "../../../actions/productActions";
import { PRODUCT_UPDATE_RESET } from "../../../constants/productConstants";


const { REACT_APP_SERVER_URL } = process.env;

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id;

  const [name, setName] = useState("");
  const [actualPrice, setActualPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [mrp, setMrp] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;
  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;
  console.log("product", product);
  console.log("categories", categories);
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push("/admin/productlist");
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setActualPrice(product.actualPrice);
        setDiscount(product.discount);
        setMrp(product.mrp);
        setImage(product.image);
        setBrand(product.brand);
        if (product?.category == 'Sample category' && categories.length > 0) {
          setCategory(categories[0].name);
        }
        setCountInStock(product.countInStock);
        setDescription(product.description);
      }
    }
    dispatch(listCategories("No Pagination"));
  }, [dispatch, history, productId, product, successUpdate]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(`${REACT_APP_SERVER_URL}/upload`, formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        actualPrice,
        mrp,
        discount,
        image,
        brand,
        category,
        description,
        countInStock,
      })
    );
  };
  const calculatePrice = (discountPrice) => {
    console.log(discountPrice);
    setDiscount(discountPrice);
    let price = mrp - (mrp * discountPrice) / 100;
    setActualPrice(Math.round(price));
  };
  return (
    <>
      <Link to="/admin/productlist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>MRP</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter MRP"
                value={mrp}
                onChange={(e) => setMrp(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Discount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter discount"
                value={discount}
                onChange={(e) => calculatePrice(e.target.value)}
              ></Form.Control>
              {/*  */}
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Actual Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={actualPrice}
                onChange={(e) => setActualPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Product Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={uploadFileHandler}
              ></Form.File>
            </Form.Group>

            <Form.Group controlId="brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="countInStock">
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter countInStock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Example select</Form.Label>
              <Form.Control
                as="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option>{cat.name}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default ProductEditScreen;

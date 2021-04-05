import React, { useEffect } from 'react'
import { Row, Col, ListGroup, Image, Form, Button, Card,Container } from 'react-bootstrap'
import classes from './Categories.module.css';
import vitamins from "../../images/vitamins.jpg";
import wintercare from "../../images/wintercare.jpg";
import ayurveda from "../../images/ayurveda.jpg";
import healthcare from "../../images/healthcare.jpg";
import womencare from "../../images/womencare.jpg";
import babycare from "../../images/babycare.jpeg";
import antipollution from "../../images/antipollution.jpg";
import musclecare from "../../images/musclecare.jpg";
import handwash from "../../images/handwash.jpg";
import oralcare from "../../images/oralcare.jpg";
import stomachcare from "../../images/stomachcare.png";
import skincare from "../../images/skincare.jpg";
import immunitybooster from "../../images/immunitybooster.jpg";
import diabetescare from "../../images/diabetescare.jpg";
import sexualwellness from "../../images/sexualwellness.jpeg";
import heatingaids from "../../images/heatingaids.jpg";
import mosquito from "../../images/mosquito.jpg";
import doctorscorner from "../../images/doctorscorner.jpeg";
import haircare from "../../images/haircare.jpg";
import nutritionaldrinks from "../../images/nutritionaldrinks.jpg";
import healthfood from "../../images/healthfood.jpg";
import men from "../../images/men.jpg";
import weight from "../../images/weight.jpg";
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {
   listCategories
 } from '../../actions/categoryActions';
const Categories = ({match}) => {
  const pageNumber = match.params.pageNumber || 1

   const categoryList = useSelector((state) => state.categoryList);
   const { loading,error,categories } = categoryList;
   console.log("categoryList",categoryList);
   const dispatch = useDispatch();
   useEffect(()=>{
      dispatch(listCategories(pageNumber))
   },[]);
    return (
       <>
      { loading ? (
         <Loader />
       ) : error ? (
         <Message variant='danger'>{error}</Message>
       ) : (
       <div className={classes.categoryContainer}>
         <h4 className={classes.catTitle}>CATEGORIES FOR HEALTHCARE PRODUCTS</h4>
         <div className={classes.catItems}>
         {categories && categories.map((category)=>(
             <div className={classes.catItem} key={category._id}>
             <Link to={`/categories/${category.name}`}>
             <img src={category.image} alt={category.name} className={classes.catImage}/>
                <h6 className={classes.catItemTitle}>{category.name}</h6>
                </Link>
             </div>
         ))}
         </div>
       </div>
       )}
       </>
    )
}

export default Categories

import { Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UPLOAD_URL } from "../../config";
import http from "../../services/api";
import { ToastObjects } from "../../utils/toast/toastObject";
import { useDispatch, useSelector } from "react-redux";
import homeServices from "../../services/homeServices";


function Footer() {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.home.settings);
  let categories = useSelector((state) => state.home.categories);
  if (categories.length > 0) {
    categories = categories.slice(0, 6);
  }
  useEffect(() => {
    const getSettings = async () => {
      try {
        await homeServices.getHomeSettings(dispatch);
      } catch (error) {
        toast.error(error.message, ToastObjects);
      }
    };
    getSettings();
  }, []);
  return (
    <div>
      {/* Footer */}
      <section className="section-padding  border-top" style={{ backgroundColor:'#E2E2DC ',color: 'red' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="feature-box">
                <i className="mdi mdi-truck-fast" />
                <h6>Free &amp; 24 hrs Delivery </h6>
                <p>Get to yours Door step</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="feature-box" >
                <i className="mdi mdi-basket" />
                <h6>100% Satisfaction Guarantee</h6>
                <p>HIGHEST RATING IN POKHARA</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="feature-box">
                <i className="mdi mdi-tag-heart" />
                <h6>Great Daily Deals Discount</h6>
                <p>Varoius attractive discounts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding footer" style={{ backgroundColor:'#2C2D30', color: '#34e2b5' }}>
        < div className="container">
          <div className="row">
          <div className="col-lg-3 col-md-3">
              <h4 className="mb-5 mt-0">
                <Link className="logo" to="/">
                  <img
                    src={UPLOAD_URL + settings.logo}
                    alt={settings.site_name}
                  />
                </Link>
              </h4>
              </div>
             
            
            <div className="col-lg-2 col-md-2">
              <h6 className="text-white">INFORMATION </h6>
              <ul className="footer-list">
                <li>
                  <a href="#"> Your Account</a>
                </li>
                <li>
                  <a href="#"> Free Shipping Policy</a>
                </li>
                <li>
                  <a href="#"> Your Cart</a>
                </li>
                <li>
                  <a href="#"> Return Policy</a>
                </li>
                <li>
                  <a href="#">Free Coupon</a>
                </li>
                <ul></ul>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2">
              <h6 className="text-white">CATEGORIES</h6>
              <ul className="footer-list">
                {categories &&
                  categories.length > 0 &&
                  categories.map((category, index) => (
                    <li key={index}>
                      <a href="#">{category.name}</a>
                    </li>
                  ))}
              </ul>
              </div>
              <div className="col-lg-2 col-md-2">
              <h6 className="text-white">GADGET HUB</h6>
              <ul className="footer-list">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">contact us</a>
                </li>
                <li>
                  <a href="#">Customer service</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <ul></ul>
              </ul>
              </div> 
            {/* <div className="col-lg-3 col-md-3">
            <h6 className="mb-4">GADGET HUB</h6>
              <ul className="footer-list">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">contact us</a>
                </li>
                <li>
                  <a href="#">Customer service</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <ul></ul>
              </ul>
              </div> */}
              <div className="col-lg-3 col-md-3">
              <h6 className="text-white">CONTACT US</h6>
              <ul className="footer-list">
          
                <li>
                  <a href="#"> {settings.phone} </a>
                  </li>
                <li>
                  <a href="#"> {settings.email} </a>
                </li>
                <li>
                  <a href="#"> {settings.address} </a>
                </li>
                </ul>
               </div>
              <ul className="col-lg-4 col-md-4">
              <ul className="footer-social">

             <a className="btn-twitter mx-1"style={{ backgroundColor:'#d3d1db', color: 'blue' }}
                  href={settings.twitterUrl}
                  target="_blank"  >
                  <i className="mdi mdi-facebook" />
                </a>

                <a
                className="btn-twitter mx-1 "style={{ backgroundColor:'#d3d1db', color: '#174ae4' }}
                  href={settings.twitterUrl}
                  target="_blank"
               >
                
                  <i className="mdi mdi-twitter" />
                </a>
                <a
                  className="btn-linkedin mx-1" style={{ backgroundColor:'#0a66c2', color: 'white' }}
                  href={settings.linkedinUrl}
                  target="_blank"
                >
                  <i className="mdi mdi-linkedin" />
                </a>
                <a
                  className="btn-instagram mx-1" style={{ backgroundColor: '#e6e6e6', color: '#F56040' }}
                  href={settings.instagramUrl}
                  target="_blank"
                >
                  <i className="mdi mdi-instagram" />
                </a>
                </ul>
                </ul>
              </div>
              </div>
      </section>
      {/* End Footer */}
      {/* Copyright */}
      <section className="footer-bottom footer " style={{ backgroundColor:'#2C2D30', color: '#25a278' }}>
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-6 col-sm-6">
              <p className="mt-1 mb-0">
                © Copyright {new Date().getFullYear()}
                <strong className="text-dark"></strong>
                . All Rights Reserved
                <br />
                <small className="mt-0 mb-0">
                  Made with <i className="mdi mdi-heart text-danger" />
                  by{" "}
                  <a href="https://github.com/Kalebaun18" target="_blank">
                    BrandBuilder
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End Copyright */}
    </div>
  );
}

export default Footer;

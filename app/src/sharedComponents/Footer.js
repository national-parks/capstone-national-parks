import React from "react"
import image from "./img/gnplm.jpg"
import FooterStyle from "./Footer.module.css"
import Image from 'react-bootstrap/Image'

export const Footer = () => {
  return (
    <>
      <div className={FooterStyle.footer}>
        <div className="card bg-dark text-white">
          <img src={image} className="card-img" alt="Image of Glacier National Park Lake McDonald" />
            <div className="card-img-overlay">
              <h5 className="card-title">National Parks</h5>
                <div id="footerLinks" className="list-group">
                  <p><a href="" className="text-white bg-dark">About Us </a></p>
                  <p><a href="" className="text-white bg-dark">Home Page </a></p>
                  <p><a href="" className="text-white bg-dark">Campground Page </a></p>
                  <p><a href="" className="text-white bg-dark">Park Page </a></p>
              </div>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.</p>
                <p className="card-text">Last updated 3 mins ago</p>
            </div>
        </div>
      </div>

      <footer className="fixed-bottom" id="footer">
        <div className="footer">
          <nav className="navbar navbar-expand-lg bg-dark">
            <a className="navbar-brand" href="#">Donate to National Parks</a>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Search</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact Us</a>
                </li>
              </ul>
              <span className="navbar-text text-white">Made by Sara, John, and Mauricio</span>
            </div>
          </nav>
        </div>
      </footer>
  </>
  )
}
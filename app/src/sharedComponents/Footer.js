import React from "react"

export const Footer = () => {
  return (
    <>

      <div className="card bg-dark text-white">
        <img src="img/gnplm.jpg" className="card-img" alt="Image of Glacier National Park Lake McDonald"></img>
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


    </>
  )
}
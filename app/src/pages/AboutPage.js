import React from 'react'
//import image from "./img/saraBeck.png"
//import image from "./img/johnRomero.png"
//import image from "./img/mauricioMadrid.jpg"

export const AboutPage = () => {
  return (
    <>
      <div className="container mt-5">
        <h1>Meet the Team</h1>
        <p>We created this website while we were Full Stack Web Development student Interns
          at CNM Ingenuity, Inc. part of Cohort 29. </p>
      </div>
      <div className="container m-5">
        <div className="card-group">
          <div className="card pr-5">
            <img src="./img/saraBeck.png" className="card-img-top" alt="Sara Beck" />
              <div className="card-body">
                <h5 className="card-title">Meet Sara Beck</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
          </div>
          <div className="card pr-5">
            <img src="./img/johnRomero.png" className="card-img-top" alt="John Romero" />
              <div className="card-body">
                <h5 className="card-title">Meet John Romero</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional
                  content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
          </div>
          <div className="card">
            <img src="./img/mauricioMadrid.jpg" className="card-img-top" alt="Mauricio Madrid" />
              <div className="card-body">
                <h5 className="card-title">Meet Mauricio Madrid</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to show that equal height
                  action.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
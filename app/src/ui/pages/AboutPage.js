import React from 'react'
import image from '../../img/person.png'

export const AboutPage = () => {
  return (
    <>
      <div className="container m-5">
        <h3>Our Goals</h3>
        <p>I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot.
          I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. We are Groot. I am Groot. We are Groot.
          We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. I am Groot. We are Groot. I am Groot.
          We are Groot.</p>
        <p>We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. We are Groot.
          We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot.
          I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. We are Groot. We are Groot. I am Groot.
          We are Groot.</p>
        <p>We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. We are Groot.
          We are Groot. I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot.
          I am Groot. We are Groot. We are Groot. I am Groot. I am Groot. We are Groot. I am Groot. We are Groot.
          We are Groot.</p>
      </div>
      <div className="container m-5">
        <h5>Meet Sarah</h5>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={image} className="card-img" alt="Temp pic of Sara" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-5">
        <h5>Meet John</h5>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={image} className="card-img" alt="Temp pic of John" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-5">
        <h5>Meet Mauricio</h5>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={image} className="card-img" alt="temp pic of Mauricio" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
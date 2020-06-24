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
              <img src={image} className="card-img" alt="Picture of Sara Beck" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Hello, I'm Sara Beck</h5>
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
              <img src={image} className="card-img" alt="Picture of John Romero" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Hello, I'm John Romero</h5>
                <p className="card-text">A FullStack Web Developer.</p>
                <p>Has a strong Customer Service background and wants to continue to learn and grow as a fullstack web developer.</p>
                <p>Enjoys spending as much time as possible in the outdoors with family. Would like to learn about other Parks outside of New Mexico. (hunting, fishing and camping)
                </p>
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
              <img src={image} className="card-img" alt="Picture of Mauricio Madrid" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Hello, I'm Mauricio Madrid</h5>
                <p className="card-text">Born and raised in Las Vegas, New Mexico in the shadow of the Sangre de Cristo Mountains along the Pecos River where I learned to swim and fish.</p>
                <p> I enjoy spending as much time as possible in the great outdoors. (Camping, fishing, hunting, mountain biking, snowboarding, golfing, photography, etc.)</p>

                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
import React from 'react'
import image1 from '../../../src/img/mauricioMadrid.jpg'
import image2 from '../../../src/img/johnRomero.jpg'
import image3 from '../../../src/img/saraBeck.jpg'

export const AboutPage = () => {
  return (
    <>
      <div className="container m-5">
        <h3>Our Goals</h3>
        <p>We created this site to be a source of information about the National Parks of the United States.  The user will find a list of the national parks with an image and description.
        </p>
        <p>We intended it to be personal to the user which is why we included an option to create an account and track your favorite parks, visited parks, and want to visit parks.
        </p>
        <p>We strive to make this site as informative and user friendly as possible.  We will continue to update and maintain the website often.
        </p>
        <p>Have a great day and enjoy the great outdoors!</p>
      </div>
      <div className="container m-5">
        <h5>Meet Sarah</h5>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={image3} className="card-img" alt="Picture of Sara Beck" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Hello, I'm Sara Beck</h5>
                <p className="card-text">Sarah is a fullstack Javascript developer.</p>
                <p>She has a passion for learning and adding to her skill sets, as well as helping those in need.</p>
              <p>Her large variety of job experience allows her to bring a new perspective to her teams. She also has a tenacious attitude, sticking to things to completion to make sure her team succeeds.</p>
              <p>Has experience with taxes, education, customer service, and tech such as Wordpress and basic Python allows her to help her team.</p>
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
              <img src={image2} className="card-img" alt="Picture of John Romero" />
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
              <img src={image1} className="card-img" alt="Picture of Mauricio Madrid" />
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
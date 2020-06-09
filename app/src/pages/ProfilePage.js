import React from "react"
import Image from "../img/parkPlaceHolder.png"

export const ProfilePage = () => {
  return (
    <>
      <div className="container m-5">
        <form>
          <div id="profilePic">
            <img src= {Image} className="img-fluid img-thumbnail" alt="Picture Place Holder" />
          </div>
          <div className="form-group row">
            <label htmlFor="colFormLabel1" className="col-sm-2 col-form-label">Name </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="colFormLabel1" placeholder="col-form-label" />
            </div>
          </div>
        </form>
        <form>
          <div className="form-group row">
            <label htmlFor="colFormLabel2" className="col-sm-2 col-form-label">Email </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="colFormLabel2" placeholder="col-form-label" />
            </div>
          </div>
        </form>
        <form>
          <div className="form-group row">
            <label htmlFor="colFormLabel3" className="col-sm-2 col-form-label">Phone Number </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="colFormLabel3" placeholder="col-form-label" />
            </div>
          </div>
          <button type="button" className="btn btn-primary">Edit Profile</button>
        </form>
      </div>
      <div className="container m-5">
        <h1>Favorite Parks</h1>
        <div className="card-deck">
          <div className="card">
            <img src={Image} className="card-img-top" alt="Park Image Place Holder" />
              <div className="card-body">
                <h5 className="card-title">First Favorite Park</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
          </div>
          <div className="card">
            <img src={Image} className="card-img-top" alt="Park Image Place Holder" />
              <div className="card-body">
                <h5 className="card-title">Second Favorite Park</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional
                  content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
          </div>
          <div className="card">
            <img src={Image} className="card-img-top" alt="Park Image Place Holder" />
              <div className="card-body">
                <h5 className="card-title">Third Favorite Park</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to show that equal height
                  action.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
          </div>
        </div>
      </div>
      <div className="container m-5">
        <h1>Want to Visit Parks</h1>
        <div className="card-deck">
          <div className="card">
            <img src={Image} className="card-img-top" alt="Park Image Place Holder" />
              <div className="card-body">
                <h5 className="card-title">First Want to Visit Park</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
          </div>
          <div className="card">
            <img src={Image} className="card-img-top" alt="Park Image Place Holder" />
              <div className="card-body">
                <h5 className="card-title">Second Want to Visit Park</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional
                  content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
          </div>
          <div className="card">
            <img src={Image} className="card-img-top" alt="Park Image Place Holder" />
              <div className="card-body">
                <h5 className="card-title">Third Want to Visit Park</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to show that equal height
                  action.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
          </div>
        </div>
      </div>
      <div className="container m-5">
        <h1>Visited Parks</h1>
        <div className="card-deck">
          <div className="card">
            <img src={Image} className="card-img-top" alt="Park Image Place Holder" />
              <div className="card-body">
                <h5 className="card-title">First Visited Park</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
          </div>
          <div className="card">
            <img src={Image} className="card-img-top" alt="Park Image Place Holder" />
              <div className="card-body">
                <h5 className="card-title">Second Visited Park</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional
                  content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
          </div>
          <div className="card">
            <img src={Image} className="card-img-top" alt="Park Image Place Holder" />
              <div className="card-body">
                <h5 className="card-title">Third Visited Park</h5>
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
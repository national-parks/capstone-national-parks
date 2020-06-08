import React from "react"

export const ProfilePage = () => {
  return (
    <>
      <div className="container m-5">
        <form>
          <div id="profilePic">
            <img src="img/person.png" className="img-fluid img-thumbnail" alt="Picture Place Holder">
          </div>
          <div className="form-group row">
            <label htmlFor="colFormLabel1" className="col-sm-2 col-form-label">Name </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="colFormLabel1" placeholder="col-form-label">
            </div>
          </div>
        </form>
        <form>
          <div className="form-group row">
            <label htmlFor="colFormLabel2" className="col-sm-2 col-form-label">Email </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="colFormLabel2" placeholder="col-form-label">
            </div>
          </div>
        </form>
        <form>
          <div className="form-group row">
            <label htmlFor="colFormLabel3" className="col-sm-2 col-form-label">Phone Number </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="colFormLabel3" placeholder="col-form-label">
            </div>
          </div>
          <button type="button" className="btn btn-primary">Edit Profile</button>
        </form>
      </div>

    </>
  )
}
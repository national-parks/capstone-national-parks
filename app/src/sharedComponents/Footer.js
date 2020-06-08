import React from "react"

export const Footer = () => {
  return (
    <>


      <footer id="footer">
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
              <span id="span1" className="navbar-text">Made by Sara, John, and Mauricio</span>
            </div>
          </nav>
        </div>
      </footer>


    </>
  )
}
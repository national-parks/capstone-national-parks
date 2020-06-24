import React from "react"

export const Footer = () => {
  return (
    <>
      <footer className="bottom" id="footer">
        <div className="footer">
          <nav className="navbar navbar-expand-lg bg-dark">
            <a target="_blank" className="navbar-brand" href="https://www.nps.gov/getinvolved/index.htm">Donate to National Parks</a>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="park-search">Search</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/aboutPage">About Us</a>
                </li>
                {/*<li className="nav-item">*/}
                {/*  <a className="nav-link" href="#">Contact Us</a>*/}
                {/*</li>*/}
              </ul>
              <span className="navbar-text text-white">Made by Sarah, John, and Mauricio</span>
            </div>
          </nav>
        </div>
      </footer>
    </>
  )
}
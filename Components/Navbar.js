import React from 'react'
import {  Link } from "react-router-dom";
const Navbar = () => {
  
    return (
      <div >
        <nav className="navbar fixed-top navbar-expand-lg nav">
          <div className="container-fluid ">
            <Link className="navbar-brand nav-comp" to="/">Khabari</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item ">
                  <Link className="nav-link active nav-comp" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle nav-comp" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories  
                  </Link>
                  <ul className="dropdown-menu" >
                    <li><Link className="dropdown-item dropitem" to="/business">Business</Link></li>
                    <li><Link className="dropdown-item dropitem" to="/entertainment">Entertainment</Link></li>
                    <li><Link className="dropdown-item dropitem" to="/general">General</Link></li>
                    <li><Link className="dropdown-item dropitem" to="/health">Health</Link></li>
                    <li><Link className="dropdown-item dropitem" to="/science">Science</Link></li>
                    <li><Link className="dropdown-item dropitem" to="/sports">Sports</Link></li>
                    <li><Link className="dropdown-item dropitem" to="/technology">Technology</Link></li>
                  </ul>
                </li>
              </ul>              
            </div>
          </div>
        </nav>
        <div>
        <p>This is navbar</p></div>
      </div>
    )
  
}

export default Navbar
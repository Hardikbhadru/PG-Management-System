import React from 'react'
import { Link } from "react-router-dom";
export default function Footer() {
  return (<>
  <footer>
<div className="container">
  <div className="row">
    <div className="col-md-12">
      <nav className="nav-footer">
        <ul className="list-inline">
          <li className="list-inline-item">
          <Link to={'/'} >Home</Link>
          </li>
          <li className="list-inline-item">
            <Link to={'/properties/all'} >Properties</Link>
          </li>
       
          <li className="list-inline-item">
          <Link to={'/pages/contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="socials-a">
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fa fa-pinterest-p" aria-hidden="true"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fa fa-dribbble" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright-footer">
        <p className="copyright color-text-a">
          &copy; Copyright
          <span className="color-a">EstateAgency</span> All Rights Reserved.
        </p>
      </div>
      <div className="credits">
       
        Designed by <Link to="/">Hardik Bhadaru</Link>
      </div>
    </div>
  </div>
</div>
</footer>
     <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
  <div id="preloader"></div>
  </>

  )
}

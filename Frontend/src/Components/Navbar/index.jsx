import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { MdShoppingCartCheckout } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid position-relative">
        <Link className="navbar-brand " href="/">
          E-Shop <FaCartShopping />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control mx-3"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-info mx-3" type="submit">
              Search
            </button>
          </form>
           {/* Checkout Button - Placed outside form */}
        <div className="checkout-btn-container">
          <button className="btn btn-outline-warning">
            Checkout <MdShoppingCartCheckout />
          </button>
        </div>

      

        </div>
      </div>
    </nav>
  );
}

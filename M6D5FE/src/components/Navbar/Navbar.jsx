import { Component } from "react";
import "./navbar.css";
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg  navbar-dark bg-dark "
        style={{ color: "white!important" }}
      >
        <Link to="/" className="navbar-brand ">
          Kostas Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li
              className={`nav-link${
                this.props.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }`}
            >
              <Link to="/" className="nav-link ">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/backOffice"
                className={`${
                  this.props.location.pathname === "/backOffice"
                    ? "nav-link active"
                    : "nav-link"
                }`}
              >
                Backoffice
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);

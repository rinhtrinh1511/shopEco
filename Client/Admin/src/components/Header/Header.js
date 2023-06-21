import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actToken, actGetNameRole } from "../../redux/actions/auth";
import { startLoading, doneLoading } from "../../utils/loading";

class Header extends Component {
  logOut = async () => {
    localStorage.removeItem("_auth");
    const token = null;
    startLoading();
    const setToken = this.props.setTokenRedux(token);
    const setRole = this.props.setTokenRoleRedux(token);
    await Promise.all([setToken, setRole]);
    doneLoading();
  };
  render() {
    return (
      <header className="header">
        <nav className="navbar">
          {/* Search Box*/}
          <div className="search-box">
            <button className="dismiss">
              <i className="icon-close" />
            </button>
            <form id="searchForm" action="#" role="search">
              <input
                type="search"
                placeholder="What are you looking for..."
                className="form-control"
              />
            </form>
          </div>
          <div className="container-fluid">
            <div className="navbar-holder d-flex align-items-center justify-content-between">
              {/* Navbar Header*/}
              <div className="navbar-header">
                {/* Navbar Brand */}
                <Link to="/" className="navbar-brand d-none d-sm-inline-block">
                  <div className="brand-text d-none d-lg-inline-block">
                    <strong>ADMIN</strong>
                  </div>
                </Link>
              </div>
              {/* Navbar Menu */}
              <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                {/* Languages dropdown    */}
                <li className="nav-item dropdown">
                  <a
                    id="languages"
                    rel="nofollow"
                    data-target="#"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="nav-link language dropdown-toggle"
                  >
                    <img
                      src="https://i.ibb.co/SnpwbfX/VN.png"
                      alt="English"
                      className="mr-2"
                    />
                  VIE
                  </a>
                  <ul aria-labelledby="languages" className="dropdown-menu">
                    <li>
                      <Link rel="nofollow" to="#" className="dropdown-item">
                        {" "}
                        <img
                          src="https://i.ibb.co/QrtCN5s/GB.png"
                          alt="English"
                          className="mr-2"
                        />
                        English
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* Logout    */}
                <li className="nav-item">
                  <Link
                    onClick={this.logOut}
                    to="/login"
                    className="nav-link logout"
                  >
                    <span className="d-none d-sm-inline">Đăng xuất</span>
                    <i className="fa fa-sign-out" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTokenRedux: (token) => {
      dispatch(actToken(token));
    },
    setTokenRoleRedux: (token) => {
      dispatch(actGetNameRole(token));
    },
  };
};

export default connect(null, mapDispatchToProps)(Header);

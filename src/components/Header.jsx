import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isServices = location.pathname === "/services";
  const isContact = location.pathname === "/contact";

  return (
    <div className="header">
      <div className="brand">
        <span className="brand-text">Timed-Web-App</span>
      </div>
      <ul className="nav">
        <li className={`nav-item ${isHome ? "nav-item-active" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${isHome ? "active-link" : "inactive-link"}`}
          >
            Home
          </Link>
        </li>
        <li className={`nav-item ${isServices ? "nav-item-active" : ""}`}>
          <Link
            to="/services"
            className={`nav-link ${
              isServices ? "active-link" : "inactive-link"
            }`}
          >
            Services
          </Link>
        </li>
        <li className={`nav-item ${isContact ? "nav-item-active" : ""}`}>
          <Link
            to="/contact"
            className={`nav-link ${
              isContact ? "active-link" : "inactive-link"
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

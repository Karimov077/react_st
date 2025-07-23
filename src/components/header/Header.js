import "./Header.scss"
import brandLogo from "../../assets/Navber_logo.svg"
import { FaBars } from "react-icons/fa"

const Header = () => {
  return (
    <div className="top-navigation">
      <div className="container top-navigation__container">
        <div className="container__logo-section">
          <img src={brandLogo || "/placeholder.svg"} alt="" />
        </div>
        <div className="container__nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <i>
            <FaBars />
          </i>
        </div>
        <a href="#">
          <button className="signin-btn">Sign in</button>
        </a>
      </div>
    </div>
  )
}

export default Header

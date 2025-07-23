import "./Footer.scss"
import { CiMail } from "react-icons/ci"
import { FiPhoneIncoming } from "react-icons/fi"
import { FaLocationDot } from "react-icons/fa6"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { LuFacebook } from "react-icons/lu"
import { TbBrandTwitter } from "react-icons/tb"
import { CiYoutube } from "react-icons/ci"
import { CiGlobe } from "react-icons/ci"

const Footer = () => {
  return (
    <div className="site-footer">
      <div className="footer-background">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
        <div className="floating-dots">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
          <div className="dot dot-4"></div>
          <div className="dot dot-5"></div>
        </div>
      </div>

      <div className="container">
        <div className="site-footer__container">
          {/* Brand Section */}
          <div className="footer-brand-section">
            <div className="brand-logo">
              <div className="logo-wrapper">
                <div className="robot-icon">🤖</div>
                <span className="brand-text">Artificial Intelligence</span>
              </div>
            </div>

            <p className="brand-description">
              Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.
            </p>

            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <CiMail />
                </div>
                <span>Company@gmail.com.com</span>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FiPhoneIncoming />
                </div>
                <span>Phone: (064) 332-1233</span>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaLocationDot />
                </div>
                <span>450 Wall Street, USA, New York</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="footer-nav-column">
            <div className="column-header">
              <h3>COMPANY INFO</h3>
              <div className="header-line"></div>
            </div>
            <ul className="nav-links">
              <li>
                <a href="#">Latest Products</a>
              </li>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Get In Touch</a>
              </li>
              <li>
                <a href="#">Recent Updates</a>
              </li>
              <li>
                <a href="#">Site Navigation</a>
              </li>
              <li>
                <a href="#">Purchase Records</a>
              </li>
            </ul>
          </div>

          <div className="footer-nav-column">
            <div className="column-header">
              <h3>QUICK LINKS</h3>
              <div className="header-line"></div>
            </div>
            <ul className="nav-links">
              <li>
                <a href="#">Social Profile</a>
              </li>
              <li>
                <a href="#">Fresh Collection</a>
                
              </li>
              <li>
                <a href="#">Reach Out</a>
              </li>
              <li>
                <a href="#">Breaking News</a>
              </li>
              <li>
                <a href="#">Legal Terms</a>
              </li>
              <li>
                <a href="#">Buy Template</a>
              </li>
            </ul>
          </div>

          <div className="footer-nav-column">
            <div className="column-header">
              <h3>HELPFUL RESOURCES</h3>
              <div className="header-line"></div>
            </div>
            <ul className="nav-links">
              <li>
                <a href="#">Social Media</a>
              </li>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#">Support Center</a>
              </li>
              <li>
                <a href="#">Press Releases</a>
              </li>
              <li>
                <a href="#">Website Map</a>
              </li>
              <li>
                <a href="#">Order Tracking</a>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div className="footer-about-section">
            <div className="column-header">
              <h3>STORE DETAILS</h3>
              <div className="header-line"></div>
            </div>

            <p className="about-description">
              Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.
            </p>

            <div className="website-link">
              <a href="#" className="site-url">
                www.company.com
              </a>
            </div>

            <div className="social-section">
              <h4>Follow Us</h4>
              <div className="social-media-icons">
                <div className="social-icon facebook">
                  <LuFacebook />
                </div>
                <div className="social-icon instagram">
                  <FaInstagram />
                </div>
                <div className="social-icon twitter">
                  <TbBrandTwitter />
                </div>
                <div className="social-icon linkedin">
                  <FaLinkedinIn />
                </div>
                <div className="social-icon youtube">
                  <CiYoutube />
                </div>
              </div>
            </div>

            <div className="language-selector">
              <CiGlobe />
              <span>English</span>
              <div className="dropdown-arrow">▼</div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="bottom-line"></div>
          <div className="footer-bottom-content">
            <p>&copy; 2024 Artificial Intelligence. All rights reserved.</p>
            <div className="bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

import "./Hero.scss"
import hero_1 from "../../assets/hero_1.svg"
import hero_2 from "../../assets/hero_2.svg"
import hero_3 from "../../assets/hero_3.svg"
import hero_4 from "../../assets/hero_4.svg"
import rero_img from "../../assets/9 1.png"
import poligon from "../../assets/Polygon 1.svg"

const Hero = () => {
  return (
    <div className="banner-section">
      <div className="container banner-section__content">
        <div className="banner-section__text-area">
          <p>Next genaretion platform</p>
          <h1>Artificial intelligence & Syber security</h1>
          <p className="text-area__description">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
            previewing layouts and visual mockups.
          </p>
          <div className="action-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="video-play-btn">
              <img src={poligon || "/placeholder.svg"} alt="" /> Watch Video
            </button>
          </div>
        </div>
        <div className="banner-section__visual">
          <img src={rero_img || "/placeholder.svg"} alt="" />
        </div>
      </div>
      <div className="container banner-section__partners">
        <a href="#">
          <img src={hero_1 || "/placeholder.svg"} alt="" />
        </a>
        <a href="#">
          <img src={hero_2 || "/placeholder.svg"} alt="" />
        </a>
        <a href="#">
          <img src={hero_3 || "/placeholder.svg"} alt="" />
        </a>
        <a href="#">
          <img src={hero_4 || "/placeholder.svg"} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Hero

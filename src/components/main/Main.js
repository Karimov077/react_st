import "./Main.scss";
import main_image from "../../assets/main.png"


const Main = () =>{
    return (
        <div className="main">
            <div className="container main__wrapper">
                <div className="main__images">
                    <img src={main_image} alt="" />
                </div>
                <div className="main__title">
                    <h1>Apply AI, Deep Learning and Data Sciece to solve</h1>
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Main
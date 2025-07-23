// import logo from './logo.svg';
import './App.scss';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Header from "./components/header/Header"
import Hero from './components/hero/Hero';
import Karusel from './components/karusel/karusel';
import Main from './components/main/Main';

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Main/>
    <Karusel/>
    <About/>
    <Footer/>
    </>
  )
}

export default App;

import './Navbar.css'
import { useContext } from "react";
import { srcContext } from "../SrcContext.js";

const Navbar = () => {
    const { value, setValue, language } = useContext(srcContext);

    return (
        <div className='container-nav'>
            <img src={require("../img/svg/" + value + "_lipp.svg")} alt="flag" onClick={ () => (value === 'en') ? setValue('et') : setValue('en') }></img>
            <nav>
                <h1>PRAKTIKAKOHVIK 2022</h1>
                <div className="countdown-header">
                    <div className="container-day">
                        <h3 className="dayNr">0</h3>
                        <h2>{language.countDown.d}</h2>
                    </div>
                    <div className="container-hour">
                        <h3 className="hourNr">0</h3>
                        <h2>{language.countDown.h}</h2>
                    </div>
                    <div className="container-minute">
                        <h3 className="minuteNr">0</h3>
                        <h2>{language.countDown.m}</h2>
                    </div>
                    <div className="container-second">
                        <h3 className="secondNr">0</h3>
                        <h2>{language.countDown.s}</h2>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (Math.ceil(scrolled) < 350) {
        document.querySelector('nav').style.visibility = 'hidden';
    } else {
        document.querySelector('nav').style.visibility = 'visible';
    }
})
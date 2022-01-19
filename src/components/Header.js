import './Header.css'
import Logo from '../img/svg/Praktikakohvik_käed.svg'
import { useContext } from "react";
import { srcContext } from "../SrcContext.js";

const Header = () => {
    const { language } = useContext(srcContext);

    return (
        <header>
            <h4>PRAKTIKA-<br/>KOHVIK</h4>
            <h3>{language.date}</h3>

            <img src={Logo} alt="praktikakohvik_logo" id="praktikakohvik_logo" />
            
            <section className="countdown">
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
            </section>
        </header>
    )
};

export default Header;
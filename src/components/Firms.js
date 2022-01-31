import './Firms.css';
import { useContext, useState } from "react";
import { srcContext } from "../SrcContext.js";

const Firms = () => {
    const { language } = useContext(srcContext);
    const [firmsText, setFirmsText] = useState('Guide');

    const [borderStyle, setBorderStyle] = useState({border: "2px", borderStyle: "dashed", borderColor: "white", marginTop: "25%"});
    const [textStyle, setTextStyle] = useState({textAlign: "center", fontSize: "25px", paddingTop: "50px"});
    const [logosStyle, setLogosStyle] = useState({width: "0"});

    function click(clickedButton) {
		var firmsName = clickedButton.target.className;
		RemoveStyles(setBorderStyle, setTextStyle, setLogosStyle);
		AddStylesToSelectedFirmButtons(firmsName);
		firmsName = firmsName.length === 1 ? setFirmsText("Undefined") : setFirmsText(firmsName);
    }

    return (
        <div className="container-firms">
            <section className="firms-list">
				<h3>{language.firms.firmsTitle}</h3>
				<ul>
				    <li><button onFocus={(e) => click(e)} className="A"><h2>A</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="B"><h2>B</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="C" ><h2>C</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="D" ><h2>D</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="E" ><h2>E</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="F" ><h2>F</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="G" ><h2>G</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="H" ><h2>H</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="I" ><h2>I</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="J" ><h2>J</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="K" ><h2>K</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="L" ><h2>L</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="M" ><h2>M</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="N" ><h2>N</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="O" ><h2>O</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="P" ><h2>P</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="Q" ><h2>Q</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="R" ><h2>R</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="S" ><h2>S</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="T" ><h2>T</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="U" ><h2>U</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="V" ><h2>V</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="W" ><h2>W</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="X" ><h2>X</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="Y" ><h2>Y</h2></button></li>
				</ul>
			</section>

			<div className="container-grid">
				<section className="firms-map">
					<img src={require("../img/png/" + language.firms.map + ".png")} alt="Aula"/>
					<div className="container-map">
                        <li style={{gridColumn: "2", gridRow: "2"}}><button onFocus={(e) => click(e)} className="A" >A</button></li>
						<li style={{gridColumn: "3", gridRow: "2"}}><button onFocus={(e) => click(e)} className="B" >B</button></li>
						<li style={{gridColumn: "4", gridRow: "2"}}><button onFocus={(e) => click(e)} className="C" >C</button></li>
						<li style={{gridColumn: "5", gridRow: "2"}}><button onFocus={(e) => click(e)} className="D" >D</button></li>
						<li style={{gridColumn: "6", gridRow: "2"}}><button onFocus={(e) => click(e)} className="E" >E</button></li>
						<li style={{gridColumn: "7", gridRow: "2"}}><button onFocus={(e) => click(e)} className="F" >F</button></li>
						<li style={{gridColumn: "8", gridRow: "3 / span 2"}}><button onFocus={(e) => click(e)} className="G" >G</button></li>
						<li style={{gridColumn: "8", gridRow: "5 / span 2"}}><button onFocus={(e) => click(e)} className="H" >H</button></li>
						<li style={{gridColumn: "8", gridRow: "7 / span 2"}}><button onFocus={(e) => click(e)} className="I" >I</button></li>
						<li style={{gridColumn: "7", gridRow: "9"}}><button onFocus={(e) => click(e)} className="J" >J</button></li>
						<li style={{gridColumn: "6", gridRow: "9"}}><button onFocus={(e) => click(e)} className="K" >K</button></li>
						<li style={{gridColumn: "5", gridRow: "9"}}><button onFocus={(e) => click(e)} className="L" >L</button></li>
						<li style={{gridColumn: "4", gridRow: "9"}}><button onFocus={(e) => click(e)} className="M" >M</button></li>
						<li style={{gridColumn: "3", gridRow: "9"}}><button onFocus={(e) => click(e)} className="N" >N</button></li>
						<li style={{gridColumn: "2", gridRow: "9"}}><button onFocus={(e) => click(e)} className="O" >O</button></li>
						<li style={{gridColumn: "2", gridRow: "6"}}><button onFocus={(e) => click(e)} className="P" >P</button></li>
						<li style={{gridColumn: "3", gridRow: "6"}}><button onFocus={(e) => click(e)} className="Q" >Q</button></li>
						<li style={{gridColumn: "4", gridRow: "6"}}><button onFocus={(e) => click(e)} className="R" >R</button></li>
						<li style={{gridColumn: "5", gridRow: "6"}}><button onFocus={(e) => click(e)} className="S" >S</button></li>
						<li style={{gridColumn: "6", gridRow: "6"}}><button onFocus={(e) => click(e)} className="T" >T</button></li>
						<li style={{gridColumn: "6", gridRow: "5"}}><button onFocus={(e) => click(e)} className="U" >U</button></li>
						<li style={{gridColumn: "5", gridRow: "5"}}><button onFocus={(e) => click(e)} className="V" >V</button></li>
						<li style={{gridColumn: "4", gridRow: "5"}}><button onFocus={(e) => click(e)} className="W" >W</button></li>
						<li style={{gridColumn: "3", gridRow: "5"}}><button onFocus={(e) => click(e)} className="X" >X</button></li>
						<li style={{gridColumn: "2", gridRow: "5"}}><button onFocus={(e) => click(e)} className="Y" >Y</button></li>
					</div>
				</section>
				
				<section style={borderStyle} className="firms-info">
					<img style={logosStyle} src={require("../img/firms/" + (firmsText === 'Guide' ? 'Undefined' : firmsText) + "-logo.png")} alt="firmsLogo"/>
					<h2 style={textStyle}>{language.firmList[firmsText]}</h2>
				</section>
			</div>
        </div>
    )
};

export default Firms;

function RemoveStyles(setBorderStyle, setTextStyle, setLogosStyle) {
	var arrayOfFirmNameButtons = document.getElementsByTagName("UL")[0];
	var arrayOfTableButtons = document.querySelectorAll(".container-map")[0];
	for (let i = 0; i < arrayOfFirmNameButtons.getElementsByTagName("BUTTON").length; i++) {
		arrayOfFirmNameButtons.getElementsByTagName("BUTTON")[i].style.cssText = '';
		arrayOfTableButtons.getElementsByTagName("BUTTON")[i].style.cssText = '';
	}
	setBorderStyle({border: '', borderStyle: '', borderColor: '', marginTop: ''});
	setTextStyle({textAlign: '', fontSize: '', paddingTop: ''});
	setLogosStyle({width: ''});
}

function AddStylesToSelectedFirmButtons(firmsName) {
	var arrayOfSelectedFirmsButtons = document.querySelectorAll('.' + firmsName);
	arrayOfSelectedFirmsButtons[0].style.backgroundColor = '#FF0063';
	arrayOfSelectedFirmsButtons[1].style.cssText = 'background-color: white; color: #FF0063;';
}
import './Firms.css';
import { useContext, useState } from "react";
import { srcContext } from "../SrcContext.js";

const Firms = () => {
    const { language } = useContext(srcContext);
    const [firmsText, setFirmsText] = useState('Guide');

    const [borderStyle, setBorderStyle] = useState({border: "2px", borderStyle: "dashed", borderColor: "white", marginTop: "25%"});
    const [textStyle, setTextStyle] = useState({textAlign: "center", fontSize: "25px", paddingTop: "50px"});
    const [logosStyle, setLogosStyle] = useState({height: "0px", visibility: "hidden"});

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
				    <li><button onFocus={(e) => click(e)} className="A_dcash"><h2>Adcash</h2></button></li>
					<li><button onFocus={(e) => click(e)} className="ADMInteractive"><h2>ADM Interactive</h2></button></li>
					<li><button onFocus={(e) => click(e)} className="Agileworks"><h2>AgileWorks AS</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="ArtecDesign"><h2>Artec Design</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="BaitPartner"><h2>Bait Partner</h2></button></li>
					<li><button onFocus={(e) => click(e)} className="Cybernetica"><h2>Cybernetica</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="Devtailor"><h2>Devtailor</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="EestiEnergia" ><h2>Eesti Energia</h2></button></li>
					<li><button onFocus={(e) => click(e)} className="Eleport"><h2>Eleport</h2></button></li>
					<li><button onFocus={(e) => click(e)} className="Ericsson"><h2>Ericsson</h2></button></li>
					<li><button onFocus={(e) => click(e)} className="Finestmedia"><h2>Finestmedia</h2></button></li>
					<li><button onFocus={(e) => click(e)} className="Finnair"><h2>Finnair</h2></button></li>
					<li><button onFocus={(e) => click(e)} className="Fujitsu"><h2>Fujitsu</h2></button></li>
					<li><button onFocus={(e) => click(e)} className="ITKasutajatugi"><h2>IT Kasutajatoe Talitus</h2></button></li>
					<li><button onFocus={(e) => click(e)} className="Itestra"><h2>Itestra</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="LumavCommerce"><h2>Lumav Commerce</h2></button></li>
					<li><button onFocus={(e) => click(e)} className="Netgroup"><h2>Net Group</h2></button></li>
					<li><button onFocus={(e) => click(e)} className="PowerUp"><h2>Power Up Fuel Cells</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="SEB"><h2>SEB Pank</h2></button></li>
					<li><button onFocus={(e) => click(e)} className="SpinTEK"><h2>SpinTek</h2></button></li>
					<li><button onFocus={(e) => click(e)} className="Statistikaamet"><h2>Statistikaamet</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="Swedbank"><h2>Swedbank</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="Telia"><h2>Telia</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="TJTJA"><h2>Tarbijakaitse ja Tehnilise Järelvalve Amet</h2></button></li>
				</ul>
			</section>

			<div className="container-grid">
				<section className="firms-map">
					<img src={require("../img/png/" + language.firms.map + ".png")} alt="Aula"/>
					<div className="container-map">
                        <li style={{gridColumn: "2", gridRow: "2"}}><button onFocus={(e) => click(e)} className="A_dcash">ADC</button></li>
						<li style={{gridColumn: "3", gridRow: "2"}}><button onFocus={(e) => click(e)} className="ADMInteractive">ADM</button></li>
						<li style={{gridColumn: "4", gridRow: "2"}}><button onFocus={(e) => click(e)} className="Agileworks">AGI</button></li>
						<li style={{gridColumn: "5", gridRow: "2"}}><button onFocus={(e) => click(e)} className="ArtecDesign">ART</button></li>
						<li style={{gridColumn: "6", gridRow: "2"}}><button onFocus={(e) => click(e)} className="BaitPartner">BAI</button></li>
						<li style={{gridColumn: "7", gridRow: "2"}}><button onFocus={(e) => click(e)} className="Cybernetica">CYB</button></li>
						<li style={{gridColumn: "8", gridRow: "3 / span 2"}}><button onFocus={(e) => click(e)} className="Devtailor"><h2 id='sideways'>DEV</h2></button></li>
						<li style={{gridColumn: "8", gridRow: "5 / span 2"}}><button onFocus={(e) => click(e)} className="EestiEnergia"><h2 id='sideways'>EES</h2></button></li>
						<li style={{gridColumn: "8", gridRow: "7 / span 2"}}><button onFocus={(e) => click(e)} className="Eleport"><h2 id='sideways'>ELE</h2></button></li>
						<li style={{gridColumn: "7", gridRow: "9"}}><button onFocus={(e) => click(e)} className="Ericsson">ERI</button></li>
						<li style={{gridColumn: "6", gridRow: "9"}}><button onFocus={(e) => click(e)} className="Finestmedia">FIM</button></li>
						<li style={{gridColumn: "5", gridRow: "9"}}><button onFocus={(e) => click(e)} className="Finnair">FBS</button></li>
						<li style={{gridColumn: "4", gridRow: "9"}}><button onFocus={(e) => click(e)} className="Fujitsu">FUJ</button></li>
						<li style={{gridColumn: "3", gridRow: "9"}}><button onFocus={(e) => click(e)} className="ITKasutajatugi">ITK</button></li>
						<li style={{gridColumn: "2", gridRow: "9"}}><button onFocus={(e) => click(e)} className="Itestra">ITE</button></li>
						<li style={{gridColumn: "2", gridRow: "6"}}><button onFocus={(e) => click(e)} className="LumavCommerce">LUM</button></li>
						<li style={{gridColumn: "3", gridRow: "6"}}><button onFocus={(e) => click(e)} className="Netgroup">NET</button></li>
						<li style={{gridColumn: "4", gridRow: "6"}}><button onFocus={(e) => click(e)} className="PowerUp">POW</button></li>
						<li style={{gridColumn: "5", gridRow: "6"}}><button onFocus={(e) => click(e)} className="SEB">SEB</button></li>
						<li style={{gridColumn: "6", gridRow: "6"}}><button onFocus={(e) => click(e)} className="SpinTEK">SPI</button></li>
						<li style={{gridColumn: "6", gridRow: "5"}}><button onFocus={(e) => click(e)} className="Statistikaamet">STA</button></li>
						<li style={{gridColumn: "5", gridRow: "5"}}><button onFocus={(e) => click(e)} className="Swedbank">SWE</button></li>
						<li style={{gridColumn: "4", gridRow: "5"}}><button onFocus={(e) => click(e)} className="Telia">TEL</button></li>
						<li style={{gridColumn: "3", gridRow: "5"}}><button onFocus={(e) => click(e)} className="TJTJA">TTA</button></li>
					</div>
				</section>
				
				<section style={borderStyle} className="firms-info">
					<div style={logosStyle} className='image-container'>
						<img style={logosStyle} src={require("../img/firms/" + (firmsText === 'Guide' ? 'Undefined' : firmsText) + "-logo.png")} alt="firmsLogo"/>
					</div>
					<h2 style={textStyle}>{language.firmList[firmsText].replaceAll('\\n', '\n')}</h2>
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
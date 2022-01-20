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
				<h3>{language.firmsTitle}</h3>
				<ul>
				    <li><button onFocus={(e) => click(e)} className="Veriff"><h2>1. VERIFF</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="A_dcash"><h2>2. ADCASH</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="C" ><h2>3. ...</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="D" ><h2>4. ...</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="E" ><h2>5. ...</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="F" ><h2>6. ...</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="G" ><h2>7. ...</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="H" ><h2>8. ...</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="I" ><h2>9. ...</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="J" ><h2>10. ...</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="K" ><h2>11. ...</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="L" ><h2>12. ...</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="M" ><h2>13. ...</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="N" ><h2>14. ...</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="O" ><h2>15. ...</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="P" ><h2>16. ...</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="Q" ><h2>17. ...</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="R" ><h2>18. ...</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="S" ><h2>19. ...</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="T" ><h2>20. ...</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="U" ><h2>21. ...</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="V" ><h2>22. ...</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="W" ><h2>23. ...</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="X" ><h2>24. ...</h2></button></li>
				    <li><button onFocus={(e) => click(e)} className="Y" ><h2>25. ...</h2></button></li>
				</ul>
			</section>

			<div className="container-grid">
				<section className="firms-map">
					<img src={require("../img/png/" + language.map + ".png")} alt="Aula"/>
					<div className="container-map">
                        <li style={{gridColumn: "2", gridRow: "2"}}><button onFocus={(e) => click(e)} className="Veriff" >1</button></li>
						<li style={{gridColumn: "3", gridRow: "2"}}><button onFocus={(e) => click(e)} className="A_dcash" >2</button></li>
						<li style={{gridColumn: "4", gridRow: "2"}}><button onFocus={(e) => click(e)} className="C" >3</button></li>
						<li style={{gridColumn: "5", gridRow: "2"}}><button onFocus={(e) => click(e)} className="D" >4</button></li>
						<li style={{gridColumn: "6", gridRow: "2"}}><button onFocus={(e) => click(e)} className="E" >5</button></li>
						<li style={{gridColumn: "7", gridRow: "2"}}><button onFocus={(e) => click(e)} className="F" >6</button></li>
						<li style={{gridColumn: "8", gridRow: "3 / span 2"}}><button onFocus={(e) => click(e)} className="G" >7</button></li>
						<li style={{gridColumn: "8", gridRow: "5 / span 2"}}><button onFocus={(e) => click(e)} className="H" >8</button></li>
						<li style={{gridColumn: "8", gridRow: "7 / span 2"}}><button onFocus={(e) => click(e)} className="I" >9</button></li>
						<li style={{gridColumn: "7", gridRow: "9"}}><button onFocus={(e) => click(e)} className="J" >10</button></li>
						<li style={{gridColumn: "6", gridRow: "9"}}><button onFocus={(e) => click(e)} className="K" >11</button></li>
						<li style={{gridColumn: "5", gridRow: "9"}}><button onFocus={(e) => click(e)} className="L" >12</button></li>
						<li style={{gridColumn: "4", gridRow: "9"}}><button onFocus={(e) => click(e)} className="M" >13</button></li>
						<li style={{gridColumn: "3", gridRow: "9"}}><button onFocus={(e) => click(e)} className="N" >14</button></li>
						<li style={{gridColumn: "2", gridRow: "9"}}><button onFocus={(e) => click(e)} className="O" >15</button></li>
						<li style={{gridColumn: "2", gridRow: "6"}}><button onFocus={(e) => click(e)} className="P" >16</button></li>
						<li style={{gridColumn: "3", gridRow: "6"}}><button onFocus={(e) => click(e)} className="Q" >17</button></li>
						<li style={{gridColumn: "4", gridRow: "6"}}><button onFocus={(e) => click(e)} className="R" >18</button></li>
						<li style={{gridColumn: "5", gridRow: "6"}}><button onFocus={(e) => click(e)} className="S" >19</button></li>
						<li style={{gridColumn: "6", gridRow: "6"}}><button onFocus={(e) => click(e)} className="T" >20</button></li>
						<li style={{gridColumn: "6", gridRow: "5"}}><button onFocus={(e) => click(e)} className="U" >21</button></li>
						<li style={{gridColumn: "5", gridRow: "5"}}><button onFocus={(e) => click(e)} className="V" >22</button></li>
						<li style={{gridColumn: "4", gridRow: "5"}}><button onFocus={(e) => click(e)} className="W" >23</button></li>
						<li style={{gridColumn: "3", gridRow: "5"}}><button onFocus={(e) => click(e)} className="X" >24</button></li>
						<li style={{gridColumn: "2", gridRow: "5"}}><button onFocus={(e) => click(e)} className="Y" >25</button></li>
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
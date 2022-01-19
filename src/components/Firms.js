import './Firms.css';
import { useContext, useState } from "react";
import { srcContext } from "../SrcContext.js";

const Firms = () => {
    const { language } = useContext(srcContext);
    const [firm, setFirm] = useState('Guide');

    const [borderStyle, setBorderStyle] = useState({border: "2px", borderStyle: "dashed", borderColor: "white", marginTop: "25%"});
    const [textStyle, setTextStyle] = useState({textAlign: "center", fontSize: "25px", paddingTop: "50px"});
    const [logosStyle, setLogosStyle] = useState({width: "0"});

    function click(buttonsFirm) {
		focusButtons(buttonsFirm);
		buttonsFirm = buttonsFirm.length === 1 ? "Undefined" : buttonsFirm;
        setFirm(buttonsFirm);
        setBorderStyle({border: '', borderStyle: '', borderColor: '', marginTop: ''});
        setTextStyle({textAlign: '', fontSize: '', paddingTop: ''});
        setLogosStyle({width: ''});
    }

    return (
        <div className="firms">
            <section className="firms-list">
				<h3>{language.firmsTitle}</h3>
				<ul>
				    <li className="Veriff"><button onClick={() => click('Veriff')}><h2>1. VERIFF</h2></button></li>
				    <li className="A_dcash"><button onClick={() => click('A_dcash')}><h2>2. ADCASH</h2></button></li>
				    <li className="C"><button onClick={() => click('C')}><h2>3. ...</h2></button></li>
				    <li className="D"><button onClick={() => click('D')}><h2>4. ...</h2></button></li>
				    <li className="E"><button onClick={() => click('E')}><h2>5. ...</h2></button></li>
				    <li className="F"><button onClick={() => click('F')}><h2>6. ...</h2></button></li>
				    <li className="G"><button onClick={() => click('G')}><h2>7. ...</h2></button></li>
				    <li className="H"><button onClick={() => click('H')}><h2>8. ...</h2></button></li>
				    <li className="I"><button onClick={() => click('I')}><h2>9. ...</h2></button></li>
				    <li className="J"><button onClick={() => click('J')}><h2>10. ...</h2></button></li>
				    <li className="K"><button onClick={() => click('K')}><h2>11. ...</h2></button></li>
				    <li className="L"><button onClick={() => click('L')}><h2>12. ...</h2></button></li>
				    <li className="M"><button onClick={() => click('M')}><h2>13. ...</h2></button></li>
				    <li className="N"><button onClick={() => click('N')}><h2>14. ...</h2></button></li>
				    <li className="O"><button onClick={() => click('O')}><h2>15. ...</h2></button></li>
				    <li className="P"><button onClick={() => click('P')}><h2>16. ...</h2></button></li>
				    <li className="Q"><button onClick={() => click('Q')}><h2>17. ...</h2></button></li>
				    <li className="R"><button onClick={() => click('R')}><h2>18. ...</h2></button></li>
				    <li className="S"><button onClick={() => click('S')}><h2>19. ...</h2></button></li>
				    <li className="T"><button onClick={() => click('T')}><h2>20. ...</h2></button></li>
				    <li className="U"><button onClick={() => click('U')}><h2>21. ...</h2></button></li>
				    <li className="V"><button onClick={() => click('V')}><h2>22. ...</h2></button></li>
				    <li className="W"><button onClick={() => click('W')}><h2>23. ...</h2></button></li>
				    <li className="X"><button onClick={() => click('X')}><h2>24. ...</h2></button></li>
				    <li className="Y"><button onClick={() => click('Y')}><h2>25. ...</h2></button></li>
				</ul>
			</section>

			<div className="container-grid">
				<section className="section-map">
					<img src={require("../img/png/" + language.map + ".png")} alt="Aula" className="map"/>
					<div className="container-map">
                        <li style={{gridColumn: "2", gridRow: "2"}}><button className="Veriff" onClick={() => click('Veriff')}>1</button></li>
						<li style={{gridColumn: "3", gridRow: "2"}}><button className="A_dcash" onClick={() => click('A_dcash')}>2</button></li>
						<li style={{gridColumn: "4", gridRow: "2"}}><button className="C" onClick={() => click('C')}>3</button></li>
						<li style={{gridColumn: "5", gridRow: "2"}}><button className="D" onClick={() => click('D')}>4</button></li>
						<li style={{gridColumn: "6", gridRow: "2"}}><button className="E" onClick={() => click('E')}>5</button></li>
						<li style={{gridColumn: "7", gridRow: "2"}}><button className="F" onClick={() => click('F')}>6</button></li>
						<li style={{gridColumn: "8", gridRow: "3 / span 2"}}><button className="G" onClick={() => click('G')}>7</button></li>
						<li style={{gridColumn: "8", gridRow: "5 / span 2"}}><button className="H" onClick={() => click('H')}>8</button></li>
						<li style={{gridColumn: "8", gridRow: "7 / span 2"}}><button className="I" onClick={() => click('I')}>9</button></li>
						<li style={{gridColumn: "7", gridRow: "9"}}><button className="J" onClick={() => click('J')}>10</button></li>
						<li style={{gridColumn: "6", gridRow: "9"}}><button className="K" onClick={() => click('K')}>11</button></li>
						<li style={{gridColumn: "5", gridRow: "9"}}><button className="L" onClick={() => click('L')}>12</button></li>
						<li style={{gridColumn: "4", gridRow: "9"}}><button className="M" onClick={() => click('M')}>13</button></li>
						<li style={{gridColumn: "3", gridRow: "9"}}><button className="N" onClick={() => click('N')}>14</button></li>
						<li style={{gridColumn: "2", gridRow: "9"}}><button className="O" onClick={() => click('O')}>15</button></li>
						<li style={{gridColumn: "2", gridRow: "6"}}><button className="P" onClick={() => click('P')}>16</button></li>
						<li style={{gridColumn: "3", gridRow: "6"}}><button className="Q" onClick={() => click('Q')}>17</button></li>
						<li style={{gridColumn: "4", gridRow: "6"}}><button className="R" onClick={() => click('R')}>18</button></li>
						<li style={{gridColumn: "5", gridRow: "6"}}><button className="S" onClick={() => click('S')}>19</button></li>
						<li style={{gridColumn: "6", gridRow: "6"}}><button className="T" onClick={() => click('T')}>20</button></li>
						<li style={{gridColumn: "6", gridRow: "5"}}><button className="U" onClick={() => click('U')}>21</button></li>
						<li style={{gridColumn: "5", gridRow: "5"}}><button className="V" onClick={() => click('V')}>22</button></li>
						<li style={{gridColumn: "4", gridRow: "5"}}><button className="W" onClick={() => click('W')}>23</button></li>
						<li style={{gridColumn: "3", gridRow: "5"}}><button className="X" onClick={() => click('X')}>24</button></li>
						<li style={{gridColumn: "2", gridRow: "5"}}><button className="Y" onClick={() => click('Y')}>25</button></li>
					</div>
				</section>
				
				<section style={borderStyle} className="firms-info">
					<img style={logosStyle} src={require("../img/firms/" + (firm === 'Guide' ? 'Undefined' : firm) + "-logo.png")} alt="firmsLogo" id="firms-logo" />
					<h2 style={textStyle} className="firms-description">{language.firmList[firm]}</h2>
				</section>
			</div>
        </div>
    )
};

export default Firms;

function focusButtons(nameOfFirm) {
	var list1 = document.getElementsByTagName("UL")[0];
	var list2 = document.querySelectorAll(".container-map")[0];

	for (let i = 0; i < list1.getElementsByTagName("LI").length; i++) {
		list1.getElementsByTagName("LI")[i].style.removeProperty('background-color');
		list2.getElementsByTagName("BUTTON")[i].style.removeProperty('background-color');
		list2.getElementsByTagName("BUTTON")[i].style.removeProperty('color');
	}

	var array = document.querySelectorAll('.' + nameOfFirm);
	array[0].style.backgroundColor = '#FF0063';
	array[1].style.cssText = 'background-color: white; color: #FF0063;';
}
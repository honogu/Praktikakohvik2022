import './About.css'
import { useContext } from "react";
import { srcContext } from "../SrcContext.js";

const About = () => {
    const { language } = useContext(srcContext);

    return (
        <div className='boxed'>
            <h3>{language.aboutTitle}</h3>
			<h2>{language.aboutContent.firstHalf}<br/><br/>{language.aboutContent.secondHalf}</h2>
        </div>
    )
};

export default About;
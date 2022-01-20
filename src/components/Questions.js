import './Questions.css';
import praktikakohvik2020 from '../img/png/praktikakohvik.jpg';
import { useContext } from "react";
import { srcContext } from "../SrcContext.js";

const Questions = () => {
    const { language } = useContext(srcContext);

    return (
        <div className='boxedd'>
            <img src={praktikakohvik2020} alt="location"/>
			<h3>{language.questionTitle}</h3>
			<h2>
				<br/>{language.questionContent.info}
				<br/>{language.questionContent.Question1}
				<br/>{language.questionContent.Question2}
				<br/>{language.questionContent.Question3}
				<br/>{language.questionContent.Question4}
				<br/>{language.questionContent.Question5}
				<br/>{language.questionContent.Question6}
				<br/>{language.questionContent.Question7}
			</h2>
        </div>
    )
};

export default Questions;
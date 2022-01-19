import './Questions.css'
import praktikakohvik2020 from '../img/png/praktikakohvik.jpg'
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
				<br/>{language.questionContent.firstQuestion}
				<br/>{language.questionContent.secondQuestion}
				<br/>{language.questionContent.thirdQuestion}
				<br/>{language.questionContent.fourthQuestion}
				<br/>{language.questionContent.fifthQuestion}
				<br/>{language.questionContent.sixthQuestion}
				<br/>{language.questionContent.seventhQuestion}
			</h2>
        </div>
    )
};

export default Questions;
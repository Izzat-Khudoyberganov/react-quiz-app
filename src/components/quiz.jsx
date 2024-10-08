import { useCallback, useState } from "react";
import Summary from "./summary";
import QuestionTimer from "./question-timer";
import questions from "../questions";

const Quiz = () => {
    const [userAnswer, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswer.length;
    const quizIsComplete = activeQuestionIndex === questions.length;

    const handleSelectAnswer = useCallback(
        function handleSelectAnswer(selectedAnswer) {
            setUserAnswers((prevUserAnswers) => {
                return [...prevUserAnswers, selectedAnswer];
            });
        },
        [activeQuestionIndex]
    );

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null);
    }, [handleSelectAnswer]);

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswer} />;
    }

    const shuffledAnswers = [...questions[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);
    return (
        <div id='quiz'>
            <div id='question'>
                <QuestionTimer
                    timeout={10000}
                    onTimeout={handleSkipAnswer}
                    key={activeQuestionIndex}
                />
                <h1>{questions[activeQuestionIndex].text}</h1>
                <ul id='answers'>
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className='answer'>
                            <button onClick={() => handleSelectAnswer(answer)}>
                                {answer}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Quiz;

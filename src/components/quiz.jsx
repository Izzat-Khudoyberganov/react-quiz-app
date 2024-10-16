import { useCallback, useEffect, useState } from "react";
import Summary from "./summary";
import QuestionTimer from "./question-timer";

const Quiz = () => {
    const [userAnswer, setUserAnswers] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const activeQuestionIndex = userAnswer.length;
    const quizIsComplete = activeQuestionIndex === data.length;

    const fetchData = async () => {
        try {
            const response = await fetch("https://quiz-app.koyeb.app/tests");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

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

    useEffect(() => {
        fetchData();
    }, []);

    if (loading)
        return (
            <div className='container'>
                <p>Loading...</p>
            </div>
        );
    if (error) return <p>Error: {error}</p>;

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswer} questions={data} />;
    }

    const shuffledAnswers = [...data[activeQuestionIndex].Options];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id='quiz'>
            <div id='question'>
                <div className='flex'>
                    <span id='question-number'>
                        {activeQuestionIndex + 1} - SAVOL
                    </span>
                    <QuestionTimer
                        timeout={60000}
                        onTimeout={handleSkipAnswer}
                        key={activeQuestionIndex}
                    />
                </div>
                <h1>{data[activeQuestionIndex].Title}</h1>
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

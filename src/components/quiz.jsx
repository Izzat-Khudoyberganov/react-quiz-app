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
            const response = await fetch("http://localhost:8080/tests");
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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    if (quizIsComplete) {
        return <Summary userAnswers={userAnswer} questions={data} />;
    }

    const shuffledAnswers = [...data[activeQuestionIndex].Options];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id='quiz'>
            <div id='question'>
                <QuestionTimer
                    timeout={60000}
                    onTimeout={handleSkipAnswer}
                    key={activeQuestionIndex}
                />
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

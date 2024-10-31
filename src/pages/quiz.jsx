import { useCallback, useState } from "react";
import Summary from "./summary";
import QuestionTimer from "../components/question-timer";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../utils/http";

const Quiz = () => {
    const [userAnswer, setUserAnswers] = useState([]);

    const { data, isLoading, error } = useQuery({
        queryKey: ["tests"],
        queryFn: () => fetchData("/tests"),
    });
    console.log(data);

    const activeQuestionIndex = userAnswer.length;
    const quizIsComplete = activeQuestionIndex === data?.length;

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

    if (isLoading)
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

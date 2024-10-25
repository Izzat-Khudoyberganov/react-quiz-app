import React, { useEffect } from "react";
import axios from "axios";
import img from "../assets/quiz-complete.png";

const Summary = ({ userAnswers, questions }) => {
    const skippedAnswers = userAnswers.filter((answer) => answer == null);
    const correctAnswers = userAnswers.filter(
        (answer, index) => answer === questions[index].Options[0]
    );
    const incorrectAnswers = userAnswers.filter(
        (answer, index) => answer !== questions[index].Options[0]
    );
    const skippedAnswersShare = Math.round(
        (skippedAnswers.length / userAnswers.length) * 100
    );

    const correctAnswersShare = Math.round(
        (correctAnswers.length / userAnswers.length) * 100
    );

    const wrongNaswersShare = 100 - skippedAnswersShare - correctAnswersShare;

    const message = {
        user: "UserName",
        title: "TestTitle",
    };
    const finish = userAnswers.length == questions.length
    
    const sendMessageToTelegram = async () => {
        const botToken = '7869759278:AAGXtKR7neoJ-yFb5qqVwjOPLcR6VQv0ig4';
        const chatId = '1415615526';

        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const textMessage = `
*Ism*: ${message.user}
*Mavzu*: ${message.title}
*Jami savollar soni*: ${questions.length}
*To'g'ri javoblar*: ${correctAnswers.length}
*Xato javoblar*: ${incorrectAnswers.length}
*O'tkazib yuborilgan savollar*: ${skippedAnswers.length}
    `;

        try {
            const response = await axios.post(url, {
                chat_id: chatId,
                text: textMessage,
                parse_mode: 'Markdown'
            });
            console.log('Message sent:', response.data);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    useEffect(() => {
        sendMessageToTelegram()
    }, [finish])

    return (
        <>
            <div id='summary'>
                <img src={img} alt='' />
                <h2>Quiz completed!</h2>

                <div id='summary-stats'>
                    <p>
                        <span className='number'>{skippedAnswersShare}%</span>
                        <span className='text'>skipped</span>
                    </p>
                    <p>
                        <span className='number'>{correctAnswersShare}%</span>
                        <span className='text'>answered correctly</span>
                    </p>
                    <p>
                        <span className='number'>{wrongNaswersShare}%</span>
                        <span className='text'>answered incorrectly</span>
                    </p>

                </div>
                <ol>
                    {userAnswers.map((answer, index) => {
                        let cssClass = "user-answer";

                        if (answer == null) {
                            cssClass += " skipped";
                        } else if (answer === questions[index].Options[0]) {
                            cssClass += " correct";
                        } else {
                            cssClass += " wrong";
                        }

                        return (
                            <li key={index}>
                                <h3>{index + 1}</h3>
                                <p className='question'>{questions[index].Title}</p>
                                <p className={cssClass}>{answer ?? "skipped"}</p>
                            </li>
                        );
                    })}
                    
                </ol>
            </div>
        </>
    );
};

export default Summary;

import { TestWrapper } from "../components/TestWrapper.jsx";
import { useState } from "react";
import { doneTests } from "../api/scorm.js";

export function TestWidget() {

    const [localScore, setLocalScore] = useState(0);
    const [questionBank] = useState([
        {
            text: "Какой фреймворк был разработан Facebook?",
            variants: ["React Native", "NativeScript", "Ionic"],
            rightAnswer: "React Native",
        },
        {
            text: "Какой фреймворк позволяет использовать Vue.js или Angular в своей основе?",
            variants: ["React Native", "NativeScript", "Ionic"],
            rightAnswer: "NativeScript",
        },
        {
            text: "Какой фреймворк использует гибридный подход к разработке мобильных приложений?",
            variants: ["React Native", "NativeScript", "Ionic"],
            rightAnswer: "Ionic",
        },
        {
            text: "Какие основные факторы следует учитывать при выборе фреймворка для разработки мобильных приложений?",
            variants: ["Производительность и сложность обучения", "Размер сообщества и доступ к нативным функциям", "Все вышеперечисленное"],
            rightAnswer: "Все вышеперечисленное",
        },
        {
            text: "Какой фреймворк лучше всего подходит для проекта, требующего тесной интеграции с нативными функциями устройства?",
            variants: ["React Native", "NativeScript", "Ionic"],
            rightAnswer: "React Native",
        }
    ])


    const [currentQ, setCurrentQ] = useState(0);
    const [testIsDone, setTestIsDone] = useState(false);

    const handleAnswer = (answer, isCorrect) => {
        if (isCorrect) {
            setLocalScore(localScore + 1);
        }
        setCurrentQ(currentQ + 1); // Переключаем на следующий вопрос сразу после закрытия диалогового окна
    };

    return (
        <div>
            {!testIsDone ? currentQ < questionBank.length ? <TestWrapper
                question={questionBank[currentQ].text}
                variants={questionBank[currentQ].variants}
                rightAnswer={questionBank[currentQ].rightAnswer}
                sendAnswer={handleAnswer}
            /> : <button onClick={() => {
                    doneTests(questionBank.length, localScore);
                    setTestIsDone(true);
                }}>Закончить</button>
                : <div>Вы закончили тест. Теперь это окно можно закрыть</div>
            }
        </div>
    );
}
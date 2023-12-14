import { useState } from "react";

export function TestWrapper(props) {
    const [answer, setAnswer] = useState("");

    const handleAnswer = () => {
        let feedback;
        if (answer === props.rightAnswer) {
            feedback = "Ваш ответ правильный!";
        } else {
            feedback = `Неправильно. Правильный ответ: ${props.rightAnswer}`;
        }
        window.alert(feedback); // Показываем диалоговое окно
        props.sendAnswer(answer, answer === props.rightAnswer);
    };

    return (
        <div>
            <h1>{props.question}</h1>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {props.variants.map((v) => (
                    <label key={v} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <input
                            type="radio"
                            name={props.question}
                            value={v}
                            onChange={(e) => setAnswer(e.target.value)}
                            checked={answer === v}
                        />
                        <div>{v}</div>
                    </label>
                ))}
            </div>
            <button
                onClick={handleAnswer}
                disabled={!answer}
                style={{ 
                    backgroundColor: answer ? "#646cff" : "#ccc",
                    color: answer ? "white" : "black",
                    cursor: answer ? "pointer" : "default"
                }}
            >
                Отправить
            </button>
        </div>
    );
}

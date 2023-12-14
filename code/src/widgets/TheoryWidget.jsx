import { useEffect, useState } from "react";
import { doneTheory } from "../api/scorm.js";
import { TextWrapper } from "../components/TextWrapper.jsx";
import { TestWidget } from "./TestWidget.jsx"; // Импортируем TestWidget

export function TheoryWidget(props) {
    const [openedPage, setOpenedPage] = useState(`/`);
    const [showTest, setShowTest] = useState(false); // Новое состояние для управления отображением TestWidget
    const [router, setRouter] = useState({});

    useEffect(() => {
        setRouter({
            "/intro": <TextWrapper
                header="Разработка мобильных приложений на JavaScript: Основные фреймворки"
                body="В этой презентации мы исследуем ключевые аспекты разработки мобильных приложений с использованием JavaScript. Основное внимание уделяется трем популярным фреймворкам: React Native, NativeScript и Ionic. Мы рассмотрим их особенности, преимущества и сценарии использования, чтобы вы могли выбрать наиболее подходящий инструмент для вашего проекта."
                done={() => {
                    props.setScore(doneTheory("1"));
                    setOpenedPage(`/react-native`);
                }}/>,
            "/react-native": <TextWrapper
                header="React Native: Нативная производительность и React"
                body="React Native, созданный Facebook, позволяет разработчикам использовать React вместе с нативными возможностями платформы. Это обеспечивает высокую производительность и отличное взаимодействие с пользователем. Особенно эффективен для проектов, требующих сложной логики на стороне клиента и интенсивного взаимодействия с пользовательским интерфейсом."
                done={() => {
                    props.setScore(doneTheory("2"));
                    setOpenedPage(`/nativescript`);
                }}/>,
            "/nativescript": <TextWrapper
                header="NativeScript: Гибкость Angular и Vue.js"
                body="NativeScript предоставляет возможность использования Angular или Vue.js для создания нативных приложений. Он подходит для проектов, где важна гибкость и возможность интеграции с существующими библиотеками Angular или Vue.js. NativeScript идеален для разработки сложных бизнес-приложений с обширным функционалом."
                done={() => {
                    props.setScore(doneTheory("3"));
                    setOpenedPage(`/ionic`);
                }}/>,
            "/ionic": <TextWrapper
                header="Ionic: Универсальность веб-технологий"
                body="Ionic использует веб-технологии (HTML, CSS, JavaScript) в сочетании с Angular для создания гибридных приложений. Это отличный выбор для проектов, где необходимо быстро создать кросс-платформенное приложение с использованием веб-технологий и готовых компонентов интерфейса."
                done={() => {
                    props.setScore(doneTheory("4"));
                    setOpenedPage(`/comparison`);
                }}/>,
            "/comparison": <TextWrapper
                header="Сравнительный анализ: React Native, NativeScript, Ionic"
                body="React Native предлагает нативную производительность и глубокую интеграцию с платформой. NativeScript выделяется гибкостью и поддержкой Angular/Vue.js. Ionic идеален для быстрой разработки и использования веб-технологий. Выбор зависит от целей проекта: для сложных интерфейсов и производительности лучше React Native, для гибкости и интеграции с Angular/Vue.js - NativeScript, для веб-разработчиков и быстрого прототипирования - Ionic."
                done={() => {
                    props.setScore(doneTheory("5"));
                    setOpenedPage(`/conclusion`);
                }}/>,
            "/conclusion": <TextWrapper
                header="Заключение: Выбор подходящего фреймворка"
                body="Выбор фреймворка для мобильной разработки зависит от множества факторов: требуемой производительности, предпочтений в разработке, сроков проекта и доступных ресурсов. React Native, NativeScript и Ionic предлагают разные подходы и инструменты, каждый со своими сильными сторонами и ограничениями. Важно оценить требования вашего проекта и выбрать наиболее подходящий инструмент."
                done={() => {
                    props.setScore(doneTheory("6"));
                    setShowTest(true); // Обновляем состояние для отображения TestWidget
                }}/>,
        });
    }, []);    
    

    let content = showTest ? <TestWidget /> : router[openedPage];
    if (!content) {
        content = <h1>Сравнительный анализ JavaScript фреймворков для разработки мобильных приложений</h1>;
    }

    return (
        <div>
            <button onClick={() => setOpenedPage("/intro")}>Введение</button>
            {props.score > 0 ? <button onClick={() => setOpenedPage("/react-native")}>React Native</button> : null}
            {props.score > 1 ? <button onClick={() => setOpenedPage("/nativescript")}>NativeScript</button> : null}
            {props.score > 3 ? <button onClick={() => setOpenedPage("/ionic")}>Ionic</button> : null}
            {props.score > 7 ? <button onClick={() => setOpenedPage("/comparison")}>Сравнение</button> : null}
            {props.score > 15 ? <button onClick={() => setOpenedPage("/conclusion")}>Заключение</button> : null}
            {content}
        </div>
    );
}

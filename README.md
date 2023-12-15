# Яманко ДИ Scorm

## Тема ВКР: Сравнительный анализ JavaScript фреймворков для разработки мобильных приложений

React + Vite

Содержится 6 слайдов и тест на 5 вопросов по теме ВКР

Запускать на своем пк: 
```
npm install
npm run dev
```
Сборка:
```
npm run build
```
Файлы из папки dist собрать в архив и добавить файл imsmanifest.xml

## Как устроен проек

Основной код находится в папке code/src/

Слайды добавляются через components/TheoryWidget.jsx:
```
"/test": <TextWrapper
	header="Заголовок слайда"
	body="текст слайда"
	done={() => { // функция которая выполнится после нажатия кнопки далее
		props.setScore(doneTheory("номер слайда"));
		setOpenedPage(`/`);
	}}/>,
```

Методы работы с апи moodle и начисления очков находятся в файле api/scorm.js.


Итоговая оценка отправляется после прохождения теста и считается по формуле:
```
((100 - кол-во баллов за прохождение слайдов) / кол-во вопросов) * кол-во правильных ответов
```

В апи moodle мы сохраняем следующие значения:
```
myAPI.SetValue('cmi.score.raw', полученная_оценка);
myAPI.SetValue('cmi.score.scaled', полученная_оценка);
myAPI.SetValue('cmi.completion_status', 'completed');
myAPI.SetValue('cmi.success_status', 'passed');
```
@echo off

REM Удаление старых файлов
del *.html *.js *.css *.zip

REM Установка зависимостей и сборка проекта
cd code && npm install && vite build

REM Перемещение файлов
move code\dist\assets\* .\
move code\dist\index.html .\
rmdir /s /q code\dist\assets

REM Изменение путей в index.html (замените sed на соответствующую команду в Windows)
REM sed -i -e 's/\/assets\///g' ./index.html
REM del ./index.html-e

REM Создание архива
zip scorm.zip index.html imsmanifest.xml *.css *.js

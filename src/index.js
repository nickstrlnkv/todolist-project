import _, { divide } from 'lodash';
import './style.css';
import 'normalize.css';
import projectsJSON from './projects.json';

const navigationDiv = document.querySelector('.container--navside');
const contentDiv = document.querySelector('.container--content');

fetch(projectsJSON) // замените 'file.json' на путь к вашему файлу
    .then(response => response.json())
    .then(data => {
        // console.log(data); // Данные доступны, можно выполнить необходимые действия с ними здесь
        // Например, вызвать функцию, которая зависит от jsonData
        (doSomethingWithData(data));
    })
    .catch(error => console.log('Ошибка:', error));

function doSomethingWithData(data) {
    // В этой функции вы можете выполнять действия с данными, когда они доступны

    // добавление названий проектов в nav
    for (let i = 0; i < Object.keys(data).length; i++) {
        const projectButton = document.createElement('button');
        projectButton.classList.add('container--navside--project-button');

        projectButton.textContent = data[i].name;
        navigationDiv.appendChild(projectButton);

         // загрузка задач на поле
         projectButton.addEventListener('click', () => {
            for (let j = 0; j < Object.keys(data[i].tasks).length; j++) {

                console.log(data[i].tasks[j]);
                // создаем див-контейнер для задачи
                const taskContainer = document.createElement('div');
                taskContainer.classList.add("container--content--task");

                // создаем элемент для названия задачи
                const taskTitleElement = document.createElement('p');
                taskTitleElement.classList.add('container--content--task--title');
                taskTitleElement.textContent = data[i].tasks[j].title;
                
                // создаем элемент для описания задачи
                const taskDescriptionElement = document.createElement('p');
                taskDescriptionElement.classList.add('container--content--task--description');
                taskDescriptionElement.textContent = data[i].tasks[j].description;

                // создаем элемент для даты задачи
                const taskDateElement = document.createElement('p');
                taskDateElement.classList.add('container--content--task--date');
                taskDateElement.textContent = data[i].tasks[j].dueDate;

                // создаем чекбокс для элемента
                const taskCheckboxElement = document.createElement('input');
                taskCheckboxElement.classList.add('container--content--task--checkbox')
                taskCheckboxElement.type = 'checkbox';
                taskCheckboxElement.setAttribute("id", data[i].tasks[j].id);

                // собираем это все в один див
                taskContainer.appendChild(taskTitleElement);
                taskContainer.appendChild(taskDescriptionElement);
                taskContainer.appendChild(taskDateElement);
                taskContainer.appendChild(taskCheckboxElement);

                // добавляем в контент контейнер
                contentDiv.appendChild(taskContainer)
            }

        })
    
    }
    // добавление задач


}


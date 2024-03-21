import _ from 'lodash';
import './style.css';
import 'normalize.css';
import projectsJSON from './projects.json';

const navigationDiv = document.querySelector('.container--navside');

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

    for (let i = 0; i < Object.keys(data).length; i++) {
        let projectButton = document.createElement('button');
        projectButton.classList.add('container--navside--project-button');

        projectButton.textContent = data[i].name;
        navigationDiv.appendChild(projectButton);

    }



}


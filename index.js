const input = document.getElementById('input');
const inputValue = input.value;
const buttonAdd = document.getElementById('add');
const buttonClean = document.getElementById('clean');
const main = document.querySelector('.tasks');
let taskItems = [];
window.localStorage.setItem('taskItems', JSON.stringify(taskItems));


if (!!main) {
  buttonClean.setAttribute('disabled', 'disabled');
} else {
  buttonClean.removeAttribute('disabled');
}

/*
const addToTask = () => {
  if (inputValue.trim() !== '') {
    let taskItems = window.localStorage.getItem('taskItems'); // Получаем массив taskItems из Local Storage
    taskItems = taskItems ? JSON.parse(taskItems) : []; //Проверяем, существует ли значение и не является ли пустым
    taskItems.push(inputValue); // Добавляем новый элемент в массив
    window.localStorage.setItem('taskItems', JSON.stringify(taskItems)); // Сохраняем массив cartItems в Local Storage
    console.log(`Задача добавлена и сохранена в Local Storage.`);
  } else {
    console.log('Введите название товара.');
  }
}
*/

function addTask() {

  const newDiv = document.createElement('div');
  newDiv.classList.add('task'); //Добавляем класс в новый div

  const newLabel = document.createElement('label'); //Создаем новый label для чекбокса
  newLabel.for = 'checkbox'; //Добавляем атрибут for чтобы привязать label к input

  const newCheckbox = document.createElement('input'); //Создаем новый чекбокс
  newCheckbox.type = 'checkbox'; //Добавляем атрибут type чтобы определить какой именно импут нам нужен

  newLabel.textContent = input.value; //Добавляем в значение чекбокса задачу  из input

  taskItems = window.localStorage.getItem('taskItems'); // Получаем массив taskItems из Local Storage
  taskItems = taskItems ? JSON.parse(taskItems) : []; //Проверяем, существует ли значение и не является ли пустым
  taskItems.push(inputValue); // Добавляем новый элемент в массив
  window.localStorage.setItem('taskItems', JSON.stringify(taskItems)); // Сохраняем массив taskItems в Local Storage

  newDiv.append(newLabel); //Добавляем элементы в новый div
  newDiv.append(newCheckbox); //Добавляем элементы в новый div
  main.append(newDiv); //Добавляем новый div в список задач

  console.log(`Новая задача добавлена и сохранена в Local Storage.`);
  input.value = ""; // Очищает input после нажатия кнопки
  buttonClean.removeAttribute('disabled');
}


buttonAdd.addEventListener('click', addTask);
//buttonAdd.addEventListener('click', addToTask);

function clean() {
  main.innerHTML = "";
  window.localStorage.clear()
  console.log('Local Storage очищен.');
}

buttonClean.addEventListener('click', clean);
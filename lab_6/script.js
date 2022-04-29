document.write("Скрипт подключен из отдельного файла <br/>");
alert("Диалоговое окно из файла");

let myArray = ["Москва", "Волгоград", "Ярославль", "Серпухов", "Подольск"];

/**
 * Возвращает отсортированную копию исходного массива
 * @param {string[]} initialArr - исходный массив
 * @param {string} type - тип сортировки
 * @returns {string[]}
 */
const getNewArray = (initialArr, type) => {
  let result = initialArr.slice(); // делаем копию исходного массива чтобы не мутировать входные данные
  if (type === "init") {
  } else if (type === "abc") {
    result.sort();
  } else if (type === "rev") {
    result.reverse();
  } else if (type === "len") {
    result.sort((a, b) => a.length - b.length);
  }

  return result;
};

/**
 * Показывает отсортированный массив
 * @param {string[]} arr - массив для сортировки
 * @param {string} [type=init] type - тип сортировки
 */
const showSortedArray = (arr, type = "init") => {
  alert(getNewArray(myArray, type).toString().replace(/,/g, "\n")); // заменяем запятые на перенос строк для более читаемого вывода
};

// Воспользуемся всплытием событий и навесим одни обработчик
// на весь документ внутри которого будем смотреть на id нажатого элемент интерфейса
document.addEventListener("click", (e) => {
  if (e.target.id === "button-sort-init") {
    showSortedArray(myArray);
  } else if (e.target.id === "button-sort-abc") {
    showSortedArray(myArray, "abc");
  } else if (e.target.id === "button-sort-reverse") {
    showSortedArray(myArray, "rev");
  } else if (e.target.id === "button-sort-len") {
    showSortedArray(myArray, "len");
  } else if (e.target.id === "link-dialog") {
    alert("Диалоговое окно через a");
  } else if (e.target.id === "button-dialog") {
    alert("Диалоговое окно на кнопке");
  }
});

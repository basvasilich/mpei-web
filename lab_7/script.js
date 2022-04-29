let result = parseInt(prompt("Расстояние до луны в километрах", ""));
if (isNaN(result) || result <= 0) {
  alert("Некорректный ввод");
} else if (result > 400000) {
  alert("Много");
} else if (result < 400000) {
  alert("Мало");
} else {
  alert("Правильно");
}

let i = 1;
let sum = 0;
while (i <= 10) {
  sum += i;
  i += 1;
}
alert('Сумма чисел от 1 до 10 = ' + sum);

for (let j = 1; j <= 10; j++) {
  if (j !== 7) {
    alert(j);
  }
}

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const a = parseInt(document.querySelector('#a').value)
  const b = parseInt(document.querySelector('#b').value)
  const c = parseInt(document.querySelector('#c').value)
  document.querySelector('#result').value = a * b * c;
})

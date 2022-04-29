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
alert(sum);

for (let j = 1; j <= 10; j++) {
  if (j !== 7) {
    alert(j);
  }
}

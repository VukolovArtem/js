// trafficLights Function (green  yellow  Red)

const trafficLights = function (color) {
  if (color === "red") {
    return "Стой";
  } else if (color == "yellow") {
    return "Жди";
  } else if (color === "green") {
    return "Иди";
  } else {
    return "Не понял";
  }
};

// light Calculator Function

const lightCalculator = function (num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;
  }
};

// What Season is it Now Function
const whatSeasonNow = function (number) {
  switch (number) {
    case 3:
    case 4:
    case 5:
      return "Весна";
      break;
    case 6:
    case 7:
    case 8:
      return "Лето";
      break;
    case 9:
    case 10:
    case 11:
      return "Осень";
      break;
    default:
      return "Зима";
  }
};

// ====================
// >>> trafficLights (green  yellow  Red)

// const color = prompt("Введите цвет сфетофора (green yellow  red):");
console.log(trafficLights('red'));

// >>> light Calculator
console.log('Сложение')
console.log(lightCalculator(10, 2, "+"));
console.log('Вычитание')
console.log(lightCalculator(88, 44, "-"));
console.log('Умножение')
console.log(lightCalculator(3, 4, "*"));
console.log('Деление')
console.log(lightCalculator(100, 10, "/"));

// >>> What Season is it Now Function
// const number = +prompt("Введите какой месяц по счету: ");
console.log(whatSeasonNow(11));

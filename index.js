// является ли число четным
const evenNumber = function (num) {
  if (num % 2 === 0) {
    return "Число " + num + " четное";
  } else {
    return "Число " + num + " НЕ четное";
  }
};
// наименьшее из двух чисел
const lesserNumber = function (num1, num2) {
  if (num1 < num2) {
    return " Число " + num1 + " меньше";
  } else {
    return " Число " + num2 + " меньше";
  }
};

// принимает количестов денег у пользователя и стоимость товара.
const enoughMoney = function (money, price) {
  if (money > price) {
    return " У Вас хватает денег на этот товар!";
  } else {
    return 'Ты лузер!))';
  }
};

const num = +prompt("Введите число:");
const resul_1 = evenNumber(num);
alert(resul_1);

const num1 = +prompt("Введите первое число для сравнения:");
const num2 = +prompt("Введите второе число для сравнения:");
const resul_2 = lesserNumber(num1, num2);
alert(resul_2);

const yourMoney = +prompt("Введите сколько у Вас денег:");
const priceProduct = +prompt("Сколько стоит товар:");
const resul_3 = enoughMoney(yourMoney, priceProduct);
alert(resul_3);

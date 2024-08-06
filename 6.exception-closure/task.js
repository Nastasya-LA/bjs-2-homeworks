//ДЗ "Обработка исключений и замыкания"
//Задача 1
// Функция для преобразования значения в число с плавающей точкой
function parseCount(value) {
  const result = Number.parseFloat(value);

  if (isNaN(result)) {
    throw new Error('Невалидное значение');
  }
  return result;
}

// Функция для валидации значения
function validateCount(value) {
  try {

    const parsedValue = parseCount(value);
    return parsedValue;
  } catch (error) {

    return error;
  }
}

// Пример использования функции с выводом объекта ошибки
try {
  console.log(validateCount("123")); // Выведет: 123
} catch (error) {
  console.error(error); // Обработка и вывод информации об ошибке
}

// Пример использования функций
console.log(validateCount("123"));
console.log(validateCount("abc"));



//Задание 2
//Класс Triangle
class Triangle {
  constructor(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    const p = this.perimeter / 2;
    return Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() { return 'Ошибка! Треугольник не существует'; },
      get perimeter() { return 'Ошибка! Треугольник не существует'; }
    };
  }
}

// Пример использования
const triangle = getTriangle(3, 4, 5);
console.log(triangle.area); // Выведет площадь треугольника с точностью до трех знаков после запятой
console.log(triangle.perimeter); // Выведет периметр треугольника

const invalidTriangle = getTriangle(1, 2, 3);
console.log(invalidTriangle.area); // Выведет "Ошибка! Треугольник не существует"
console.log(invalidTriangle.perimeter); // Выведет "Ошибка! Треугольник не существует"





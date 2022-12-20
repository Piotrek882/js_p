// przypisanie funkcji do innej zmiennej

const showNewCourse = showCourseName;
showNewCourse();

// zwracanie wartości z funkcji
// domyślnie funkcja po wykonaniu zadania jest undefined
// można to zmienić używając instrukcji return

// przykład

const divideBy2 = function (number) {
  console.log(number / 2);
};

const result2 = divideBy2(10);

// przykład 2

let number = 0;

const add = function () {
  number++;
  console.log(number);
};

add(number); // 1

// przykład 3

const divideBy3 = function (number) {
  return number / 3;
};

const result3 = divideBy3(20);
console.log(result3);

// przykład 4
// lepszy sposób
/* 
const divideBy5 = function (number) {
    const result4 = number/5; // zmienna lokalna
    console.log(result4);    
    return result4;
}
*/
// gorszy sposób
const divideBy5 = function (number) {
  console.log(number / 5);
};

// funkcja bez paramentrów
const showMyName = function () {
  console.log("Imię");
};

// funkcja z parametrem

const showUserName = function (userName) {
  console.log("Witaj " + userName);
};

showUserName("user", 30);

// wartości domyślne funkcji
// const addTwoNumber = (x = 0, y = 0) => {
//     const result = x + y;
//     console.log(result);
//     return result;
// }

// addTwoNumber(4, 5);

// inny przykład

const addTwoNumber = (x = 0, y = 5) => {
  const result = x + y;
  console.log(result);
  return result;
};

addTwoNumber(4); // dodajemy do 5
// addTwoNumber(4, 7); // x + y = 11 // 5 liczy się tylko wtedy, gdy nie wpiszemy drugiej liczby

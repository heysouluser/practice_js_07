// Task 1
// Выведите на экран числа от 0 до 100.

document.querySelector('.t1').onclick = () => {
   let div1 = '';
   for (let i = 0; i <= 100; i++) {
      div1 += `${i} `;
   }
   document.querySelector('.d1').innerHTML = div1;
}

// Task 2
// Вывести четные числа от 0 до 101.

document.querySelector('.t2').onclick = () => {
   let div2 = '';
   for (let i = 0; i <= 101; i++) {
      if (i % 2 === 0) div2 += `${i} `;
   }
   document.querySelector('.d2').innerHTML = div2;
}


// Task 3
// Вывести числа в следущей последовательности: 200 199 198 ... 0.

document.querySelector('.t3').onclick = () => {
   let div3 = '';
   for (let i = 200; i >= 0; i--) {
      div3 += `${i} `;
   }
   document.querySelector('.d3').innerHTML = div3;
}

// Task 4
// Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).

document.querySelector('.t4').onclick = () => {
   let div4 = 0;
   for (let i = 0; i <= 100; i++) {
      div4 += i;
   }
   document.querySelector('.d4').innerHTML = div4;
}

// Task 5
// Задайте два input. В первый вводится число, во второе его степень. С помощью цикла возведите число в степень. Напечатайте результат.

document.querySelector('.t5').onclick = () => {
   let i5 = +document.querySelector('.i5').value;
   let i51 = +document.querySelector('.i51').value;
   let div5 = 1;
   for (let i = 0; i < i51; i++) {
      div5 *= i5;
   }
   document.querySelector('.d5').innerHTML = div5;
}

// Task 6
// С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.

document.querySelector('.t6').onclick = () => {
   let div6 = '';
   for (let i = 1; i < 10; i++) {
      div6 += `${i} * 7 = ${i*7}<br>`;
   }
   document.querySelector('.d6').innerHTML = div6;
}

// Task 7
// С помощью цикла вывести произведение чисел от 1 до 50.

document.querySelector('.t7').onclick = () => {
   let div7 = 1;
   for (let i = 1; i <= 50; i++) {
      div7 *= i;
   }
   document.querySelector('.d7').innerHTML = div7;
}

// Task 8
// Выведите с помощью цикла коды спецсимволов от 1000 до 2000. Напомню, что спецсимвол получается комбинацией &#число; Например &#1222;

document.querySelector('.t8').onclick = () => {
   let div8 = '';
   for (let i = 1000; i <= 2000; i++) {
      div8 += `&#${i}; `;
   }
   document.querySelector('.d8').innerHTML = div8;
}

// Task 9
// Получите все параграфы внутри div.main страницы. Используя цикл пронумеруйте все параграфы. Номер добавьте внутри тега параграфа перед текстом.

let p = document.querySelectorAll('p');

document.querySelector('.t9').onclick = () => {
   for (let i = 0; i < p.length; i++) {
      p[i].insertAdjacentHTML('afterbegin', `${i+1} `);
   }
   // document.querySelector('.t9').onclick  = null;  // функция сработает только один раз!
}

// document.querySelector('.t9').addEventListener('click', myFunction, {once: true});

// function myFunction () {
//    for (let i = 0; i < p.length; i++) {
//       p[i].insertAdjacentHTML('afterbegin', `${i+1} `);
//    }
// }

// Task 10
// Создайте два поля. В одно пользователь вводит день рождения, во второй - месяц (в виде числа). Выведите знак зодиака под каким родился пользователь. Данные о знаке зодиака храните в массиве.

let i10 = document.querySelector('.i10');
let i101 = document.querySelector('.i10-1');

let z = [
   ['Козерог', 1, 1, 19],
   ['Водолей', 1, 20, 31],
   ['Водолей', 2, 1, 18],
   ['Рыбы', 2, 19, 28],
   ['Рыбы', 3, 1, 29],
   ['Овен', 3, 21, 31],
   ['Овен', 4, 1, 19],
   ['Телец', 4, 20, 30],
   ['Телец', 5, 1, 20],
   ['Близнецы', 5, 21, 31],
   ['Близнецы', 6, 1, 20],
   ['Рак', 6, 21, 30],
   ['Рак', 7, 1, 22],
   ['Лев', 7, 23, 31],
   ['Лев', 8, 1, 22],
   ['Дева', 8, 23, 31],
   ['Дева', 9, 1, 22],
   ['Весы', 9, 23, 30],
   ['Весы', 10, 1, 22],
   ['Скорпион', 10, 23, 31],
   ['Скорпион', 11, 1, 21],
   ['Стрелец', 11, 22, 30],
   ['Стрелец', 12, 1, 21],
   ['Козерог', 12, 22, 31],
];

document.querySelector('.t10').onclick = zodiacMassive;

function zodiacMassive() {
   let d = +i10.value;
   let m = +i101.value;
   let div10 = '';
   for (let i = 0; i < z.length; i++) { 
      if (z[i][1] == m && z[i][2] <= d && z[i][3] >= d) div10 = `${z[i][0]}`;
      else if (isNaN(d) || isNaN(m) || d == 0 || m == 0 || d > 31 || m > 12) div10 = 'Введите корректное число';
      else if (m == 2 && d > 28) div10 = 'Введите корректное число';
   }
   document.querySelector('.d10').innerHTML = div10;
   console.log(div10);
}


// Task 11
// С помощью JS найдите все span на странице и сделайте им цвет фона - желтый.

let span = document.querySelectorAll('span');

document.querySelector('.t11').onclick = () => {
   for (let i = 0; i < span.length; i++) {
      span[i].style.background = 'yellow';   // не забывай про [i]
   }
}

// Task 12
// Выведите внизу страницы информацию о количестве параграфов.

document.querySelector('.t12').onclick = () => {
   document.querySelector('.d12').innerHTML = `Текущее количество параграфов на странице: ${p.length}`;
}

// Task 13
// Создайте массив состояний из единицы и 5 нулей. Т.е. [1, 0,0,0,0,0]. Выведите массив на страницу. Добавьте кнопку. При каждом нажатии кнопки смещайте единицу вправо на одну позицию и заново выводите массив в тот же блок что и раньше. Если единица достигла конца массива - не делайте ничего.

let arr13 = [1, 0, 0, 0, 0, 0];
let d13 = document.querySelector('.d13');
let count = 0;
d13.innerHTML = arr13.join(' ');

document.querySelector('.t13').onclick = () => {
   // if (count + 1 == arr13.length) {
   //    arr13[arr13.length - 1] = 0;
   //    count = -1;
   // }
   if (count < arr13.length) {
      arr13[count] = 0;
      arr13[count + 1] = 1;
      count++;
   }
   d13.innerHTML = arr13.join(' ');
}

// Task 14
// Создайте массив с произвольными числами. Выведите количество элементов массива меньше нуля.

let arr14 = [1, 0, 15, -1, -10, 6, -1];
let count2 = 0;

document.querySelector('.t14').onclick = () => {
   for (let i = 0; i < arr14.length; i++) {
      if (arr14[i] < 0) count2++;
   }
   document.querySelector('.d14').innerHTML = count2;
   // document.querySelector('.t14').onclick = null;
}

// Task 15
// Создайте массив с произвольными числами. Выведите элементы массива меньше нуля.

let arr15 = [5, 0, -2, 12, -3, 55, -7, -10];

document.querySelector('.t15').onclick = () => {
   let out15 = '';
   for (let i = 0; i < arr15.length; i++) {
      if (arr15[i] < 0) out15 += `${arr15[i]} `;
   }
   document.querySelector('.d15').innerHTML = out15;
}

// Task 16
// Создайте input куда пользователь может ввести количество элементов массива. После нажатия кнопки создается массив заданной длинны заполненный единицами.

let inp16 = document.querySelector('.i16');
let out16 = document.querySelector('.out16');
let t16 = document.querySelector('.t16');

t16.onclick = () => {
   let arr16 = [];
   for (let i = 0; i < inp16.value; i++) {
      arr16.push(1);
   }
   out16.innerHTML = arr16.join(' ');
}

// Task 17
// Создайте input куда пользователь может ввести количество элементов массива. После нажатия кнопки создается массив заданной длинны заполненный случайными числами от 0 до 100.

let inp17 = document.querySelector('.i17');
let out17 = document.querySelector('.out17');
let b17 = document.querySelector('.b17');

b17.onclick = () => {
   let arr17 = [];
   for (let i = 0; i < inp17.value; i++) {
      arr17.push(Math.round(Math.random() * 100));
   }
   out17.innerHTML = arr17.join(' ');
}

// Task 18
// Создайте массив заполненный числами и строками. Используя цикл создайте другой массив куда поместите только числа из первого массива.

let out18 = document.querySelector('.out18');
let b18 = document.querySelector('.b18');

let arr18 = [1, 2, 'hi', 'bye', 555];
let arr181 = [];

b18.onclick = () => {
   for (let i = 0; i < arr18.length; i++) {
      if (typeof arr18[i] === 'number') arr181.push(arr18[i]);
   }
   out18.innerHTML = arr181.join(' ');
}


// Task 19
// Создайте массив. Выведите максимальное значение из этого массива.

let out19 = document.querySelector('.out19');
let b19 = document.querySelector('.b19');

let arr19 = [1, 0, -5, 7, 123, 1234];

b19.onclick = () => {
   let max = arr19[0];
   for (let i = 0; i < arr19.length; i++) {
      if (arr19[i] > max) max = arr19[i];
   }
   out19.innerHTML = max;
}


// Task 20
// Сложное! Создайте массив и заполните его значениеми. Выведите статистику - сколько раз в массиве повторяется то или инное значение.

let out20 = document.querySelector('.out20');
// let b20 = document.querySelector('.b20');
// let i20 = document.querySelector('.i20');
let arr20 = [1,1, 2,3,6,2,1,0,55,66,22,2,1,0, 'hi', 'hi'];
let arr21 = {};
for (let i = 0; i < arr20.length; i++) {
   let count = 0;
   for (let k = 0; k < arr20.length; k++) {
      if (arr20[k] == arr20[i]) count++;
   }
   arr21[arr20[i]] = count;
}

console.log(arr21);

let outLast = '';
for (let key in arr21) {
   outLast += ` ${key} - ${arr21[key]} <br>`;
}
out20.innerHTML = outLast;
// b20.onclick = () => {
//    let k = 0;
//    for (let i = 0; i < arr20.length; i++) {
//       if (i20.value == arr20[i]) k++;
//    }
//    out20.innerHTML = k;
// }





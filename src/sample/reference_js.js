// テンプレート文字列

const name = "Ryo";
const age = 37;
const message = `my name is ${name}. I'm ${age} years old.`;
console.log(message);


//  アロー関数

const func2 = (str) => {
  return str;
}
console.log(func2('func2 desu'));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(2, 3));


//　分割代入

const myProfile = {
  name: "Ryo",
  age: 37,
}

const message1 = `My name is ${myProfile.name}. I'm ${myProfile.age} years old.`;
console.log(message1);

const { name, age } = myProfile;
const message2 = `My name is $%{name}. I'm ${age} years old.`;
console.log(message2);


const myProfile2 = ['Ryo', 37];
const message3 = `My name is ${myProfile[0]}. I'm ${myProfile[1]} years old.`;
console.log(message3);

const [ name, age ] = myProfile2;
const message4 = `My name is ${name}. I'm ${age} years old.`;
console.log(message4);


// デフォルト値、引数など

const sayHello = (name = 'Guest') => console.log(`Hello, Mr/Ms.${name}.`);
sayHello("Ryo");
}


//　スプレッド構文

// // 配列の展開
const array1 = [1, 2];
console.log(array1);
console.log(...array1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(array1[0], array1[1]);
sumFunc(...array1);


// // まとめる
const array2 = [1, 2, 3, 4, 5];
const [ num1, num2, ...array3 ] = array2;
console.log(num1);
console.log(num2);
console.log(array3);

// // 配列のコピー、結合
const array4 = [10, 20];
const array5 = [30, 40];

const array6 = [...array4];
console.log(array6);

const array7 = [...array4, ...array5];
console.log(array7);


// mapやfilterを使った配列の処理　※従来はfor文を使っていたものをシンプル化できる
const nameArray = ["Tanaka", "Satoh", "Jakee"];

const nameArray2 = nameArray.map(name => {
  return name;
});
console.log(nameArray2);

nameArray.map((name) => console.log(name));

// // // filter
const numArray = [1, 2, 3, 4, 5];
const newNumArray = numArray.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArray);

// // // mapを使って条件分岐
const newNameArray = nameArray.map((name) => {
  if (name !== "Jakee") {
    return name
  } else {
    return `${name} san`
  }
});
console.log(newNameArray);

export default App;


// 三項演算子
// ある条件　 ? 条件がtrueの時 : 条件がfalseの時
const val1 = 1 > 0 ? 'true desu' : 'false desu';
console.log(val1);


const num = "1300";
const formattedNum = typeof num === 'number' ? num.toLocaleString() : 'Enter a number!!!!!';
console.log(formattedNum);


const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? 'Over 100!!!' : 'Under 100!!';
}
console.log(checkSum(60, 50));


//  論理演算子
// ||は左がfalseなら右を返す
const num7 = null;
const fee = num7 || '右を返す';
console.log(fee);

// &&は左がtrueなら右を返す
const num8 = null;
const fee2 = num8 && '右を返す';
console.log(fee2);

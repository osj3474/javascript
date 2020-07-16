# Javascript

## Javascript란?

웹사이트를 interactive로 만들고 싶을 때 사용하는 프로그래밍 언어입니다. 웹의 발전과 함께 빠르게 성장하고 있습니다.

## ECMAScript란?

ECMAScript는 Specification으로, 일종의 매뉴얼과 같습니다. 이 매뉴얼은 A라는 코드를 읽으면 브라우저가 어떻게 반응해야하는지에 대한 규칙들이 들어있습니다.

cf) ES5, ES6, ES4는 버전을 나타냅니다.

## Vanilla JS란?

바닐라 자바스크립트는 브라우저를 통해 제공된 Javascript입니다. 아무리 jQuery, React를 잘 써도 결국에 컴파일하면, 바닐라 자바스크립트가 됩니다.

바닐라 자바스크립트를 배우고, library와 framework을 배운다면, 더 높은 이해도를 가질 수 있습니다.

## Hello world

자바스크립트에서의 hello world는 alert(경고문)을 띄우는 것입니다.
그러기 위해서 우선, <body> 안 맨 마지막에 (css는 <head>)

**index.html**

```html
<body>
  <script src="index.js"></script>
</body>
```

를 추가하고, javascript파일에 alert문을 추가합니다.

**index.js**

```javascript
alert("Im working");
```

**[ 결과 ]**

![image](https://user-images.githubusercontent.com/42775225/87627297-5e8cca00-c769-11ea-94dc-021fd7dc4c3c.png)

## Variables

자바스크립트는 변수를 생성하거나 초기화하는 방법이 2가지 있습니다. 네이밍을 할 때는, camel case로 하는 습관을 들이면 좋습니다.

**_camel case: 변수명을 언제나 소문자로 시작해서 변수명 중간에 스페이스가 필요하면 스페이스 대신 대문자를 쓰고 다음 단어를 쓰는 것입니다._**

### 1. let

물론 그냥 명령어 없이 생성 및 초기화도 에러가 뜨지 않지만, 습관적으로 이렇게 하기를 추천합니다.

```javascript
let a = 2;
```

이 때 생성된 a는 값이 변할 수 있습니다.

### 2. const

```javascript
const a = 2;
```

이 때 생성된 a는 값이 변할 수 없습니다.

cf) 몇 년 전에는 var만 쓸 수 있었지만, 지금은 let, const를 쓸 수 있습니다.

**_변수를 선언할 때는 처음은 const, 진짜 필요할 때만 let_**

## javascript 주석

```javascript
// 주석내용
```

또는

```javascript
/* 주석내용 */
```

## 타입

### String

자바스크립트에서는 " " 와 ' ' 의 차이는 없습니다. 또, 강력한 도구인 ``을 활용할 수 있습니다. (String 내에서 편하게 " 또는 ' 를 사용할 수 있고, \${}를 활용할 수도 있습니다.)

```javascript
const a = "Sangjin";
```

### Boolean

```javascript
const a = true;
```

### Float

```javascript
const a = 1.5;
```

## 정렬하기 (2가지 방법)

### 1. Array []

리스트 안의 element들은 같은 타입이 아니라도 가능합니다. 한 리스트 안에 숫자, 문자, 변수 다 넣을 수 있습니다.

```javascript
const daysOfWeek = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];
console.log(daysOfWeek[2]);
```

### 2. Object {}

key-value형식으로 데이터를 저장할 수 있습니다. RDB의 데이터처럼 생각하려고 했는데(그러면, 한 column에는 하나의 value만 있습니다.), value로 리스트, 리스트 안의 object도, 함수까지도 가능합니다.

```javascript
const info = {
  name: "Sangjin",
  age: 25,
  gender: "Male",
  hobby: ["guitar", "movie", "programming"],
  favFood: [
    {
      name: "Burger",
      calorie: 700,
    },
    {
      name: "Pizza",
      calorie: 800,
    },
  ],
};

console.log(info.name);
```

_cf) console.log : object 안의 element 접근은 '.' 으로 합니다. console도 object이며, console 안에 있는 log라는 function을 사용하고 있습니다._
_cf) console.log(console) 를 출력해서 참고하기 바랍니다._

## Function

### 자바스크립트에서 함수 만들기

1. return 없는 경우

```javascript
function sayHello(name, age) {
  console.log("Hello, Im", name + ". Im", age, "years old.");
}

sayHello("Sangjin", 25);
```

2. return 있는 경우

```javascript
function sayHello(name, age) {
  return `Hello, I'm ${name}. I'm ${age} years old.`;
}

console.log(sayHello("Sangjin", 25));
```

3. 객체지향으로 만드는 경우

```javascript
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
};

console.log(calculator.plus(5, 5));
```

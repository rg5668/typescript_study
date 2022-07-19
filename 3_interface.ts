interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: "세호",
};

//함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}

const capt = {
  name: "캡틴",
  age: 20,
};

getUser(capt);

//함수의 스펙에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

//인덱싱
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ["a", "b", "c"];
arr[0] = "d";

//딕셔너리 패턴
//RegExp 정규표현식 예약어
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

obj["htmlFile"] = /\.html$/;
// obj["tsFile"] = 'ts';

//인터페이스 확장 (상속)
interface Person {
  name: string;
  age: number;
}

interface Dveloper extends Person {
  language: string;
}

let kg: Dveloper = {
  language: "ts",
  age: 100,
  name: "kg",
};

// function logMessage(value: any) {
//   console.log(value);
// }
// logMessage("hi");
// logMessage(100);

//유니온타입에 장점은 1가지 이상의 타입을 쓰고싶을 때
//any와의 차이점은 타입에 관련된 api를 쓸 수 있다는점

var seho: string | number | boolean;

function logMessage(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
  console.log(value);
}
logMessage("hi");
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  //이럴떄는 공통된 속성만 제공
  someone.name;
  console.log(someone);
}

askSomeone({ name: "디벨로퍼", skill: "웹개발" });
askSomeone({ name: "디벨로퍼", age: 10 });

// function askSomeone(someone: Developer & Person) {
//   //모두 사용할 수 있다.
//   someone.name;
//   someone.age;
//   someone.skill;
// }

//&인터섹션 |유니온타입
//차이점

// var seho: string | number | boolean;
// var capt: string & number & boolean;

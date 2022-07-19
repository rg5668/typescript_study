// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(312);

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText<string>("안녕!");

// function logText(text: string | number) {
//   console.log(text);

//   return text;
// }

// 각각 정의하지 않고 호출한 시점에 타입을 정의
// 타입을 추론해서 최종 반환값까지 붙일 수 있다
function logText<T>(text: T): T {
  console.log(text);

  return text;
}

logText<number>(10);
logText<string>("das");

//인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

interface Dropdown<T, X> {
  value: T;
  selected: X;
}

const obj: Dropdown<string, boolean> = { value: "gg", selected: false };

//제네릭의 타입 제한

// function logTextLength<T>(text:T):T {

//   return text;
// }

// logTextLength('hi')

//제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

//제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
//keyof 1가지 키 타입만 들어올 수 있게
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a')
getShoppingItemOption("price");

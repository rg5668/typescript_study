// interface Person {
//   name: string;
//   age: number;
// }

//별칭으로 정의하면 interface와 다르게 프리뷰(마우스 대면 미리보기) 상태에서 타입이 보임
//정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것
//단점은 타입은 확장되지 않는다. (인터페이스는 확장 가능 extends)
type Person = {
  name: string;
  age: number;
};

let seho: Person = {
  name: "세호",
  age: 30,
};

type MyString = string;
let str: MyString = "h~i";

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {}

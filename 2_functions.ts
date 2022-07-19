// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b;
}

//함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  let a: number = 10;
  return a;
}

//함수에 타입을 정의하는 방식
function result(a: number, b: number): number {
  return a + b;
}

// result(10, 20, 30);

//함수 옵셔널 파라미터
//1:1 매핑이 아닌 선택적으로 넣고 싶을때 ? 를 써주면 된다.
function log(a: string, b?: string) {
  return a + b;
}

log("hi~");
log("hi", "k~");

class Person {
  //클래스 로직
  //인스턴스
  //생성자 초기값 설정 로직
  constructor(name, age) {
    console.log("생성 되었습니다.");
    this.name = name;
    this.age = age;
  }
}

var seho = new Person("세호", 30);
console.log(seho);

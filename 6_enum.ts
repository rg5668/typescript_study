// 아무것도 정의하지 않고 초기화하지 않으면 숫자형으로
// enum Shoes {
//   Nike, //0
//   Adidas, //1
// }

enum Shoes {
  Nike = "나이키",
  Adidas = "아디다스",
}

var myShoes = Shoes.Adidas;
console.log(myShoes);

//예제
enum Answer {
  Yes = "Y",
  No = "N",
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답");
  }
  if (answer === Answer.No) {
    console.log("오답");
  }
}

askQuestion(Answer.Yes);

// askQuestion("예스");
// askQuestion("y");
// askQuestion("YES");

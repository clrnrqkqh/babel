// https://www.daleseo.com/js-babel/
// 바벨(Babel 7) 기본 사용법

//VS Code에서 ESlint와 Prettier 함께 사용하기
//https://feynubrick.github.io/2019/05/20/eslint-prettier.html

var a = () => {};
var a = (b) => b;

const double = [1,2,3].map((num) => num * 2);
console.log(double); // [2,4,6]

var bob = {
  _name: "Bob",
  _friends: ["Sally", "Tom"],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};
console.log(bob.printFriends());

/*
   before
  for (let a of [1,2,3]) {}

*/
for (let a of [1,2,3]) {}

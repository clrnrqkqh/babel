"use strict";

// https://www.daleseo.com/js-babel/
// 바벨(Babel 7) 기본 사용법
//VS Code에서 ESlint와 Prettier 함께 사용하기
//https://feynubrick.github.io/2019/05/20/eslint-prettier.html
var a = function a() {};

var a = function a(b) {
  return b;
};

var _double = [1, 2, 3].map(function (num) {
  return num * 2;
});

console.log(_double); // [2,4,6]

var bob = {
  _name: "Bob",
  _friends: ["Sally", "Tom"],
  printFriends: function printFriends() {
    var _this = this;

    this._friends.forEach(function (f) {
      return console.log(_this._name + " knows " + f);
    });
  }
};
console.log(bob.printFriends());
/*
   before
  for (let a of [1,2,3]) {}

*/

for (var _i = 0, _arr = [1, 2, 3]; _i < _arr.length; _i++) {
  var _a = _arr[_i];
}
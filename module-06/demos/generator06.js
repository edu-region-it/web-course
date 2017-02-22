function* genFunc() {
    yield 'a';
    yield;
    yield*[1, 2, 3];
    yield 123;

    return "finished";

}

for (var x of genFunc()) { //for...of statement
    console.log(x);
}

//Spread Operator (...)
//Notice how the spread operator is used to iterate through a Generator object:
function* genFunc() {
    yield 'a';
    yield;
    yield*[1, 2, 3];
    yield 123;

    return "finished";

}
var arr = [...genFunc()]; //...spread operator
// arr = ['a',undefined,1,2,3,123]

//Destructuring
//Notice how the destructuring assignment is used to iterate through a Generator object:
function* genFunc() {
    yield 'a';
    yield;
    yield*[1, 2, 3];
    yield 123;

    return "finished";

}

var [a, b, c, d, e, f, g] = genFunc(); //destructuring assignment
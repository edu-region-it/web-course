function* genFunc() {
    yield "a";
    yield;
    yield 123;

    return "finished";
}

var genObject = genFunc();

console.log(genObject.next());
console.log(genObject.next());
console.log(genObject.next());
console.log(genObject.next());
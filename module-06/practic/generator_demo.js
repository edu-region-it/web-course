function* genFunc() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

var genObject = genFunc();
console.log(genObject.next());
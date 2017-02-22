//Return()
//Generator Objects have a return() method that terminates the Generator function. Return() causes a return statement to //performed at the most recent yield statement. The return() method takes in one optional variable that is used as the return //value of the Generator function. Calling return(x) will return an object with a value property equal to x and a done //property of true. After return() is called, subsequent yield statements in the Generator function are ignored. 

//Notice how calling return() affects the generator function:
function* genFunc() {
    yield 'a';
    yield 'b'
    yield 'c'
    return "finished";

}

var genObject = genFunc();

var a = genObject.next(); // a = Object {value: 'a', done: false}
var b = genObject.return('return() was called'); // b = Object {value: "return() was called", done: true}
var c = genObject.next(); // c = Object {value: undefined, done: true}
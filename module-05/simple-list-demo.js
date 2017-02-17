
function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
    this.toString = function () {
      return this.name+', '+this.movie;
    }
}

function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (list.getElement() instanceof Customer) {
            console.log(list.getElement().name + ", " +
                list.getElement().movie);
        }
        else {
            console.log(list.getElement());
        }
    }
}

function checkOut(name, movie, mList, cList)
{
  if (mList.contains(movie)) {
        var c = new Customer(name, movie);
        cList.append(c);
        mList.remove(movie);
    }
   else {
        console.log(movie + " is not available.");
    } 
}

function checkIn(name, movie, mList, cList)
{
  var c = new Customer(name, movie);
           
  if (cList.contains(c)) {
       cList.remove(c);
       mList.append(movie);
    }
   else {
         console.log(c.toString() + " is not available.");
    } 
}


var movies = ["Terminator 1","Terminator 2",
              "Terminator 3","Terminator 4"];

var movieList = new List();
var customers = new List();

for (var i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}

function displayResults()
{
  //console.clear();
  console.log("Available movies:");
  displayList(movieList);
  console.log("Customers:");
  displayList(customers);  
}

displayResults();
checkOut("Andrew", "Terminator 1", movieList, customers);
checkOut("John", "Terminator 3", movieList, customers);
console.log("-------------");
displayResults();
checkIn("John", "Terminator 3", movieList, customers);
console.log("-------------");
displayResults();
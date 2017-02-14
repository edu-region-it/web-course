fetch("https://api.privatbank.ua/p24api/pboffice?json&city=Днепропетровск&address=Титова")
    .then(function(result) {
        return result.json() //returns a promise containing the JSON data extracted from the Response object
    })
    .then(function(result) {
        console.log(result);
        //logs Object {completed: false, id: 1, title: "delectus aut autem", userId: 1}
    });
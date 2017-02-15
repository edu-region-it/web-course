    //var url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
    var url = "http://jsonplaceholder.typicode.com/users";
    var demoBody = {
        user: "admin",
        email: "abc@example.com",
        siteid: 12345
    };

    var demoHeaders = new Headers();
    demoHeaders.append("Content-Type", "application/json");

    var demoInitObject = {
        method: "POST",
        headers: demoHeaders,
        mode: "cors",
        body: JSON.stringify(demoBody)
    };

    fetch(url, demoInitObject).then(function(result) {
        if (result.ok) { // class 2             
            return result.text();
        } else {
            console.log(result.status);
            return Promise.reject(result.status);
        }
    }).then(function(result) {
        console.log(result);
        // let str = "";
        // for (let item of result) {
        //     str += `<tr><td>${item.ccy}</td><td>${item.base_ccy}</td><td>${item.buy}</td><td>${item.sale}</td></tr>`;
        // }
        // let tableContent = document.getElementById("tbl1").getElementsByTagName("tbody")[0];
        // tableContent.innerHTML = str;
    }).catch(function(err) {
        console.log("Error " + err);
    });
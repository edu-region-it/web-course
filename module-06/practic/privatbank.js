// Create the XHR object.
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}

// Make the actual CORS request.
function init() {
    // This is a sample server that supports CORS.
    //var url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
    var url = "https://api.privatbank.ua/p24api/pboffice?json&city=Киев";

    var xhr = createCORSRequest("GET", url);
    if (!xhr) {
        console.log("CORS not supported");
        return;
    }

    // Response handlers.
    xhr.onload = function() {
        console.log("Response from CORS request to " + url + ": " + xhr.responseText);
        let str = "";
        let data = JSON.parse(xhr.responseText);
        for (let item of data) {
            str += `<tr><td>${item.ccy}</td><td>${item.base_ccy}</td><td>${item.buy}</td><td>${item.sale}</td></tr>`;
        }
        let tableContent = document.getElementById("tbl1").getElementsByTagName("tbody")[0];
        tableContent.innerHTML = str;
    };

    xhr.onerror = function() {
        console.log("Woops, there was an error making the request.");
    };

    xhr.send();
}
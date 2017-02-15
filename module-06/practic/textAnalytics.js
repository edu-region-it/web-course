document.getElementById("btn1").addEventListener("click", analyse);

function analyse() {
    let url = "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment";
    let requestBody = {
        "documents": [{
            "language": "en",
            "id": "1",
            "text": document.getElementById("text1").value
        }]
    };

    let requestHeaders = new Headers();
    requestHeaders.append("Ocp-Apim-Subscription-Key", "928416d85b9c481f86dd8ef5f5f9934a");
    requestHeaders.append("Content-Type", "application/json");
    requestHeaders.append("Accept", "application/json");

    let initObject = {
        method: "POST",
        headers: requestHeaders,
        mode: "cors",
        body: JSON.stringify(requestBody)
    };

    let request = new Request(url, initObject);

    fetch(request).then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response.status);
            }
        }).then(function(response) {
            let docs = document.getElementById("output");
            for (let item of response.documents) {
                docs.innerHTML += `${item.id} ${item.score}`;
            }
        })
        .catch(function(err) {
            document.getElementById("output").innerHTML = err;
        });
}
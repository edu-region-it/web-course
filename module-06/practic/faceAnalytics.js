document.getElementById("btn1").addEventListener("click", analyse);

function analyse() {
    let url = "https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceLandmarks=true&returnFaceAttributes=gender,age";
    let requestBody = {
        "url": document.getElementById("text1").value
    };

    let requestHeaders = new Headers();
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
        console.log(response);
        docs.innerHTML = response[0].faceAttributes.gender + " " + response[0].faceAttributes.age;
    }).catch(function(err) {
        document.getElementById("output").innerHTML = err;
    });
}

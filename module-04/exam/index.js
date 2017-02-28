function arrMaxMin(arr) {
    var maxInd = 0;
    arr.reduce(function(max, num, index) {
        if (max < num) {
            maxInd = index;
        };
        return max < num ? num : max;
    });

    var minInd = 0;
    arr.reduce(function(min, num, index) {
        if (min > num) {
            minInd = index;
        };
        return min > num ? num : min;
    });
    console.log("max: " + maxInd + " | min: " + minInd)
    return { maxInd: maxInd, minInd: minInd };
}

function GetSolutionForTask2691(arrayOfStrings) {
    if (arrayOfStrings.length != 20) {
        return [];
    }
    var arrayOfNumbers = arrayOfStrings.map(Number);

    var maxInd = arrMaxMin(arrayOfNumbers).maxInd;
    var minInd = arrMaxMin(arrayOfNumbers).minInd;

    var tempVal = arr[minInd];
    arr[minInd] = arr[maxInd];
    arr[maxInd] = tempVal;
    return ararrayOfNumbers;

}

function GetSolutionForTask2692(arr) {
    if (arr.length != 20) {
        return [];
    } else {
        for (i in arr) {
            arr[i] = Number(arr[i]);
        };
        var maxInd = arrMaxMin(arr).maxInd;
        var minInd = arrMaxMin(arr).minInd;

        var tempVal = arr[arr.length - 1];
        arr[arr.length - 1] = arr[maxInd];
        arr[maxInd] = tempVal;
        return arr;
    };
}

function getResult() {
    var Numbers = document.getElementById("inputNumbers").value;
    var str = "";
    for (var i = 0; i < Numbers.length; i++) {
        if ((Numbers[i] >= "0") && (Numbers[i] <= "9")) {
            str += Numbers[i];
        } else {
            str += ",";
        }
    }

    var arr2691 = GetSolutionForTask2691(str.split(","));
    var arr2692 = GetSolutionForTask2692(str.split(","));
    var output = document.getElementById("result");
    output.innerHTML += "Task2691: " + arr2691.join(" ") + "</br>" + "Task2692: " + arr2692.join(" ") + "</br>";
}
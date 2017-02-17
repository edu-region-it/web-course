function Dictionary() {
    this.datastore = {};
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.traverse = traverse;
    this.count = count;
    this.clear = clear;
    this.has = has;
    this.traverseSort = traverseSort;
}

this.has = function (key) {
    return this.datastore.hasOwnProperty(key);
};

function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.has(key) ? this.datastore[key] : undefined;
}

function remove(key) {
    if (this.find(key)) {
        delete datastore[key];
        return true;
    }
    return false;
}

function traverse(action) {
    for (var key in this.datastore) {
        action(key, this.datastore[key]);
    }
}

function count() {
    return Object.getOwnPropertyNames(pbook.datastore).length;
}

function clear() {
    for (var key in this.datastore) {
        delete this.datastore[key];
    }
}

function traverseSort(action) {
    var items = Object.getOwnPropertyNames(pbook.datastore).sort();
    for (var index = 0; index < items.length; index++) {
        action(items[index], this.datastore[items[index]]);
    }
}

var string_word = 'the brown fox jumped over the blue fox';
function Task(words) {
    var wordArray = words.split(" ");
    var stats = new Dictionary();
    for (var index in wordArray) {
        if (stats.has(wordArray[index])) {
            stats.datastore[wordArray[index]]++;
        }
        else {
            stats.add(wordArray[index], 1);
        }
    }
    stats.traverse(function (key, value) {
        console.log(key + "-->" + value);
    })
}

Task(string_word);



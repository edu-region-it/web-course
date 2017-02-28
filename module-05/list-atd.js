function List() {
    this.listSize = 0; // довжина списку
    this.pos = 0; // поточна позиція для елемента
    this.dataStore = []; // місце для зберігання даних

    // this.clear = clear; // ф-ція очистки (видалення всіх елементів)
    this.find = find; // пошук
    this.toString = function() { return this.dataStore.join(); }
    this.insert = insert; // вставка нового елемента
    this.append = append; // додання в кінець
    this.remove = remove; // видалити
    this.front = function() { this.pos = 0; }
    this.end = function() { this.pos = this.listSize - 1; }
    this.prev = prev;
    this.next = next;
    this.currPos = function() { return this.pos; }
    this.moveTo = moveTo; // перейти до заданої позиції
    this.getCurrentElement = function() { return this.dataStore[this.pos] };
    this.length = function() { return this.listSize };
    // this.contains = contains; // -----
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    return this.dataStore.indexOf(element);
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true; //якщо елемент знайдено 
    }
    return false; //якщо елемент не знайдено 
}

function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

function prev() {
    if (this.pos > 0) {
        this.pos--;
        return true;
    }
    return false;
}

function next() {
    if (this.pos < this.listSize - 1) {
        this.pos++;
        return true;
    }
    return false;
}

function moveTo(index) {
    if ((index >= 0) && (index < this.listSize)) {
        this.pos = index;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

//push/pop
//shift/unshift

var list = new List();
list.append("A");
list.append(5);
list.append(4);
list.append(6);
list.append("B");
list.append(8);
list.append(9);
list.append(10);
list.append(11);

list.end();
do {
    console.log(list.getCurrentElement());
} while (list.prev());

// LIFO
// FIFO
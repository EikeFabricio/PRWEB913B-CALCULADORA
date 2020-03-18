function set (value, id) {
    document.getElementById(id).value = value;
}

function get(id) {
    return document.getElementById(id).value;
} 

const id = "r";

function add(value) {
    set(get(id) + value, id)
}

function cs() {
    set('', id);
}

function solve() {
    return set(eval(get(id)), id);
}
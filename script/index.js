function set (value, id) {
    document.getElementById(id).value = value;
}

function get(id) {
    return document.getElementById(id).value;
} 

function add(value) {
    const id = "r";

    set(get(id) + value, id)
}

function cs() {
    set('', 'r');
}

function solve() {
    return set(eval(get('r')), 'r');
}
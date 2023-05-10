export function InputKey(target, key) {
    if(key && key.match(/[a-z]/)) { target.value += key; }
    else if (key && key === "_") { target.value += " "; }
    else { console.log("ERROR: invalid key: " + key); }
}
const s = "0111010";
let removeZeroNumber = 0;
let n = "";
let num = 0;
let t = "";

function solution(s){
    for (let index = 0; index < s.length; index++) {
        if (Number(s[index])){
          n += s[index];
        }
    }
    removeZeroNumber += (s.length - n.length);
    console.log(removeZeroNumber);
    t = n.length.toString(2);
    console.log(t);
    num++;

    if (t == "1"){
        return [num, removeZeroNumber];
    };
    solution(String(t));
}

console.log(solution(s));
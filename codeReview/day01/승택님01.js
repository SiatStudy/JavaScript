function solution(my_string) {
    const string = my_string.split("");
    const remove = ["a", "e", "i", "o", "u"];
    const filtered = string.filter((element) => !remove.includes(element));
    
    return filtered.join("");
}

console.log(solution("nice to meet you"));  
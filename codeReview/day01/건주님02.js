function solution(dots) {
    var answer = 0;
    let x = [];
    let y = [];
    let index = 0;
    for (const dot of dots) {
      x[index] = dot[0];
      y[index] = dot[1];
      index++;
    };
    // 01, 23 / 02, 13 / 03, 12
    if ((x[0] - x[1]) === (x[2] - x[3]) &&
        (y[0] - y[1]) === (y[2] - y[3])) {
      answer = 1;
    };
    
    if ((x[0] - x[2]) === (x[1] - x[3]) &&
        (y[0] - y[2]) === (y[1] - y[3])) {
      answer = 1;
    };
    
    if ((x[0] - x[3]) === (x[2] - x[1]) &&
        (y[0] - y[3]) === (y[2] - y[1])) {
      answer = 1;
    };
    
    return answer;
}
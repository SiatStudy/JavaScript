function solution() {
  let num_list = [3, 4, 5, 2, 1];
  let sumall1 = num_list.reduce((acc, cur) => acc + cur, 0);
  let sumallpow1 = Math.pow(sumall1, 2);
  let multipleall1 = num_list.reduce((acc, cur) => acc * cur, 1);
  let Binarynum = 0;

  return sumallpow1 > multipleall1 ? 1 : 0;

  // if (sumallpow1 > multipleall1){
  //     Binarynum = 1;
  // } else{
  //     Binarynum = 0;
  // }
  console.log(Binarynum);
}
solution();

// Question
/*
 * 정수가 담긴 리스트 num_list가 주어질 때,
 * 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을,
 *  크면 0을 return하도록 solution 함수를 완성해주세요.
 *
 * https://school.programmers.co.kr/learn/courses/30/lessons/181929
 * */

// Code for submit.
function solution(num_list) {
  // 다 더해 보기
  let sumall1 = [...num_list].reduce((acc, cur) => acc + cur);
  // 그걸 제곱 걸어보기
  let sumallpow1 = Math.pow(sumall1, 2);

  // 다 곱해보기
  let multipleall1 = [...num_list].reduce((acc, cur) => acc * cur);

  // 리턴 값 초기화
  let Binarynum = 0;

  //  원소들의 합의 제곱 > 원소들의 곱 = 1
  //  원소들의 합의 제곱 < 원소들의 곱 = 0

  // 로직 압축
  return sumallpow1 > multipleall1 ? (Binarynum = 1) : (Binarynum = 0);

  // if (sumallpow1 > multipleall1){
  //     Binarynum = 1;
  // } else{
  //     Binarynum = 0;
  // }
  // return Binarynum;
}

 // 현재 날짜 생성
 let currentDate = new Date();
  
 document.getElementById("btn").addEventListener("click", function(){
 // 비교할 날짜(사용자가 입력한 값) 생성 (년, 월, 일을 순서대로 입력)
 let receivedYear = year1.value;
 let receivedMonth = month1.value;
 let receivedeDay = day1.value;
     
 // 입력한 날짜의 유효성 검사
 let ValidDate = true;

 // 사용자가 입력한 연도,월,일이 유효한지 검사
 let ValidMonth = receivedMonth >= 1 && receivedMonth <= 12;
 let ValidDay = receivedeDay >= 1 && receivedeDay <= new Date(receivedYear, receivedMonth, 0).getDate();
 let ValidYear = receivedYear <= currentDate.getFullYear() && receivedYear >= 1800;

 // 사용자가 입력한 날짜의 유효성을 모두 검사(만약 공백,초과입력등등 잘못 입력했을경우 다시 입력하라는 문구 띄우기)
 if (!ValidYear){
     ValidDate = false;
     yperr1.style.color = "red";
     year1.style.borderColor = "red";
     yperr2.innerHTML = `
     <p style="color : red;">연도를 다시 입력해 주세요.</p>
     `;
     console.log("연도가 유효하지 않습니다");
 }else{
     yperr1.style.color = "";
     year1.style.borderColor = "";
     yperr2.innerHTML = ``;
 }

 if (!ValidMonth){
     ValidDate = false;
     mperr1.style.color = "red";
     month1.style.borderColor = "red";
     mperr2.innerHTML = `
     <p style="color : red;">월을 다시 입력해 주세요.</p>
     `;
     console.log("해당 월이 유효하지 않습니다");
 }else{
     mperr1.style.color = "";
     month1.style.borderColor = "";
     mperr2.innerHTML = ``;
 }

 if (!ValidDay){
     ValidDate = false;
     dperr1.style.color = "red";
     day1.style.borderColor = "red";
     dperr2.innerHTML = `
     <p style="color : red;">일자를 다시 입력해 주세요.</p>
     `;
     console.log("해당 일이 유효하지 않습니다");
 }else{
     dperr1.style.color = "";
     day1.style.borderColor = "";
     dperr2.innerHTML = ``;
 }


 // 사용자가 입력한 날짜가 유효한 날짜인 경우에만 실행
 if (ValidDate) {
 let compareDate = new Date(receivedYear, receivedMonth - 1, receivedeDay); // receivedMonth는 0~11이 실제론 1~12월이 되기 때문에 -1을해야한다.

 // 차이 계산
 let yearDiff = currentDate.getFullYear() - compareDate.getFullYear();
 let monthDiff = currentDate.getMonth() - compareDate.getMonth();
 let dayDiff = currentDate.getDate() - compareDate.getDate();

     // 연, 월, 일이 해당 연도의 월, 일을 초과할 경우 연, 월, 일의 차이를 조정
     if (dayDiff < 0) {
         monthDiff--;
         // 이전 달의 마지막 날짜를 구함
         let lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0); // (new Date 끝에 0을 입력하면 전달의 마지막 일자)
         // 이전 달의 마지막 날짜와 비교 날짜의 일 차이에 현재 날짜의 일을 더하여 정확한 일 차이를 계산
         dayDiff = lastMonth.getDate() - compareDate.getDate() + currentDate.getDate();
     }

     if (monthDiff < 0) {
         yearDiff--;
         // 월 차이가 음수인 경우 12개월을 더해주어 정확한 월 차이를 계산
         monthDiff = 12 + monthDiff;
     }

 // 결과 출력
 console.log("차이: " + yearDiff + "년 " + monthDiff + "월 " + dayDiff + "일");
 y1.textContent = `${yearDiff}`;
 m1.textContent = `${monthDiff}`;
 d1.textContent = `${dayDiff}`;
 }
})
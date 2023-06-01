import React, { useState } from 'react';
import "./Comp1.css";

const Comp1 = () => {

  const [dayVal, setDayVal] = useState(0);
  const [monthVal, setMonthVal] = useState(0);
  const [yearVal, setYearVal] = useState(0);
  const [arr, setArr] = useState(["--", "--", "--"]);

  function btnClick() {
    const date = new Date();
    let betweenYear = date.getFullYear() - yearVal;
    let betweenMonth = date.getMonth() - monthVal;
    let betweenDay = date.getDate() - dayVal;
    if(betweenDay<0) betweenDay+=30;
    if(betweenMonth<0) betweenMonth += 12;
    if(betweenYear<0||monthVal>12||monthVal<1||dayVal<1||dayVal>31){
      alert("잘못된 입력입니다.");
    } else {
    arr[0] = betweenYear;
    arr[1] = betweenMonth;
    arr[2] = betweenDay;
    setArr([...arr]);
    }
  }

  function onChangeDay(e) {
    let value = e.target.value;
    setDayVal(+value);
  }
  function onChangeMonth(e) {
    let value = e.target.value;
    setMonthVal(+value);
  }
  function onChangeYear(e) {
    let value = e.target.value;
    setYearVal(+value);
  }

  return (
    <div>
      <div className="inputdiv">
        <div>
          <p>DAY</p><br />
          <input type="text" name="day" id="day" onChange={onChangeDay} value={dayVal} />
        </div>
        <div>
          <p>MONTH</p><br />
          <input type="text" name="month" id="month" onChange={onChangeMonth} value={monthVal} />
        </div>
        <div>
          <p>YEAR</p><br />
          <input type="text" name="year" id="year" onChange={onChangeYear} value={yearVal} />
        </div>
        <button onClick={btnClick}>입력</button>
      </div>
      <article>
        <h3>{arr[0]}years</h3>
        <h3>{arr[1]}months</h3>
        <h3>{arr[2]}days</h3>
      </article>
    </div>
  );
};

export default Comp1;
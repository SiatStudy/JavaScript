import { useState } from "react"


function Comp1(){

  const [state, setState] = useState("");

  const changeInput = (e) => {
    let value = e.target.value;
    // let {value} = e.target; 으로 써도 같은 의미
    const chk1 = /^[0-9]$/;
    let result = "";
    let arr1 = [...value];
   
    for (let i in arr1) {
      if (!chk1.test(arr1[i])) {
        arr1[i] = "_";
      }
    }
    result = arr1.join("");
    setState(result);
  }

  return (
    <div>
      <h3>3주차 코드리뷰 과제</h3>
      <input type="text" name="txt1" id="txt1"
        onChange={changeInput} value={state} placeholder='입력'></input>
    </div>
  )
}

export default Comp1;
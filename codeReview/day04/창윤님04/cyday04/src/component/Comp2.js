import { useState } from "react";


function Comp2(){

  const [state, setState] = useState("");

  const changeInput = (e) =>{setState(e.target.value);}

  const makeBtn = ()=>{
    // let str = "";
    let arr1 = [];
    for(let i=97; i<123; i++){
      if(i==110){arr1.push(<br></br>)}
      let char1=String.fromCharCode(i);
      arr1.push(<button key={i} value={char1} onClick={btnClick}>{char1}</button>);
    }
    return arr1;
  }

  const btnClick= (e)=>{setState(s=>s+e.target.value);}

  return (
    <div>
      <h3>4주차 코드리뷰 과제</h3>
      <input type="text" name="txt1" id="txt1"
        onChange={changeInput} placeholder='입력' value={state}></input><br></br>
      {makeBtn()}
    </div>
  )
}

export default Comp2;
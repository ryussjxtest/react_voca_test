import { useState } from "react";

export default function RossTest(){
  const [num, addNum] = useState(0);
  const [step, changeStep] = useState(1);

  function changeNum(n){
    let res = num+ step*n;
    addNum(res);
    console.log("num ",res);   
  }

  return (
    <div>
      <div>
        <h1>RoSS</h1> 
      </div>
      <div>
        <text> Num </text>
        <button onClick={()=>{
          changeNum(-1);
        }}>-</button>
        {/* <text id='num'> {num} </text>   state변경1.id이용.*/}
        <text> {num} </text>
        <button onClick={()=>{
          changeNum(1);
        }}>+</button>
        <button 
          onClick={()=>{
          // changeNum(0);
          addNum(100); //직접 useState에 등록한 fn. 호출.
          console.log("num reset",100);
        }}>reset</button>

      </div>
      <div>
        <text> Step</text>
        <button onClick={()=>{
          let temp = step > 0 ? step -1 : step;
          changeStep(temp);
          console.log("step ",temp);
        }}>-</button>
        <text> {step} </text>
        <button onClick={()=>{
          let temp = step < 10 ? step + 1 : step;
          changeStep(temp);
          console.log("step ",temp);
        }}>+</button>
        <button 
          onClick={()=>{
            changeStep(1);
            console.log("step reset",1);
        }}>reset</button>
      </div>
    </div>
  );
}

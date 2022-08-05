import { useState } from "react";

export default function Hello(){
  // let num = 0
  // let name = "Mike";
  // function changeName(){
  //   name = name ==="Mike"? "Jane" : "Mike"; 
  //   // name에 Mike와 Jane을 토글...
  //   console.log(name);
    
  //   // state를 변경하는 방식 1.getElementById
  //   // 이렇게 하려면..해당 element에 id를 명시해 줘야한다.
  //   // <h2>{name}</h2> =====> <h2 id='name'>{name}</h2> 
  //   document.getElementById('name').innerText = name;
  // }
  // function addNum(n){
  //   if ((n == -1 &&  num > 0)||(n == 1 && num < 1000)){
  //     num += n;
  //   }
  //   console.log("매개 변수 이용. ",num);
  //   // state를 변경하는 방식 1.getElementById
  //   // 이렇게 하려면..해당 element에 id를 명시해 줘야한다.
  //   // <text> {num} </text> =====> <text id='num'> {num} </text>
  //   document.getElementById('num').innerText = num;
  // }



  // state를 변경하는 방식 2.useState
  // 구조 분해 형식.
  // [변수명, 변수를 수정할 fn] = useState(초기값)
  const [num, addNum] = useState(0);
  const [name, setName] = useState('Mike');
  
  function changeName(){
    setName(name ==="Mike"? "Jane" : "Mike");
    console.log(name);
  }
  function changeNum(n){
    if(n==0){
      addNum(100);
    }else if ((n == -1 &&  num > 0)||(n == 1 && num < 1000)){
      // num += n;
      addNum(num+n);
    }
    console.log("매개 변수 이용. ",num);
    // document.getElementById('num').innerText = num;
    
  }
 
  return (
    <div>
      <div>
        <h1>State</h1> 
        <h2 id='name'>{name}</h2> 
        <button onClick={changeName}>Change</button>      
      </div>

      <div>
        <button onClick={()=>{
          changeNum(-1);
        }}>-</button>
        <text id='num'> {num} </text>
        <button onClick={()=>{
          changeNum(1);
        }}>+</button>
        <button onClick={()=>{
          changeNum(0);
        }}>reset</button>
      </div>
    </div>
  );
}

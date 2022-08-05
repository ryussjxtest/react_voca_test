import { useState } from "react";
import UserName from "./UserName";

// <Hello />
// export default function Hello(){
// const [name, setName] = useState('Mike');

// <Hello age={20}/>
export default function Hello(props){
  // props는 ReadOnly..이다.  수정 불가.

  // console.log("Component Hello",props.name, props.age);
  console.log("Component Hello",props);
  const [name, setName] = useState(props.name);
  const [age, setAge] = useState(props.age);
  const [msg, setMsg]= useState(props.age > 19? '성인' : '미성년자');

  return (
    <div>
      <div>
        {/* 한 컴포넌트의 state가 다른 컴포넌트의 props가 된다. */}
        <UserName name={name}/>
        <text>{name}({props.age}{' --> '}{age}) {' '} </text> 
        <button 
          onClick={()=>{
            //직접 useState에 등록한 fn. 호출.
            // setName(name ==="Mike"? "Jane" : "Mike");
            setName(name ===props.name? "John" : props.name);
            let newage = age + 1;
            setAge(newage);
            setMsg(newage > 19? '성인' : '미성년자')
            console.log(name, newage);
          }
        }>변경</button>
        <text>{' '} {msg} </text>
        
      </div>   
    </div>
  );
}

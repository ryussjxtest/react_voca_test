import { useState, useRef, useEffect } from "react";
import { shuffle } from "lodash";


// React 에서 key가 필요한 이유
// 단순히 index를 쓰는 것이 왜 안좋은지
// 어떤값을 key로 사용하는게 좋은지......
export default function KeyMapTest(){
  // useRef를 이용해서 input의 value를 받습니다.
  const inputRef = useRef(null);

  // // 반드시 import 필요. useEffect. 자동으로 안될때도 있음.
  // useEffect(()=>{
  //   const id = setInterval(()=>{
  //     // 반드시 import 필요. shuffle
  //     // import { shuffle } from "lodash";
  //     const newuserlist = shuffle(userList);
  //     setUesrList(newuserlist);
  //   }, 1000);
  //   return()=>{
  //     clearTimeout(id);
  //   }
  // },[]);


  // useList는 useState로 관리합니다. 
  // const [변수명, 변경함수] = useState(초기값)
  const [userList, setUesrList] = useState([
    {id:1, name:"Mike"},
    {id:2, name:"Tom"},
    {id:3, name:"Jane"},
    {id:4, name:"Paul"},
  ]);
  function pushNewUser(){
    // 기존의 userList에 새로운 user객체를 만들어서 넣어준다.
    setUesrList([
      ...userList,
      {
        id : userList[userList.length-1].id + 1, //id는 하나씩 증가
        name:inputRef.current.value, //inputRef의 현재 값.
      },
    ])
    inputRef.current.value = null;

  }
  
  function pushNewUserFront(){
    // 기존의 userList에 새로운 user객체를 만들어서 넣어준다.
    setUesrList([
      {
        id : userList[userList.length-1].id + 1, //id는 하나씩 증가
        name:inputRef.current.value, //inputRef의 현재 값.
      },
      ...userList,      
    ])
    inputRef.current.value = null;

  }
  function deleteUser(){
    // 기존의 userList에 일단....마지막꺼만 삭제한다.
    let afterUser = [...userList];
    console.log(afterUser);
    console.log(afterUser[0]);
    afterUser.shift();
    setUesrList(afterUser);
  }
  const onKeyPress = (e)=>{
    if (e.key == 'Enter'){
      // 문자 입력후 enter키 누르면...
      pushNewUser();      
    }
  }
  return(
    // <ul style="list-style-type: square"> // js
    // 아래는 jsx 스퇄... '-'은 안된다. 
    // '-' 빼고 대문자로...
    <div>
      <header><h1>KeyMapTest</h1></header>
      <button onClick={pushNewUserFront}>앞에 등록</button>
      {userList.map((user, index)=>(
        // 유저명을 placeholder로 나타낸다.
        // 순서를 보장 받으려면 index가 아닌 unique한 값으로 key를 만들어야 한다.
        // map의 두번째 인자가 key 이다. 없으면 warning(경고)가 뜬다.
        <input 
          key={user.id}
          type="text"
          placeholder={user.name}
          // 위를 보라 {} 는 값을 넣어 준다.
          // 따라서 객체를 넣어 주려면 {{}} 이다.
          style = {{display:"black"}}
        />
      ))}
      {/* useRef를 이용해서 input의 value를 받습니다. */}
      <input type="text" ref={inputRef} onKeyPress={onKeyPress}/>
      {/* 새로운 사용자를 추가하는 pushNewUer라는 함수를 만들고 버튼에 연결 */}
      <button onClick={pushNewUser}>뒤에 등록</button>
      <button onClick={deleteUser}>삭제</button>

      <ul style={{listStyleType:'square'}}>
        {userList.map((user,index) =>{
          return (
            <li key={index}>{user.name}</li>
          );
        })}
      </ul>
    </div>
  );
}
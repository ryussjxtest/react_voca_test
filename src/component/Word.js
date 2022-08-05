import { useState } from "react";
import { useParams } from "react-router-dom";
  

// 하지만 page가 reload될때마다 고정된 data를 읽어 오므로 수정한 내역이 반영안됨.
// json-server를 install 하여 back-end 작업을 수월하게 하자. 
// 우리는 fe공부중...
// npm install -g json-server
// json-server --watch ./src/db/data.json --port 3001 
export default function Word({word : w}){ // word:w 새로운 변수명으로 할당한다.
  // 단어 삭제시 페이지가 다시 렌더링 되도록 하자.   word를 state로 만든다.
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);
  function toggleShow(){
    setIsShow(!isShow);
  }
  function toggleDone(){
    // CRUD의 U. update로 db의 값을 수정해 본다.
    // Update는 PUT으로 가능하다. 
    // check 박스(isDone)의 변경사항을 반영한다.
    fetch(`http://localhost:3001/words/${word.id}`,{
      method : "PUT",
      headers :{
        "Content-Type" : "application/json", // json 형태로 전달
      },
      // 단순히 가져오는 Get과 달리 Put은 다르다.
      // 수정을 위한 정보를 body에 입력한다.
      body : JSON.stringify({
        ...word, // 기존data에... 전개구문(spread syntax..)
        isDone : !isDone, //여기가...이전 isDone을 toggle.
      }), // JSON.stringify 로 json format을 감싸준다.
    }).then(res =>{
      if(res.ok){
        // 응답이 OK이면 이때 state를 바꾼다.
        if(!isDone){ // 여기는 내가 넣은것. 체크하면 뜻 숨기도록...추가.
          setIsShow(false);
        }
        setIsDone(!isDone);
      }
    });
  }
  function delWord(){
    // console.log("CRUD Delete DELETE......");
    
    // CRUD의 D. Delete로 db의 값을 삭제한다.
    // method는 DELETE이다.
    // 삭제 버튼을 누르면 삭제하도록 수정한다.
    if(window.confirm("삭제 하시겠습니까????")){
      console.log("CRUD Delete DELETE...... Yes");
      fetch(`http://localhost:3001/words/${word.id}`,{
        method : "DELETE", // 삭제는 특별히 다른 정보 필요없이 method만 있으면 된다.
      }).then(res=>{
        if(res.ok){
          console.log("CRUD Delete DELETE...... Completed.");
          setWord({id:0});  // key가 같으면 덮어쓴다.
        }
      });
      
    }else{
      console.log("CRUD Delete DELETE...... No");
    } 
    // 여기까지만 하면...삭제후  페이지가 reload되지 않는다.
    // refresh해보면 확인가능하다.    
    // 삭제시에도 page가 자동으로 refesh되도록 한다.
  }
  if(word.id == 0){
    console.log("Return Null... page reloaded");
    return null; // 이로써 page가 reload된다.
  }

  return(
    // <tr key={word.id}>.. Day => Word로 props 전달.
    // isDone여부에 따라 className을 수정해서 style을 변경할수 잇다.  음....
    <tr className={isDone? "off": ""}>
      <td>
        <input type='checkbox' checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      {/* 뜻(kor)은 state가 True일경우만. */}
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? "숨기기": "보기"}</button>
        <button className="btn_del" onClick={delWord}>삭제</button>
      </td>
      {/* <td>{word.isDone? "암기":"암기필요"}</td> */}
    </tr>
  )
}
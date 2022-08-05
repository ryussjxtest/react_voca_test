import { useState } from "react";
import { useParams } from "react-router-dom";
  

// 하지만 page가 reload될때마다 고정된 data를 읽어 오므로 수정한 내역이 반영안됨.
// json-server를 install 하여 back-end 작업을 수월하게 하자. 
// 우리는 fe공부중...
// npm install -g json-server
// json-server --watch ./src/db/data.json --port 3001 
export default function Word({word}){
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);
  function toggleShow(){
    setIsShow(!isShow);
  }
  function toggleDone(){
    // console.log(`[toggleDone] isDone[${isDone}], isShow[${isShow}]`);
    if(!isDone){
      setIsShow(false);
    }
    setIsDone(!isDone);
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
        <button className="btn_del">삭제</button>
      </td>
      {/* <td>{word.isDone? "암기":"암기필요"}</td> */}
    </tr>
  )
}
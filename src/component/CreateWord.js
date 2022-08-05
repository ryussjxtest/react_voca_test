import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../hook/useFetch";

export default function CreateWord(){
  console.log(`[CreateWord] `);
  const days = useFetch("http://localhost:3001/days");
  // 추가한 사항을 매번 다시 home으로 가서 확인해야 하니 불편하다.
  // 추가 하면 바로 추가된 day로 이동하도록 한다.
  // 여기에서 react-router-dom가 제공하는 useHistory를 이용한다.
  const history = useHistory(); // 선언하고 아래서 push로 이동할 url넣는다.

  //네트웍을 느리게 한다음(broswer>F12>Netwrok>Online(No throttling)-> slow3G)
  // 단어 추가 버튼을 빠르게 누르면...하나의 단어가 추가 되기 전에 지속 입력된다.
  // 하나의 단어 추가가 끝나기 전(res 200 OK )에는 단어 추가가 되지 않도록 한다.
  const [isSaving, setIsSaving] =  useState(false);

  // 버튼을 눌러도 새로 하지 않도록 막는다.
  function onSubmit(e){
    e.preventDefault();

    let newEng = engRef.current.value;
    let newKor = korRef.current.value;
    let newDay = dayRef.current.value;
    // console.log('[onSubmit engRef] ',newEng);
    // console.log('[onSubmit korRef] ',newKor);
    // console.log('[onSubmit dayRef] ',newDay);

    if(!isSaving){
      setIsSaving(true);

      fetch(`http://localhost:3001/words`,{
        method : "POST",
        headers:{
          "Content-Type" : "application/json",
        },
        body:JSON.stringify({
          // id:
          day: newDay,
          eng: newEng,
          kor: newKor,
          isDone : false
        }),
      }).then(res=>{
        if(res.ok){
          alert("생성이 완료 되었습니다.")
          console.log("POST OK", newDay, newEng, newKor);
          setIsSaving(false);

          // link to 처럼 페이지 이동, link to , a tag없이 page이동가능.
          history.push(`/day/${newDay}`); 
        }
      })
    }
  }

  // form 내부에서 선택한 값을 읽어 오기 위한 부분.
  // Hook... useRef를 활용한다.
  // useRef는 DOM에 접근할수 있게 해준다. scroll의 위치를 확인하거나. focus를 줄때...
  const engRef = useRef(null); //<input type="text" placeholder="computer" ref={engRef}/>
  const korRef = useRef(null);
  const dayRef = useRef(null); // <select ref={dayRef}/>
  //hook할 useRef를 선언하고 해당 tag에 연결한다.

  return(
    // <form>경우 버튼을 누르면 refresh된다.
    // 위의 onSubmit()을 생성해서. 이를 방지한다.  아래 form에 연결한다.
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef}/>
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef}/>
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map(day=>(
            <option key={day.id} value={day.day}> {day.day} </option>   
          ))}
        </select>
        {/* <select>
          <option> 1 </option>
          <option> 2 </option>
        </select> 
        */}
      </div>
      {/* <button className="btn_del">저장</button> */}
      <button onClick={()=>{
          console.log("[CreateWord] onClick.........")
        }}
        style={{opacity : isSaving? 0.3 : 1}}>
          {isSaving? "Saving..": "저장"}
        </button>
    </form>
  )
}
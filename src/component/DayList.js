import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hook/useFetch';
// 이제 설치한 json-server에 REST API를 통해 값을 읽고쓰고수정해서 data.json에 저장한다.
// import dummy from "../db/data.json";

export default function DayList(){
  // console.log(dummy)
  // const[days, setDays] = useState([]);

  const days = useFetch("http://localhost:3001/days");
  
  // // useEffect는 어떤 상태 값이 변경되었을때 효과를 주기 위한 함수 이다.
  // // function useEffect(effect: EffectCallback, deps?: DependencyList): void;
  // // DayList page가 변경되면 호출된다.
  // // 하지만 관심없는 항목이 수정되더라도 항상 호출이 되므로..두번째 인자로 관심있는 항목..
  // // 즉 변경되면 알고 싶은 것들을 list형태로 넣어 준다.
  // useEffect(()=>{
  //   fetch('http://localhost:3001/days') // json-server로 만든것...
  //   .then(res=>{
  //     return res.json();
  //   })
  //   .then(data=> {
  //     setDays(data);
  //   })
  // },[]); // 의존성 배열 null []. page렌더링이후, 최초 한번만 실행
  // // json-server --watch ./src/db/data.json --port 3001
  // // json-server로 backend 실행해 놓아야 한다.

  return (
    <>
      <ul className="list_day">
        {/* {dummy.days.map(day=>( 
          dummy가 아닌 REST로 읽어온 값으로 처리하자.*/}
        {days.map(day=>(
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>   
        ))}
      </ul>
    </>
    
  );
} 
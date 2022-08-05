import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hook/useFetch';
// 이제 설치한 json-server에 REST API를 통해 값을 읽고쓰고수정해서 data.json에 저장한다.
// import dummy from "../db/data.json";

export default function DayList(){

  const days = useFetch("http://localhost:3001/days");
  // 느린 network 환경을 만들어 로딩을 느리게 하고...그때 보여주는 기능을 적용한다.
  // browser > F12 > network > online(No Throttling)=> slow 3G 설정하므로써...
  if (days.length === 0){
    // 하나도 못읽은 상태라면...
    return <span>Loading.........로......디....ㅇ....ㅈ.....ㅜ...ㅇ..</span>
  }
  return (
    <>
      <ul className="list_day">
        {/* {dummy.days.map(day=>( 
          dummy가 아닌 REST로 읽어온 값으로 처리하자.*/}
        <li >
          <Link to={`/day/0`}>Day all</Link>
        </li>
        {days.map(day=>(
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>   
        ))}
      </ul>
    </>
    
  );
} 
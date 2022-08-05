import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hook/useFetch';
// 이제 설치한 json-server에 REST API를 통해 값을 읽고쓰고수정해서 data.json에 저장한다.
// import dummy from "../db/data.json";

export default function DayList(){

  const days = useFetch("http://localhost:3001/days");

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
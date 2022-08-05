import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// 이제 설치한 json-server에 REST API를 통해 값을 읽고쓰고수정해서 data.json에 저장한다.
// import dummy from "../db/data.json";

export default function DayList(){
  // console.log(dummy)
  const[days, setDays] = useState([]);
  const[count, setCount] = useState(0);

  function onClick(){
    setCount(count + 1);
  }

  function onClick2(){
    setDays(
      [...days,
        {
          id:Math.random(),
          day:1,
        }
      ]
    );
  }
  // useEffect는 어떤 상태 값이 변경되었을때 효과를 주기 위한 함수 이다.
  // function useEffect(effect: EffectCallback, deps?: DependencyList): void;
  // DayList page가 변경되면 호출된다.
  // 하지만 관심없는 항목이 수정되더라도 항상 호출이 되므로..두번째 인자로 관심있는 항목..
  // 즉 변경되면 알고 싶은 것들을 list형태로 넣어 준다.
  useEffect(()=>{
    //effect callback fn.
    console.log('[useEffect] Count changed..', count);
  },[count]);
  // 의존성 배열.
  // 의존성 배열이 변경된 경우에만 useEffect가 동작하고..그래서 log가 찍힌다.
  // 최초에 한번만 실행... 렌더링 되고 api 호출.
  // 렌더링 완료되고 한번만   -> 의존성 배열에 빈배열...[]

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
      {/* <button onClick={()=>{setCount(count + 1);}}>{count}</button> */}
      <button onClick={onClick}>{count}</button>
      <button onClick={onClick2}>day change</button>
    </>
    
  );
} 
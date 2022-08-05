import dummy from "../db/data.json";
// 만들어 놓은 data를 읽어 온다.     import dummy
// json 파일은 확장자까지 명시한다.

import { Link } from 'react-router-dom';
// 자동완성 안됨. ㅠㅠ


export default function DayList(){
  console.log(dummy)
  return (
    <ul className="list_day">
      {dummy.days.map(day=>(
        // key가 없다는 warning.... 반복되는 list의 고유값을 유지하기 위해
        // 화면 렌더링시 불필요한 처리를 막기 위해 필요.
        // <li> ==> <li key={day.id}>

        // 이제 날짜에 lin를 걸어 Day page로 이동하자.
        // html은 <a>  anchor를 사용하지만. 
        // jsx는 <Link to> 를 사용한다.
        <li key={day.id}>
          <Link to="/day">Day {day.day}</Link>
          {/* <Link to={`/day/${day.day}`}>Day {day.day}</Link> */}
        </li>   
      ))}
     
    </ul>
  );
} 
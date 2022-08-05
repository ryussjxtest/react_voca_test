import { useEffect, useState } from "react";

export default function useFetch(url){ 
  // data즉,, days, words가 주소의 일부분만 다르고 사용이 같다.
  // 자신만의 custom hook을 만들어 보자.

  const[data, setData] = useState([]);

  // 앞서 사용한 useEffect와 동일하다.
  // url만 다르므로 url을 인자로 받아서...
  useEffect(()=>{
    fetch(url) // 해당 url에서 fectch하고.
      .then(res=>{
        return res.json();  // 다 읽엇으면..json으로 만들어서...
      })
      .then(data=>{
        setData(data);  // data를 수정하고..
      })
  },[url]); // useEffect의 의존성 배열.. url..추가 한다.

  return data; //수정한 data를 리턴한다.  
  // => 이제 fecth 하는 부분을 수정한다.
  // days => Day.js, words => DayList.js
}
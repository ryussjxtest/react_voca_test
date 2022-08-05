// import dummy from "../db/data.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import DayList from './DayList';
import Word from "./Word";

export default function Day(){

  const day = Number(useParams().day);
  let url ="http://localhost:3001/words"
  if (day != 0){
    url += `?day=${day}`;
  }
  const words = useFetch(url);
  // console.log(`[Day] http://localhost:3001/words?day=${day}`)
  return (
    <>
      <DayList />
      <h2>Day {day?day:"ALL"}, 총 {words.length}개의 단어가 있습니다.</h2>
      <table>
        <tbody>
          {words.map(word=>(
            // Word로 이동.. 뜻보기 버튼으로 뜻을 보이고 안보이게 하려면...
            // 별도의 컴포넌트로 각 단어별 state가 있어야 한다.
            <Word word={word} key={word.id}/>
          ))}
        </tbody>
      </table>
    </>
  );
} 
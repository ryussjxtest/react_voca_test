// 만들어 놓은 data를 읽어 온다.     import dummy
// json 파일은 확장자까지 명시한다.
import { useParams } from "react-router-dom";
import dummy from "../db/data.json"

// 특정날짜를 클릭하고 들어 갔을때 단어 나오는 페이지..
export default function Day(){
  // console.log(dummy)
  // dummy의 words를 이용한다.

  // 처음에는 날짜 구분없이 dummy.words의 모든 단어가 나온다.
  // filter를 이용하여 날짜 별로 나오게 한다.

  // const day = 3 ; //일단 첫날꺼만..고정
  // filter.. words의 요소를 word로 받아..조건에 맞는거만 리턴
  // const wordList = dummy.words.filter(word=>word.day === day)

  const a = useParams();
  console.log(a);
  
  const day = Number(a.day);
  const wordList = dummy.words.filter(word=>word.day === day)
  console.log(day,wordList);

  return <>
    <h2>Day {day}</h2>
    <table>
      {/* list나 table등 data가 반복적으로 나타냐할 곳은 map을 이용한다.
      Daylist에서 li 부분과 유사하다. */}
      <tbody>
        {/* 행(row)을 지정하는 tr과 ...tr안에서 열을 나타내는 td가 반복.
        이 부분을 map에 넣으면 된다.
        <tr>
          <td></td>
        </tr> */}
        {/* 여기서 주의할 것은 map의 return이다.
        dummy.words의 요소들을 word로 받아서 처리하고 그 결과를 넘긴다.
        즉, 그 결과는 table의 tr  즉 단어의 영어, 한국어 이다.
        return된 결과과 하나의 tag. 그래서 return도 생략하고 바로 괄호이다.
        map(fn)...에서 fn이 word=>(<tr>....</tr>) */}
        {/* 여기는 처음...코드. words의 모든 요소를 가져온다.
        위에서 사용한 fileter로 걸러진 wordList를 가져온다.
        나중에는 day값을 넘겨 받아 해당 날짜의 것으로 필터링한다. 
        {dummy.words.map(word=>( 
        */}
        {wordList.map(word=>(
          // <tr>, key가 없다고 warning...
          <tr key={word.id}>
            <td>{word.eng}</td>
            <td>{word.kor}</td>
            <td>{word.isDone? "암기":"암기필요"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
  ;
} 
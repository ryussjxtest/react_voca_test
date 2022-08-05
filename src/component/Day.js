import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import DayList from './DayList';
import Word from "./Word";


export default function Day(){
  // const {day} = useParams();
  const day = Number(useParams().day);
  const wordList = dummy.words.filter(word=>word.day === day)
  console.log(day,wordList);

  return (
    <>
      <DayList />
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map(word=>(
            // Word로 이동.. 뜻보기 버튼으로 뜻을 보이고 안보이게 하려면...
            // 별도의 컴포넌트로 각 단어별 state가 있어야 한다.
            <Word word={word} key={word.id}/>
            // <tr key={word.id}>
            //   <td>
            //     <input type='checkbox' />
            //   </td>
            //   <td>{word.eng}</td>
            //   <td>{word.kor}</td>
            //   <td>
            //     <button>뜻보기</button>
            //     <button className="btn_del">삭제</button>
            //   </td>
            //   <td>{word.isDone? "암기":"암기필요"}</td>
            // </tr>
          ))}
        </tbody>
      </table>
    </>
  );
} 
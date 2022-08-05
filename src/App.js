import React from "react";
import Day     from './component/Day';
import DayList from './component/DayList';
import Header  from './component/Header';
import { BrowserRouter ,Switch , Route} from 'react-router-dom';
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header /> 
        {/* <DayList /> */}
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          {/* 위의 조건에 맞지 않아야 여기로 온다. 위치에 주의하자. */}
          <Route path="/create_word">
            <CreateWord />
          </Route>
          <Route>
            <EmptyPage/>
          </Route>          
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;

// 잘 안되서 다 지웠다.
// 00_no_use/route_error_TT 에 이전 code있다. x벌...ㅠㅠ

// 암튼 강사 git hub 복사해서 index.js 복사해서 넣으니..수정된 url이 잘 refresh된다.
// 아무래도 document.get블라블라 문제였던듯.
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );


// src/db/data.json 에서 파일을 읽어와 표현은 가능하나...
// refresh되면 수정한 값이 저장이 안된다.
// backed 구성이 필요. 여기서 간단히 지원해 주는 json 서버를 활용하자.

// json-server를 install 하여 back-end 작업을 수월하게 하자. 
// 우리는 fe공부중...
// npm install -g json-server
// json-server --watch ./src/db/data.json --port 3001 

// REST AudioParam
// 
// Create : POST
// Read   : GET
// Update : PUT
// Delete : DELETE

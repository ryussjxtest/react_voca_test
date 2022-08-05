////////////////////////////////////////////////////////////////////////////////
// component를 import한다.
import Day     from './component/Day';
import DayList from './component/DayList';
import Header  from './component/Header';

// import { BrowserRouter ,Routes, Route} from 'react-router-dom';
// Attempted import error: 'Switch' is not exported from 'react-router-dom' (imported as 'Switch').
// 확인결과 5=> 6버전으로 바뀌면서 Switch가 없어지고 Routes
// 이유는 페이지 로딩 속도 개선...무조건 Routes...
// 하지만 이전 코드에서는 나오므로 맨 아래로 ....가서...공부하자.

import { BrowserRouter ,Switch, Route} from 'react-router-dom';
// 다시 ...
// v6 삭제 : npm uninstall react-router-dom
// v5 설치 : npm install react-router-dom@5.2.0
// 버전 바꾸고 예전 버전에서 다시 한다. 이거저거 동작안되서 더 힘들다. ㅠㅠ
// 일단 voca는 v5로 마무리 하고 필요시 더 공부하자.



// 다른 page로 이동을 하려면 router를 이용한다.
// npm install react-router-dom
// package-lock.json 에서  "react-router-dom"로 확인가능
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* 주의 사항. *************
        복사해서 넣으면 맨위의 import가 자동으로 생성되지 않는다.
        자동 완성 기능으로 추가 해야 한다. 
        아니면 import문을 직접 입력해야 한다. 
        */}
        <Header /> 
        {/*Header는 모든 page에서 다 나와야 한다.
        변경될 사항들만 Switch-> Routes로 묶는다..
        다시 Switch로 원복 ㅠㅠ
        */}
        {/* <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day" element={<Day />} />
        </Routes> */}
        {/* Routes 내부는 각 페이지 내용에 따라 다른 페이지.. */}
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;


// import { BrowserRouter ,Switch } from 'react-router-dom';
// // Attempted import error: 'Switch' is not exported from 'react-router-dom' (imported as 'Switch').
// 유투브 보고 공부하다. 페이지 이동을 위해 react-router-dom 설치.
// BrowserRouter, Switch import 했으나 자동 추가 안됨....어럿...
// 버전 up 되면서 이름이 바뀜.
// 여기서 차이점을 알아 본다.
// 1. 70%나 작아진 번들사이즈
//   => 블라블라... 많이 적어져 잇지만..
//   결국 성능.. 페이지 로딩 속도 개선을 위해 update됨. 무조건 최신쓰자.

// 2. switch -> routes 네임 변경
// Switch가 Routes로 바뀌었다. 
// // v5 
// <Switch>   <Route ... />  </Switch>
// // v6
// <Routes>    <Route ... /> </Routes>

// 3. exact는 더 이상 안 쓴다.
// 아래 4번의 예시...

// 4. component 옵션이 element로 변경
// 원래 처음 쓰는 거라 v6를 알면 되지만.. 그래도 v5를 알아 놓자. 
// 가장 최근 사용법이므로.
// 이 두가지는 밑의 예시로 확인!
// // v5 버전
// <Switch>
//  <Route exact path="/" component={Home} />
//  <Route path="/report" component={Report} />
//  <Route path="/passenger" component={Passenger} />
// </Switch>

// // v6 버전
// <Routes>
//  <Route path="/" element={<Home />} />
//  <Route path="/report" element={<Report />} />
//  <Route path="/passenger" element={<Passenger />} />
// </Routes>
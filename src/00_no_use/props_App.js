import './App.css';
////////////////////////////////////////////////////////////////////////////////
// component를 import한다.
import Hello from './component/Hello';
import RossTest from './component/RossTest';

////////////////////////////////////////////////////////////////////////////////
// Hot Module Replacement(HMR)
// js파일 수정하고 저장하면 바로  브라우져에 수정사항이 적용된다. 이를 HMR이라고 한다.

////////////////////////////////////////////////////////////////////////////////
// 함수로 만들어진. 함수형 component...
// 함수형 Component...이름 첫글자는 대문자로 시작해야 한다. App....
// default로 export된다.   
// export default App; => index.js 에서 import하여 사용한다.
function App() {
  return (
    <div className="App">
      <div>
        <h1>Props : properties</h1> 
      </div>
      {/* 그냥 열고 닫을때..         <Hello />*/}
      {/* 컴포넌트에 값을 전달한다.   <Hello age={30} 
      아래는 같은 컴포넌트에 값이 다른 2개의 age를 각각 전달.
      Heollo.js의 export 부분에 인자를 받을수 잇도록 수정해야 한다.
      export default function Hello(){
      */}
      <Hello age={10} name={'Mike'}/> 
      <Hello age={18} name={'Jane'}/>
      <Hello age={25} name={'Tom'}/>

      {/* 연습용 강사 코드와 안겹치게 하자. */}
      <RossTest />
    </div>
  );
}

export default App;

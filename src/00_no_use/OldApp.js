import './App.css';
////////////////////////////////////////////////////////////////////////////////
// component를 import한다.
import Hello from './component/Hello';
import Welcome from './component/Welcome';



////////////////////////////////////////////////////////////////////////////////
// Hot Module Replacement(HMR)
// js파일 수정하고 저장하면 바로  브라우져에 수정사항이 적용된다. 이를 HMR이라고 한다.

////////////////////////////////////////////////////////////////////////////////
// 함수로 만들어진. 함수형 component...
// 함수형 Component...이름 첫글자는 대문자로 시작해야 한다. App....
// default로 export된다.   
// export default App; => index.js 에서 import하여 사용한다.
function App() {
  const name = 'Tom';
  // let arr = [1,2,3,4,5];
  const daum ={
    name: 'daum',
    url : 'https://daum.net',
  };

  // 이함수가 return하는 것이 바로... 아래 jsx 코드 이다.
  // JSX(JavaScript XML)
  // 하나의 tag만 리턴..<div></div>   그안에서 중복가능.
  return (
    <div className="App">
      <h1 
        // style주기 중괄호{} 안에 객체로...객체가 {key :value}
        // 그래서 중괄호가 2중이다.  나중에 css로 통일하자.
        style={{
          color:"violet",
          // background-color : 'green', // '-'는 인식안됨.
          backgroundColor : 'blueviolet' ,
          borderRight : '2px solid #000',
          marginBottom : '30px',
          fontSize: '40px',
          opacity : 0.5,
          // style은 중괄호 안에 겍체로 주기대문에 : 과 , 로...
        }}>
          <p style={{backgroundColor : 'blue'}}>Hello. {name}</p>
          {/* <p>안녕. {arr[0]}</p>
          <p>{arr[3] + arr[2]}</p> */}
      </h1>

      <a href={daum.url} style={{
        fontSize:'30px',
      }}>{daum.name}</a>

      {/* <Hello> 뭔가 있을때 </Hello> */}
      <Hello /> {/* 그냥 열고 닫을때..*/}
      <Welcome />
    </div>
  );
}

export default App;

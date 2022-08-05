export default function Hello(){
  let num = 0
  const  mike = {
    name : 'Mike',
    age : 30,
  }  
  function showName(){
    console.log("함수 별도 구현 ",mike.name);
  }
  function showAge(){
    console.log("함수 별도 구현 ",mike.age);
  }
  function showAge2(age){
    console.log("매개 변수 이용. ",age);
  }
  function addNum(n){
    if ((n == -1 &&  num > 0)||(n == 1 && num < 10)){
      num += n;
    }
    console.log("매개 변수 이용. ",num);
  }
  function showText(e){
    console.log(e.target.value);
  }


  return (
    <div>
      <div>
      <h1 
        style={{
          color:"yellow",
          backgroundColor : 'blue' ,
          fontSize: '40px'
        }}>
          State
      </h1> 
      <p>컴포넌트의 속성값</p>
      {/* Button 할당 함수 호출. 1. 함수 선언하고 불러오기 */}
      <button onClick={showName}>Show name</button><br />
      <button onClick={showAge}>Show age1</button>
      {/* 2. 직접구현하기 , 매개변수 전달의 장점이 있다.*/}
      <button onClick={()=>{
        showAge2(50);
      }}>Show age2</button><br />
      input1 : <input type='text' onChange={showText}/><br />
      input2 : <input type='text' onChange={(e)=>{
        console.log(e.target.value);
      }}/>
      
      </div>

      <div>
        <button className='buttonText' onClick={()=>{
          addNum(-1);
        }}>-</button>
        {num}
        <button className='buttonText' onClick={()=>{
          addNum(1);
        }}>+</button>
      </div>
    </div>
  );
}

// // component 선언 1.
// const Hello = function(){
//   return (
//     <div>
//       <p>Hello...API</p>      
//     </div>
//   );
// }
// export default Hello;



// // component 선언 2.  힘수식
// const Hello = ()=>{
//   return (
//     <div>
//       <p>Hello...API</p>      
//     </div>
//   );
// }
// export default Hello;


// component 선언 3.  export문을 한줄로...
export default function World(){
  return (
    <div>
      <h1 
        style={{
          color:"black",
          backgroundColor : 'green' ,
          fontSize: '25px'
        }}>
          World import 완료.
      </h1>     
    </div>
  );
}

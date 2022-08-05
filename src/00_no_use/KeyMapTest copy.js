// React 에서 key가 필요한 이유
// 단순히 index를 쓰는 것이 왜 안좋은지
// 어떤값을 key로 사용하는게 좋은지......
export default function KeyMapTest(){
  const userList = [
    {id:1, name:"Mike"},
    {id:2, name:"Tom"},
    {id:3, name:"Jane"},
    {id:4, name:"Paul"},
  ];

  return(
    // <ul style="list-style-type: square"> // js
    // 아래는 jsx 스퇄... '-'은 안된다. 
    // '-' 빼고 대문자로...
    <div>
      <header><h1>KeyMapTest</h1></header>
      <ul style={{listStyleType:'square'}}>
        {userList.map((user,index) =>{
          return (
            <li key={index}>{user.name}</li>
          );
        })}
      </ul>
    </div>
  );
}
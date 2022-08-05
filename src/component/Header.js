import {Link} from "react-router-dom";

export default function Header(){
  return (
    <div className='header'>
      <h1>
        {/* <a href="/">Header 토익 영단어(고급)</a> */}
        <Link to="/">Header 토익 영단어(고급)</Link>
      </h1>
      <div className='menu'>
        <a href="#x" className='link'>단어 추가</a>
        <a href="#x" className='link'>Day 추가</a>
      </div>

    </div>
  );
}
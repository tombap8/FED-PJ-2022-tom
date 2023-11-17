import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import $ from 'jquery';
window.jQuery = $;
require('jquery-ui-dist/jquery-ui');
require('jquery-ui-touch-punch/jquery.ui.touch-punch');

function App() {
  // 이미지경로
  let isrc = './images/dcm36.jpeg';
  // 랜더링 후 실행구역
  useEffect(()=>{
    $('.App-header').click(()=>{
      window.open('http://www.naver.com')
    });
    // 제이쿼리 드래그
    $('h1').draggable();
  }); //////////// useEffect /////////


  return (
    <div className="App">
      <header className="App-header">
        <img src={isrc} 
        style={{borderRadius:'50%'}}
        className="App-logo" alt="logo" />
        <h1>이제부터 리액트 출발!!!</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          나야나 리액트!!!
        </a>
      </header>
    </div>
  );
}

export default App;

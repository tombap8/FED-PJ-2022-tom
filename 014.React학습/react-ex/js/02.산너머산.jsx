import { 누구냐 } from "./02.산너머산/cont_provider";
import 이야기 from "./02.산너머산/sub_com";


function 큰집() { 
  return (
    <누구냐.Provider value={{앙앙:"옛날 옛적에 호랑이 담배피던시절엔 말이다",팡팡:"재밋지?"}}>
      <할아버지 />
    </누구냐.Provider>
  );
}

function 할아버지() {
  return <아버지 />;
}

function 아버지() {
  return <아들 />;
}

function 아들() {
  return <손녀 />;
}

function 손녀() {
  return <이야기 />;
}



/* ************************************************* */

/* function App() {
  return <AwesomeComponent value="Hello World" />;
}

function AwesomeComponent({ value }) {
  return (
    <div>
      <FirstComponent value={value} />
      <SecondComponent value={value} />
      <ThirdComponent value={value} />
    </div>
  );
}

function FirstComponent({ value }) {
  return <div>First Component says: "{value}"</div>;
}

function SecondComponent({ value }) {
  return <div>Second Component says: "{value}"</div>;
}

function ThirdComponent({ value }) {
  return <div>Third Component says: "{value}"</div>;
} */

/* ************************************************* */

function App() {
  return <GrandParent aa="이게 뭡니까?" kk="헉스^^;;;" />;
}

function GrandParent({ aa, kk }) {
  return <Parent bb={aa} kk={kk} />;
}

function Parent({ bb, kk }) {
  return <Child cc={bb} kk={kk} />;
}

function Child({ cc, kk }) {
  return <GrandChild dd={cc} kk={kk} />;
}

function GrandChild({ dd, kk }) {
  return <Message ee={dd} kk={kk} />;
}

function Message({ ee, kk }) {
  return <div style={
      {
        padding:'20px',
        border:'2px dotted red',
        borderRadius:'10px',
        width:'30%',
        margin:'20px auto',
        textAlign:'center'
      }
    }>
      수신 : {ee + kk}</div>;
}

// 메인컴포넌트 출력하기 //////////
ReactDOM.render(<App />, document.querySelector("#root1"));
ReactDOM.render(<큰집 />, document.querySelector("#root2"));

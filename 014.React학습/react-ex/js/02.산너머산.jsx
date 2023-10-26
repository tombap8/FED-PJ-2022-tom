function App() {
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
}

/* function App() {
  return <GrandParent aa="Hello World!" kk="헉스^^;;;" />;
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
  return <div>Received: {ee + kk}</div>;
} */

// 메인컴포넌트 출력하기 //////////
ReactDOM.render(<App />, document.querySelector("#root"));

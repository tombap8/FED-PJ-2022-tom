function MarkLike() {
  const [masterOn, setMasterOn] = React.useState(false);
  const [kitchenOn, setKitchenOn] = React.useState(false);
  const [bathOn, setBathOn] = React.useState(false);

  const toggleMaster = () => {
    setMasterOn(!masterOn);
  };
  const toggleKitchen = () => {
    setKitchenOn(!kitchenOn);
  };
  const toggleBath = () => {
    setBathOn(!bathOn);
  };

  /* 
    useCallback은 첫 번째 인자로 넘어온 함수를, 
    두 번째 인자로 넘어온 배열 형태의 함수 실행 조건의 값이 
    변경될 때까지 저장해놓고 재사용할 수 있게 해 줍니다.

    예를 들어 리액트 컴포넌트 안에 함수가 선언되어있을 때 
    이 함수는 해당 컴포넌트가 렌더링 될 때마다 새로운 함수가 
    생성되는데, useCallback을 사용하면 해당 컴포넌트가 
    렌더링 되더라도 그 함수가 의존하는 값(deps)들이 
    바뀌지 않는 한 기존 함수를 재사용할 수 있습니다.
    */

  // const toggleMaster = React.useCallback(() => {
  //   setMasterOn(!masterOn);
  // }, [masterOn]);
  // const toggleKitchen = React.useCallback(() => {
  //   setKitchenOn(!kitchenOn);
  // }, [kitchenOn]);
  // const toggleBath = React.useCallback(() => {
  //   setBathOn(!bathOn);
  // }, [bathOn]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1
        style={{
          fontSize: "70px",
          color: "hotpink",
          textShadow: "5px 5px 2px #555",
        }}
      >
        좋아요~! 부탁해요!!
      </h1>
      <ShowLike man="손흥민" on={kitchenOn} toggle={toggleKitchen}></ShowLike>
      <ShowLike man="다나카" on={masterOn} toggle={toggleMaster}></ShowLike>
      <ShowLike man="이강인" on={bathOn} toggle={toggleBath}></ShowLike>
    </div>
  );
}

const ShowLike = React.memo(({ man, on, toggle }) => {
  console.log({ man, on });
  return (
    <div style={{ padding: "10px" }}>
      <button onClick={toggle} style={{ fontSize: "100px" }}>
        {man}
        {on ? "👍" : "👎"}
      </button>
    </div>
  );
});

ReactDOM.render(<MarkLike />, document.querySelector("#root"));

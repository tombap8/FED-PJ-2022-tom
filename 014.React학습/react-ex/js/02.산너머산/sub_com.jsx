import { 누구냐 } from "./cont_provider";

const tata = [
  ['cc','dd'],
  ['aa','bb']
];

function 이야기() {
    const 맘대로 = React.useContext(누구냐);

    return <div style={
      {
        padding:'20px',
        border:'2px dotted red',
        borderRadius:'10px',
        width:'30%',
        margin:'20px auto',
        textAlign:'center'
      }
    }>수신 : {맘대로.mVal.앙앙} 대답은? {맘대로.mVal.팡팡}
    <button onClick={()=>맘대로.changeMVal({앙앙:'ㅁㅁ',팡팡:'ㅎㅎ'})}>요기</button>
    <input type="text" />
    </div>;
  }

  export default 이야기
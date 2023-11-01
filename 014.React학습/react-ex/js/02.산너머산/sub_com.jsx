import { 누구냐 } from "./cont_provider";

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
    }>수신 : {맘대로[0]} 대답은? {맘대로[1]}
    </div>;
  }

  export default 이야기
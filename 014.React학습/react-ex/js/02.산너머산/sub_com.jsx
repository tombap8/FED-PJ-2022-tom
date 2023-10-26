import { 누구냐 } from "./cont_provider";


function 이야기() {
    const 맘대로 = React.useContext(누구냐);
    return <div>Received: {맘대로.앙앙} 대답은? {맘대로.팡팡}</div>;
  }

  export default 이야기
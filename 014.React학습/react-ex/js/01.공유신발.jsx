// 01.공유신발 JSX
import myData from './data.js';

function MakeShoes(){

    const [myTest,setMyTest] = React.useState('M');
    const [myTest2,setMyTest2] = React.useState('C');

    console.log(myData);

    React.useEffect(()=>{
        console.log('useEffect000');
    });
    React.useEffect(()=>{
        console.log('useEffect111');
    },[]);
    React.useEffect(()=>{
        console.log('useEffect222');
    },[myTest,myTest2]);

    React.useLayoutEffect(()=>{
        console.log('useLayoutEffect');
    });

    const myFn = (txt)=>{
        setMyTest(txt);
    }
    const myFn2 = (txt)=>{
        setMyTest2(txt);
    }


    return (
    <div>
        <h1>나는 공유다!{myTest}:확인{myTest2}</h1>
        <button onClick={()=>myFn(Math.ceil(Math.random()*3))}>aaa</button>
        <button onClick={()=>myFn2(Math.ceil(Math.random()*3))}>bbb</button>
        <ul>
            {myData.map(v=><li>{v.gname}</li>)}
        </ul>
    </div>
    )
}


ReactDOM.render(<MakeShoes />,document.querySelector('#root'))
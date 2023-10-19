// 01.공유신발 JSX
import myData from './data.js';

function MakeShoes(){

    const [myTest,setMyTest] = React.useState('M');
    const [myTest2,setMyTest2] = React.useState('C');

    console.log(myData);

    React.useEffect(()=>{
        console.log('useEffect000');
        console.log(document.querySelector('.gong'));
    });
    React.useEffect(()=>{
        console.log('useEffect111');
        console.log(document.querySelector('.gong'));
    },[]);
    React.useEffect(()=>{
        console.log('useEffect222');
        console.log(document.querySelector('.gong'));
    },[myTest,myTest2]);

    React.useLayoutEffect(()=>{
        console.log('useLayoutEffect');
        console.log(document.querySelector('.gong'));
        document.querySelector('div').innerHTML += '<img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000" alt="aa" />';

        $('.gong').click(()=>alert(33))
    });
    
    console.log(document.querySelector('.gong'));
    const myFn = (txt)=>{
        setMyTest(txt);
    }
    const myFn2 = (txt)=>{
        setMyTest2(txt);
    }



    return (
    <div>
        <h1 className='gong'>나는 공유다!{myTest}:확인{myTest2}</h1>
        <button onClick={()=>myFn(Math.ceil(Math.random()*3))}>aaa</button>
        <button onClick={()=>myFn2(Math.ceil(Math.random()*3))}>bbb</button>
        <ul>
            {myData.map(v=><li>{v.gname}</li>)}
        </ul>
    </div>
    )
}


ReactDOM.render(<MakeShoes />,document.querySelector('#root'))
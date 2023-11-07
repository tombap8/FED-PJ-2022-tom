import { 누구냐 } from "./cont_provider";

function 이야기() {
    const 맘대로 = React.useContext(누구냐);

    console.log(맘대로.mtInfo);
    const selData = 맘대로.myData.find(v=>{if(v.이름==맘대로.mVal)return true});
    console.log(selData);

    const btns = 맘대로.myData.filter(v=>{if(v.이름!=맘대로.mVal)return true});

    return <div style={
      {
        position:'relative',
        padding:'20px',
        border:'10px dotted skyblue',
        borderRadius:'10px',
        width:'60%',
        margin:'20px auto',
        textAlign:'center'
      }
    }><h1>{맘대로.mVal}
    {
      (맘대로.mVal=='백두산' || 맘대로.mVal=='후지산') &&<MyImg />
    }
    
    </h1>
    <img src={selData.이미지} alt={selData.이름} style={{width:'100%'}} />
    <div>
        {btns.map(v=>
        <button 
        onClick={()=>
          맘대로.changeMVal(v.이름)} 
          style={{
            padding:'15px',
            fontSize:'20px',
            margin:'10px'
        }}>{v.이름}</button>)}      
    </div>
    <div style={
      {
        position:'absolute',
        width:'50%',
        bottom: '105px',
        left:'20px',
        padding:'15px',
        fontSize:'16px',
        color:'#fff',
        textShadow:'0 0 5px #000',
        textAlign:'left',
        borderRadius:'20px',
        backgroundColor:'rgb(0 0 0 / .4)'
      }
    }>
      <ul>
        <li>이름 : {selData.이름}</li>
        <li>설명 : {selData.설명}</li>
        <li>높이 : {selData.높이}</li>
        <li>융기 : {selData.융기}</li>
        <li>최초등반 : {selData.최초등반}</li>
        <li>최초등반가 : {selData.최초등반가}</li>
        <li>산맥 : {selData.산맥}</li>
      </ul>
    </div>
    {/* <button onClick={()=>맘대로.changeMVal('에베레스트')}>요기</button> */}
    
    </div>;
  }


  

function MyImg(){
  React.useEffect(()=>{
    console.log('처음한번만~!');
    return(()=>{
      console.log('~!소멸한다!!!');
      alert('에베레스트는 세계에서 가장높은산이다~!!!')
    })
  },[])
  return <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L2hpcHBvdW5pY29ybl9tb3VudGFpbl9pY29uX3NpbGhvdWV0dGVfbW9ub3RvbmVfc2ltcGxlX2Flc3RoZXRpY184MDFlMzliNy00MmMwLTQzZjYtYWQyNS04N2IyNjkxYTM3NTgucG5n.png" alt="백두산" style={{width:'100px'}} />
}

  export default 이야기
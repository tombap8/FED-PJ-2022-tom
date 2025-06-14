// 전체 리스트 페이지 뷰엑스 스토어 셋팅 JS  - glist-store.js

// 전체 상품정보 불러오기
import gdata from "./gdsData/glist-items.js";

const store = new Vuex.Store({
    state: {
        // 서브데이터 셋업
        // 전체상품정보 전역화
        gdata:gdata,
        // 필터데이터용 배열변수
        chkarr:[true,true,true],
        // 필터데이터용 배열입력값 변수
        selnm:["","",""],
        // 페이징용 변수
        pnum:0,
        // 모어용 변수
        mnum:0,
        // 모어버튼 표시변수
        mbtn:true,
    },
    // state 데이터 변경 메서드구역!
    mutations: {
        // 체크박스 체크시 처리메서드
        resCheck(dt){
            console.log(dt.chkarr);
            // 3개의 체크박스 상태배열변수값에 따라
            // 실제 조건에 들어갈 cat명을 넣어준다!

            // v는 배열값인 true/false값이 들어옴!
            dt.chkarr.forEach((v,i)=>{
                if(v){// 체크박스 체크시
                    dt.selnm[i] = 
                    i==0?"men":i==1?"women":"style";
                    // 조건1?값1:((조건2?값2):최종값);
                    // 중첩3항연산자 사용!
                }
                else{// 체크박스 체크안됨
                    //무조건 빈값을 할당!!!
                    dt.selnm[i] = "";
                }
            });

        }, /////// resCheck ///////////

        // 페이징 변수 업데이트 메서드
        updatePaging(dt,pm){ // pm - 업데이트할 전달숫자
            // pnum은 리스트 범위수
            dt.pnum = pm;
        }, ///////// updatePaging /////////

        // 모어 변수 업데이트 메서드
        updateMore(dt,pm){ // pm - 업데이트할 전달숫자
            // mnum은 모어 범위수 : += 로 여러번 모어진행
            dt.mnum += pm;
            // 업데이트 후 모어버튼 없애기(한계수를 넘으면!)
            if(dt.mnum>=25)
                dt.mbtn = false;
        }, ///////// updateMore /////////

        /////// [ 장바구니 데이터 업데이트 메서드 ] ///////
        setData(dt,pm){ // pm - 배열데이터 순번

            console.log("구니셋:",pm);
            console.log("선택gdata:",dt.gdata[pm]);
            console.log("cart전:",localStorage.getItem("cart"));

            // 1. 로컬스 데이터 cart가 없으면 [] 배열형식으로 문자넣기
            if(localStorage.getItem("cart")==null)
                localStorage.setItem("cart","[]");

            console.log("cart후:",localStorage.getItem("cart"));

            // 2. 로컬스토리지 객체데이터 가져오기
            // 입력된 데이터는 문자형 객체이므로
            // 다시 파싱하여 원래 객체로 복원한다!
            let org = localStorage.getItem("cart");
            org = JSON.parse(org);
            console.log("변환객체:", org);

            // 이미선택한 상품일 경우 분기하기 //////
            // 저장상태변수
            let save = true;

            org.forEach(v=>{
                // 같은 데이터인가?(idx값으로 비교)
                // v.idx 는 현재 카트에 있는 아이템 idx
                // dt.gdata[pm].idx 는 입력하려는 새로운 아이템 idx
                if(v.idx == dt.gdata[pm].idx){
                    alert("이미 선택하신 상품입니다!^^");
                    save = false;
                } ////// if //////////

            }); /////////// forEach //////////
            
            // save == true 일때만 배열넣고 처리함!
            if(save){
                /* 
                    [ 기존 데이터 구조에 컬럼 추가하기 ]
                    dt.gdata의 데이터 구조는
                    {
                        idx: "1",
                        cat: "men",
                        ginfo:[],
                    }
                    -> 여기에 num항목을 추가하여 개수데이터를 입력함!
                    {
                        idx: "1",
                        cat: "men",
                        ginfo:[],
                        num: 4
                    }
                    -> 기존객체에 속성추가는 간단하다!
                    객체변수.새항목 = 값
                    여기서는
                    dt.gdata[pm]["num"] = 값
                */

                // 3. 배열뒤에 밀어넣기 메서드 : push(값)
                // 넣기전에 num항목 추가하기
                dt.gdata[pm]["num"] = $("#sum").val();
                // 추가후 데이터 넣기!
                org.push(dt.gdata[pm]);
                console.log("넣은후:", org);
    
                // 4. 객체를 문자형으로 변환후 로컬스토리지에 반영
                localStorage.setItem("cart", JSON.stringify(org));
                console.log("반영후 로칼쓰:", localStorage.getItem("cart"));
    
                // 5. 카트 애니메이션 버튼을 등장시켜 카트리스트까지 연동한다!
                this.commit('cartAni',{cnt:org.length,opt:1});
                // org.length는 배열 데이터 개수를 넘김
            } ///////////// if //////////////

            // localStorage.clear();

        }, /////////// setData 메서드 ///////////////////

        ///// 테스트 편의상 로컬스토리지 데이터 지우기 ///
        clearData(){
            // 특정 변수만 지운다! : cart만!
            localStorage.removeItem("cart");
            console.log("cart지움!!!");
        },

        ////////////// 장바구니 애니메이션 버튼 생성하기 /////////
        cartAni(dt,pm){ // pm.cnt / pm.opt
            // cnt - 카트아이템 개수
            // opt - 셋팅옵션번호 (초기CSS값 선택옵션)
            // opt값 - 0 (오른쪽위 작은것) / 1 (정중앙 큰것)
            console.log("카트애니!",pm);

            // 초기CSS셋팅값 배열
            let icss = [
                {
                    tv:"5%",
                    lv:"80%",
                    wd:"50px",
                },
                {
                    tv:"50%",
                    lv:"50%",
                    wd:"370px",
                },
            ];


            // 0. 생성될 카트이미지 지우고시작!(하나만 생성!)
            $("#mycart").remove();

            // 1. gif애니메이션 이미지를 사용하여
            // 화면중앙에 등장하여 장바구니 담김을 알림!
            $("body").append(`
                <img id="mycart" 
                src="./images/mycart.gif" 
                title="${pm.cnt}개의 상품이 카트에 있습니다!" />
            `);

            console.log(`
                top: ${icss[pm.opt].tv}
                left: ${icss[pm.opt].lv}
                width: ${icss[pm.opt].wd}
            `);

            // 추가한 이미지 화면중앙에 위치하기
            $("#mycart")
            .css({
                position:"fixed",
                
                // 변경셋(top,left,width)
                top : icss[pm.opt].tv,
                left : icss[pm.opt].lv,
                width : icss[pm.opt].wd,

                transform:"translate(-50%,-50%)",
                cursor:"pointer",
                zIndex:"9999999",
            })
            .delay(3000) // 3초지연
            .animate({ // 왼쪽위이동, 작아짐
                top:"5%",
                left:"80%",
                width:"50px",
            },1000,"easeInExpo")
            // 클릭하면 카트리스트 보이기
            .click(function(){
                // 1. 만약 카트리스트 박스가 없으면 만들기!
                if($("#cartlist").length==0){
                    // body에 카트리스트 요소 넣기
                    $("body").append(`
                        <section id="cartlist"></section>
                    `);
                    console.log("카트박스만들기!");
                } ////////// if ///////////////

                // 2. 로컬스 데이터로 테이블 레코드 태그 구성하기
                // 카트가 보이지 않는 상태임!(right:"-60vw")
                store.commit('bindData',"-60vw");
                

            }); /////////// 카트버튼 click /////////////////

        }, //////////////// carAni 메서드 //////////////////

        /////////// 카트 아이템 삭제 메서드 //////////
        delRec(dt,pm){
            console.log("아이템 삭제!",pm);
            // 1. 로컬스 데이터 읽기
            // 2. 로컬스 데이터 파싱
            let org = localStorage.getItem("cart");
                org = JSON.parse(org);
                console.log("삭제구성 객체:", org);
            // 3. 삭제아이템 찾아 지우기 : splice(순번,1)
            org.forEach((v,i)=>{
                // 지울 아이템과 같으면
                if(v.idx==pm){
                    // 지울것인지 물어봄(확인시 true/취소시 false)
                    if(confirm("정말정말정말로 지우겠습니까? 할인도하는데?")){
                        org.splice(i,1);
                    }
                }
            })
            // 4. 로컬스 문자화하여 넣기
            localStorage.setItem("cart", JSON.stringify(org));
            console.log("삭제후 로칼쓰:", localStorage.getItem("cart"));
    
            // 5. 리스트 갱신하기 : 카트가 보이는 상태임!(right:"0")
            store.commit('bindData',"0");

            // 6. 카트버튼 툴팁 문구 업데이트하기
            if(org.length==0){ // 데이터가 없으면 지우기
                $("#mycart").remove();
                $("#cartlist").remove();
                // 로컬스 데이터 지우기
                localStorage.removeItem("cart");
            } ////////// if //////////
            else{ // 데이터 개수 업데이트하기
                $("#mycart")
                .attr("title",
                org.length+"개의 상품이 카트에 있습니다!");
            } /////////// else ////////
        

        }, //////////////// delRec 메서드 ///////////////

        /////////// 리스트 바인딩 메서드 ////////////////
        bindData(dt,pm){ // pm - 카트박스 right값 전달!
            // (1) 로컬스 데이터 읽어와서 객체화하기
            let org = localStorage.getItem("cart");
            org = JSON.parse(org);
            console.log("리스트구성 객체:", org);

            // (2) 데이터를 이용하여 리스트 태그 만들기
            // forEach((값,순번)=>{})
            // map((값,순번)=>{})
            // -> 차이는? map은 리턴값으로 처리할 경우
            // 값을 자동으로 대입연산처리함!
            // v - 배열각 값 / i - 배열순번

            /* 
                [ forEach 메서드는 변수를 선언후 
                    대입연산처리하여 값을 모아야함]

                let rec = "";
                org.forEach((v,i)=>{
                    rec += `<li>${v}</li>`;
                })
                ____________________________
                반면...
                [ map 메서드는 변수에 직접할당해도
                    리턴값을 대입연산처리해줌!]

                let rec = org.map((v,i)=> `<li>${v}</li>`)

            */
            const chx = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            let rec = org.map((v,i)=> 
                `
                    <tr>
                        <!--상품이미지-->
                        <td>
                            <img 
                            src="${
                'images/goods/'+v.cat+'/'+v.ginfo[0]+'.png'
                            }" 
                            style="width:50px"
                            alt="item">
                        </td>
                        <!-- 번호 : 리스트순서번호 -->
                        <td>${i+1}</td>
                        <!--상품명-->
                        <td>${v.ginfo[1]}</td>
                        <!--상품코드-->
                        <td>${v.ginfo[2]}</td>
                        <!--단가-->
                        <td>${v.ginfo[3]}</td>
                        <!--수량-->
                        <td>${v.num}</td>
                        <!--합계-->
                        <td>${
                            chx(
                                v.ginfo[3].trim()
                                .replaceAll(",","")
                                .replace("원","") * v.num
                            ) + "원"
                        }</td>
                        <!--삭제-->
                        <td>
                            <button class="cfn" 
                            data-idx="${v.idx}">
                                ×
                            </button>
                        </td>
                    </tr>

                `
            ); ////////// map //////////////

            // console.log("생성코드:",rec.join(""));
            // 배열.join(구분자) 
            // -> 배열을 구분자로 한문자열로 만들어준다!
            // 구분자를 빈문자열로 넣으면 사이구분자 없이합쳐진다!
            // 구분자를 생략하면 콤마(,)가 사이에 들어감

            // 총합계 구하기
           
            // 단가 숫자만 남기기
            const pnum = x => 
            x.trim().replaceAll(",","").replace("원","");

            // map() 메서드는 리턴값을 배열에 담는다!
             let total = org.map(v=>
                pnum(v.ginfo[3]) * v.num
                // console.log(`
                //     단가 : ${pnum(v.ginfo[3])}
                //     수량 : ${v.num}
                // `);
            ); /////////// forEach ////////////

            // 순회하며 더하기
            let temp=0;
            total.forEach(v=>temp+=v);

            // 원래변수에 다시 할당함
            total = temp;

            console.log("총합계:",total);


            // 3. 생성된 카트리스트에 테이블 넣기
            $("#cartlist")
            // (1) html 테이블 태그 넣기
            .html(`
                <a href="#" class="cbtn cbtn2">
                    <span style="display:none">닫기버튼</span>
                </a>
                <table>
                    <caption>
                        <h1> 카트 리스트</h1> 
                    </caption>
                    <tr>
                        <th>상품</th>
                        <th>번호</th>
                        <th>상품명</th>
                        <th>상품코드</th>
                        <th>단가</th>
                        <th>수량</th>
                        <th>합계</th>
                        <th>삭제</th>
                    </tr>
                    ${rec.join('')}
                    <!-- 총합계 표시하기 -->
                    <tr>
                        <td colspan="6">
                            총합계 : 
                        </td>
                        <td>
                            ${chx(total)}원
                        </td>
                        <td></td>
                    </tr>
                </table>
            `) ///// html ////////
            // (2)카트박스 CSS넣기
            .css({
                position: "fixed",
                top:"0",
                right: pm,//"-60vw",
                width:"60vw",
                height:"100vh",
                backgroundColor:"rgba(255,255,255,.8)",
                zIndex:"99999999",
            })
            // (3) 등장애니메이션
            .animate({
                right:"0"
            },600,"easeOutQuint")
            // (4) table css 넣기
            .find("table")
            .css({
                width:"90%",
                margin:"50px auto",
                fontSize:"14px",
                borderTop:"2px solid #222",
                borderBottom:"2px solid #222",
                borderCollapse:"collapse",
            })
            // (5) td css 넣기
            .find("td")
            .css({
                padding:"10px 0",
                borderTop:"1px solid #555",
                textAlign:"center",
            })
            // (6) th css 넣기
            .parents("table")
            .find("th")
            .css({
                padding:"15px 0",
                backgroundColor:"#e5e5e5",
                fontSize:"16px",
            })
            // (7) caption css 넣기
            
            .parents("table")
            .find("caption")
            .css({                    
                padding:"20px 0",
                textDecoration:"underline",
                textDecorationStyle:"wavy",
                fontSize:"30px",
            })

            // (8) 닫기버튼 셋팅
            $(".cbtn2").click(()=>{
                $("#cartlist")
                .animate({
                    right:"-60vw"
                },600,"easeOutQuint")
            }); /////// click //////

            // (9) 삭제버튼 처리연결하기
            $(".cfn").click(function(){
                // 아이템 삭제 메서드 호출
                store.commit('delRec',
                $(this).attr("data-idx"));
                // 삭제할 idx정보를 넘겨준다!
            }); ///////// click ///////


        }, /////////////// bindData 메서드 ///////////////

        ///// 상세보기 버튼 기능 셋팅 메서드 ////////
        setBtn(dt,pm){
            console.log("버튼기능셋팅!");
            /// DOM모두 로딩보장후 셋팅하기
            // 제이쿼리 로딩구역에 넣자!
            $(()=>{

                // 세자리마다 콤마함수
                const chx = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                // console.log($(".chg_num"))
                $(".chg_num img").click(function(){

                    // 0. 수량표시요소
                    let sum = $("#sum");

                    // 1. 이미지 alt속성값 읽기
                    let ialt = $(this).attr("alt");
                    console.log(ialt);

                    // 2. 증가/감소 처리하기
                    if(ialt=="증가")
                        sum.val(Number(sum.val())+1);
                    else
                        sum.val(Number(sum.val())-1);

                    // 0이면 1로고정함
                    if(sum.val()==0) sum.val(1);

                    // -,*,/ 는 숫자대상이므로 자동형변환된다
                    // 반명 +는 문자더하기도 있으므로
                    // 기본형이 문자면 자동형변환하지 않는다
                    // 그래서 Number() 로 강제형변환해야
                    // 숫자계산을 하게됨!!

                    // 3. 기본금액 * 개수 
                    let cnum = 
                    $("#gprice").text().trim()
                    .replaceAll(",","")
                    .replace("원","")*sum.val();

                    console.log("계산된값:",cnum);

                    // 4. 출력하기
                    $("#total").text(chx(cnum)+"원");

                }); ///////// click ////////////


            }); /////////////// jQB ////////////////


        }, //////////// setBtn 메서드 /////////////

    }, /////////////////// mutations 구역 ///////////// 
});

// 내보내기
export default store;

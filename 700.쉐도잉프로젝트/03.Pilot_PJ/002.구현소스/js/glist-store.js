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
            
            // 3. 배열뒤에 밀어넣기 메서드 : push(값)
            org.push(dt.gdata[pm]);
            console.log("넣은후:", org);

            // 4. 객체를 문자형으로 변환후 로컬스토리지에 반영
            localStorage.setItem("cart", JSON.stringify(org));
            console.log("반영후 로칼쓰:", localStorage.getItem("cart"));

            // 5. 카트 애니메이션 버튼을 등장시켜 카트리스트까지 연동한다!
            this.commit('cartAni',org.length);
            // org.length는 배열 데이터 개수를 넘김

            // localStorage.clear();

        }, /////////// setData 메서드 ///////////////////

        ////////////// 장바구니 애니메이션 버튼 생성하기 /////////
        cartAni(dt,pm){
            console.log("카트애니!",pm);

            // 0. 생성될 카트이미지 지우고시작!(하나만 생성!)
            $("#mycart").remove();

            // 1. gif애니메이션 이미지를 사용하여
            // 화면중앙에 등장하여 장바구니 담김을 알림!
            $("body").append(`
                <img id="mycart" 
                src="./images/mycart.gif" 
                title="${pm}개의 상품이 카트에 있습니다!" />
            `);

            // 추가한 이미지 화면중앙에 위치하기
            $("#mycart")
            .css({
                position:"fixed",
                top:"50%",
                left:"50%",
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
                // body에 카트리스트 요소 넣기
                $("body").append(`
                    <section id="cartlist"></section>
                `);
                // 생성된 카트리스트에 테이블 넣기
                $("#cartlist").html(`
                    <a href="#" class="cbtn cbtn2">×</a>
                    <table>
                        <caption>
                            <h1> 카트 리스트</h1> 
                        </caption>
                        <tr>
                            <th>번호</th>
                            <th>상품명</th>
                            <th>상품코드</th>
                            <th>단가</th>
                            <th>수량</th>
                            <th>합계</th>
                            <th>삭제</th>
                        </tr>
                        
                    </table>
                `)
            })

        }, //////////////// carAni 메서드 //////////////////


    },
});

// 내보내기
export default store;

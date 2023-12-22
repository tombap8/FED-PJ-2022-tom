/* DC PJ 캐릭터 리스트용 스와이퍼 컴포넌트 */

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// 캐릭터 리스트 데이터 가져오기
import { catListData } from "../data/swiper_cat";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./css/swiper_cat.css";

// import required modules
// 사용할 스와이퍼 모듈을 불러온다
// (여기서는 페이지네이션,네비게이션,자동넘김)
import { Navigation } from "swiper/modules";

export function SwiperCat() {
  // 선택데이터
  const selData = catListData;

  return (
    <>
      <Swiper
        // slidesPerView={7}
        spaceBetween={20}
        navigation={true}
        /* 사용할 모듈을 여기에 적용시킨다 */
        modules={[Navigation]}
        // 스와이퍼 사이즈별 슬라이드수 변경!
        breakpoints={{
          200: {
            slidesPerView: 3,
          },
          700: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 7,
          },
        }}
        className="mySwiper2"
      >
        {selData.map(
          (v, i) =>
            /* idx 고유번호가 7번이하만 출력 */
            Number(v.idx) <= 7 && 
            <SwiperSlide key={i}>
              <Link 
                to="/detail"
                state={{
                  cname: v.cname,
                  cdesc: v.cdesc,
                  facts: v.facts,
                }}
                >
                  {/* 라우터 데이터 전달은 
                  state속성에 객체로 보낸다! */}
                <section className="sw-inbox2">
                  {/* 캐릭터이미지영역 */}
                  <div className="cat-img2">
                    <img src={process.env.PUBLIC_URL+v.tmsrc} alt={v.cname} />
                  </div>
                  {/* 캐릭터타이틀영역 */}
                  <div className="cat-tit2">
                    <h3>{v.cname}</h3>
                  </div>
                </section>
              </Link>
            </SwiperSlide>
        )}
      </Swiper>
    </>
  );
} /////////// SwiperApp 컴포넌트 ///////////

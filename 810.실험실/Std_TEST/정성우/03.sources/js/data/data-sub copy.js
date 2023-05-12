const subData = {
    list: `
    <main class="main">
    <div class="inner">
        <div class="tit_warp">
            <div class="cat">{{$store.state.men["cat"]}}/ 추천 컬렉션</div>
            <h2 class="tit">{{$store.state.men["cat"]}} 신상품</h2>
        </div>
        <div class="cont">
            <div class="search_wrap">
                <div class="left_filter">필터</div>
                <div class="right_fliter_opt">
                    <span class="default">정렬기준</span>
                    <select name="norm" id="norm">
                        <option value="new">신상품순</option>
                        <option value="popular">인기상품순</option>
                        <option value="expen">높은가격순</option>
                        <option value="cheap">낮은가격순</option>
                    </select>
                </div>
            </div>
            <h3 class="cat_tit">폴로 랄프로렌</h3>
            <div class="list" id="list">
                <ul>
                    <li v-for="(value, name) in $store.state.men.polo">
                        <img class="front_img" v-bind:src="'./img/men/poloShirts/'+value['img']+'.jpg'" v-bind:alt="'남성 폴로 셔츠'+value['img']" />
                        <img class="behind_img" v-bind:src="'./img/men/poloShirts-1/alt'+value['img']+'.jpg'" alt="" />
                        <div class="brand">{{value["brand"]}}</div>
                        <div class="name">{{value["name"]}}</div>
                        <div class="price">{{value["price"]}}</div>
                    </li>
                </ul>
            </div>
            <div class="total">
                <h4>1-8/20아이템</h4>
            </div>
            <div class="result_wrap">
                <a href="#" class="more_item">더보기</a>
                <a href="#" class="whole_item">전체보기</a>
            </div>
        </div>
    </div>
    <div class="product_wrap" >
        <a href="#" class="close_btn"><i class="fa-sharp fa-solid fa-xmark"></i></a>
        <div class="product_detail" v-for="(value, name) in $store.state.men.polo">
            <div class="inner">
                <div class="product_img_wrap">
                    <ul>
                        <li>
                            <img v-bind:src="'./img/men/poloShirts/'+value['img']+'.jpg'" alt="" />
                        </li>
                        <li>
                            <img v-bind:src="'./img/men/poloShirts-1/alt'+value['img']+'.jpg'" alt="" />
                        </li>
                    </ul>
                </div>
                <div class="product_info_wrap">
                    <ul class="product_info">
                        <li>
                            <h1 class="logo">Ralph Lauren</h1>
                        </li>
                        <li>
                            <h3 class="pro_cate">{{value["brand"]}}</h3>
                        </li>
                        <li>
                            <h3 class="pro_tit">{{value["name"]}}</h3>
                        </li>
                        <li>
                            <h3 class="pro_price">{{value["price"]}}</h3>
                        </li>
                        <li>
                            <h3 class="pro_size">사이즈</h3>
                        </li>
                        <li>
                            <h3 class="pro_cnt">갯수</h3>
                        </li>
                        <li>
                            <h3 class="pro_sum_price">총가격</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</main>
    `,
    detail:`
    <div class="product_detail" v-for="(value, name) in $store.state.men.polo">
            <div class="inner">
                <div class="product_img_wrap">
                    <ul>
                        <li>
                            <img v-bind:src="'./img/men/poloShirts/'+value['img']+'.jpg'" alt="" />
                        </li>
                        <li>
                            <img v-bind:src="'./img/men/poloShirts-1/alt'+value['img']+'.jpg'" alt="" />
                        </li>
                    </ul>
                </div>
                <div class="product_info_wrap">
                    <ul class="product_info">
                        <li>
                            <h1 class="logo">Ralph Lauren</h1>
                        </li>
                        <li>
                            <h3 class="pro_cate">{{value["brand"]}}</h3>
                        </li>
                        <li>
                            <h3 class="pro_tit">{{value["name"]}}</h3>
                        </li>
                        <li>
                            <h3 class="pro_price">{{value["price"]}}</h3>
                        </li>
                        <li>
                            <h3 class="pro_size">사이즈</h3>
                        </li>
                        <li>
                            <h3 class="pro_cnt">갯수</h3>
                        </li>
                        <li>
                            <h3 class="pro_sum_price">총가격</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `
};

export default subData;

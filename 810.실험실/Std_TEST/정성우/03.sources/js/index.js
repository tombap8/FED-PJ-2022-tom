import comData from "./data/data-com.js";
import nav from "./nav.js";
import swiper from "./swiper.js";
import imgSlide from "./imgSlide.js";
import hrScroll from "./hrScroll.js";
import common from "./common.js";

Vue.component("top-comp", {
    template: comData.topArea,
});
new Vue({
    el: "#top",
    mounted: function () {
        nav();
        swiper();
        imgSlide();
        hrScroll();
        common();
    },
});
Vue.component("foot-comp", {
    template: comData.infoArea,
});
new Vue({
    el: "#info",
});

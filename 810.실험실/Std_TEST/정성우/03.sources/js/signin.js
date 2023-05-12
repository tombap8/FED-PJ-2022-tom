import nav from "./nav.js";
import common from "./common.js";
import comData from "./data/data-com.js";

Vue.component("top-comp", {
    template: comData.topArea,
});
new Vue({
    el: "#top",
    mounted: function () {
        nav();
        common();
    },
});
Vue.component("foot-comp", {
    template: comData.infoArea,
});
new Vue({
    el: "#info",
});

import atfx from "./commons";

const install = function(Vue, opts = {}) {
    Object.keys(atfx).forEach((key) => {
        //收集所有组件
        Vue.component("at" + key, atfx[key]);
    });
};

// auto install
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default Object.assign(atfx, { install }); // eslint-disable-line no-undef

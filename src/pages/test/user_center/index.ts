import "@/assets/less/test.less"
import {Vue, Component, Prop} from 'vue-property-decorator'
import "babel-polyfill";
import router from './router/index'
import Layout from './views/LayOut.vue'

Vue.config.productionTip = false;

@Component({
    components: {
        'lay-out': Layout
    }
})
export default class UserCenter extends Vue {
    @Prop({

    })
    public name: string = 'keshanju'
}

new UserCenter({router}).$mount('#app');

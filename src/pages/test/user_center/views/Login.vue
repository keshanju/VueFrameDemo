<template>
    <div class="text_center pad_t20">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-button type="primary" @click="goLogin">登录</el-button>
        </el-form>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';
    import LoginApi from '../api/LoginApi'
    import {Input, Form, FormItem, Select, Button} from "element-ui";
    import "babel-polyfill"

    Vue.config.productionTip = false;

    @Component({
        components: {
            'el-input': Input,
            'el-button': Button,
            'el-form': Form,
            'el-form-item': FormItem

        }
    })
    export default class LoginPage extends Vue {

        public async goLogin() {
            let params_obj = {
                guid: 10001,
                password: 905148,
                username: "keshanju",
                signature: ""
            };
            await LoginApi.toLogin(params_obj);
        }

    }
</script>

<style scoped>

</style>

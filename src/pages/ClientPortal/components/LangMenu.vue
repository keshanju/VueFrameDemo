<template>
  <div>
    <el-dropdown @command="changeLangInfo">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="lang">{{lang}}</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        <el-dropdown-item divided>{{computed_test}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue, Watch, Emit} from "vue-property-decorator";
  import {Dropdown, DropdownItem, DropdownMenu} from "element-ui"

  @Component({
    name: "LangMenu",
    filters: {},
    directives: {},
    components: {
      "el-dropdown": Dropdown,
      "el-dropdown-item": DropdownItem,
      "el-dropdown-menu": DropdownMenu
    }
  })
  export default class LangMenu extends Vue {
    public defalulLang: string = "cn";
    public computerdNum: number = 0; //共有属性
    private info: string = ""; //私有属性

    // 装饰器的具体使用文档
    // https://github.com/kaorun343/vue-property-decorator

    @Prop(String)
    readonly lang: string;

    @Emit('change-lang')
    changeLangInfo() {
      console.log("you click me");
      return "cn"
    }
    //
    // @Model

    @Watch('lang', {immediate: true, deep: true})
    langChange(val: string) {
      this.defalulLang = val;
    }

    // @Mixins

    // 计算属性
    get computed_test(): number {
      return this.computerdNum + 10
    }

    created() {
      console.log("Hello, 我是语言选择组件")
    }
  }
</script>

<style scoped>

</style>

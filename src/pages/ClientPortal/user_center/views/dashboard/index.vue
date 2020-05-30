<template>
  <el-row>
    <el-col>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"
  import {Carousel, CarouselItem, Col, Row} from "element-ui"

  @Component({
    components: {
      "el-row": Row,
      "el-col": Col,
      "el-carousel": Carousel,
      "el-carousel-item": CarouselItem
    }
  })
  export default class Dashboard extends Vue {
    public msg_str: string = "Dashboard"
  }

</script>

<style scoped lang="less">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    text-align: center;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

<template>
  <div class="flex justify-center align-center">
    <div class="box text-center">
      <i class="las la-file"></i>
      <p class="no-data-font">{{$t('tradeList.noData')}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "noData"
  }
</script>

<style scoped lang="scss">
  .la-file {
    font-size: 48px;
    color: rgba(15, 44, 82, 0.1);
  }
  .no-data-font {
    font-size: 14px;
    line-height: 18px;
    color: #7A95B1;
    letter-spacing: 0.21px;
    margin-top: 16px;
  }
</style>

<template>
  <el-header>
    <strong class="logo-name">YouNow <small>哟闹 Do it now!</small></strong>
  </el-header>
</template>
<style lang="less" scoped>
// css推荐书写顺序
// 1.位置属性(position, top, right, z-index, display, float等)
// 2.大小(width, height, padding, margin)
// 3.文字系列(font, line-height, letter-spacing, color- text-align等)
// 4.背景(background, border等)
// 5.其他(animation, transition等)
  @import "../style/base";
  .el-header {
    line-height: 60px;
    font-weight: 1000;
    color: @base-pink;
    background-color: @base-blue;

    .logo-name {
      font-size: 24px;
      small {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
  body > .el-container {
    margin-bottom: 40px;
  }
</style>

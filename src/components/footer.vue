<template>
  <el-container>
    <el-footer>
      <el-row>
        <el-col :span="18">
          <ul class="footer-left">
            <li>联系我们：243906076@qq.com</li>
            <li><a href="https://github.com/Mrsosann/koa-vue">@GitHub</a></li>
            <li><a href="https://github.com/Mrsosann/koa-vue/blob/master/README.md">@Reference</a></li>
          </ul>
        </el-col>

        <el-col :span="6">
          <ul class="footer-right">
            <li class="footer-copy">Copyright &copy; 2018 </li>
            <li>YouNow</li>
          </ul>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>
<style lang="less" scoped>
// css推荐书写顺序
// 1.位置属性(position, top, right, z-index, display, float等)
// 2.大小(width, height, padding, margin)
// 3.文字系列(font, line-height, letter-spacing, color- text-align等)
// 4.背景(background, border等)
// 5.其他(animation, transition等)
  @import "../style/base";
  .el-footer {
    font-weight: lighter;
    font-size: 14px;
    line-height: 30px;
    color: @base-grey;
    border-top: 1px solid @base-pink;
    a {
      color: @base-blue;
    }
  }
  .footer-right {
    text-align: left;;
  }
  ul {
    list-style: none;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
</style>

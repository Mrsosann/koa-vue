<template>
  <div>
    <Header></Header>
    <el-container>
      <el-main>
        <el-tabs v-model="activeTabName" class="main-card" type="border-card" tab-position="top">

          <!-- 登录 tab 内容 -->
          <el-tab-pane label="登录" name="login">
            <el-form ref="login" :model="login" :rules="login.rules" label-width="80px">
              <el-form-item label="账号" prop="username">
                <el-input v-model="login.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input type="password" :suffix-icon="login.password ? 'el-icon-error' : ''" v-model="login.password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-checkbox v-model="login.remember">下次记住密码</el-checkbox>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitLogin">立即登录</el-button>
                <el-button @click="resetForm('login')">重置</el-button>
              </el-form-item>
              <el-form-item>
                <p class="login-footer">
                  <a @click="activeTabName = 'forget'">忘记密码</a>
                  |
                  <a @click="activeTabName = 'register'">立即注册</a>
                </p>
              </el-form-item>
            </el-form>
          </el-tab-pane>

          <!-- 注册 tab 内容 -->
          <el-tab-pane label="注册" name="register">
            <el-form ref="register" :model="register" :rules="register.rules" label-width="80px">
              <el-form-item label="账号" prop="username">
                <el-input v-model="register.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input type="password" :suffix-icon="register.password ? 'el-icon-error' : ''" v-model="register.password"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="confirm">
                <el-input type="password" :suffix-icon="register.confirm ? 'el-icon-error' : ''" v-model="register.confirm"></el-input>
              </el-form-item>
              <el-form-item label="密保问题" prop="question">
                <el-select v-model="register.question" placeholder="请选择">
                  <el-option
                    v-for="item in question"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="正确答案" prop="answer">
                <el-input v-model="register.answer"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('register')">立即注册</el-button>
              </el-form-item>
              <el-form-item>
                <p class="login-footer">
                  <a @click="activeTabName = 'forget'">忘记密码</a>
                  |
                  <a @click="activeTabName = 'login'">立即登录</a>
                </p>
              </el-form-item>
            </el-form>
          </el-tab-pane>

          <!-- 找回密码 tab 内容 -->
          <el-tab-pane label="忘记密码" name="forget">
            <el-form ref="forget" :model="forget" :rules="forget.rules" label-width="80px">
              <el-form-item label="账号" prop="username">
                <el-input v-model="forget.username"></el-input>
              </el-form-item>
              <el-form-item label="密保问题" prop="question">
                <el-select v-model="forget.question" placeholder="请选择">
                  <el-option
                    v-for="item in question"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="正确答案" prop="answer">
                <el-input v-model="forget.answer"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('forget')">提交</el-button>
              </el-form-item>
              <el-form-item>
                <p class="login-footer">
                  <a @click="activeTabName = 'register'">去注册</a>
                  |
                  <a @click="activeTabName = 'login'">去登录</a>
                </p>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import * as types from '../store/types'
export default {
  components: {
    Header,
    Footer
  },
  created () {
    // console.log(`This is login created: ${this.$store.state.show}`)
  },
  mounted () {
    this.$store.commit(types.TITLE, 'Login')
  },
  data () {
    return {
      activeTabName: 'login',
      token: '',
      login: {
        username: '',
        password: '',
        remember: true,
        rules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ]
        }
      },
      register: {
        username: '',
        password: '',
        confirm: '',
        question: '',
        answer: '',
        rules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
          confirm: [
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
          question: [
            { required: true, message: '密保问题不能为空', trigger: 'blur' }
          ],
          answer: [
            { required: true, message: '请输入问题答案', trigger: 'blur' },
            { max: 40, message: '长度请控制在 40 个字符以内', trigger: 'change' }
          ]
        }
      },
      forget: {
        username: '',
        question: '',
        answer: '',
        rules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
          question: [
            { required: true, message: '密保问题不能为空', trigger: 'blur' }
          ],
          answer: [
            { required: true, message: '请输入问题答案', trigger: 'blur' },
            { max: 40, message: '长度请控制在 40 个字符以内', trigger: 'change' }
          ]
        }
      },
      question: [{
        value: '1',
        label: '你父亲的名字是？'
      // }, {
      //   value: '2',
      //   label: '你母亲的名字是？'
      // }, {
      //   value: '3',
      //   label: '你小学班主任的名字是？'
      }]
    }
  },
  methods: {
    submitForm (formName) {
      // 页面表单统一提交处理函数
      this.$refs[formName].validate((valid) => {
        // valid 是否验证通过 boolean
        // if (valid) {
        //   console.log('this is common submit form')
        // } else {
        //   console.log('form ' + formName + 'error submit!!')
        //   return false
        // }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    submitLogin () {
      // 登录表单提交处理函数
      this.$refs.login.validate((valid) => {
        // valid 是否验证通过 boolean
        if (valid) {
          this.$api.post('login', {
            username: this.login.username,
            password: this.login.password
          }, data => {
            this.$message({
              message: data.msg,
              type: 'success'
            })
            this.token = data.token
            this.$store.commit(types.LOGIN, this.token)
            let redirect = decodeURIComponent(this.$route.query.redirect || '/')
            this.$router.push({
              path: redirect
            })
          }, err => {
            // console.log(err)
            this.$message.error(err.msg)
          })
        } else {
          console.log('前端表单验证未通过')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../style/base";
  // .el-main {
  // }
  .main-card {
    width: 380px;
    margin: 40px auto;
  }
  .el-input,
  .el-select {
    width: 220px;
  }
  .el-form-item:first-of-type {
    margin-top: 22px;
  }
  .login-footer {
    a {
      padding: 0 5px;
      color: @base-blue;
      cursor: pointer;
    }
  }

  body > .el-container {
    margin-bottom: 40px;
  }

</style>

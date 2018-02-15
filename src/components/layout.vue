<template>
  <div>
    <div class="app-header">
      <div class="app-header-inner">
        <router-link :to="{path:'/'}">
          <img src="../assets/logo.png">
        </router-link>
          <div class="header-nav">
            <ul class="nav-list">
              <li>{{username}}</li>
              <li class="nav-pile" v-if="username!==''">|</li>
              <li v-if="username!==''" @click="signout">退出<li>
              <li class="nav-pile" v-if="username!==''">|</li>
              <li @click="loginClick" v-if="username==''">登录</li>
              <li class="nav-pile" v-if="username==''">|</li>
              <li @click="signupClick" v-if="username==''">注册</li>
              <li class="nav-pile" v-if="username==''">|</li>
              <li @click="aboutClick">关于</li>
            </ul>
          </div>
      </div>
    </div>
    <div class="app-content">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    </div>
    <div class="app-footer">© 2017 fishenal MIT</div>
    <my-alert :is-show="isShowAbout" @on-close="close('isShowAbout')">
      <p>
        暴雪娱乐公司是一家著名视频游戏制作和发行公司，1991年2月8日由加利福尼亚大学洛杉矶分校的三位毕业生Michael Morhaime、Allen Adham、Frank Pearce，以Silicon&Synapse为名创立；1994年品牌正式更名为“Blizzard”</p>
    </my-alert>

    <my-alert :is-show="isShowLogin" @on-close="close('isShowLogin')">
        <my-login @has-log="successLogin"></my-login>
    </my-alert>

    <my-alert :is-show="isShowSignup" @on-close="close('isShowSignup')">
        <my-signup @has-signup="successSignup"></my-signup>
    </my-alert>
  </div>
</template>

<script>
import Alert from './alert'
import Signup from './signup'
import Login from './login'

export default {
  data () {
    return {
      isShowAbout:false,
      isShowLogin:false,
      isShowSignup:false,
      username:''
    }
  },
  components:{
    MyAlert:Alert,
    MySignup:Signup,
    MyLogin:Login
  },
  methods:{
    loginClick(){
      this.isShowLogin=true
    },
    signupClick(){
      this.isShowSignup=true
    },
    aboutClick(){
      this.isShowAbout=true
    },
    close(attr){
      this[attr]=false
    },
    signout(){
      this.username=''
    },
    successLogin(data){
      this.close('isShowLogin')
      this.username=data.username
    },
    successSignup(data){
      this.close('isShowSignup')
      this.username=data.username
    }
  }
}
</script>
<style>
html, body, div, span, applet, object, iframe,h1, h2, h3, h4, h5, h6, p, blockquote, pre,a, abbr, acronym, address, big, cite, code,del, dfn, em, img, ins, kbd, q, s, samp,small, strike, strong, sub, sup, tt, var,b, u, i, center,dl, dt, dd, ol, ul, li,fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td,article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.app-header {
  background: rgba(0,0,0,.7);
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-header-inner {
  width: 80%;
  height:90px;
  margin: 0 auto;
}
.app-header-inner img {
  width: 50px;
  margin-top: 20px;
  float: left;
}
.header-nav {
  float: right;
}
.header-nav ul {
  overflow: hidden;
}
.header-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
.app-footer {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.app-content {
  width: 80%;
  margin: 0 auto;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
</style>

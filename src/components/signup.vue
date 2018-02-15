<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text"
          v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password"
          v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error"> {{ passwordErrors.errorText }} </span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">确认密码：</span>
        <div class="g-form-input">
          <input type="password"
          v-model="passwordModelTwo" placeholder="请再次输入密码">
        </div>
        <span class="g-form-error"> {{ passwordTwoErrors.errorText }} </span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onSignup">注册</a>
        </div>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>
<script>
export default{
    data () {
        return {
            usernameModel: '',
            passwordModel: '',
            passwordModelTwo:'',
            errorText: ''
        }
    },
    computed:{
        userErrors(){
            let errorText,status
            if (/@/g.test(this.usernameModel)){
                status=false
                errorText='不包含@'
            } else {
                status=true
                errorText=''
            }
            if (!this.userFlag){
                errorText=''
                this.userFlag=true
            }
            return {
                status,
                errorText
            }
        },
        passwordErrors () {
            let errorText,status
            if (!/^\w{1,6}$/g.test(this.passwordModel)) {
                status = false
                errorText = '密码不是1-6位'
            }else {
                status = true
                errorText = ''
            }
            if (!this.passwordFlag) {
                errorText = ''
                this.passwordFlag = true
            }
            return {
                status,
                errorText
            }
        },
        passwordTwoErrors () {
            let errorText,status
            if (this.passwordModelTwo!==this.passwordModel) {
                status = false
                errorText = '两次输入的密码不一致'
            }else {
                status = true
                errorText = ''
            }
            if (!this.passwordFlagTwo) {
                errorText = ''
                this.passwordFlagTwo = true
            }
            return {
                status,
                errorText
            }
        }
    },
    methods:{
        onSignup(){
            if(!this.userErrors.status ||!this.passwordErrors.status ||!this.passwordTwoErrors.status){
            console.log(this.userErrors.status)
            console.log(this.passwordErrors.status)
            console.log(this.passwordTwoErrors.status)

                this.errorText='部分选项未通过'
            }else{
                this.errorText=''
                this.$http.get('/api/login').then((res)=>{
                //console.log(res.data)
                    this.$emit('has-signup',res.data)
                },(error)=>{
                    console.log(error)
                    }
                )
            }
        }
    }
}
</script>

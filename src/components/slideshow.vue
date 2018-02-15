<template>
    <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
        <div class="slide-img">
            <a :href="slides[nowIndex].href">
                <transition :name="'slide-trans-'+directions">
                    <img v-if="isShow" :src="slides[nowIndex].src">
                </transition>
                <transition :name="'slide-trans-old-'+directions">
                    <img v-if="!isShow" :src="slides[nowIndex].src">
                </transition>
            </a>
        </div>
        <h2>{{slides[nowIndex].title}}</h2>
        <ul class="slide-pages">
            <li @click="goto(prevIndex)">&lt;</li>
            <li v-for="(item,index) in slides" @click="goto(index)">
                <a :class="{on:index===nowIndex}">
                    {{index+1}}
                </a>
            </li>
            <li @click="goto(nextIndex)">&gt;</li>
        </ul>
    </div>
</template>
<script>
    export default{
        props:{
            slides:{
                type:Array,
                default:[]
            },
            inv:{
                type:Number,
                default:0
            }
        },
        data () {
            return {
                nowIndex:0,
                isShow: true,
                directions:'left'
            }
        },
        computed:{
            prevIndex () {
                if(this.nowIndex===0){
                    return this.slides.length-1
                }
                else {
                    return this.nowIndex-1
                }
            },
            nextIndex(){
                if(this.nowIndex===this.slides.length-1){
                    return 0
                }else {
                    return this.nowIndex+1
                }
            }
        },
        methods:{
            goto(index){
                if(index==this.nowIndex){
                    return
                }else if(index==0&&this.nowIndex==3){
                    this.directions='left'
                }else if(index==3&&this.nowIndex==0){
                    this.directions='right'
                }else if(this.nowIndex>index){
                    this.directions='right'
                }else{
                    this.directions='left'
                }
                this.isShow=false
                setTimeout(()=>{
                    this.isShow=true
                    this.nowIndex=index
                },50)
            },
            runInv(){
                this.directions='left'
                this.invId=setInterval(()=>{
                    this.goto(this.nextIndex)
                },this.inv)
            },
            clearInv(){
                clearInterval(this.invId)
            }
        },
        mounted(){
            this.runInv()
        }
    }
</script>
<style scoped>
.slide-trans-left-enter-active {
    transform:translateX(0);
    transition: all .5s;
}
.slide-trans-left-enter {
  transform: translateX(100%);
}
.slide-trans-old-left-leave-active {
  transition: all .5s;
  transform: translateX(-100%);
}
.slide-trans-right-enter-active {
    transform:translateX(0);
    transition: all .5s;
}
.slide-trans-right-enter {
  transform: translateX(-100%);
}
.slide-trans-old-right-leave-active {
  transition: all .5s;
  transform: translateX(100%);
}
.slide-show{
    position:relative;
    margin:15px 15px 15px 0;
    width:100%;
    height:500px;
    overflow:hidden;
}
.slide-show h2{
    position:absolute;
    width:100%;
    height:100%;
    color:#fff;
    background:#000;
    opacity:.5;
    bottom:0;
    height:30px;
    text-align:left;
    padding-left:15px;
}
.slide-img {
  width: 100%;
  height:500px;
}
.slide-img img {
  width: 100%;
  height:100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
}
</style>
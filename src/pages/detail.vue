<template>
    <div class="detail-wrap">
        <div class="detail-left">
            <div class="product">
                <img :src="productIcon">
                <ul>
                    <router-link v-for="item in products" :key="item.id" :to="{ path: item.path }" tag="li" active-class="active">
                        {{ item.name }}
                    </router-link>
                </ul>
            </div>
        </div>
        <div class="detail-right">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                products:[
                    {
                        id:0,
                        path:'lushi',
                        name:'炉石传说'
                    },
                    {
                        id:1,
                        path:'moshou',
                        name:'魔兽世界'
                    },
                    {
                        id:2,
                        path:'shouwang',
                        name:'守望先锋'
                    },
                    {
                        id:3,
                        path:'xingji',
                        name:'星际争霸'
                    }
                ],
                img:{
                    '/detail/lushi':require("../assets/images/1.png"),
                    '/detail/moshou':require("../assets/images/2.png"),
                    '/detail/xingji':require("../assets/images/3.png"),
                    '/detail/shouwang':require("../assets/images/4.png")
                }
            }
        },
        computed:{
            productIcon(){
                return this.img[this.$route.path]
            }
        }
     }
</script>

<style>
.detail-wrap {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 20px;
}
.detail-left {
  float: left;
  width: 16%;
  text-align: center;
}
.detail-right {
  float: right;
  width: 83%;
}
.product {
  background: #fff;
  padding: 20px 0;
}
.product ul {
  margin-top: 20px;
}
.product li {
  text-align: left;
  padding: 10px 15px;
  cursor: pointer;
}
.product li.active,
.product-board li:hover {
  background: #4fc08d;
  color: #fff;
}
.product li a {
  display: block;
}


.sales-board {
  background: #fff;
}
.sales-board-form {

}
.sales-board-intro h2 {
  font-size: 20px;
  padding: 20px;
}
.sales-board-intro p {
  background: #f7fcff;
  padding: 10px 20px;
  color: #999;
  line-height: 1.8;
}
.sales-board-form {
  padding: 30px 20px;
  font-size: 14px;
}
.sales-board-line {
  clear: both;
  padding-bottom: 20px;
}
.sales-board-line-left {
    display: inline-block;
    width: 100px;
}
.sales-board-line-right {
    display: inline-block;
    width: 75%;
}
.sales-board-des {
  border-top: 20px solid #f0f2f5;
  padding: 15px 20px;
}
.sales-board-des p {
  line-height: 1.6;
}
.sales-board-des h2 {
  font-size: 20px;
  padding-bottom: 15px;
}
.sales-board-des h3 {
  font-size: 18px;
  font-weight: bold;
  padding: 20px 0 10px 0;
}
.sales-board-des li {
  padding: 5px 0;
}
.sales-board-table {
  width: 100%;
  margin-top: 20px;
}
.sales-board-table th {
  background: #4fc08d;
  color: #fff;
}
.sales-board-table td {
    border: 1px solid #f0f2f5;
    padding: 15px;
}
</style>

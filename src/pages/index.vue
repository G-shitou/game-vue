<template>
    <div class="index-wrap">
        <div class="index-left">
            <div class="index-left-block">
                <h2>全部产品</h2>
                <template v-for="product in productList">
                    <h3> {{product.title}} </h3>
                    <ul>
                        <li v-for="item in product.list">
                            <a :href="item.url">{{ item.name }}</a>
                            <span v-if="item.hot" class="hot-tag">HOT</span>
                        </li>
                    </ul>
                    <div v-if="!product.last" class="hr"></div>
                </template>
            </div>
            <div class="index-left-block lastest-news">
                <h2>最新消息</h2>
                <ul>
                    <li v-for="item in newsList">
                        <a :href="item.url" class="new-item">{{ item.title }}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="index-right">
            <slide-show :slides="slides" :inv="invTime"></slide-show>
            <div class="index-board-list">
                <div class="index-board-item" v-for="(item, index) in boardList" :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]">
                    <div class="index-board-item-inner" >
                        <h2>{{ item.title }}</h2>
                        <p>{{ item.description }}</p>
                        <div class="index-board-button">
                            <router-link class="button" :to="{path: 'detail/' + item.toKey}">立即购买</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import slideShow from '../components/slideshow'
     export default{
        components:{
            slideShow
        },
        /*created: function () {
            this.$http.get('api/getNewsList')
            .then((res) => {
                //this.newsList = res
                console.log(res);
            }, (err) => {
                console.log(err)
            })
        },*/
        data () {
            return {
                invTime:3000,
                slides: [
                    {
                        src: require('../assets/slideShow/pic1.jpg'),
                        title: '炉石传说',
                        href: 'detail/lushi'
                    },
                    {
                        src: require('../assets/slideShow/pic2.jpg'),
                        title: '魔兽世界',
                        href: 'detail/moshou'
                    },
                    {
                        src: require('../assets/slideShow/pic3.jpg'),
                        title: '守望先锋',
                        href: 'detail/shouwang'
                    },
                    {
                        src: require('../assets/slideShow/pic4.jpg'),
                        title: '星际争霸',
                        href: 'detail/xingji'
                    }
                ],
                newsList: [
                            {
                                title: '最近赛事',
                                url: 'https://www.battlenet.com.cn/zh/'
                            },
                            {
                                title: '优惠活动',
                                url: 'https://www.battlenet.com.cn/zh/'
                            },
                            {
                                title: '版本更新',
                                url: 'https://www.battlenet.com.cn/zh/'
                            },
                            {
                                title: '论坛社区',
                                url: 'https://www.battlenet.com.cn/zh/'
                            }
                ],
                productList: {
                    pc: {
                        title: '经典力作',
                        list: [
                            {
                                name: '魔兽世界',
                                url: 'https://www.wowchina.com/zh-cn/'
                            },
                            {
                                name: '暗黑破坏神Ⅲ',
                                url: 'http://d3.blizzard.cn/home'
                            },
                            {
                                name: '炉石传说',
                                url: 'http://hs.blizzard.cn/landing',
                                hot: true
                            },
                            {
                                name: '守望先锋',
                                url: 'http://ow.blizzard.cn/home'
                            },
                            {
                                name:'星际争霸Ⅱ',
                                url:'http://sc2.blizzard.cn/landing'
                            }
                        ]
                    },
                    app: {
                        title: '智能辅助',
                        last: true,
                        list: [
                            {
                                name: '91助手',
                                url: 'https://www.battlenet.com.cn/zh/'
                            },
                            {
                                name: '产品助手',
                                url: 'https://www.battlenet.com.cn/zh/',
                                hot: true
                            },
                            {
                                name: '智能地图',
                                url: 'https://www.battlenet.com.cn/zh/'
                            },
                            {
                                name: '团队语音',
                                url: 'https://www.battlenet.com.cn/zh/'
                            }
                        ]
                    }
                },
                boardList: [
                        {
                            title: '炉石传说',
                            description: '开放产品是一款开放产品',
                            id: 'car',
                            toKey: 'lushi',
                            saleout: false
                        },
                        {
                            title: '魔兽世界',
                            description: '品牌营销帮助你的产品更好地找到定位',
                            id: 'earth',
                            toKey: 'moshou',
                            saleout: false
                        },
                        {
                            title: '守望先锋',
                            description: '使命必达快速迭代永远保持最前端的速度',
                            id: 'loud',
                            toKey: 'shouwang',
                            saleout: true
                        },
                        {
                            title: '星际争霸',
                            description: '帮你勇闯高峰，到达事业的顶峰',
                            id: 'hill',
                            toKey: 'xingji',
                            saleout: false
                        }
                ]
            }
        }
     }
</script>
<style>
/*左侧侧边栏*/
.index-wrap {
    width:100%;
    margin:0 auto;
    overflow:hidden;
}
.index-left{
    width:25%;
    float:left;
    text-align:left;
}
.index-left-block{
    margin:15px;
    background:#fff;
    box-shadow:0 0 1px #ddd;
}
.index-left-block .hr{
    margin-bottom:20px;
}
.index-left-block h2{
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
}
.index-left-block h3{
    padding:0 15px 5px 25px;
    color:#222;
    font-weight:bold;
}
.index-left-block ul{
    padding:10px 20px 10px 45px;
}
.index-left-block li{
    padding:5px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.lastest-news{
    min-height:200px;
}
/*右侧区域*/
.index-right{
    float:right;
    width:75%;
}
.index-board-list{
    overflow:hidden;
}
.index-board-item{
    float: left;
    width: 45%;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 2%;
    margin-right: 2%;
    margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 30%;
}
.index-board-car .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
  background-size:100px;
}
.index-board-loud .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
  background-size:100px;

}
.index-board-earth .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
  background-size:100px;

}
.index-board-hill .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
  background-size:100px;

}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.new-item {
  display: inline-block;
  //width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
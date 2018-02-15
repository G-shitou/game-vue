<template>
    <div class="sales-board">
        <div class="sales-board-intro">
            <h2>炉石传说</h2>
            <p>《炉石传说：魔兽英雄传》是一款由暴雪娱乐开发的集换式卡牌游戏。中国大陆地区的独家运营由网易公司代理。游戏背景设定于暴雪的魔兽系列，共九位魔兽中的角色作为九种不同的职业。而玩家要做的，就是根据自己现有的卡牌组建合适的卡组，指挥英雄，驱动随从，施展法术，与游戏好友或素不相识的对手一决高下</p>
        </div>
        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    购买数量：
                </div>
                <div class="sales-board-line-right">
                    <v-counter @on-change="onParamChange('buyNum', $event)"></v-counter>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    产品类型：
                </div>
                <div class="sales-board-line-right">
                    <v-selection :selections="buyTypes" @on-change="onParamChange('buyType', $event)"></v-selection>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    有效时间：
                </div>
                <div class="sales-board-line-right">
                    <v-chooser :selections="periodList" @on-change="onParamChange('preid',$event)"></v-chooser>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    产品版本：
                </div>
                <div class="sales-board-line-right">
                    <v-banben :selections="versionList"
                  @on-change="onParamChange('versions', $event)"></v-banben>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    总价：
                </div>
                <div class="sales-board-line-right">
                    {{ price }} 元
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">&nbsp;</div>
                <div class="sales-board-line-right">
                    <div class="button" @click="showPayDialog">
                        立即购买
                    </div>
                </div>
            </div>
        </div>
        <div class="sales-board-des">
            <h2>通用规则</h2>
            <p>    一局对战开始前需要玩家选择已有的一套套牌进行对战，一套必须为30张。开始后系统随机分配前后手，根据先手3张、后手4张随机分配玩家套牌中的卡牌，然后玩家可以换掉其中若干张来完成开局的牌组。在一局对战中，牌库上限为60张，回合为50回合上限，达到后判为平局，在天梯模式中双方均不损失星数与段位，但是连胜中断，如果是休闲模式互不影响。<br>    初始回合先手先一费，然后后手一费。双方每个回合会自动增加1点法力水晶，法力水晶是用来召唤卡牌的必要单位，回合结束后会自动回复，在界面右下方的蓝色宝石就是法力水晶。当玩家法力水晶很多的时候，可以多次使用法力水晶允许内的卡牌。<br>     卡牌除了随从、武器、英雄卡牌外，还有法术卡牌，是消耗品。不同的英雄技能不同，除了可拥有中立卡牌外，还可获得职业卡牌。当一方英雄血量为0时，为该方失败，另一方胜利。如果在一回合中，双方都为0时，为平局。在对战模式、乱斗模式和竞技场中每胜利3场可以获得10金币，每天上限100金币，不包括任务获得的金币.
            <h3>模式系统</h3>
            <ul>
                <li>模式系统分为4种模式：</li>
                <li>对战模式</li>
                <li>冒险模式</li>
                <li>竞技模式</li>
                <li>乱斗模式</li>
                </ul>
            <h3>任务系统</h3>
            <ul>
                <li>新手任务</li>
                <li>日常任务</li>
            </ul>
        </div>
        <my-dialog :is-show="isShowPayDialog" @on-close="hidePayDialog">
            <table class="buy-dialog-table">
                <tr>
                    <th>购买数量</th>
                    <th>产品类型</th>
                    <th>有效时间</th>
                    <th>产品版本</th>
                    <th>总价</th>
                </tr>
                <tr>
                    <td>{{ buyNum }}</td>
                    <td>{{ buyType.label }}</td>
                    <td>{{ preid.label }}</td>
                    <td>{{ versions.label }}</td>
                    <td>{{ price }}</td>
                </tr>
            </table>
            <h3 class="buy-dialog-title">请选择银行</h3>
            <bank-chooser @on-change="onChangeBanks"></bank-chooser>
            <div class="button buy-dialog-btn" @click="confirmBuy">
                确认购买
            </div>
        </my-dialog>
        <my-dialog :is-show="isShowSucDialog" @on-close="hideSucDialog" @click="showListPage">
        <router-link :to="{path:'/orderList'}" class="showListPage" tag="p" @click.native="hideMyself">支付成功！去查看！</router-link>
        </my-dialog>
    </div>
</template>
<script>
import VCounter from '../../components/base/counter'
import VSelection from '../../components/base/selection'
import VChooser from '../../components/base/chooser'
import VBanben from '../../components/base/banben'
import Valert from '../../components/alert'
import BankChooser from '../../components/band'

    export default{
        components:{
            VCounter,
            VSelection,
            VChooser,
            VBanben,
            MyDialog: Valert,
            BankChooser

        },
        data(){
            return {
                price:300,
                buyNum:1,
                buyType:{
                            label: '入门版',
                            value: 0
                            },
                preid:{
                        label: '15天',
                        value: 0
                        },
                versions:{
                            label: '客户版',
                            value: 0
                            },
                buyTypes: [
                    {
                        label: '入门版',
                        value: 0
                    },
                    {
                        label: '中级版',
                        value: 1
                    },
                    {
                        label: '高级版',
                        value: 2
                    }
                    ],
                periodList: [
                    {
                        label: '15天',
                        value: 0
                    },
                    {
                        label: '30天',
                        value: 1
                    },
                    {
                        label: '90天',
                        value: 2
                    }
                    ],
                versionList: [
                    {
                        label: '客户版',
                        value: 0
                    },
                    {
                        label: '代理商版',
                        value: 1
                    },
                    {
                        label: '专家版',
                        value: 2
                    }
                    ],
                isShowPayDialog: false,
                bankId: null,
                orderId: null,
                isShowSucDialog: false
            }
        },
        methods:{
            onParamChange(data,val){
                //监听到数字有变化时，接到变化后值，更改后，更新价格
                this[data]=val
                this.getPrice()
            },
            getPrice(){
                let type=this.buyType.value==0?100:(this.buyType.value==1? 200 : 300);
                let version=this.versions.value==0?200:(this.versions.value==1? 300 : 400);
                let relPrice=(type+version)*this.buyNum*(this.preid.value+1);
                this.price=relPrice;
                /*var reqParams = {
                    buyNumber: this.buyNum,
                    buyType: this.buyType.value,
                    preid: this.preid.value,
                    version: this.versions.value,
                    bankId: this.bankId
                };
                this.$http.post('/api/getPrice',reqParams)
                    .then((res) => {
                    this.price=res.body.amount
                })*/
            },
            showPayDialog () {
                this.isShowPayDialog = true
            },
            hidePayDialog () {
                this.isShowPayDialog = false
            },
            hideSucDialog () {
                this.isShowSucDialog = false
            },
            onChangeBanks (bankObj) {
                this.bankId = bankObj.id
            },
            confirmBuy () {
                this.isShowSucDialog = true
                this.isShowPayDialog = false
            },
            hideMyself(){
                this.isShowSucDialog = false
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buy-dialog-title {
  font-size: 16px;
  font-weight: bold;
}
.buy-dialog-btn {
  margin-top: 20px;
}
.buy-dialog-table {
  width: 100%;
  margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th{
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 5px 0;
}
.buy-dialog-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
}
p.showListPage{
    cursor:pointer;
}
p.showListPage:hover{
    color:red;
}
</style>
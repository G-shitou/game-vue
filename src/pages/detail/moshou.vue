<template>
    <div class="sales-board">
        <div class="sales-board-intro">
            <h2>魔兽世界</h2>
            <p>《魔兽世界》（World of Warcraft）是由著名游戏公司暴雪娱乐所制作的第一款网络游戏，属于大型多人在线角色扮演游戏。游戏以该公司出品的即时战略游戏《魔兽争霸》的剧情为历史背景，依托魔兽争霸的历史事件和英雄人物，魔兽世界有着完整的历史背景时间线。玩家在魔兽世界中冒险、完成任务、新的历险、探索未知的世界、征服怪物等。</p>
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
            <h2>游戏说明</h2>
            <p>2003年《魔兽争霸III：冰封王座》发售之后，暴雪娱乐正式宣布了《魔兽世界》的开发计划（之前已经秘密开发了数年之久）。魔兽世界于2004年在北美公开测试，同年11月23日开始在美国、新西兰、加拿大、澳洲与墨西哥发行。截至2008年底，全球的魔兽世界付费用户已超过1150万人，并成功打进吉尼斯世界纪录大全。2008年4月，魔兽世界在MMORPG市场占有率达62%。截止2014年01月，全世界创建的账号总数已超过一亿（含试玩版账号），人物角色达到5亿。共有244个国家和地区的人在玩《魔兽世界》，包括南极、巴哈马，圣诞岛，以及托克劳群岛之类。</p>
            <h3>早期版本</h3>
            <ul>
                <li>燃烧的远征</li>
                <li>巫妖王之怒</li>
                <li>大地的裂变</li>
                <li>熊猫人之谜</li>
                <li>德拉诺之王</li>
                <li>军团再临</li>
                </ul>
            <h3>游戏特色</h3>
            <ul>
                <li>副本PVE</li>
                <li>PVP系统</li>
                <li>声望系统</li>
                <li>道具商城</li>
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
        <my-dialog :is-show="isShowSucDialog" @on-close="hideSucDialog">
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
                let type=this.buyType.value==0?100:(this.buyType.value==1? 200 : 300)
                let version=this.versions.value==0?200:(this.versions.value==1? 300 : 400)
                let relPrice=(type+version)*this.buyNum*(this.preid.value+1)
                this.price=relPrice
                /*this.$http.post('/api/getPrice', reqs)
                    .then((res) => {
                    //this.price = res.data.amount
                    console.log(res.uname)
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
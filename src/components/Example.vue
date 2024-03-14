<script lang="ts" setup>
  import { Alert, Icon } from '@xhs/reds-h5'
  import { ref } from 'vue'
  import Details from '~/assets/svg/details.svg'

  // 任务文案管理
  // todo：联调时要改为接口下发

  const TASK_RULES = `1、优质购物笔记要求：
·图片≥3张，或者视频长度≥20秒；
·标题≥8字、正文≥50字、话题≥5个（其中必带#买手笔记繁星计划）
·24h笔记小眼睛数≥50
2、每周发布的前5篇识别为优质的购物笔记可以获得投流，第一篇600曝光/篇，第2-4篇1000曝光/篇，第5篇2000曝光/篇
3、笔记达成门槛后，实时开始投流，请确保笔记公开有效且审核通过～`

  const REWARD_DETAILS = `完成任务后，将由系统自动投流，实际投流效果与自然曝光时段的笔记互动数据有关，建议优化笔记质量哦～
  ·x月x日x小时x分，笔记标题：xxx，预估奖励：xx曝光
  ·x月x日x小时x分，笔记标题：xxx，预估奖励：xx曝光
  ·x月x日x小时x分，笔记标题：xxx，预估奖励：xx曝光
  `

  const TASK_GROUP_LINK = 'https://school.xiaohongshu.com/lesson/normal/efe778213fab47f989fb0ec2fe85ed77?jumpFrom=school'

  const DEEPLINK_CREATE = 'xhsdiscover://post_new_note?attach=%7B%22topics%22%3A%5B%7B%22page_id%22%3A%2265f17f4c3d9e550001caedc1%22%7D%5D%7D&config=%7B%7D&page=%7B%7D'

  const RULE_LINK = 'https://ditto.devops.xiaohongshu.com/editor?id=30881a6b219b43a28d668bb8ad138cf1&channel=ds'

  const BG_IMG = '//picasso-static.xiaohongshu.com/fe-platform/f355f7640cb66f856c5a97aec0fd03a4ea97b10f.jpg'

  // test

  // 需要改造成接口方式
  const RIGHTS_CONFIG = {
    title: '专属权益',
    rights_list: [{
      icon: '//picasso-static.xiaohongshu.com/fe-platform/c8644f4179809c592932ea9bfefbb96b5bc062ca/icon1.png',
      title: '优质笔记享叠加投流',
      tips: '三大任务为优质带货笔记加持流量！',
      actionText: '查看',
      actionType: 1,
      actionExtra: '快参与上方活动任务吧，符合要求即可获得流量加持哦～',
    }, {
      icon: '//picasso-static.xiaohongshu.com/fe-platform/33158c3f414c0563f33a93856fb1c6c46ef536cc/icon2.png',
      title: '「低价开单好物」频道',
      tips: '官方甄选货盘，助力笔记快速出单～',
      actionText: '选品',
      actionType: 2,
      actionExtra: '//fe.xiaohongshu.com/ds/vincent/125524203f3741439e12d022e755683b?naviHidden=yes&fullscreen=true&disableCenterDragBack=true&ds_role=true&source=creator_task',
    }, {
      icon: '//picasso-static.xiaohongshu.com/fe-platform/69c104b6165b75cec0ea67b4218ebfb1331fba69/icon3.png',
      title: '小红书「人气红榜」',
      tips: '众多买手都在推荐的爆款商品榜单～',
      actionText: '选品',
      actionType: 2,
      actionExtra: 'xhsdiscover://rn/dspyxis/compass/redrank',
    }, {
      icon: '//picasso-static.xiaohongshu.com/fe-platform/1e46182a54cb976bcc1deee65fefd36c73cefece/icon4.png',
      title: '爆款购物笔记素材库',
      tips: '共享爆款素材，跟着“学作业”就够了',
      actionText: '查看',
      actionType: 2,
      actionExtra: '//school.xiaohongshu.com/lesson/normal/317bd2af21374a40a915aa263c9684ac?jumpFrom=school',
    }],
  }

  const title = ref()
  const message = ref('弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。支持组件调用和函数调用两种方式。')
  const show = ref(false)
  const cancelText = ref('')
  const footerLayout = ref('horizontal')
  const isMono = ref(false)
  const isBtnRounded = ref(false)

  const numberFormat = num => {
    if (num >= 10000) {
      return `${(num / 10000).toFixed(2)}万`
    } return num
  }

  const goLink = (link:string) => {
    window.open(link)
  }

  const closeAlert = () => {
    show.value = false
  }

  const openRewardRule = () => {
    show.value = true
    title.value = '规则说明'
    message.value = TASK_RULES
    isBtnRounded.value = true
  }

  const openRewardDetail = () => {
    show.value = true
    title.value = '奖励详情'
    message.value = REWARD_DETAILS
    isBtnRounded.value = true
  }

  // actionType定义：
  // 1：文字弹窗
  // 2：link链接
  const linkAction = (item: { actionType: number; actionExtra: string }) => {
    switch (item.actionType) {
      case 1:
        show.value = true
        message.value = item.actionExtra
        isBtnRounded.value = true
        break
      case 2:
        goLink(item.actionExtra)
        break
      default:
        break
    }
  }

</script>

<template>
  <div class="container">
    <img
      :src="BG_IMG"
      class="bg-img"
      alt=""
    >
    <div
      class="bg-rules"
      @click="goLink(RULE_LINK)"
    >活动规则</div>
    <div class="task-component">
      <div class="task-header">
        <div class="task-header-title">每周发布优质带货笔记</div>
        <div
          class="task-header-tips"
          @click="openRewardRule"
        >
          多发多得～多发笔记奖励更多
          <Icon
            :icon="Details"
            size="14px"
          />
        </div>
        <div
          class="task-header-reward"
          @click="openRewardDetail"
        >本周可获得 <span class="task-header-reward-highlight">{{ numberFormat(233333) }}</span> 流量 ></div>
      </div>
      <div class="task-group">
        <div class="task-item">
          <div class="task-item-content">每周发布第 1 篇，得600 曝光/篇</div>
          <div
            v-if="'2' === '1'"
            class="task-item-status disabled"
          >
            已完成
          </div>
          <div
            v-if="'2' === '2'"
            class="task-item-status active"
            @click="goLink(DEEPLINK_CREATE)"
          >
            去完成
          </div>
        </div>
        <div class="task-item">
          <div class="task-item-content">每周发布第 2-4 篇，得1000 曝光/篇</div>
          <div class="task-item-status disabled">
            未开始
          </div>
        </div>
        <div
          class="task-group-tips"
          @click="goLink(TASK_GROUP_LINK)"
        >
          <div class="task-group-tips-text"> 优质购物笔记发布攻略，看这里就够了～ </div>
          <div>></div>
        </div>
      </div>
    </div>
    <div class="task-component">
      <div class="task-header">
        <div class="task-header-title">{{ RIGHTS_CONFIG.title }}</div>
      </div>
      <div class="task-group-link">

        <div
          v-for="(item, index) in RIGHTS_CONFIG.rights_list"
          v-bind:key="index"
          class="task-link"
        >
          <div class="task-link-icon">
            <img :src="item.icon">
          </div>
          <div class="task-link-content">
            <div class="task-link-content-title">{{ item.title }}</div>
            <div class="task-link-content-tips">{{ item.tips }}</div>
          </div>
          <div
            class="task-link-action"
            @click="linkAction(item)"
          >{{ item.actionText }}</div>
        </div>
      </div>
    </div>
  </div>

  <Alert
    :title="title"
    :show="show"
    :message="message"
    :is-btn-rounded="isBtnRounded"
    :is-btn-mono="isMono"
    confirm-text="确认"
    message-align="left"
    :cancel-text="cancelText"
    :footer-layout="footerLayout"
    @maskClick="closeAlert"
    @confirm="closeAlert"
    @cancel="closeAlert"
  />
</template>

<style lang="stylus" scoped>
  .container{
    position: relative;
    display: flex;
    min-height: 100vh;
    gap: 16px;
    flex-direction: column;
    padding-top: 250px;
    padding-bottom: 20px;
    background: linear-gradient(180deg, #79B6EE 1.43%, #7AB6ED 3.04%, #97CAF7 46.11%, #96C7F1 100%);
  }
  .bg-img {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
  }
  .bg-rules{
    position: absolute;
    width: 68px;
    height: 26px;
    top: 188px;
    left: 307px;
    border-radius: 50px 0 0 50px;
    border: 1px solid #fff;
    background-color: rgba(255,255,255,.8);
    font-size: 12px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .task-component{
    margin: 0 8px;
    width: calc(100% - 16px);
    background-color: rgba(255, 255, 255, .3);
    backdrop-filter: blur(20px);
    border: 1px solid rgb(255,255,255);
    border-radius: 16px;
    z-index: 1;
    padding: 16px;
    .task-header {
      margin-bottom: 16px;
      position: relative;
      .task-header-title {
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        margin-bottom: 6px;
      }
      .task-header-tips {
        font-size: 12px;
        font-weight: 400;
        line-height: 16px
        color: rgba(0, 0, 0, 0.45);
        display: flex;
        align-items: center;
      }
      .task-header-reward{
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        align-items: flex-end;
        color: rgba(0,0,0,.45);
        .task-header-reward-highlight {
          font-size: 20px;
          font-weight: 500;
          color: #000;
          padding: 0 2px;
          margin-bottom: -2px;
        }
      }
    }
    .task-group {
      padding: 16px 12px;
      border-radius: 12px;
      background: #FFF;
      gap: 24px;
      display: flex;
      flex-direction: column;
      .task-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .task-item-content{
          font-size: 14px;
          font-weight: 400;
        }
        .task-item-status {
          width: 60px;
          height: 24px;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          &.active {
            background:  rgba(0, 0, 0, 0.80);
            color: #FFF;
          }
          &.disabled {
            background: #FFF;
            color: rgba(0,0,0,.8);
            opacity: 0.5;

          }
        }
      }
      .task-group-tips{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        border-radius: 8px;
        background-color: #F5F5F5;
        font-size: 12px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.62);
      }
    }
    .task-group-link{
      padding: 0 12px;
      border-radius: 12px;
      background: #FFF;
      display: flex;
      flex-direction: column;
      .task-link{
        display: flex;
        align-items: center;
        padding: 16px 0;
        border-top: 1px solid #F5F5F5;
        .task-link-icon{
          width: 36px;
          height: 36px;
          margin-right: 12px;
          .img{
            width: 100%;
            height: 100%;
          }
        }
        .task-link-content{
          flex: 1;
          display: flex;
          flex-direction: column;
          .task-link-content-title{
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
          }
          .task-link-content-tips{
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            color: rgba(0,0,0,0.45);
          }
        }
        .task-link-action {
          width: 48px;
          height: 24px;
          border-radius: 24px;
          background-color: rgba(48, 48, 52, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(0, 0, 0, 0.80);
          font-weight: 400;
          font-size: 12px;
        }
      }
    }
  }

</style>: number: { actionType: any; actionText: string; }

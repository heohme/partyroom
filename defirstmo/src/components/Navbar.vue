<template>
  <NavBar
    title="繁星计划"
    class="my-nav"
    :show-left-arrow="true"
    :fixed="true"
    backgroundColor="transparent"
  >
    <template #right>
      <div class="my-navbar-right">
        <Icon
          :icon="Share"
          size="24px"
        />
      </div>
    </template>
  </NavBar>
</template>

<script lang="ts" setup>
  import { NavBar, Icon } from '@xhs/reds-h5'
  import usePageShare, { showShareMenu } from '~/composables/useShare'
  import Share from '~/assets/svg/share.svg'

  const shareContent = {
    title: '小红书',
    desc: '标记我的生活',
    imgUrl: 'https://www.xiaohongshu.com/gw/static/public/img/mobile/common/logo-normal.png',
  }

  // 初始化默认分享
  usePageShare(shareContent)

  const handleClickBack = () => {
    window.close()
  }

  const handleClickShare = () => {
    // 点击的时候需要重新设置分享内容
    showShareMenu(shareContent)
  }
</script>

<style lang="stylus" scoped>
</style>

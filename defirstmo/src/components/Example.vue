<script lang="ts" setup>
  import { Image } from '@xhs/reds-h5'
  import { MainImgs } from '~/assets/imgs/Imgs'
</script>

<template>
  <Image
    class="banner"
    :width="375"
    :height="250"
    :aspect-ratio="750/501"
    :src="MainImgs.topBanner"
    alt="小红书"
  />
  <article class="article">
    <h2>小红书</h2>
    <p>小红书是年轻人的生活方式平台。小红书以“Inspire Lives 分享和发现世界的精彩”为使命，用户可以通过短视频、图文等形式记录生活点滴，分享生活方式，并基于兴趣形成互动。截至到2019年10月，小红书月活跃用户数已经过亿，其中70%用户是90后，并持续快速增长。</p>
  </article>
</template>

<style lang="stylus" scoped>
  .banner
    background-color #abd8ee
  .article
    padding 16px
    line-height 1.6
    h2
      font-size 1.5em
</style>

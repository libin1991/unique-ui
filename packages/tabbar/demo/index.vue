<template>
  <div class="demo-tabbar">
    <demo-block title="简单用法">
      <i-tabbar v-model="active1" :fixed="false">
        <i-tabbar-item icon="shopping-cart" label="购物车" value="/shopping-cart" dot></i-tabbar-item>
        <i-tabbar-item icon="star" label="收藏" value="/star"></i-tabbar-item>
        <i-tabbar-item icon="share-alt" label="分享" value="/share"></i-tabbar-item>
      </i-tabbar>
    </demo-block>
    <demo-block title="自定义颜色">
      <i-tabbar v-model="active2" :fixed="false" color="#666" active-color="#ff7e4a">
        <i-tabbar-item icon="shopping-cart" label="购物车" value="/shopping-cart"></i-tabbar-item>
        <i-tabbar-item icon="star" label="收藏" value="/star"></i-tabbar-item>
        <i-tabbar-item icon="share-alt" label="分享" value="/share"></i-tabbar-item>
      </i-tabbar>
    </demo-block>
    <demo-block title="高级用法">
      <i-tabbar v-model="active3" :fixed="false" color="#282212" active-color="#f7c635">
        <i-tabbar-item label="购物车" value="/shopping-cart">
          <img slot="icon" slot-scope="props" :src="props.active ? 'https://s1.ax2x.com/2018/11/02/5mFinO.png' : 'https://s1.ax2x.com/2018/11/02/5mF2Qq.png'">
        </i-tabbar-item>
        <i-tabbar-item label="收藏" value="/star">
          <img slot="icon" slot-scope="props" :src="props.active ? 'https://s1.ax2x.com/2018/11/02/5mFoZr.png' : 'https://s1.ax2x.com/2018/11/02/5mF7ce.png'">
        </i-tabbar-item>
        <i-tabbar-item label="分享" value="/share">
          <img slot="icon" slot-scope="props" :src="props.active ? 'https://s1.ax2x.com/2018/11/02/5mFRid.png' : 'https://s1.ax2x.com/2018/11/02/5mFnXR.png'">
        </i-tabbar-item>
      </i-tabbar>
    </demo-block>
    <p v-for="item in 30" style="paddingLeft: 1em" :key="item">{{ item }}</p>
    <i-tabbar v-model="active4" fixed>
        <i-tabbar-item icon="weixin" label="WeChat" value="/weixin"></i-tabbar-item>
        <i-tabbar-item icon="facebook" label="FaceBook" value="/facebook"></i-tabbar-item>
        <i-tabbar-item icon="github" label="GitHub" value="/github"></i-tabbar-item>
      </i-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active1: '/shopping-cart',
      active2: '/star',
      active3: '/share',
      active4: ''
    }
  }
}
</script>
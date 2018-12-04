<template>
  <div class="t-home">
    <ul class="t-home__con">
      <li 
        v-for="(item, index) in list" 
        :key="index"
        class="t-home__list">
        <div @click="jumpPage(item.path, item.desc)">
          <div 
            :class="`t-home__pic--${item.imgUrl}`" 
            class="t-home__pic"/>
          <h3>{{ item.name }}</h3>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import {getHomeList} from '@/services/common-service';
import ddgj from '@/assets/img/ddgx.png';
import flzx from '@/assets/img/flzx.png';
import gmtt from '@/assets/img/gmtt.png';
import htfb from '@/assets/img/htfb.png';
import gyfx from '@/assets/img/gyfx.png';
import lwbx from '@/assets/img/lwbx.png';
export default {
  data() {
    return {
      ddgj,
      flzx,
      gmtt,
      htfb,
      gyfx,
      lwbx,
      list: []
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.getListDate();
    },
    async getListDate() {
      const {data} = await getHomeList();
      this.list = data;
    },
    jumpPage(path, desc) {
      if (!path) {
        this.$toast(`${desc || '暂无内容，正在全力开发中'}`);
        return false;
      }
      window.location.href = path;
    }
  }
};
</script>

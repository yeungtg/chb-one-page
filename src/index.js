'use strict';
import Vue from 'vue';
import router from '@/config/router.config';
import LoadingConfig from '@/config/loading.config';
import component from '@/components';
import { Toast } from 'vant';

import '*/scss/index.scss';
import 'vant/lib/index.css';
window.router = router;
Vue.use(component);
Vue.use(Toast);

// router 处理
LoadingConfig(router);
new Vue({
  router
}).$mount('#app'); // $mount('#app')挂在实例

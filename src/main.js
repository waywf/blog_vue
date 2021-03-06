// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueQuillEditor from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
 
Vue.use(VueQuillEditor);
Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }else{
    document.title = '博客'
  }
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

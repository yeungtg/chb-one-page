import NProgress from "nprogress";

/**
 * @export
 * @param {any} router 路由
 * @param {any} store vuex store
 */
export default function LoadingConfig(router) {
  router.beforeEach(async (to, from, next) => {
    let { matched, fullPath, path } = to;
    NProgress.start();
    if (/^http/.test(path)) {
      let url = path.split("http")[1];
      window.location.href = `http${url}`;
    } else {
      next();
    }    
  });
  router.afterEach(to => {
    let { name } = to; // eslint-disable-line
    setTimeout(() => {
      NProgress.done();
    }, 50);
  });
}

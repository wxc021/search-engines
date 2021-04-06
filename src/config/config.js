import router from './config.router';
export default {
  disableCSSModules: true,
  treeShaking: true,
  routes: router,
  //配置浏览器最低版本，会自动引入 polyfill 和做语法转换，配置的 targets 会和合并到默认值，所以不需要重复配置
  targets: { ie: 9 },
  //禁止redirect上提
  // disableRedirectHoist: true,
  history: "browser",
  outputPath: "./dist",
  publicPath: "/",
  //是否开启 hash 文件后缀
  hash: true,
  //此处开启服务端渲染
  ssr: false,
  theme: {
    'primary-color': "#F3531E",
  },
}
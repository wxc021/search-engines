import { defineConfig } from 'umi';
import route from './src/config/config.router.js';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  outputPath: "./dist",
  publicPath: "/",
  routes: route,
  theme: {
    'primary-color': "rgba(24, 144, 255, 1)",
  },
  fastRefresh: {},
  links: [
    // href的图片你可以放在public里面，直接./图片名.png 就可以了，也可以是cdn链接
     { rel: 'icon', href: 'https://g.csdnimg.cn/static/logo/favicon32.ico' },
   ],
});

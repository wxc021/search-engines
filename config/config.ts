import { defineConfig } from 'umi';
import route from './config.router'
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: '配置管理系统',
  dva: {
    immer: true,
    hmr: false,
  },
  outputPath: "./dist",
  publicPath: "/",
  routes: route,
  history:{ type: 'browser' },
  hash:true,
  theme: {
    'primary-color': "rgba(24, 144, 255, 1)",
  },
  fastRefresh: {},
  links: [
    // href的图片你可以放在public里面，直接./图片名.png 就可以了，也可以是cdn链接
     { rel: 'icon', href: 'https://g.csdnimg.cn/static/logo/favicon32.ico' },
   ],
   proxy: {
    '/api': {
      target: 'http://118.190.96.254:3000/',
      changeOrigin: true,
      pathRewrite: { '^/': '' },
    },
  },
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  }
});

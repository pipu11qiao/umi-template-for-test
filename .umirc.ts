import { defineConfig } from '@umijs/max';
import zhCN from 'antd/locale/zh_CN';
import router, { ProjectNames } from './src/router';
import { DeleteSourceMapsPlugin } from 'webpack-delete-sourcemaps-plugin';
import { sentryWebpackPlugin } from '@sentry/webpack-plugin';

type defineConfigPramas = Parameters<typeof defineConfig>;

const PROJECT = process.env.PROJECT;
const FE_ENV = process.env.FE_ENV;
const NODE_ENV = process.env.NODE_ENV;
const LOCAL_ENV = process.env.LOCAL_ENV;
const IS_DEV = NODE_ENV === 'development';
const argv = require('minimist')(process.argv.slice(2));
const NOAUTH = process.env.NOAUTH;
const HTTPS = process.env.HTTPS || '1';

/**
 * devtool是关于sourceMap的配置
 * 开发环境使用cheap-module-source-map，生成sourceMap比较快
 * 线上生成返回false，不生成sourceMap
 * 测试环境（qa，uat，demo）devTool设置为sourceMap，拿到完整的sourceMap（试了其他的，比如cheap-module-source-map，在build的时候不生效）
 * https://webpack.docschina.org/configuration/devtool/
 */
const devtool = (() => {
  if (NODE_ENV === 'development') {
    return 'cheap-module-source-map';
  } else {
    if (FE_ENV === 'online') return false;
    return 'source-map';
  }
})();
/**
 * 处理线上打包publicPath，加cdn域名
 * 运维配置脚本 pnpm run build --cdnPath=xxx/ --ver=ver
 */
const handlePublicPath = () => {
  // let publicPath = '/';
  // if (FE_ENV === 'online') {
  //   if (argv.cdnPath) {
  //     publicPath = argv.cdnPath;
  //   }
  // }
  // return publicPath;
  return argv.cdnPath || '/';
};
/**
 * 获取数组第一项的内容
 */
type ArrayFirst<T extends any[]> = T extends [infer U, ...any[]] ? U : never;

export const baseConf: ArrayFirst<defineConfigPramas> = {
  esbuildMinifyIIFE: true,
  antd: {
    configProvider: {
      locale: zhCN,
    },
    theme: {
      components: {
        Button: {
          colorText: '#212121',
        },
      },
      token: {
        colorPrimary: '#00A85F',
        colorPrimaryTextHover: '#3EC280',
        colorPrimaryTextActive: '#00824E',
        colorLink: '#00a85f',
        colorLinkHover: '#3EC280',
        colorLinkActive: '#00824E',
        colorError: '#ff4d00',
        colorErrorHover: '#ff9152',
        colorErrorActive: '#e93a00',
        colorText: '#212121',
        colorPrimaryBgHover: '#8cdbaf',
        colorPrimaryBg: '#E0F4EB',
        colorFillSecondary: 'rgba(249, 249, 249, 100)',
        colorBorderSecondary: '#D9D9D9',
        sizeStep: 4,
        sizeUnit: 4,
        boxShadow:
          '0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05)',
        boxShadowSecondary: '0 2px 8px 0 rgba(0, 0, 0, 0.16)',
        wireframe: false,
        colorInfo: '#00a85f',
      },
    },
  },
  title: '流程中心管理后台',
  model: {},
  initialState: {},
  hash: true,
  outputPath: 'dist',
  publicPath: handlePublicPath(),
  forkTSChecker: {
    async: false,
  },
  define: {
    NOAUTH,
    FE_ENV,
    LOCAL_ENV,
    PROJECT,
    IS_DEV,
  },
  jsMinifierOptions: {
    target: ['chrome80', 'es2020'],
  },
  https:
    HTTPS === '1'
      ? {
          cert: 'dfzxvip.com+1.pem',
          key: 'dfzxvip.com+1-key.pem',
          http2: false,
        }
      : undefined,
  headScripts: [
    // iconpark 配置文件
    'https://lf1-cdn-tos.bytegoofy.com/obj/iconpark/svg_23151_530.c54c7a4264e81874e0a92fa788c5fff3.js',
  ],
  devtool,
  routes: router.filter(
    (item) => item.type === ProjectNames.DEFAULT || item.type === PROJECT,
  ),
  npmClient: 'pnpm',
  valtio: {}, //启用 valtio
  chainWebpack(memo) {
    if (
      NODE_ENV === 'production' &&
      FE_ENV === 'online' &&
      argv?.ver !== 'dev'
    ) {
      memo
        .plugin('SentryWebpackPlugin')
        .init((Plugin, args) => Plugin(...args))
        .use(sentryWebpackPlugin, [
          {
            url: 'https://sentry.eastbuy.com/',
            project: 'process-center',
            org: 'sentry',
            authToken:
              '4dbe34eb9af24493b7a1b830a79cffb920de2026f7194a89b2412eb53b31e55e',
            debug: true,
            release: {
              name: argv?.ver,
            },
          },
        ]);

      memo.plugin('DeleteSourceMapsPlugin').use(DeleteSourceMapsPlugin);
    }

    return memo;
  },
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
};

export default defineConfig(baseConf);

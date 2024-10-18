import '@umijs/max/typings';

declare global {
  const FE_ENV: string;
  const NOAUTH: string;
  const LOCAL_ENV: string; // 命令行传递的额外环境配置，也可以通过.env .env.local传递
  const PROJECT: string; // 当前属于哪个项目
  const IS_DEV: boolean; // 当前属于哪个项目
}

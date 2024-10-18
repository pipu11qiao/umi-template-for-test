// import { appId } from '@/assets/common';
import { history } from '@umijs/max';
import { ProjectNames, loop, menuList } from './router';
import { appId } from './assets/common';
import { getUserAllPerms } from './services/api/auth';
// import * as Sentry from '@sentry/react';
// import { isDev } from './services/config';
import { Provider } from './components/Provider';
import { ReactNode } from 'react';

// const dfzx_data = (window as any).dfzx_data || { env: 'local' };
// if (!isDev) {
//   Sentry.init({
//     dsn: 'https://02073bfbaf384169806dba6db5123ed0@sentry.eastbuy.com/7',
//     integrations: [new Sentry.BrowserTracing()],
//     tracesSampleRate: 1.0,
//     environment: dfzx_data.env,
//     release: dfzx_data.ver,
//   });
// }

enum PermissionType {
  URL = 1,
  按钮控件,
  数据权限,
}

// 全局信息。包含菜单list、按钮key对象buttonPermissions、 数据权限对象dataPermissions、用户拥有的路由权限
let globalInfo: Record<string, any> = {
  menuList: [],
  // TODO 客服工作台demo环境演示临时代码 demo接入权限时删除此处临时代码
  buttonPermissions: {},
  // 数据权限
  dataPermissions: {},
  // 用户路由
  userRoutes: {},
  // 所有受控页面信息
  allControlled: [],
  // 所有有权限的router信息
  allRoutes: [],
};

// 渲染前获取权限信息
export function render(oldRender: any) {
  oldRender();
  // if (PROJECT === ProjectNames.APP) {
  //   oldRender();
  //   return;
  // }
  // // 获取用户权限
  // getUserAllPerms(appId)
  //   .then((res: any) => {
  //     if (res?.length) {
  //       // 处理用户权限
  //       res.forEach((item: any) => {
  //         let currentKey = item.value;
  //         if (!currentKey) {
  //           return;
  //         }
  //         if (item.type === PermissionType.URL) {
  //           // 资源url
  //           globalInfo.userRoutes[currentKey] = true;
  //         } else if (item.type === PermissionType.按钮控件) {
  //           // 控件权限
  //           globalInfo.buttonPermissions[currentKey] = true;
  //         } else {
  //           // 数据权限
  //           globalInfo.dataPermissions[item.value] = new Function(
  //             `return ${item.dataValue}`,
  //           )();
  //         }
  //       });
  //     }
  //   })
  //   .finally(() => {
  //     oldRender();
  //   });
}

// 获取拍平后的当前全部路由数组，用于过滤后match
export function patchRoutes({ routes }: any) {
  globalInfo.allRoutes = Object.keys(routes).map((item) => routes[item]);
  // 受控页面
  globalInfo.allControlled = globalInfo.allRoutes.filter(
    (item: any) => item.noAuth || item.key,
  );
}

// 过滤有权限的数据
const filterInfo = (
  arr: any,
  key: string,
  userRoutes: Record<string, boolean>,
) => {
  return arr.filter((current: any) => {
    if (current[key]?.length) {
      current[key] = filterInfo(current[key], key, userRoutes);
      return current[key].length;
    }
    return userRoutes[current.key];
  });
};

// 处理路由信息
export function patchClientRoutes({ routes }: any) {
  // Demo暂时不校验权限
  if (NOAUTH === '1') {
    globalInfo.menuList = menuList;
    globalInfo.allControlled = globalInfo.allRoutes;
    // 按钮权限全部返回true
    globalInfo.buttonPermissions = new Proxy(
      {},
      {
        get: function () {
          return true;
        },
      },
    );
    return;
  }
  routes.forEach((element: any) => {
    if (!element.isLayout) {
      return;
    }
    let pagesRoutes = [...(element?.routes || [])];
    // 处理路由
    if (pagesRoutes && Object.keys(globalInfo.userRoutes).length) {
      pagesRoutes.forEach((item) => {
        if (item.key) {
          item.key = globalInfo.userRoutes[item.key];
        }
        if (item.routes?.length) {
          item.routes = filterInfo(
            item.routes,
            'routes',
            globalInfo.userRoutes,
          );
        }
      });
    }
    // 生成菜单
    globalInfo.menuList = loop(
      pagesRoutes.filter(
        (item) =>
          item.noAuth ||
          (Object.keys(globalInfo.userRoutes).length
            ? item.routes?.length
            : false),
      ),
    );
    // 遍历生成路有权限由信息对象
    globalInfo.allRoutes = globalInfo.allRoutes.filter(
      (item: any) => item.noAuth || globalInfo.userRoutes[item.key],
    );
  });
}

// 获取当前节点下的第一个页面
const findDeepFirstPath: (router: any) => string = (router) => {
  if (router.children?.length) {
    return findDeepFirstPath(router.children[0]);
  }
  if (router.path) {
    return router.path;
  }
  return '';
};

// 监听路由变化
export function onRouteChange({ location }: any) {
  const pathName = location.pathname;
  // 如果路径为’/‘重定向到第一个有权限的页面
  if (pathName === '/') {
    if (globalInfo.menuList.length) {
      const redirect = findDeepFirstPath(globalInfo.menuList[0]);
      history.push(redirect);
    }
    if (PROJECT === ProjectNames.APP) {
      history.push('/app/page');
    }
  }
}

// 导出全局信息
export function getInitialState() {
  return globalInfo;
}

export function rootContainer(container: ReactNode) {
  return <Provider>{container}</Provider>;
}

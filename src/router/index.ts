import { cloneDeep } from 'lodash';

export enum ProjectNames {
  APP = 'APP',
  DEFAULT = 'default',
}

const router = [
  {
    path: '/',
    hideMenu: true,
    type: ProjectNames.DEFAULT,
    noAuth: true,
  },
  {
    name: '流程',
    path: '/process',
    icon: ['flowpathDefault-9o1pp1p3', 'flowpathSelected-9o1pp1mh'],
    routes: [
      {
        name: '流程管理',
        path: '/process',
        routes: [
          {
            name: '流程管理',
            path: '/process/manage',
            component: './Process/Manage',
            hideMenu: false,
            key: 'processManage',
          },
        ],
      },
    ],
  },
  {
    path: '*',
    type: ProjectNames.DEFAULT,
    component: './NoPage',
  },
];

interface IRoute {
  name?: string;
  redirect?: string;
  path?: string;
  icon?: Array<string>;
  component?: string;
  routes?: IRoute[];
  hideMenu?: boolean;
  key?: string;
  // 不受权限控制
  noAuth?: boolean;
  layout?: boolean;
  // 是否新窗口打开
  openInNewWindow?: boolean;
  /** 是否只改变路由，不改变左侧菜单的状态 */
  changePathOnly?: boolean;
}

export const hideMenu: Array<string> = ['/app/page'];
const isDev = process.env.NODE_ENV === 'development';
if (isDev) {
  router.push({
    name: 'test',
    path: '/test',
    noAuth: true,
    routes: [
      {
        name: 'testPage',
        path: '/test',
        noAuth: true,
        routes: [
          {
            name: 'testDayjs',
            path: '/test/dayjs',
            component: './test/dayjs',
            noAuth: true,
          },
          {
            name: 'testRender',
            path: '/test/render',
            component: './test/renderTest',
            noAuth: true,
          },
          {
            name: 'validate',
            path: '/test/validate',
            component: './test/validate',
            noAuth: true,
          },
        ],
      },
    ],
  } as any);
}
interface IMENU {
  key?: string;
  label?: string;
  path?: string;
  children?: IMENU[];
}

export function loop(list: IRoute[]): IMENU[] {
  let tempList = cloneDeep(list);
  tempList = tempList.filter((item) => {
    if (item.hideMenu) {
      hideMenu.push(item.path as string);
    }
    return !!item.name;
  });
  return tempList.map((item: IRoute) => {
    return {
      key: item.path,
      path: item.path,
      label: item.name,
      icon: item?.icon,
      children: item.routes ? loop(item.routes) : undefined,
    };
  });
}

export const menuList = loop(router);

export default router;

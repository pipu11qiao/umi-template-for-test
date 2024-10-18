import { env } from '@/services/config';
import sensors from 'sa-sdk-javascript';
import { nanoidCharacter } from '@/utils/utils';
export interface IUser {
  user_name?: string;
  user_id?: string;
  department?: string;
}
export const EMPTY_VALUE = '-';

export const initSensors = (userInfo?: IUser, devEnable = false) => {
  // 如果本地访问&&开发未开启，直接返回
  // 由于env在本地访问qa时会判断为qa，做一下兼容
  if ((env === 'local' || /local./.test(window.location.host)) && !devEnable) {
    return;
  }
  sensors.init({
    server_url:
      env === 'prod'
        ? 'https://tracking.eastbuy.com/sa?project=production'
        : 'https://tracking.eastbuy.com/sa?project=default',
    heatmap: { scroll_notice_map: 'not_collect' },
    is_track_single_page: true,
    use_client_time: true,
    send_type: 'beacon',
    show_log: env === 'prod' ? false : true, // 线上不打印log
  });
  // 设置用户标识
  if (userInfo) {
    sensors.setProfile(userInfo);
    if (userInfo.user_id) {
      // sensors.login(userInfo.user_id);
      // @ts-ignore
      sensors.bind('identity_member_id', userInfo.user_id);
    }
  }
  // 为所有埋点增加系统标识
  sensors.registerPage({
    platform_type: 'dfzx_Web',
    page_id: '-',
    module_id: '-',
  });
  // 设置deviceId
  let deviceId: string = '';
  if (localStorage.getItem('device_id')) {
    deviceId = localStorage.getItem('device_id') || '';
  } else {
    deviceId = 'web_' + nanoidCharacter();
    localStorage.setItem('device_id', deviceId);
  }
  sensors.registerPage({
    device_id: deviceId,
  });
  sensors.quick('autoTrack');
};

// 点击事件
export const clickLog = (
  pageId: string,
  pageName: string,
  moduleId: string,
  moduleName: string,
  params = {},
) => {
  sensors.track('click', {
    ...params,
    page_id: pageId ?? EMPTY_VALUE,
    page_name: pageName ?? EMPTY_VALUE,
    module_id: moduleId,
    module_name: moduleName,
  });
};

export const viewLog = (pageId: string, pageName: string, params = {}) => {
  sensors.track('view', {
    ...params,
    page_id: pageId ?? EMPTY_VALUE,
    page_name: pageName ?? EMPTY_VALUE,
  });
};

export const stayLog = (
  pageId: string,
  pageName: string,
  params = {
    // start_time
    // end_time
  },
) => {
  sensors.track('stay', {
    ...params,
    page_id: pageId ?? EMPTY_VALUE,
    page_name: pageName ?? EMPTY_VALUE,
  });
};

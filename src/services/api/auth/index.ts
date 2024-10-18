import request from '@/services/axios';
import config from '@/services/config';

const { auth, od } = config;

//获取角色
export async function getAllRolesOld() {
  return request.get(auth + '/role/getAllRoles').then((res) => {
    return res
      .find((item: any) => item.appId === 'operate')
      ?.roles.map((item: any) => ({
        label: item.name,
        value: item.bizId,
      }));
  });
}
export async function getAllRoles() {
  return request.get(`${od}/flow/process/getAllRoles`).then((res) => {
    return res?.map((item: any) => ({
      label: item.name,
      value: item.bizId,
    }));
  });
}

// 获取用户权限
export async function getUserAllPerms(appId: string) {
  // if (isDev) {
  //   return [
  //     {
  //       type: 1,
  //       name: '流程管理列表页面',
  //       value: 'processManage',
  //       dataValue: '',
  //     },
  //     {
  //       type: 2,
  //       name: '创建审批流按钮',
  //       value: 'addProcess',
  //       dataValue: '',
  //     },
  //     {
  //       type: 2,
  //       name: '编辑',
  //       value: 'updateProcess',
  //       dataValue: '',
  //     },
  //     {
  //       type: 2,
  //       name: '停用',
  //       value: 'stopProcess',
  //       dataValue: '',
  //     },
  //     {
  //       type: 2,
  //       name: '启用',
  //       value: 'firingProcess',
  //       dataValue: '',
  //     },
  //     {
  //       type: 1,
  //       name: '任务单列表页面',
  //       value: 'processTasklist',
  //       dataValue: '',
  //     },
  //     {
  //       type: 2,
  //       name: '超管干预',
  //       value: 'interventionProcess',
  //       dataValue: '',
  //     },
  //   ];
  // }
  return request
    .get(`${auth}/userinfo/getUserAllPerms`, {
      params: {
        appId,
      },
    })
    .then((res) => res);
}

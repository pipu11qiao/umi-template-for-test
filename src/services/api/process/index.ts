import request from '@/services/axios';
import config, { isDev } from '@/services/config';
import {
  getFlowProcessDetailRequest,
  getFlowProcessListRequest,
  getFlowProcessListResponse,
  postFlowProcessChangeStatusRequest,
  postFlowProcessCreateAndPublishRequest,
} from './model/moBanXiangGuan';
import {
  postFlowInstanceAdminReassignRequest,
  postFlowInstanceListRequest,
  postFlowInstanceListResponse,
} from './model/liuChengCaoZuoXiangGuan';
import { GetApiResponse } from './model/tongYongJieKou';
import { ForServerDetailData } from '@/types/processServer';

const { od } = config;
export const mockProcessApi = '/api';

// 获取流程列表
export async function getProcessList(params: getFlowProcessListRequest) {
  return request
    .get<getFlowProcessListResponse>(od + '/flow/process/list', {
      params,
    })
    .then((res) => ({
      total: res.total,
      list: res.content || [],
    }));
}

// 保存并发布模版
export async function createAndPublish(
  params: postFlowProcessCreateAndPublishRequest,
) {
  return request.post(od + '/flow/process/createAndPublish', params);
}

// 保存草稿
export async function createDraft(
  params: postFlowProcessCreateAndPublishRequest,
) {
  return request.post(od + '/flow/process/createDraft', params);
}

// 获取流程详情
export async function getDetail(params: getFlowProcessDetailRequest) {
  const host = od;
  return request.get<ForServerDetailData>(host + '/flow/process/detail', {
    params,
  });
}

// 切换状态
export async function changeStatus(params: postFlowProcessChangeStatusRequest) {
  return request.post(od + '/flow/process/changeStatus', params);
}

// 获取任务单列表
export async function getInstanceList(params: postFlowInstanceListRequest) {
  return request
    .post<postFlowInstanceListResponse>(od + '/flow/instance/list', params)
    .then((res) => ({
      total: res.total,
      list: res.content || [],
    }));
}

// 超管干预
export async function adminReassign(
  params: postFlowInstanceAdminReassignRequest,
) {
  return request.post(od + '/flow/instance/adminReassign', params);
}
// 批量转交
export async function batchAdminReassign(params: {
  taskReassigns: postFlowInstanceAdminReassignRequest[];
}) {
  return request.post(od + '/flow/instance/batch-admin-reassign', params);
}
const isMock = isDev && false;
const yapiPath = 'https://yapi.eastbuy.com/mock/3115';
const curUrl = isMock ? yapiPath : od;

function getApiPathList() {
  return request
    .get<GetApiResponse>(curUrl + '/flow/process/get-api', {
      params: {
        keyword: 0,
      },
    })
    .then((res) => {
      return (res || []).map((item) => ({
        type: item.type,
        value: item.code,
        label: item.name,
        url: item.url,
      }));
    });
}
// 获取审批人接口
export async function getAllPathList() {
  return getApiPathList();
}

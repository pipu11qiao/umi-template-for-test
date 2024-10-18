/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
type FileData = File;

/**
 * 接口 [查询接口↗](http://yapi.eastbuy.com/project/3115/interface/api/209826) 的 **请求类型**
 *
 * @分类 [通用接口↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_24172)
 * @请求头 `GET /flow/common/get-api`
 * @更新时间 `2023-12-11 15:12:19`
 */
export interface GetApiRequest {
  /**
   * 类型
   * 1-审批人接口
   * 2-通过校验接口
   */
  keyword: string;
}

/**
 * 接口 [查询接口↗](http://yapi.eastbuy.com/project/3115/interface/api/209826) 的 **返回类型**
 *
 * @分类 [通用接口↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_24172)
 * @请求头 `GET /flow/common/get-api`
 * @更新时间 `2023-12-11 15:12:19`
 */
export type GetApiResponse = {
  /**
   * 编号
   */
  code: string;
  /**
   * 名字
   */
  name: string;
  /**
   * 路径
   */
  url: string;
  type: number;
}[];

/**
 * 接口 [查询可驳回节点↗](http://yapi.eastbuy.com/project/3115/interface/api/209832) 的 **请求类型**
 *
 * @分类 [通用接口↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_24172)
 * @请求头 `GET /flow/instance/get-can-back`
 * @更新时间 `2023-12-11 15:16:40`
 */
export interface GetCanBackRequest {
  /**
   * 任务id
   */
  taskId: string;
}

/**
 * 接口 [查询可驳回节点↗](http://yapi.eastbuy.com/project/3115/interface/api/209832) 的 **返回类型**
 *
 * @分类 [通用接口↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_24172)
 * @请求头 `GET /flow/instance/get-can-back`
 * @更新时间 `2023-12-11 15:16:40`
 */
export type GetCanBackResponse = {
  taskId: string;
  taskName: string;
}[];

/* prettier-ignore-end */

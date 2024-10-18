/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, FileData, prepare } from 'yapi-to-typescript'
// @ts-ignore
// prettier-ignore
import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript'
// @ts-ignore
import request from './request';
// @ts-ignore
import makeRequestHook from './makeRequestHook';

type UserRequestRestArgs = RequestFunctionRestArgs<typeof request>;

// Request: 目前 React Hooks 功能有用到
export type Request<
  TRequestData,
  TRequestConfig extends RequestConfig,
  TRequestResult,
> = (TRequestConfig['requestDataOptional'] extends true
  ? (
      requestData?: TRequestData,
      ...args: RequestFunctionRestArgs<typeof request>
    ) => TRequestResult
  : (
      requestData: TRequestData,
      ...args: RequestFunctionRestArgs<typeof request>
    ) => TRequestResult) & {
  requestConfig: TRequestConfig;
};

const mockUrl_0_0_0_1 = 'http://yapi.koolearn-inc.com/mock/2863' as any;
const devUrl_0_0_0_1 = '' as any;
const prodUrl_0_0_0_1 = '' as any;
const dataKey_0_0_0_1 = 'data' as any;

/**
 * 接口 [新增类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171864) 的 **请求类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/add`
 * @更新时间 `2023-02-14 10:12:46`
 */
export interface CategoryAddRequest {
  /**
   * 类目名称
   */
  name: string;
  /**
   * 父类目id
   */
  parentId?: string;
  /**
   * 启用状态 0 禁用 1 启用
   */
  enable: number;
  /**
   * 类目所属层级
   */
  level: number;
}

/**
 * 接口 [新增类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171864) 的 **返回类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/add`
 * @更新时间 `2023-02-14 10:12:46`
 */
export type CategoryAddResponse = null;

/**
 * 接口 [新增类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171864) 的 **请求配置的类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/add`
 * @更新时间 `2023-02-14 10:12:46`
 */
type CategoryAddRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/category/add',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [新增类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171864) 的 **请求配置**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/add`
 * @更新时间 `2023-02-14 10:12:46`
 */
const categoryAddRequestConfig: CategoryAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/category/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'categoryAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [新增类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171864) 的 **请求函数**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/add`
 * @更新时间 `2023-02-14 10:12:46`
 */
export const categoryAdd = /*#__PURE__*/ (
  requestData: CategoryAddRequest,
  ...args: UserRequestRestArgs
) => {
  return request<CategoryAddResponse>(
    prepare(categoryAddRequestConfig, requestData),
    ...args,
  );
};

categoryAdd.requestConfig = categoryAddRequestConfig;

/**
 * 接口 [新增类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171864) 的 **React Hook**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/add`
 * @更新时间 `2023-02-14 10:12:46`
 */
export const useCategoryAdd = /*#__PURE__*/ makeRequestHook<
  CategoryAddRequest,
  CategoryAddRequestConfig,
  ReturnType<typeof categoryAdd>
>(categoryAdd);

/**
 * 接口 [编辑类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171936) 的 **请求类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/edit`
 * @更新时间 `2023-02-14 15:29:06`
 */
export interface CategoryEditRequest {
  /**
   * 类目id
   */
  categoryId: string;
  /**
   * 类目名称
   */
  name?: string;
  /**
   * 父类目id
   */
  parentId?: string;
  /**
   * 是否启用 0 禁用 1启用
   */
  enable?: number;
  /**
   * 类目当前级别
   */
  level?: number;
}

/**
 * 接口 [编辑类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171936) 的 **返回类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/edit`
 * @更新时间 `2023-02-14 15:29:06`
 */
export type CategoryEditResponse = null;

/**
 * 接口 [编辑类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171936) 的 **请求配置的类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/edit`
 * @更新时间 `2023-02-14 15:29:06`
 */
type CategoryEditRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/category/edit',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [编辑类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171936) 的 **请求配置**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/edit`
 * @更新时间 `2023-02-14 15:29:06`
 */
const categoryEditRequestConfig: CategoryEditRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/category/edit',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'categoryEdit',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [编辑类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171936) 的 **请求函数**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/edit`
 * @更新时间 `2023-02-14 15:29:06`
 */
export const categoryEdit = /*#__PURE__*/ (
  requestData: CategoryEditRequest,
  ...args: UserRequestRestArgs
) => {
  return request<CategoryEditResponse>(
    prepare(categoryEditRequestConfig, requestData),
    ...args,
  );
};

categoryEdit.requestConfig = categoryEditRequestConfig;

/**
 * 接口 [编辑类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171936) 的 **React Hook**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/edit`
 * @更新时间 `2023-02-14 15:29:06`
 */
export const useCategoryEdit = /*#__PURE__*/ makeRequestHook<
  CategoryEditRequest,
  CategoryEditRequestConfig,
  ReturnType<typeof categoryEdit>
>(categoryEdit);

/**
 * 接口 [新增前台类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171945) 的 **请求类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/front/add`
 * @更新时间 `2023-02-14 15:29:41`
 */
export interface CategoryFrontAddRequest {
  /**
   * 类目名称
   */
  name: string;
  /**
   * 启用状态 0 禁用 1 启用
   */
  enable: number;
  /**
   * 父类目id
   */
  parentId: string;
  /**
   * 类目所属层级，升序
   */
  level: number;
  /**
   * 应用渠道
   */
  channelCode: number;
  /**
   * 类目图片地址
   */
  image: string;
  /**
   * 绑定后端类目id，多个id英文逗号分隔(,)
   */
  backendCategoryIds: string;
  /**
   * 前后端类目关联类型 1 按类目
   */
  type: number;
}

/**
 * 接口 [新增前台类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171945) 的 **返回类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/front/add`
 * @更新时间 `2023-02-14 15:29:41`
 */
export type CategoryFrontAddResponse = null;

/**
 * 接口 [新增前台类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171945) 的 **请求配置的类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/front/add`
 * @更新时间 `2023-02-14 15:29:41`
 */
type CategoryFrontAddRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/category/front/add',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [新增前台类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171945) 的 **请求配置**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/front/add`
 * @更新时间 `2023-02-14 15:29:41`
 */
const categoryFrontAddRequestConfig: CategoryFrontAddRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_1,
    devUrl: devUrl_0_0_0_1,
    prodUrl: prodUrl_0_0_0_1,
    path: '/category/front/add',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_1,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'categoryFrontAdd',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [新增前台类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171945) 的 **请求函数**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/front/add`
 * @更新时间 `2023-02-14 15:29:41`
 */
export const categoryFrontAdd = /*#__PURE__*/ (
  requestData: CategoryFrontAddRequest,
  ...args: UserRequestRestArgs
) => {
  return request<CategoryFrontAddResponse>(
    prepare(categoryFrontAddRequestConfig, requestData),
    ...args,
  );
};

categoryFrontAdd.requestConfig = categoryFrontAddRequestConfig;

/**
 * 接口 [新增前台类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171945) 的 **React Hook**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/front/add`
 * @更新时间 `2023-02-14 15:29:41`
 */
export const useCategoryFrontAdd = /*#__PURE__*/ makeRequestHook<
  CategoryFrontAddRequest,
  CategoryFrontAddRequestConfig,
  ReturnType<typeof categoryFrontAdd>
>(categoryFrontAdd);

/**
 * 接口 [编辑前台类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171954) 的 **请求类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/front/edit`
 * @更新时间 `2023-02-14 15:38:35`
 */
export interface CategoryFrontEditRequest {
  /**
   * 前台类目id
   */
  frontCategoryId: string;
  /**
   * 类目名称
   */
  name?: string;
  /**
   * 启用状态 0 禁用 1 启用
   */
  enable?: number;
  /**
   * 类目图片地址
   */
  image?: string;
  /**
   * 绑定后端类目id，多个id英文逗号分隔(,)
   */
  backendCategoryIds?: string;
  /**
   * 前后端类目关联类型 1 按类目
   */
  type?: number;
  /**
   * 应用渠道
   */
  channelCode?: string;
  /**
   * 父类目id
   */
  parentId?: string;
}

/**
 * 接口 [编辑前台类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171954) 的 **返回类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/front/edit`
 * @更新时间 `2023-02-14 15:38:35`
 */
export type CategoryFrontEditResponse = null;

/**
 * 接口 [编辑前台类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171954) 的 **请求配置的类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/front/edit`
 * @更新时间 `2023-02-14 15:38:35`
 */
type CategoryFrontEditRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/category/front/edit',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [编辑前台类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171954) 的 **请求配置**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/front/edit`
 * @更新时间 `2023-02-14 15:38:35`
 */
const categoryFrontEditRequestConfig: CategoryFrontEditRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_1,
    devUrl: devUrl_0_0_0_1,
    prodUrl: prodUrl_0_0_0_1,
    path: '/category/front/edit',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_1,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'categoryFrontEdit',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [编辑前台类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171954) 的 **请求函数**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/front/edit`
 * @更新时间 `2023-02-14 15:38:35`
 */
export const categoryFrontEdit = /*#__PURE__*/ (
  requestData: CategoryFrontEditRequest,
  ...args: UserRequestRestArgs
) => {
  return request<CategoryFrontEditResponse>(
    prepare(categoryFrontEditRequestConfig, requestData),
    ...args,
  );
};

categoryFrontEdit.requestConfig = categoryFrontEditRequestConfig;

/**
 * 接口 [编辑前台类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171954) 的 **React Hook**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `POST /category/front/edit`
 * @更新时间 `2023-02-14 15:38:35`
 */
export const useCategoryFrontEdit = /*#__PURE__*/ makeRequestHook<
  CategoryFrontEditRequest,
  CategoryFrontEditRequestConfig,
  ReturnType<typeof categoryFrontEdit>
>(categoryFrontEdit);

/**
 * 接口 [获取类目列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172188) 的 **请求类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/list`
 * @更新时间 `2023-02-14 16:08:43`
 */
export interface CategoryListRequest {
  /**
   * 类目id列表
   */
  categoryId?: string;
  /**
   * 启用状态 0 禁用 1 启用，默认 1
   */
  enable?: string;
  /**
   * 删除状态 0 正常 1 已删除，默认 0
   */
  deleted?: string;
  /**
   * 类目层级，默认 1 (获取该层级类目列表)，和类目id参数互斥，不能同时存在
   */
  level?: string;
  /**
   * 类目层级数量，默认1 (获取level参数下num层类目)，和level参数一起存在，和类目id参数互斥
   */
  levelNum?: string;
}

/**
 * 接口 [获取类目列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172188) 的 **返回类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/list`
 * @更新时间 `2023-02-14 16:08:43`
 */
export type CategoryListResponse = {
  /**
   * 子类目名称
   */
  name: string;
  /**
   * 子类目id
   */
  categoryId: string;
  /**
   * 是否启用 0 禁用 1 启用
   */
  enable: number;
  /**
   * 父类目id
   */
  parentId: string;
  /**
   * 父类目id链
   */
  parentIdLine: string;
  /**
   * 删除状态 0 正常 1 删除
   */
  deleted: number;
  /**
   * 创建时间
   */
  created_time: string;
  /**
   * 删除时间
   */
  updated_time: string;
  /**
   * 层级
   */
  level: number;
  /**
   * 应用渠道
   */
  channel_code: string;
  /**
   * 序列号
   */
  category_code: string;
}[];

/**
 * 接口 [获取类目列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172188) 的 **请求配置的类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/list`
 * @更新时间 `2023-02-14 16:08:43`
 */
type CategoryListRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/category/list',
    'data',
    string,
    'categoryId' | 'enable' | 'deleted' | 'level' | 'levelNum',
    false
  >
>;

/**
 * 接口 [获取类目列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172188) 的 **请求配置**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/list`
 * @更新时间 `2023-02-14 16:08:43`
 */
const categoryListRequestConfig: CategoryListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/category/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: ['categoryId', 'enable', 'deleted', 'level', 'levelNum'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'categoryList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [获取类目列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172188) 的 **请求函数**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/list`
 * @更新时间 `2023-02-14 16:08:43`
 */
export const categoryList = /*#__PURE__*/ (
  requestData: CategoryListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<CategoryListResponse>(
    prepare(categoryListRequestConfig, requestData),
    ...args,
  );
};

categoryList.requestConfig = categoryListRequestConfig;

/**
 * 接口 [获取类目列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172188) 的 **React Hook**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/list`
 * @更新时间 `2023-02-14 16:08:43`
 */
export const useCategoryList = /*#__PURE__*/ makeRequestHook<
  CategoryListRequest,
  CategoryListRequestConfig,
  ReturnType<typeof categoryList>
>(categoryList);

/**
 * 接口 [类目操作日志列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175204) 的 **请求类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/operation/list`
 * @更新时间 `2023-02-14 16:39:02`
 */
export interface CategoryOperationListRequest {
  /**
   * 上一页最大id
   */
  offsetId?: string;
  /**
   * 每页数据量
   */
  pageSize?: string;
}

/**
 * 接口 [类目操作日志列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175204) 的 **返回类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/operation/list`
 * @更新时间 `2023-02-14 16:39:02`
 */
export interface CategoryOperationListResponse {
  /**
   * 总行数
   */
  total: number;
  /**
   * 操作日志列表
   */
  list: {
    /**
     * 主键id
     */
    id: number;
    /**
     * 序列号
     */
    categoryCode: string;
    /**
     * 类目id
     */
    categoryId: string;
    /**
     * 类目级别
     */
    level: string;
    /**
     * 操作类目名称
     */
    name: string;
    /**
     * 类目当前状态 0 禁用 1启用
     */
    enable: string;
    /**
     * 操作人名字
     */
    operatorName: string;
    /**
     * 操作时间
     */
    operatorDate: string;
    /**
     * 操作类型
     */
    optType: string;
    /**
     * 操作内容
     */
    desc: string;
  }[];
}

/**
 * 接口 [类目操作日志列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175204) 的 **请求配置的类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/operation/list`
 * @更新时间 `2023-02-14 16:39:02`
 */
type CategoryOperationListRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/category/operation/list',
    'data',
    string,
    'offsetId' | 'pageSize',
    false
  >
>;

/**
 * 接口 [类目操作日志列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175204) 的 **请求配置**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/operation/list`
 * @更新时间 `2023-02-14 16:39:02`
 */
const categoryOperationListRequestConfig: CategoryOperationListRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_1,
    devUrl: devUrl_0_0_0_1,
    prodUrl: prodUrl_0_0_0_1,
    path: '/category/operation/list',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_1,
    paramNames: [],
    queryNames: ['offsetId', 'pageSize'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'categoryOperationList',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [类目操作日志列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175204) 的 **请求函数**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/operation/list`
 * @更新时间 `2023-02-14 16:39:02`
 */
export const categoryOperationList = /*#__PURE__*/ (
  requestData: CategoryOperationListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<CategoryOperationListResponse>(
    prepare(categoryOperationListRequestConfig, requestData),
    ...args,
  );
};

categoryOperationList.requestConfig = categoryOperationListRequestConfig;

/**
 * 接口 [类目操作日志列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175204) 的 **React Hook**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/operation/list`
 * @更新时间 `2023-02-14 16:39:02`
 */
export const useCategoryOperationList = /*#__PURE__*/ makeRequestHook<
  CategoryOperationListRequest,
  CategoryOperationListRequestConfig,
  ReturnType<typeof categoryOperationList>
>(categoryOperationList);

/**
 * 接口 [前台类目操作日志列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175212) 的 **请求类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/front/operation/list`
 * @更新时间 `2023-02-14 16:45:41`
 */
export interface CategoryFrontOperationListRequest {
  /**
   * 上一页最大id
   */
  offsetId: string;
  /**
   * 每页数据量
   */
  pageSize: string;
}

/**
 * 接口 [前台类目操作日志列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175212) 的 **返回类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/front/operation/list`
 * @更新时间 `2023-02-14 16:45:41`
 */
export interface CategoryFrontOperationListResponse {
  /**
   * 总行数
   */
  total?: number;
  /**
   * 操作日志列表
   */
  list?: {
    /**
     * 主键id
     */
    id: number;
    /**
     * 类目级别
     */
    level: string;
    /**
     * 类目名称
     */
    name: string;
    /**
     * 类目当前状态
     */
    enable: string;
    /**
     * 操作人名字
     */
    operatorName: string;
    /**
     * 操作日期
     */
    operatorDate: string;
    /**
     * 操作类型
     */
    optType: string;
    /**
     * 操作内容
     */
    desc: string;
    /**
     * 序列号
     */
    categoryCode: string;
    /**
     * 应用渠道
     */
    channelCode: string;
    /**
     * 绑定后端类目
     */
    backendCategory: {
      /**
       * 类目id
       */
      categoryId: string;
      /**
       * 名称
       */
      name: string;
      /**
       * 启用状态 0 禁用 1 启用
       */
      enable: number;
    }[];
  }[];
}

/**
 * 接口 [前台类目操作日志列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175212) 的 **请求配置的类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/front/operation/list`
 * @更新时间 `2023-02-14 16:45:41`
 */
type CategoryFrontOperationListRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/category/front/operation/list',
    'data',
    string,
    'offsetId' | 'pageSize',
    false
  >
>;

/**
 * 接口 [前台类目操作日志列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175212) 的 **请求配置**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/front/operation/list`
 * @更新时间 `2023-02-14 16:45:41`
 */
const categoryFrontOperationListRequestConfig: CategoryFrontOperationListRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_1,
    devUrl: devUrl_0_0_0_1,
    prodUrl: prodUrl_0_0_0_1,
    path: '/category/front/operation/list',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_1,
    paramNames: [],
    queryNames: ['offsetId', 'pageSize'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'categoryFrontOperationList',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [前台类目操作日志列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175212) 的 **请求函数**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/front/operation/list`
 * @更新时间 `2023-02-14 16:45:41`
 */
export const categoryFrontOperationList = /*#__PURE__*/ (
  requestData: CategoryFrontOperationListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<CategoryFrontOperationListResponse>(
    prepare(categoryFrontOperationListRequestConfig, requestData),
    ...args,
  );
};

categoryFrontOperationList.requestConfig =
  categoryFrontOperationListRequestConfig;

/**
 * 接口 [前台类目操作日志列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175212) 的 **React Hook**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/front/operation/list`
 * @更新时间 `2023-02-14 16:45:41`
 */
export const useCategoryFrontOperationList = /*#__PURE__*/ makeRequestHook<
  CategoryFrontOperationListRequest,
  CategoryFrontOperationListRequestConfig,
  ReturnType<typeof categoryFrontOperationList>
>(categoryFrontOperationList);

/**
 * 接口 [获取前台类目列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175351) 的 **请求类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/front/list`
 * @更新时间 `2023-02-14 16:34:37`
 */
export interface CategoryFrontListRequest {
  /**
   * 类目id
   */
  frontCategoryId?: string;
  /**
   * 启用状态 0 禁用 1 启用，默认 1
   */
  enable?: string;
  /**
   * 删除状态 0 正常 1 已删除，默认 0
   */
  deleted?: string;
  /**
   * 类目层级，默认 1 ,和类目id参数互斥，不能同时存在
   */
  level?: string;
  /**
   * 类目层级数量，默认1 (获取level参数下num层类目)，和level参数一起存在，和类目id参数互斥
   */
  levelNum: string;
}

/**
 * 接口 [获取前台类目列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175351) 的 **返回类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/front/list`
 * @更新时间 `2023-02-14 16:34:37`
 */
export type CategoryFrontListResponse = {
  name: string;
  categoryId: string;
  parentId: string;
  parentIdLine: string;
  level: number;
  image: string;
  deleted: number;
  updatedTime: string;
  operatorName: string;
  createdTime: string;
  creatorName: string;
  enable: number;
  sort: number;
  category_code: string;
  channel_code: string;
  /**
   * 关联类型 1 按类目
   */
  type: number;
  /**
   * 后台类目
   */
  categorys: {
    /**
     * 后台类目id
     */
    categoryId: string;
    /**
     * 后台类目名称
     */
    name: string;
    /**
     * 启用状态 0 禁用 1 启用
     */
    enable: number;
  }[];
}[];

/**
 * 接口 [获取前台类目列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175351) 的 **请求配置的类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/front/list`
 * @更新时间 `2023-02-14 16:34:37`
 */
type CategoryFrontListRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/category/front/list',
    'data',
    string,
    'frontCategoryId' | 'enable' | 'deleted' | 'level' | 'levelNum',
    false
  >
>;

/**
 * 接口 [获取前台类目列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175351) 的 **请求配置**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/front/list`
 * @更新时间 `2023-02-14 16:34:37`
 */
const categoryFrontListRequestConfig: CategoryFrontListRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_1,
    devUrl: devUrl_0_0_0_1,
    prodUrl: prodUrl_0_0_0_1,
    path: '/category/front/list',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_1,
    paramNames: [],
    queryNames: ['frontCategoryId', 'enable', 'deleted', 'level', 'levelNum'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'categoryFrontList',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [获取前台类目列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175351) 的 **请求函数**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/front/list`
 * @更新时间 `2023-02-14 16:34:37`
 */
export const categoryFrontList = /*#__PURE__*/ (
  requestData: CategoryFrontListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<CategoryFrontListResponse>(
    prepare(categoryFrontListRequestConfig, requestData),
    ...args,
  );
};

categoryFrontList.requestConfig = categoryFrontListRequestConfig;

/**
 * 接口 [获取前台类目列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175351) 的 **React Hook**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/front/list`
 * @更新时间 `2023-02-14 16:34:37`
 */
export const useCategoryFrontList = /*#__PURE__*/ makeRequestHook<
  CategoryFrontListRequest,
  CategoryFrontListRequestConfig,
  ReturnType<typeof categoryFrontList>
>(categoryFrontList);

/**
 * 接口 [获取类目信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175358) 的 **请求类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/info`
 * @更新时间 `2023-02-14 16:24:20`
 */
export interface CategoryInfoRequest {
  /**
   * 类目id
   */
  categoryId: string;
}

/**
 * 接口 [获取类目信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175358) 的 **返回类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/info`
 * @更新时间 `2023-02-14 16:24:20`
 */
export interface CategoryInfoResponse {
  name: string;
  categoryId: string;
  enable: string;
  parentId: string;
  parentIdLine: string;
  deleted: string;
  created_time: string;
  updated_time: string;
  level: string;
  channel_code: string;
  category_code: string;
}

/**
 * 接口 [获取类目信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175358) 的 **请求配置的类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/info`
 * @更新时间 `2023-02-14 16:24:20`
 */
type CategoryInfoRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/category/info',
    'data',
    string,
    'categoryId',
    false
  >
>;

/**
 * 接口 [获取类目信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175358) 的 **请求配置**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/info`
 * @更新时间 `2023-02-14 16:24:20`
 */
const categoryInfoRequestConfig: CategoryInfoRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/category/info',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: ['categoryId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'categoryInfo',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [获取类目信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175358) 的 **请求函数**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/info`
 * @更新时间 `2023-02-14 16:24:20`
 */
export const categoryInfo = /*#__PURE__*/ (
  requestData: CategoryInfoRequest,
  ...args: UserRequestRestArgs
) => {
  return request<CategoryInfoResponse>(
    prepare(categoryInfoRequestConfig, requestData),
    ...args,
  );
};

categoryInfo.requestConfig = categoryInfoRequestConfig;

/**
 * 接口 [获取类目信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175358) 的 **React Hook**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/info`
 * @更新时间 `2023-02-14 16:24:20`
 */
export const useCategoryInfo = /*#__PURE__*/ makeRequestHook<
  CategoryInfoRequest,
  CategoryInfoRequestConfig,
  ReturnType<typeof categoryInfo>
>(categoryInfo);

/**
 * 接口 [获取前台类目信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175365) 的 **请求类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/front/info`
 * @更新时间 `2023-02-14 16:34:18`
 */
export interface CategoryFrontInfoRequest {
  /**
   * 前台类目id
   */
  frontCategoryId: string;
}

/**
 * 接口 [获取前台类目信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175365) 的 **返回类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/front/info`
 * @更新时间 `2023-02-14 16:34:18`
 */
export interface CategoryFrontInfoResponse {
  /**
   * 名称
   */
  name: string;
  /**
   * 类目id
   */
  categoryId: string;
  /**
   * 启用状态 0 禁用 1 启用
   */
  enable: string;
  /**
   * 父级id
   */
  parentId: string;
  /**
   * 父级目录id链
   */
  parentIdLine: string;
  /**
   * 层级
   */
  level: number;
  /**
   * 类目图片
   */
  image: string;
  /**
   * 删除标记(0:正常 1:已删除)
   */
  deleted: string;
  /**
   * 修改时间
   */
  updatedTime: string;
  /**
   * 修改人
   */
  operatorName: string;
  /**
   * 创建时间
   */
  createdTime: string;
  /**
   * 创建人
   */
  creatorName: string;
  /**
   * 排序号，升序
   */
  sort: string;
  /**
   * 序列号
   */
  categoryCode: string;
  /**
   * 应用渠道
   */
  channelCode: string;
  /**
   * 关联类型 1 按类目
   */
  type: string;
  /**
   * 后台类目
   */
  categorys: {
    /**
     * 后台类目id
     */
    categoryId: string;
    /**
     * 后台类目名称
     */
    name: string;
    /**
     * 启用状态 0 禁用 1 启用
     */
    enable: number;
  }[];
}

/**
 * 接口 [获取前台类目信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175365) 的 **请求配置的类型**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/front/info`
 * @更新时间 `2023-02-14 16:34:18`
 */
type CategoryFrontInfoRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/category/front/info',
    'data',
    string,
    'frontCategoryId',
    false
  >
>;

/**
 * 接口 [获取前台类目信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175365) 的 **请求配置**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/front/info`
 * @更新时间 `2023-02-14 16:34:18`
 */
const categoryFrontInfoRequestConfig: CategoryFrontInfoRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_1,
    devUrl: devUrl_0_0_0_1,
    prodUrl: prodUrl_0_0_0_1,
    path: '/category/front/info',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_1,
    paramNames: [],
    queryNames: ['frontCategoryId'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'categoryFrontInfo',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [获取前台类目信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175365) 的 **请求函数**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/front/info`
 * @更新时间 `2023-02-14 16:34:18`
 */
export const categoryFrontInfo = /*#__PURE__*/ (
  requestData: CategoryFrontInfoRequest,
  ...args: UserRequestRestArgs
) => {
  return request<CategoryFrontInfoResponse>(
    prepare(categoryFrontInfoRequestConfig, requestData),
    ...args,
  );
};

categoryFrontInfo.requestConfig = categoryFrontInfoRequestConfig;

/**
 * 接口 [获取前台类目信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175365) 的 **React Hook**
 *
 * @分类 [类目↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19229)
 * @请求头 `GET /category/front/info`
 * @更新时间 `2023-02-14 16:34:18`
 */
export const useCategoryFrontInfo = /*#__PURE__*/ makeRequestHook<
  CategoryFrontInfoRequest,
  CategoryFrontInfoRequestConfig,
  ReturnType<typeof categoryFrontInfo>
>(categoryFrontInfo);

const mockUrl_0_0_0_2 = 'http://yapi.koolearn-inc.com/mock/2863' as any;
const devUrl_0_0_0_2 = '' as any;
const prodUrl_0_0_0_2 = '' as any;
const dataKey_0_0_0_2 = 'data' as any;

/**
 * 接口 [新增属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171972) 的 **请求类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/add`
 * @更新时间 `2023-02-14 10:32:15`
 */
export interface AttributeAddRequest {
  /**
   * 属性名称
   */
  name: string;
  /**
   * 属性展示名
   */
  showName: string;
  /**
   * 描述
   */
  desc: string;
  /**
   * 启用状态 0 禁用 1 启用
   */
  enable: number;
  /**
   * 展示方式 1 文本框 2 下拉框 3 单选框 4 复选框
   */
  showType: number;
}

/**
 * 接口 [新增属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171972) 的 **返回类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/add`
 * @更新时间 `2023-02-14 10:32:15`
 */
export type AttributeAddResponse = null;

/**
 * 接口 [新增属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171972) 的 **请求配置的类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/add`
 * @更新时间 `2023-02-14 10:32:15`
 */
type AttributeAddRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/attribute/add',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [新增属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171972) 的 **请求配置**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/add`
 * @更新时间 `2023-02-14 10:32:15`
 */
const attributeAddRequestConfig: AttributeAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/attribute/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'attributeAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [新增属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171972) 的 **请求函数**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/add`
 * @更新时间 `2023-02-14 10:32:15`
 */
export const attributeAdd = /*#__PURE__*/ (
  requestData: AttributeAddRequest,
  ...args: UserRequestRestArgs
) => {
  return request<AttributeAddResponse>(
    prepare(attributeAddRequestConfig, requestData),
    ...args,
  );
};

attributeAdd.requestConfig = attributeAddRequestConfig;

/**
 * 接口 [新增属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171972) 的 **React Hook**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/add`
 * @更新时间 `2023-02-14 10:32:15`
 */
export const useAttributeAdd = /*#__PURE__*/ makeRequestHook<
  AttributeAddRequest,
  AttributeAddRequestConfig,
  ReturnType<typeof attributeAdd>
>(attributeAdd);

/**
 * 接口 [新增属性值↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171981) 的 **请求类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/value/add`
 * @更新时间 `2023-02-14 10:38:28`
 */
export interface AttributeValueAddRequest {
  /**
   * 属性id
   */
  attributeId: string;
  /**
   * 属性值，多个属性值英文逗号分隔(,)
   */
  value: string;
  /**
   * 描述
   */
  desc: string;
  /**
   * 启用状态 0 禁用 1 启用
   */
  enable: number;
}

/**
 * 接口 [新增属性值↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171981) 的 **返回类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/value/add`
 * @更新时间 `2023-02-14 10:38:28`
 */
export type AttributeValueAddResponse = null;

/**
 * 接口 [新增属性值↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171981) 的 **请求配置的类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/value/add`
 * @更新时间 `2023-02-14 10:38:28`
 */
type AttributeValueAddRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/attribute/value/add',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [新增属性值↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171981) 的 **请求配置**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/value/add`
 * @更新时间 `2023-02-14 10:38:28`
 */
const attributeValueAddRequestConfig: AttributeValueAddRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_2,
    devUrl: devUrl_0_0_0_2,
    prodUrl: prodUrl_0_0_0_2,
    path: '/attribute/value/add',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_2,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'attributeValueAdd',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [新增属性值↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171981) 的 **请求函数**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/value/add`
 * @更新时间 `2023-02-14 10:38:28`
 */
export const attributeValueAdd = /*#__PURE__*/ (
  requestData: AttributeValueAddRequest,
  ...args: UserRequestRestArgs
) => {
  return request<AttributeValueAddResponse>(
    prepare(attributeValueAddRequestConfig, requestData),
    ...args,
  );
};

attributeValueAdd.requestConfig = attributeValueAddRequestConfig;

/**
 * 接口 [新增属性值↗](http://yapi.koolearn-inc.com/project/2863/interface/api/171981) 的 **React Hook**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/value/add`
 * @更新时间 `2023-02-14 10:38:28`
 */
export const useAttributeValueAdd = /*#__PURE__*/ makeRequestHook<
  AttributeValueAddRequest,
  AttributeValueAddRequestConfig,
  ReturnType<typeof attributeValueAdd>
>(attributeValueAdd);

/**
 * 接口 [新增属性模板↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172008) 的 **请求类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/template/add`
 * @更新时间 `2023-02-14 10:51:06`
 */
export interface AttributeTemplateAddRequest {
  /**
   * 模板名称
   */
  name: string;
  /**
   * 类目id
   */
  categoryId: string;
  /**
   * 核心属性id，多个属性id英文逗号分隔(,)
   */
  coreAttributeTypeId: string;
  /**
   * 销售属性id，多个属性id英文逗号分隔(,)
   */
  saleAttributeTypeId: string;
  /**
   * 质量属性id，多个属性id英文逗号分隔(,)
   */
  qualityAttributeTypeId: string;
  /**
   * 一般属性id，多个属性id英文逗号分隔(,)
   */
  generalAttributeTypeId: string;
  /**
   * 商详展示属性id，多个属性id英文逗号分隔(,)
   */
  goodsDetailAttributeTypeId?: string;
  /**
   * spu命名属性id，多个属性id英文逗号分隔(,)
   */
  spuAttributeTypeId?: string;
  /**
   * cspu命名属性id，多个属性id英文逗号分隔(,)
   */
  cspuAttributeTypeId?: string;
}

/**
 * 接口 [新增属性模板↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172008) 的 **返回类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/template/add`
 * @更新时间 `2023-02-14 10:51:06`
 */
export type AttributeTemplateAddResponse = null;

/**
 * 接口 [新增属性模板↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172008) 的 **请求配置的类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/template/add`
 * @更新时间 `2023-02-14 10:51:06`
 */
type AttributeTemplateAddRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/attribute/template/add',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [新增属性模板↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172008) 的 **请求配置**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/template/add`
 * @更新时间 `2023-02-14 10:51:06`
 */
const attributeTemplateAddRequestConfig: AttributeTemplateAddRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_2,
    devUrl: devUrl_0_0_0_2,
    prodUrl: prodUrl_0_0_0_2,
    path: '/attribute/template/add',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_2,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'attributeTemplateAdd',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [新增属性模板↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172008) 的 **请求函数**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/template/add`
 * @更新时间 `2023-02-14 10:51:06`
 */
export const attributeTemplateAdd = /*#__PURE__*/ (
  requestData: AttributeTemplateAddRequest,
  ...args: UserRequestRestArgs
) => {
  return request<AttributeTemplateAddResponse>(
    prepare(attributeTemplateAddRequestConfig, requestData),
    ...args,
  );
};

attributeTemplateAdd.requestConfig = attributeTemplateAddRequestConfig;

/**
 * 接口 [新增属性模板↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172008) 的 **React Hook**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/template/add`
 * @更新时间 `2023-02-14 10:51:06`
 */
export const useAttributeTemplateAdd = /*#__PURE__*/ makeRequestHook<
  AttributeTemplateAddRequest,
  AttributeTemplateAddRequestConfig,
  ReturnType<typeof attributeTemplateAdd>
>(attributeTemplateAdd);

/**
 * 接口 [编辑属性模板↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172026) 的 **请求类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/template/edit`
 * @更新时间 `2023-02-14 10:51:24`
 */
export interface AttributeTemplateEditRequest {
  /**
   * 模板id
   */
  templateId: string;
  /**
   * 模板名称
   */
  name?: string;
  /**
   * 类目id
   */
  categoryId?: string;
  /**
   * 一般属性id，多个属性id英文逗号分隔(,)
   */
  generalAttributeTypeId?: string;
  /**
   * 质量属性id，多个属性id英文逗号分隔(,)
   */
  qualityAttributeTypeId?: string;
  /**
   * 销售属性id，多个属性id英文逗号分隔(,)
   */
  saleAttributeTypeId?: string;
  /**
   * 核心属性id，多个属性id英文逗号分隔(,)
   */
  coreAttributeTypeId?: string;
  /**
   * 商详展示属性id，多个属性id英文逗号分隔(,)
   */
  goodsDetailAttributeTypeId?: string;
  /**
   * spu命名属性id，多个属性id英文逗号分隔(,)
   */
  spuAttributeTypeId?: string;
  /**
   * cspu命名属性id，多个属性id英文逗号分隔(,)
   */
  cspuAttributeTypeId?: string;
}

/**
 * 接口 [编辑属性模板↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172026) 的 **返回类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/template/edit`
 * @更新时间 `2023-02-14 10:51:24`
 */
export type AttributeTemplateEditResponse = null;

/**
 * 接口 [编辑属性模板↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172026) 的 **请求配置的类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/template/edit`
 * @更新时间 `2023-02-14 10:51:24`
 */
type AttributeTemplateEditRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/attribute/template/edit',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [编辑属性模板↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172026) 的 **请求配置**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/template/edit`
 * @更新时间 `2023-02-14 10:51:24`
 */
const attributeTemplateEditRequestConfig: AttributeTemplateEditRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_2,
    devUrl: devUrl_0_0_0_2,
    prodUrl: prodUrl_0_0_0_2,
    path: '/attribute/template/edit',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_2,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'attributeTemplateEdit',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [编辑属性模板↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172026) 的 **请求函数**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/template/edit`
 * @更新时间 `2023-02-14 10:51:24`
 */
export const attributeTemplateEdit = /*#__PURE__*/ (
  requestData: AttributeTemplateEditRequest,
  ...args: UserRequestRestArgs
) => {
  return request<AttributeTemplateEditResponse>(
    prepare(attributeTemplateEditRequestConfig, requestData),
    ...args,
  );
};

attributeTemplateEdit.requestConfig = attributeTemplateEditRequestConfig;

/**
 * 接口 [编辑属性模板↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172026) 的 **React Hook**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/template/edit`
 * @更新时间 `2023-02-14 10:51:24`
 */
export const useAttributeTemplateEdit = /*#__PURE__*/ makeRequestHook<
  AttributeTemplateEditRequest,
  AttributeTemplateEditRequestConfig,
  ReturnType<typeof attributeTemplateEdit>
>(attributeTemplateEdit);

/**
 * 接口 [编辑属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172161) 的 **请求类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/edit`
 * @更新时间 `2023-02-14 14:15:23`
 */
export interface AttributeEditRequest {
  /**
   * 属性id
   */
  attributeId: string;
  /**
   * 描述
   */
  desc?: string;
  /**
   * 属性名称
   */
  name?: string;
  /**
   * 属性展示名
   */
  showName?: string;
  /**
   * 展示方式 1 文本框 2 下拉框 3 单选框 4 复选框
   */
  showType?: number;
  /**
   * 启用状态 0 禁用 1 启用
   */
  enable?: number;
}

/**
 * 接口 [编辑属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172161) 的 **返回类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/edit`
 * @更新时间 `2023-02-14 14:15:23`
 */
export type AttributeEditResponse = null;

/**
 * 接口 [编辑属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172161) 的 **请求配置的类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/edit`
 * @更新时间 `2023-02-14 14:15:23`
 */
type AttributeEditRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/attribute/edit',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [编辑属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172161) 的 **请求配置**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/edit`
 * @更新时间 `2023-02-14 14:15:23`
 */
const attributeEditRequestConfig: AttributeEditRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/attribute/edit',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'attributeEdit',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [编辑属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172161) 的 **请求函数**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/edit`
 * @更新时间 `2023-02-14 14:15:23`
 */
export const attributeEdit = /*#__PURE__*/ (
  requestData: AttributeEditRequest,
  ...args: UserRequestRestArgs
) => {
  return request<AttributeEditResponse>(
    prepare(attributeEditRequestConfig, requestData),
    ...args,
  );
};

attributeEdit.requestConfig = attributeEditRequestConfig;

/**
 * 接口 [编辑属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172161) 的 **React Hook**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/edit`
 * @更新时间 `2023-02-14 14:15:23`
 */
export const useAttributeEdit = /*#__PURE__*/ makeRequestHook<
  AttributeEditRequest,
  AttributeEditRequestConfig,
  ReturnType<typeof attributeEdit>
>(attributeEdit);

/**
 * 接口 [编辑属性值↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172170) 的 **请求类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/value/edit`
 * @更新时间 `2023-02-14 10:39:54`
 */
export interface AttributeValueEditRequest {
  /**
   * 属性id
   */
  attributeId: string;
  /**
   * 属性值，多个属性值英文逗号分隔(,)
   */
  value?: string;
  /**
   * 描述
   */
  desc?: string;
  /**
   * 启用状态 0 禁用 1 启用
   */
  enable?: number;
}

/**
 * 接口 [编辑属性值↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172170) 的 **返回类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/value/edit`
 * @更新时间 `2023-02-14 10:39:54`
 */
export type AttributeValueEditResponse = null;

/**
 * 接口 [编辑属性值↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172170) 的 **请求配置的类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/value/edit`
 * @更新时间 `2023-02-14 10:39:54`
 */
type AttributeValueEditRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/attribute/value/edit',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [编辑属性值↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172170) 的 **请求配置**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/value/edit`
 * @更新时间 `2023-02-14 10:39:54`
 */
const attributeValueEditRequestConfig: AttributeValueEditRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_2,
    devUrl: devUrl_0_0_0_2,
    prodUrl: prodUrl_0_0_0_2,
    path: '/attribute/value/edit',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_2,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'attributeValueEdit',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [编辑属性值↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172170) 的 **请求函数**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/value/edit`
 * @更新时间 `2023-02-14 10:39:54`
 */
export const attributeValueEdit = /*#__PURE__*/ (
  requestData: AttributeValueEditRequest,
  ...args: UserRequestRestArgs
) => {
  return request<AttributeValueEditResponse>(
    prepare(attributeValueEditRequestConfig, requestData),
    ...args,
  );
};

attributeValueEdit.requestConfig = attributeValueEditRequestConfig;

/**
 * 接口 [编辑属性值↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172170) 的 **React Hook**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `POST /attribute/value/edit`
 * @更新时间 `2023-02-14 10:39:54`
 */
export const useAttributeValueEdit = /*#__PURE__*/ makeRequestHook<
  AttributeValueEditRequest,
  AttributeValueEditRequestConfig,
  ReturnType<typeof attributeValueEdit>
>(attributeValueEdit);

/**
 * 接口 [获取属性信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175316) 的 **请求类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/info`
 * @更新时间 `2023-02-14 12:08:15`
 */
export interface AttributeInfoRequest {
  /**
   * 属性id
   */
  attributeId?: string;
}

/**
 * 接口 [获取属性信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175316) 的 **返回类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/info`
 * @更新时间 `2023-02-14 12:08:15`
 */
export interface AttributeInfoResponse {
  /**
   * 属性id
   */
  attributeId: string;
  /**
   * 属性名
   */
  name: string;
  /**
   * 显示名称
   */
  showName: string;
  /**
   * 启用状态 0 禁用 1启用
   */
  enable: string;
  /**
   * 描述
   */
  desc: string;
  /**
   * 属性值
   */
  attributeValues: {
    /**
     * 属性值id
     */
    valueId: string;
    /**
     * 属性id
     */
    attributeId: string;
    /**
     * 序列号
     */
    valueCode: string;
    /**
     * 描述
     */
    desc: string;
    /**
     * 启用状态 0 禁用 1启用
     */
    enable: string;
    /**
     * 展示类型 1 文本框 2 下拉框 3 单选 4 复选框
     */
    showType: number;
  }[];
  /**
   * 序列号
   */
  attributeCode: string;
  /**
   * 创建时间
   */
  createdTime: string;
  /**
   * 创建人
   */
  creatorName: string;
  /**
   * 修改时间
   */
  updatedTime: string;
  /**
   * 修改人
   */
  operatorName: string;
}

/**
 * 接口 [获取属性信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175316) 的 **请求配置的类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/info`
 * @更新时间 `2023-02-14 12:08:15`
 */
type AttributeInfoRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/attribute/info',
    'data',
    string,
    'attributeId',
    false
  >
>;

/**
 * 接口 [获取属性信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175316) 的 **请求配置**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/info`
 * @更新时间 `2023-02-14 12:08:15`
 */
const attributeInfoRequestConfig: AttributeInfoRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/attribute/info',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: ['attributeId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'attributeInfo',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [获取属性信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175316) 的 **请求函数**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/info`
 * @更新时间 `2023-02-14 12:08:15`
 */
export const attributeInfo = /*#__PURE__*/ (
  requestData: AttributeInfoRequest,
  ...args: UserRequestRestArgs
) => {
  return request<AttributeInfoResponse>(
    prepare(attributeInfoRequestConfig, requestData),
    ...args,
  );
};

attributeInfo.requestConfig = attributeInfoRequestConfig;

/**
 * 接口 [获取属性信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175316) 的 **React Hook**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/info`
 * @更新时间 `2023-02-14 12:08:15`
 */
export const useAttributeInfo = /*#__PURE__*/ makeRequestHook<
  AttributeInfoRequest,
  AttributeInfoRequestConfig,
  ReturnType<typeof attributeInfo>
>(attributeInfo);

/**
 * 接口 [获取属性模板信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175323) 的 **请求类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/template/info`
 * @更新时间 `2023-02-14 16:01:19`
 */
export interface AttributeTemplateInfoRequest {
  /**
   * 模板id
   */
  templateId: string;
}

/**
 * 接口 [获取属性模板信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175323) 的 **返回类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/template/info`
 * @更新时间 `2023-02-14 16:01:19`
 */
export interface AttributeTemplateInfoResponse {
  /**
   * 模板id
   */
  templateId: string;
  /**
   * 关联属性信息
   */
  categoryInfo: {
    /**
     * 属性id
     */
    categoryId: string;
    /**
     * 属性名称
     */
    name: string;
    /**
     * 属性级联信息
     */
    parentJoinName: string;
  };
  /**
   * 模板名称
   */
  name: string;
  /**
   * 最后操作人
   */
  operatorName: string;
  /**
   * 最后操作时间
   */
  updatedTime: string;
  /**
   * 属性
   */
  attributes: {
    /**
     * 核心属性
     */
    coreAttributeTypeId: {
      /**
       * 属性id
       */
      attributeId: string;
      /**
       * 属性名称
       */
      name: string;
      /**
       * 启用状态 0 禁用 1 启用
       */
      enable: string;
    }[];
    /**
     * 销售属性
     */
    saleAttributeTypeId: {
      /**
       * 属性id
       */
      attributeId: string;
      /**
       * 属性名称
       */
      name: string;
      /**
       * 启用状态 0 禁用 1 启用
       */
      enable: string;
    }[];
    /**
     * 质量属性
     */
    qualityAttributeTypeId: {
      /**
       * 属性id
       */
      attributeId: string;
      /**
       * 属性名称
       */
      name: string;
      /**
       * 启用状态 0 禁用 1 启用
       */
      enable: string;
    }[];
    /**
     * 一般属性
     */
    generalAttributeTypeId: {
      /**
       * 属性id
       */
      attributeId: string;
      /**
       * 属性名称
       */
      name: string;
      /**
       * 启用状态 0 禁用 1 启用
       */
      enable: string;
    }[];
    /**
     * 商详展示属性
     */
    goodsDetailAttributeTypeId: {
      /**
       * 属性id
       */
      attributeId: string;
      /**
       * 属性名称
       */
      name: string;
      /**
       * 启用状态 0 禁用 1 启用
       */
      enable: string;
    }[];
    /**
     * spu名称构成属性
     */
    spuAttributeTypeId: {
      /**
       * 属性id
       */
      attributeId: string;
      /**
       * 属性名称
       */
      name: string;
      /**
       * 启用状态 0 禁用 1 启用
       */
      enable: string;
    }[];
    /**
     * cspu名称构成属性
     */
    cspuAttributeTypeId: {
      /**
       * 属性id
       */
      attributeId: string;
      /**
       * 属性名称
       */
      name: string;
      /**
       * 启用状态 0 禁用 1 启用
       */
      enable: string;
    }[];
  }[];
}

/**
 * 接口 [获取属性模板信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175323) 的 **请求配置的类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/template/info`
 * @更新时间 `2023-02-14 16:01:19`
 */
type AttributeTemplateInfoRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/attribute/template/info',
    'data',
    string,
    'templateId',
    false
  >
>;

/**
 * 接口 [获取属性模板信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175323) 的 **请求配置**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/template/info`
 * @更新时间 `2023-02-14 16:01:19`
 */
const attributeTemplateInfoRequestConfig: AttributeTemplateInfoRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_2,
    devUrl: devUrl_0_0_0_2,
    prodUrl: prodUrl_0_0_0_2,
    path: '/attribute/template/info',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_2,
    paramNames: [],
    queryNames: ['templateId'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'attributeTemplateInfo',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [获取属性模板信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175323) 的 **请求函数**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/template/info`
 * @更新时间 `2023-02-14 16:01:19`
 */
export const attributeTemplateInfo = /*#__PURE__*/ (
  requestData: AttributeTemplateInfoRequest,
  ...args: UserRequestRestArgs
) => {
  return request<AttributeTemplateInfoResponse>(
    prepare(attributeTemplateInfoRequestConfig, requestData),
    ...args,
  );
};

attributeTemplateInfo.requestConfig = attributeTemplateInfoRequestConfig;

/**
 * 接口 [获取属性模板信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175323) 的 **React Hook**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/template/info`
 * @更新时间 `2023-02-14 16:01:19`
 */
export const useAttributeTemplateInfo = /*#__PURE__*/ makeRequestHook<
  AttributeTemplateInfoRequest,
  AttributeTemplateInfoRequestConfig,
  ReturnType<typeof attributeTemplateInfo>
>(attributeTemplateInfo);

/**
 * 接口 [属性列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175330) 的 **请求类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/list`
 * @更新时间 `2023-02-14 16:49:16`
 */
export interface AttributeListRequest {
  /**
   * 主键id
   */
  offsetId?: string;
  /**
   * 每页数量，默认20
   */
  pageSize?: string;
}

/**
 * 接口 [属性列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175330) 的 **返回类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/list`
 * @更新时间 `2023-02-14 16:49:16`
 */
export interface AttributeListResponse {
  total?: number;
  list?: {
    /**
     * 主键id
     */
    id: string;
    /**
     * 属性id
     */
    attributeId: string;
    /**
     * 属性名
     */
    name: string;
    /**
     * 显示名称
     */
    showName: string;
    /**
     * 启用状态 0 禁用 1启用
     */
    enable: string;
    /**
     * 描述
     */
    desc: string;
    /**
     * 属性值
     */
    attributeValues: {
      /**
       * 属性值id
       */
      valueId: string;
      /**
       * 属性id
       */
      attributeId: string;
      /**
       * 序列号
       */
      valueCode: string;
      /**
       * 描述
       */
      desc: string;
      /**
       * 启用状态 0 禁用 1启用
       */
      enable: string;
      /**
       * 展示类型 1 文本框 2 下拉框 3 单选 4 复选框
       */
      showType: string;
    }[];
    /**
     * 序列号
     */
    attributeCode: string;
    /**
     * 创建时间
     */
    createdTime: string;
    /**
     * 创建人
     */
    field_72: string;
    /**
     * 修改时间
     */
    updatedTime: string;
    /**
     * 修改人
     */
    operatorName: string;
  }[];
}

/**
 * 接口 [属性列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175330) 的 **请求配置的类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/list`
 * @更新时间 `2023-02-14 16:49:16`
 */
type AttributeListRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/attribute/list',
    'data',
    string,
    'offsetId' | 'pageSize',
    false
  >
>;

/**
 * 接口 [属性列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175330) 的 **请求配置**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/list`
 * @更新时间 `2023-02-14 16:49:16`
 */
const attributeListRequestConfig: AttributeListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/attribute/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: ['offsetId', 'pageSize'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'attributeList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [属性列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175330) 的 **请求函数**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/list`
 * @更新时间 `2023-02-14 16:49:16`
 */
export const attributeList = /*#__PURE__*/ (
  requestData: AttributeListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<AttributeListResponse>(
    prepare(attributeListRequestConfig, requestData),
    ...args,
  );
};

attributeList.requestConfig = attributeListRequestConfig;

/**
 * 接口 [属性列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175330) 的 **React Hook**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/list`
 * @更新时间 `2023-02-14 16:49:16`
 */
export const useAttributeList = /*#__PURE__*/ makeRequestHook<
  AttributeListRequest,
  AttributeListRequestConfig,
  ReturnType<typeof attributeList>
>(attributeList);

/**
 * 接口 [属性模板列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175337) 的 **请求类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/template/list`
 * @更新时间 `2023-02-14 16:01:36`
 */
export interface AttributeTemplateListRequest {
  /**
   * 主键id
   */
  offsetId?: string;
  /**
   * 每页数量，默认20
   */
  pageSize?: string;
}

/**
 * 接口 [属性模板列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175337) 的 **返回类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/template/list`
 * @更新时间 `2023-02-14 16:01:36`
 */
export interface AttributeTemplateListResponse {
  total?: number;
  list?: {
    /**
     * 主键id
     */
    id: string;
    /**
     * 模板id
     */
    templateId: string;
    /**
     * 模板名称
     */
    name: string;
    /**
     * 最后操作人
     */
    showName: string;
    /**
     * 最后操作时间
     */
    enable: string;
    /**
     * 类目信息
     */
    categoryInfo: {
      /**
       * 类目id
       */
      categoryId: string;
      /**
       * 类目名称
       */
      name: string;
      /**
       * 父级级联类目名称
       */
      parentJoinName: string;
    };
    /**
     * 属性
     */
    attributes: {
      /**
       * 核心属性
       */
      coreAttributeTypeId: {
        /**
         * 属性id
         */
        attributeId: string;
        /**
         * 属性名称
         */
        name: string;
        /**
         * 启用状态 0 禁用 1 启用
         */
        enable: string;
      }[];
      /**
       * 销售属性
       */
      saleAttributeTypeId: {
        /**
         * 属性id
         */
        attributeId: string;
        /**
         * 属性名称
         */
        name: string;
        /**
         * 启用状态 0 禁用 1 启用
         */
        enable: string;
      }[];
      /**
       * 质量属性
       */
      qualityAttributeTypeId: {
        /**
         * 属性id
         */
        attributeId: string;
        /**
         * 属性名称
         */
        name: string;
        /**
         * 启用状态 0 禁用 1 启用
         */
        enable: string;
      }[];
      /**
       * 一般属性
       */
      generalAttributeTypeId: {
        /**
         * 属性id
         */
        attributeId: string;
        /**
         * 属性名称
         */
        name: string;
        /**
         * 启用状态 0 禁用 1 启用
         */
        enable: string;
      }[];
      /**
       * 商详展示属性
       */
      goodsDetailAttributeTypeId: {
        /**
         * 属性id
         */
        attributeId: string;
        /**
         * 属性名称
         */
        name: string;
        /**
         * 启用状态 0 禁用 1 启用
         */
        enable: string;
      }[];
      /**
       * spu名称构成属性
       */
      spuAttributeTypeId: {
        /**
         * 属性id
         */
        attributeId: string;
        /**
         * 属性名称
         */
        name: string;
        /**
         * 启用状态 0 禁用 1 启用
         */
        enable: string;
      }[];
      /**
       * cspu名称构成属性
       */
      cspuAttributeTypeId: {
        /**
         * 属性id
         */
        attributeId: string;
        /**
         * 属性名称
         */
        name: string;
        /**
         * 启用状态 0 禁用 1 启用
         */
        enable: string;
      }[];
    };
  }[];
}

/**
 * 接口 [属性模板列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175337) 的 **请求配置的类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/template/list`
 * @更新时间 `2023-02-14 16:01:36`
 */
type AttributeTemplateListRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/attribute/template/list',
    'data',
    string,
    'offsetId' | 'pageSize',
    false
  >
>;

/**
 * 接口 [属性模板列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175337) 的 **请求配置**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/template/list`
 * @更新时间 `2023-02-14 16:01:36`
 */
const attributeTemplateListRequestConfig: AttributeTemplateListRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_2,
    devUrl: devUrl_0_0_0_2,
    prodUrl: prodUrl_0_0_0_2,
    path: '/attribute/template/list',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_2,
    paramNames: [],
    queryNames: ['offsetId', 'pageSize'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'attributeTemplateList',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [属性模板列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175337) 的 **请求函数**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/template/list`
 * @更新时间 `2023-02-14 16:01:36`
 */
export const attributeTemplateList = /*#__PURE__*/ (
  requestData: AttributeTemplateListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<AttributeTemplateListResponse>(
    prepare(attributeTemplateListRequestConfig, requestData),
    ...args,
  );
};

attributeTemplateList.requestConfig = attributeTemplateListRequestConfig;

/**
 * 接口 [属性模板列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175337) 的 **React Hook**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/template/list`
 * @更新时间 `2023-02-14 16:01:36`
 */
export const useAttributeTemplateList = /*#__PURE__*/ makeRequestHook<
  AttributeTemplateListRequest,
  AttributeTemplateListRequestConfig,
  ReturnType<typeof attributeTemplateList>
>(attributeTemplateList);

/**
 * 接口 [属性操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175372) 的 **请求类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/operation/list`
 * @更新时间 `2023-02-14 17:20:30`
 */
export interface AttributeOperationListRequest {
  /**
   * 主键id
   */
  offsetId?: string;
  /**
   * 每页条数，默认20
   */
  pageSize?: string;
}

/**
 * 接口 [属性操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175372) 的 **返回类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/operation/list`
 * @更新时间 `2023-02-14 17:20:30`
 */
export interface AttributeOperationListResponse {
  /**
   * 总条数
   */
  total?: number;
  /**
   * 列表
   */
  list?: {
    /**
     * 属性名
     */
    name: string;
    /**
     * 主键id
     */
    id: number;
    /**
     * 属性id
     */
    attributeId: string;
    /**
     * 启用状态 0 禁用 1 启用
     */
    enable: number;
    /**
     * 属性展示名
     */
    showName: string;
    /**
     * 展示方式
     */
    showType: string;
    /**
     * 操作内容
     */
    desc: string;
    /**
     * 操作类型
     */
    optType: string;
    /**
     * 操作时间
     */
    operatorDate: string;
    /**
     * 操作人
     */
    operatorName: string;
    /**
     * 序列号
     */
    attributeCode: string;
  }[];
}

/**
 * 接口 [属性操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175372) 的 **请求配置的类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/operation/list`
 * @更新时间 `2023-02-14 17:20:30`
 */
type AttributeOperationListRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/attribute/operation/list',
    'data',
    string,
    'offsetId' | 'pageSize',
    false
  >
>;

/**
 * 接口 [属性操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175372) 的 **请求配置**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/operation/list`
 * @更新时间 `2023-02-14 17:20:30`
 */
const attributeOperationListRequestConfig: AttributeOperationListRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_2,
    devUrl: devUrl_0_0_0_2,
    prodUrl: prodUrl_0_0_0_2,
    path: '/attribute/operation/list',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_2,
    paramNames: [],
    queryNames: ['offsetId', 'pageSize'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'attributeOperationList',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [属性操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175372) 的 **请求函数**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/operation/list`
 * @更新时间 `2023-02-14 17:20:30`
 */
export const attributeOperationList = /*#__PURE__*/ (
  requestData: AttributeOperationListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<AttributeOperationListResponse>(
    prepare(attributeOperationListRequestConfig, requestData),
    ...args,
  );
};

attributeOperationList.requestConfig = attributeOperationListRequestConfig;

/**
 * 接口 [属性操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175372) 的 **React Hook**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/operation/list`
 * @更新时间 `2023-02-14 17:20:30`
 */
export const useAttributeOperationList = /*#__PURE__*/ makeRequestHook<
  AttributeOperationListRequest,
  AttributeOperationListRequestConfig,
  ReturnType<typeof attributeOperationList>
>(attributeOperationList);

/**
 * 接口 [属性值操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175379) 的 **请求类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/value/operation/list`
 * @更新时间 `2023-02-14 17:28:19`
 */
export interface AttributeValueOperationListRequest {
  /**
   * 主键id
   */
  offsetId?: string;
  /**
   * 每页条数，默认20
   */
  pageSize?: string;
}

/**
 * 接口 [属性值操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175379) 的 **返回类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/value/operation/list`
 * @更新时间 `2023-02-14 17:28:19`
 */
export interface AttributeValueOperationListResponse {
  total?: number;
  list?: {
    /**
     * 属性值名称
     */
    name: string;
    /**
     * 主键id
     */
    id: number;
    /**
     * 启用状态 0 禁用 1 启用
     */
    enable: number;
    /**
     * 操作内容
     */
    desc: string;
    /**
     * 操作类型
     */
    optType: string;
    /**
     * 操作时间
     */
    operatorDate: string;
    /**
     * 操作人
     */
    operatorName: string;
    /**
     * 属性值id
     */
    attributeValueId: string;
    /**
     * 所属属性名称
     */
    attributeName: string;
    /**
     * 序列号
     */
    attributeValueCode: string;
  }[];
}

/**
 * 接口 [属性值操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175379) 的 **请求配置的类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/value/operation/list`
 * @更新时间 `2023-02-14 17:28:19`
 */
type AttributeValueOperationListRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/attribute/value/operation/list',
    'data',
    string,
    'offsetId' | 'pageSize',
    false
  >
>;

/**
 * 接口 [属性值操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175379) 的 **请求配置**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/value/operation/list`
 * @更新时间 `2023-02-14 17:28:19`
 */
const attributeValueOperationListRequestConfig: AttributeValueOperationListRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_2,
    devUrl: devUrl_0_0_0_2,
    prodUrl: prodUrl_0_0_0_2,
    path: '/attribute/value/operation/list',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_2,
    paramNames: [],
    queryNames: ['offsetId', 'pageSize'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'attributeValueOperationList',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [属性值操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175379) 的 **请求函数**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/value/operation/list`
 * @更新时间 `2023-02-14 17:28:19`
 */
export const attributeValueOperationList = /*#__PURE__*/ (
  requestData: AttributeValueOperationListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<AttributeValueOperationListResponse>(
    prepare(attributeValueOperationListRequestConfig, requestData),
    ...args,
  );
};

attributeValueOperationList.requestConfig =
  attributeValueOperationListRequestConfig;

/**
 * 接口 [属性值操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175379) 的 **React Hook**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/value/operation/list`
 * @更新时间 `2023-02-14 17:28:19`
 */
export const useAttributeValueOperationList = /*#__PURE__*/ makeRequestHook<
  AttributeValueOperationListRequest,
  AttributeValueOperationListRequestConfig,
  ReturnType<typeof attributeValueOperationList>
>(attributeValueOperationList);

/**
 * 接口 [属性模板操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175386) 的 **请求类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/template/operation/list`
 * @更新时间 `2023-02-14 17:31:32`
 */
export interface AttributeTemplateOperationListRequest {}

/**
 * 接口 [属性模板操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175386) 的 **返回类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/template/operation/list`
 * @更新时间 `2023-02-14 17:31:32`
 */
export interface AttributeTemplateOperationListResponse {}

/**
 * 接口 [属性模板操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175386) 的 **请求配置的类型**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/template/operation/list`
 * @更新时间 `2023-02-14 17:31:32`
 */
type AttributeTemplateOperationListRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/attribute/template/operation/list',
    'data',
    string,
    string,
    true
  >
>;

/**
 * 接口 [属性模板操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175386) 的 **请求配置**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/template/operation/list`
 * @更新时间 `2023-02-14 17:31:32`
 */
const attributeTemplateOperationListRequestConfig: AttributeTemplateOperationListRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_2,
    devUrl: devUrl_0_0_0_2,
    prodUrl: prodUrl_0_0_0_2,
    path: '/attribute/template/operation/list',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_2,
    paramNames: [],
    queryNames: [],
    requestDataOptional: true,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'attributeTemplateOperationList',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [属性模板操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175386) 的 **请求函数**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/template/operation/list`
 * @更新时间 `2023-02-14 17:31:32`
 */
export const attributeTemplateOperationList = /*#__PURE__*/ (
  requestData?: AttributeTemplateOperationListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<AttributeTemplateOperationListResponse>(
    prepare(attributeTemplateOperationListRequestConfig, requestData),
    ...args,
  );
};

attributeTemplateOperationList.requestConfig =
  attributeTemplateOperationListRequestConfig;

/**
 * 接口 [属性模板操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175386) 的 **React Hook**
 *
 * @分类 [属性↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19232)
 * @请求头 `GET /attribute/template/operation/list`
 * @更新时间 `2023-02-14 17:31:32`
 */
export const useAttributeTemplateOperationList = /*#__PURE__*/ makeRequestHook<
  AttributeTemplateOperationListRequest,
  AttributeTemplateOperationListRequestConfig,
  ReturnType<typeof attributeTemplateOperationList>
>(attributeTemplateOperationList);

const mockUrl_0_0_0_3 = 'http://yapi.koolearn-inc.com/mock/2863' as any;
const devUrl_0_0_0_3 = '' as any;
const prodUrl_0_0_0_3 = '' as any;
const dataKey_0_0_0_3 = 'data' as any;

/**
 * 接口 [新增品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172035) 的 **请求类型**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `POST /brand/add`
 * @更新时间 `2023-02-14 12:00:41`
 */
export interface BrandAddRequest {
  /**
   * 品牌名称
   */
  name: string;
  /**
   * 品牌类型 1 自有 2 非自有
   */
  type: number;
  /**
   * 类目范围，类目id，多个id英文逗号分隔(,)
   */
  categoryId: string;
  /**
   * 启用状态 0 禁用 1 启用
   */
  enable: number;
}

/**
 * 接口 [新增品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172035) 的 **返回类型**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `POST /brand/add`
 * @更新时间 `2023-02-14 12:00:41`
 */
export type BrandAddResponse = null;

/**
 * 接口 [新增品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172035) 的 **请求配置的类型**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `POST /brand/add`
 * @更新时间 `2023-02-14 12:00:41`
 */
type BrandAddRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/brand/add',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [新增品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172035) 的 **请求配置**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `POST /brand/add`
 * @更新时间 `2023-02-14 12:00:41`
 */
const brandAddRequestConfig: BrandAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/brand/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'brandAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [新增品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172035) 的 **请求函数**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `POST /brand/add`
 * @更新时间 `2023-02-14 12:00:41`
 */
export const brandAdd = /*#__PURE__*/ (
  requestData: BrandAddRequest,
  ...args: UserRequestRestArgs
) => {
  return request<BrandAddResponse>(
    prepare(brandAddRequestConfig, requestData),
    ...args,
  );
};

brandAdd.requestConfig = brandAddRequestConfig;

/**
 * 接口 [新增品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/172035) 的 **React Hook**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `POST /brand/add`
 * @更新时间 `2023-02-14 12:00:41`
 */
export const useBrandAdd = /*#__PURE__*/ makeRequestHook<
  BrandAddRequest,
  BrandAddRequestConfig,
  ReturnType<typeof brandAdd>
>(brandAdd);

/**
 * 接口 [编辑品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175288) 的 **请求类型**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `POST /brand/edit`
 * @更新时间 `2023-02-14 12:01:12`
 */
export interface BrandEditRequest {
  /**
   * 品牌id
   */
  brandId: string;
  /**
   * 品牌名称
   */
  name?: string;
  /**
   * 品牌类型 1 自有 2 非自有
   */
  type?: number;
  /**
   * 类目范围，类目id，多个id英文逗号分隔(,)
   */
  categoryId?: string;
  /**
   * 启用状态 0 禁用 1 启用
   */
  enable?: number;
}

/**
 * 接口 [编辑品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175288) 的 **返回类型**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `POST /brand/edit`
 * @更新时间 `2023-02-14 12:01:12`
 */
export type BrandEditResponse = null;

/**
 * 接口 [编辑品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175288) 的 **请求配置的类型**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `POST /brand/edit`
 * @更新时间 `2023-02-14 12:01:12`
 */
type BrandEditRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/brand/edit',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [编辑品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175288) 的 **请求配置**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `POST /brand/edit`
 * @更新时间 `2023-02-14 12:01:12`
 */
const brandEditRequestConfig: BrandEditRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/brand/edit',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'brandEdit',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [编辑品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175288) 的 **请求函数**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `POST /brand/edit`
 * @更新时间 `2023-02-14 12:01:12`
 */
export const brandEdit = /*#__PURE__*/ (
  requestData: BrandEditRequest,
  ...args: UserRequestRestArgs
) => {
  return request<BrandEditResponse>(
    prepare(brandEditRequestConfig, requestData),
    ...args,
  );
};

brandEdit.requestConfig = brandEditRequestConfig;

/**
 * 接口 [编辑品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175288) 的 **React Hook**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `POST /brand/edit`
 * @更新时间 `2023-02-14 12:01:12`
 */
export const useBrandEdit = /*#__PURE__*/ makeRequestHook<
  BrandEditRequest,
  BrandEditRequestConfig,
  ReturnType<typeof brandEdit>
>(brandEdit);

/**
 * 接口 [获取品牌信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175295) 的 **请求类型**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `GET /brand/info`
 * @更新时间 `2023-02-14 12:01:25`
 */
export interface BrandInfoRequest {
  /**
   * 品牌id
   */
  brandId: string;
}

/**
 * 接口 [获取品牌信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175295) 的 **返回类型**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `GET /brand/info`
 * @更新时间 `2023-02-14 12:01:25`
 */
export interface BrandInfoResponse {}

/**
 * 接口 [获取品牌信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175295) 的 **请求配置的类型**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `GET /brand/info`
 * @更新时间 `2023-02-14 12:01:25`
 */
type BrandInfoRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/brand/info',
    'data',
    string,
    'brandId',
    false
  >
>;

/**
 * 接口 [获取品牌信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175295) 的 **请求配置**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `GET /brand/info`
 * @更新时间 `2023-02-14 12:01:25`
 */
const brandInfoRequestConfig: BrandInfoRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/brand/info',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: ['brandId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'brandInfo',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [获取品牌信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175295) 的 **请求函数**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `GET /brand/info`
 * @更新时间 `2023-02-14 12:01:25`
 */
export const brandInfo = /*#__PURE__*/ (
  requestData: BrandInfoRequest,
  ...args: UserRequestRestArgs
) => {
  return request<BrandInfoResponse>(
    prepare(brandInfoRequestConfig, requestData),
    ...args,
  );
};

brandInfo.requestConfig = brandInfoRequestConfig;

/**
 * 接口 [获取品牌信息↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175295) 的 **React Hook**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `GET /brand/info`
 * @更新时间 `2023-02-14 12:01:25`
 */
export const useBrandInfo = /*#__PURE__*/ makeRequestHook<
  BrandInfoRequest,
  BrandInfoRequestConfig,
  ReturnType<typeof brandInfo>
>(brandInfo);

/**
 * 接口 [获取品牌列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175302) 的 **请求类型**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `GET /brand/list`
 * @更新时间 `2023-02-14 14:27:05`
 */
export interface BrandListRequest {
  /**
   * 主键id
   */
  offsetId?: string;
  /**
   * 每页数量，默认20
   */
  pageSize?: string;
}

/**
 * 接口 [获取品牌列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175302) 的 **返回类型**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `GET /brand/list`
 * @更新时间 `2023-02-14 14:27:05`
 */
export interface BrandListResponse {
  /**
   * 总条数
   */
  total: number;
  list: {
    /**
     * 主键id
     */
    id: string;
    /**
     * 品牌id
     */
    brandId: string;
    /**
     * 品牌名称
     */
    name: string;
    /**
     * 品牌类型 1 自有品牌 2 其他品牌
     */
    type: string;
    /**
     * 启用状态 0 禁用 1 启用
     */
    enable: string;
    /**
     * 创建时间
     */
    createdTime: string;
    /**
     * 创建人
     */
    creatorName: string;
    /**
     * 修改时间
     */
    updatedTime: string;
    /**
     * 修改人
     */
    operatorName: string;
  }[];
}

/**
 * 接口 [获取品牌列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175302) 的 **请求配置的类型**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `GET /brand/list`
 * @更新时间 `2023-02-14 14:27:05`
 */
type BrandListRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/brand/list',
    'data',
    string,
    'offsetId' | 'pageSize',
    false
  >
>;

/**
 * 接口 [获取品牌列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175302) 的 **请求配置**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `GET /brand/list`
 * @更新时间 `2023-02-14 14:27:05`
 */
const brandListRequestConfig: BrandListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/brand/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: ['offsetId', 'pageSize'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'brandList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [获取品牌列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175302) 的 **请求函数**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `GET /brand/list`
 * @更新时间 `2023-02-14 14:27:05`
 */
export const brandList = /*#__PURE__*/ (
  requestData: BrandListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<BrandListResponse>(
    prepare(brandListRequestConfig, requestData),
    ...args,
  );
};

brandList.requestConfig = brandListRequestConfig;

/**
 * 接口 [获取品牌列表↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175302) 的 **React Hook**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `GET /brand/list`
 * @更新时间 `2023-02-14 14:27:05`
 */
export const useBrandList = /*#__PURE__*/ makeRequestHook<
  BrandListRequest,
  BrandListRequestConfig,
  ReturnType<typeof brandList>
>(brandList);

/**
 * 接口 [品牌操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175309) 的 **请求类型**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `GET /brand/operation/list`
 * @更新时间 `2023-02-14 17:04:17`
 */
export interface BrandOperationListRequest {
  /**
   * 主键id
   */
  offsetId?: string;
  /**
   * 每页数量，默认20
   */
  pageSize?: string;
}

/**
 * 接口 [品牌操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175309) 的 **返回类型**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `GET /brand/operation/list`
 * @更新时间 `2023-02-14 17:04:17`
 */
export interface BrandOperationListResponse {
  total: number;
  list: {
    /**
     * 主键id
     */
    id: number;
    /**
     * 品牌id
     */
    brandId: string;
    /**
     * 品牌名称
     */
    name: string;
    /**
     * 启用状态 0 禁用 1 启用
     */
    enable: number;
    /**
     * 品牌类型 1 自有 2其他品牌
     */
    type: string;
    /**
     * 类目列表，使用范围
     */
    categorys: string[];
    /**
     * 操作时间
     */
    operatorName: string;
    /**
     * 操作人
     */
    operatorDate: string;
    /**
     * 操作类型
     */
    optType: string;
    /**
     * 操作内容
     */
    desc: string;
  }[];
}

/**
 * 接口 [品牌操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175309) 的 **请求配置的类型**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `GET /brand/operation/list`
 * @更新时间 `2023-02-14 17:04:17`
 */
type BrandOperationListRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.koolearn-inc.com/mock/2863',
    '',
    '',
    '/brand/operation/list',
    'data',
    string,
    'offsetId' | 'pageSize',
    false
  >
>;

/**
 * 接口 [品牌操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175309) 的 **请求配置**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `GET /brand/operation/list`
 * @更新时间 `2023-02-14 17:04:17`
 */
const brandOperationListRequestConfig: BrandOperationListRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_3,
    devUrl: devUrl_0_0_0_3,
    prodUrl: prodUrl_0_0_0_3,
    path: '/brand/operation/list',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_3,
    paramNames: [],
    queryNames: ['offsetId', 'pageSize'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'brandOperationList',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [品牌操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175309) 的 **请求函数**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `GET /brand/operation/list`
 * @更新时间 `2023-02-14 17:04:17`
 */
export const brandOperationList = /*#__PURE__*/ (
  requestData: BrandOperationListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<BrandOperationListResponse>(
    prepare(brandOperationListRequestConfig, requestData),
    ...args,
  );
};

brandOperationList.requestConfig = brandOperationListRequestConfig;

/**
 * 接口 [品牌操作日志↗](http://yapi.koolearn-inc.com/project/2863/interface/api/175309) 的 **React Hook**
 *
 * @分类 [品牌↗](http://yapi.koolearn-inc.com/project/2863/interface/api/cat_19241)
 * @请求头 `GET /brand/operation/list`
 * @更新时间 `2023-02-14 17:04:17`
 */
export const useBrandOperationList = /*#__PURE__*/ makeRequestHook<
  BrandOperationListRequest,
  BrandOperationListRequestConfig,
  ReturnType<typeof brandOperationList>
>(brandOperationList);

/* prettier-ignore-end */

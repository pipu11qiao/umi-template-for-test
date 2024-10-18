/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
type FileData = File;

/**
 * 接口 [保存并发布模版↗](http://yapi.eastbuy.com/project/3115/interface/api/198705) 的 **请求类型**
 *
 * @分类 [模版相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23416)
 * * @请求头 `POST /flow/process/createAndPublish`
 * @更新时间 `2023-07-03 11:40:23`
 */
export interface postFlowProcessCreateAndPublishRequest {
  /**
   * 流程名称
   */
  processName?: string;
  /**
   * 流程业务key
   */
  processKey?: string;
  /**
   * 1 ：审批流
   */
  processType?: number;
  /**
   * 用户信息
   */
  admin?: {
    userId?: string;
    userName?: string;
  }[];
  /**
   * 流程描述
   */
  description?: string;
  /**
   * 超时时间，单位小时
   */
  timeoutHour?: number;
  /**
   * 表单参数
   */
  formDataItems?: {
    /**
     * 字段name
     */
    fieldName?: string;
    /**
     * 字段描述
     */
    fieldDesc?: string;
    /**
     * 是否必须
     */
    required?: boolean;
    /**
     * 是否在详情页展示
     */
    showInDetail?: boolean;
    /**
     * 数据值，展示文本和标题才会有这个字段，其他的类型为null
     */
    value?: number;
    /**
     * 1:文本 2:展示文本 3:枚举 4:图片 5表格 6标题 7链接
     */
    type?: number;
    /**
     * 图片类型时 用于表示最大数量
     */
    maxLen: number;
    /**
     * 表格类型的列定义
     */
    columns: {
      /**
       * 列名称
       */
      columnName: string;
      /**
       * 与上面的type一致
       */
      columnType: string;
      /**
       * 列描述
       */
      columnDesc: string;
    }[];
    /**
     * url 类型时的描述
     */
    urlDescription: string;
    /**
     * 枚举的定义数据
     */
    enumDataItems: {
      /**
       * 枚举值
       */
      enumValue: string;
      /**
       * 枚举文案
       */
      enumText: string;
    }[];
  }[];
  rootNode?: {
    /**
     * 节点ID UUID即可
     */
    id?: string;
    /**
     * 节点名称
     */
    name?: string;
    /**
     * 节点类型 //0 发起节点 1审批节点 2:条件节点 3互斥路由
     */
    type?: number;
    nodeUserList?: {
      userId: string;
      userName: string;
    }[];
    nodeAuthList?: {
      userId: string;
      userName: string;
    }[];
    conditionNodes?: {}[];
    conditions?: {
      id: string;
      name: string;
      /**
       * 多个条件之间 组合关系 现阶段默认传 1
       */
      operator: string;
    }[];
    next?: {
      id?: string;
      type?: number;
      name?: string;
      nodeUserList?: {
        userId?: string;
        userName?: string;
      }[];
      nodeAuthList?: string[];
      conditionNodes?: string[];
      conditions?: string[];
      next?: null;
    };
    editOptions: string;
    /**
     * 前端字段
     */
    selectBranch: string;
  };
  /**
   * 是否可撤销
   */
  revocable?: boolean;
}

/**
 * 接口 [保存并发布模版↗](http://yapi.eastbuy.com/project/3115/interface/api/198705) 的 **返回类型**
 *
 * @分类 [模版相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23416)
 * * @请求头 `POST /flow/process/createAndPublish`
 * @更新时间 `2023-07-03 11:40:23`
 */
export type postFlowProcessCreateAndPublishResponse = null;

/**
 * 接口 [创建草稿↗](http://yapi.eastbuy.com/project/3115/interface/api/198729) 的 **请求类型**
 *
 * @分类 [模版相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23416)
 * * @请求头 `POST /flow/process/createDraft`
 * @更新时间 `2023-06-29 00:40:20`
 */
export interface postFlowProcessCreateDraftRequest {
  /**
   * 流程名称
   */
  processName?: string;
  /**
   * 流程业务key
   */
  processKey?: string;
  /**
   * 1 ：审批流
   */
  processType?: number;
  /**
   * 用户信息
   */
  userInfos?: {
    userId?: string;
    userName?: string;
  }[];
  /**
   * 流程描述
   */
  description?: string;
  /**
   * 超时时间，单位小时
   */
  timeoutHour?: number;
  /**
   * 表单参数
   */
  formDataItems?: {
    /**
     * 字段name
     */
    fieldName?: string;
    /**
     * 字段描述
     */
    fieldDesc?: string;
    /**
     * 是否必须
     */
    required?: boolean;
    /**
     * 是否在详情页展示
     */
    showInDetail?: boolean;
    /**
     * 数据值，展示文本和标题才会有这个字段，其他的类型为null
     */
    value?: number;
    /**
     * 1:文本 2:展示文本 3:枚举 4:图片 5表格 6标题 7链接
     */
    type?: number;
  }[];
  rootNode?: {
    /**
     * 节点ID UUID即可
     */
    id?: string;
    /**
     * 节点名称
     */
    name?: string;
    /**
     * 节点类型 //0 发起节点 1审批节点 2:条件节点 3互斥路由
     */
    type?: number;
    nodeUserList?: {
      userId: string;
      userName: string;
    }[];
    nodeAuthList?: {
      userId: string;
      userName: string;
    }[];
    conditionNodes?: string[];
    conditions?: string[];
    next?: {
      id?: string;
      type?: number;
      name?: string;
      nodeUserList?: {
        userId?: string;
        userName?: string;
      }[];
      nodeAuthList?: string[];
      conditionNodes?: string[];
      conditions?: string[];
      next?: null;
    };
  };
  /**
   * 是否可撤销
   */
  revocable?: boolean;
}

/**
 * 接口 [创建草稿↗](http://yapi.eastbuy.com/project/3115/interface/api/198729) 的 **返回类型**
 *
 * @分类 [模版相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23416)
 * * @请求头 `POST /flow/process/createDraft`
 * @更新时间 `2023-06-29 00:40:20`
 */
export type postFlowProcessCreateDraftResponse = null;

/**
 * 接口 [获取草稿↗](http://yapi.eastbuy.com/project/3115/interface/api/198737) 的 **请求类型**
 *
 * @分类 [模版相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23416)
 * @请求头 `GET /flow/process/getDraft`
 * @更新时间 `2023-06-29 00:41:25`
 */
export interface GetDraftRequest {
  processKey: string;
}

/**
 * 接口 [获取草稿↗](http://yapi.eastbuy.com/project/3115/interface/api/198737) 的 **返回类型**
 *
 * @分类 [模版相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23416)
 * @请求头 `GET /flow/process/getDraft`
 * @更新时间 `2023-06-29 00:41:25`
 */
export interface GetDraftResponse {
  processName?: string;
  processKey?: string;
  processType?: number;
  userInfos?: {
    userId?: string;
    userName?: string;
  }[];
  description?: string;
  timeoutHour?: number;
  formDataItems?: {
    fieldName?: string;
    fieldDesc?: string;
    required?: boolean;
    showInDetail?: boolean;
    value?: number;
    type?: number;
  }[];
  rootNode?: {
    id?: string;
    name?: string;
    type?: number;
    nodeUserList?: string[];
    nodeAuthList?: string[];
    conditionNodes?: string[];
    conditions?: string[];
    next?: {
      id?: string;
      type?: number;
      name?: string;
      nodeUserList?: {
        userId?: string;
        userName?: string;
      }[];
      nodeAuthList?: string[];
      conditionNodes?: string[];
      conditions?: string[];
      next?: null;
    };
  };
  revocable?: boolean;
  updateVersion?: boolean;
}

/**
 * 接口 [明细↗](http://yapi.eastbuy.com/project/3115/interface/api/198745) 的 **请求类型**
 *
 * @分类 [模版相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23416)
 * * @请求头 `GET /flow/process/detail`
 * @更新时间 `2023-07-08 11:06:24`
 */
export interface getFlowProcessDetailRequest {
  processKey: string;
  /**
   * 0 :草稿
   */
  status?: number;
  version?: number;
}

/**
 * 接口 [明细↗](http://yapi.eastbuy.com/project/3115/interface/api/198745) 的 **返回类型**
 *
 * @分类 [模版相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23416)
 * * @请求头 `GET /flow/process/detail`
 * @更新时间 `2023-07-08 11:06:24`
 */
export interface getFlowProcessDetailResponse {
  bizId?: string;
  processName?: string;
  processKey?: string;
  processType?: null;
  userInfos?: {
    userId?: string;
    userName?: string;
  }[];
  description?: string;
  timeoutHour?: number;
  formDataItems?: {
    fieldName?: string;
    fieldDesc?: string;
    required?: boolean;
    showInDetail?: boolean;
    value?: number;
    type?: number;
    weight?: number;
    maxLen?: null;
    columns?: null;
    urlDescription?: null;
  }[];
  rootNode?: {
    id?: string;
    name?: string;
    type?: number;
    next?: {
      id?: string;
      name?: string;
      type?: number;
      next?: null;
      nodeUserList?: {
        userId?: string;
        userName?: string;
      }[];
      nodeAuthList?: string[];
      conditionNodes?: string[];
      conditions?: string[];
      editOptions?: null;
    };
    nodeUserList?: {
      userId?: string;
      userName?: string;
    }[];
    nodeAuthList?: string[];
    conditionNodes?: string[];
    conditions?: string[];
    editOptions?: null;
  };
  revocable?: boolean;
  updateVersion?: boolean;
}

/**
 * 接口 [列表↗](http://yapi.eastbuy.com/project/3115/interface/api/198753) 的 **请求类型**
 *
 * @分类 [模版相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23416)
 * * @请求头 `GET /flow/process/list`
 * @更新时间 `2023-07-08 11:07:05`
 */
export interface getFlowProcessListRequest {
  /**
   * 搜索关键词
   */
  keyword?: string;
  /**
   * 模版状态 / 0: 草稿1: 启用 2： 停止
   */
  status?: string;
  /**
   * 1
   */
  page: string;
  /**
   * 10
   */
  size: string;
}

/**
 * 接口 [列表↗](http://yapi.eastbuy.com/project/3115/interface/api/198753) 的 **返回类型**
 *
 * @分类 [模版相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23416)
 * * @请求头 `GET /flow/process/list`
 * @更新时间 `2023-07-08 11:07:05`
 */
export interface getFlowProcessListResponse {
  content: {
    bizId?: string;
    /**
     * 日志信息
     */
    logItems: {
      /**
       * 日志版本
       */
      processVersion: number;
      /**
       * 发布时间（毫秒值）
       */
      releaseTime: number;
      releaseUser: {
        /**
         * 创建人id
         */
        userId: string;
        /**
         * 创建人name
         */
        userName: string;
      };
    }[];
    processKey?: string;
    processName?: string;
    processVersion?: number;
    type?: number;
    // 1 启用 2停用
    status?: number;
    admins?: {
      userId?: string;
      userName?: string;
    }[];
    lastUpdateTime?: number;
    createName?: string;
    hasDraft: boolean;
  }[];
  pageTotal: number;
  current: number;
  total: number;
  hasMore: boolean;
  cursor: null;
}

/**
 * 接口 [发布历史↗](http://yapi.eastbuy.com/project/3115/interface/api/198761) 的 **请求类型**
 *
 * @分类 [模版相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23416)
 * * @请求头 `GET /flow/process/historyLog`
 * @更新时间 `2023-06-29 00:45:27`
 */
export interface getFlowProcessHistoryLogRequest {
  processKey: string;
}

/**
 * 接口 [发布历史↗](http://yapi.eastbuy.com/project/3115/interface/api/198761) 的 **返回类型**
 *
 * @分类 [模版相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23416)
 * * @请求头 `GET /flow/process/historyLog`
 * @更新时间 `2023-06-29 00:45:27`
 */
export type getFlowProcessHistoryLogResponse = {
  bizId?: string;
  processKey?: string;
  processName?: string;
  processVersion?: number;
  type?: number;
  status?: number;
  admins?: {
    userId?: string;
    userName?: string;
  }[];
  lastUpdateTime?: number;
  createName?: string;
}[];

/**
 * 接口 [修改状态↗](http://yapi.eastbuy.com/project/3115/interface/api/198769) 的 **请求类型**
 *
 * @分类 [模版相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23416)
 * * @请求头 `POST /flow/process/changeStatus`
 * @更新时间 `2023-07-05 14:09:41`
 */
export interface postFlowProcessChangeStatusRequest {
  bizId: string;
  /**
   * 1启动 2 停用
   */
  status?: number;
}

/**
 * 接口 [修改状态↗](http://yapi.eastbuy.com/project/3115/interface/api/198769) 的 **返回类型**
 *
 * @分类 [模版相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23416)
 * * @请求头 `POST /flow/process/changeStatus`
 * @更新时间 `2023-07-05 14:09:41`
 */
export interface postFlowProcessChangeStatusResponse {}

/* prettier-ignore-end */

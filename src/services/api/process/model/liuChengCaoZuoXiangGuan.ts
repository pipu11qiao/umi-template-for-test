/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
type FileData = File;

/**
 * 接口 [流程列表↗](http://yapi.eastbuy.com/project/3115/interface/api/198785) 的 **请求类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * * @请求头 `POST /flow/instance/list`
 * @更新时间 `2023-06-29 14:32:46`
 */
export interface postFlowInstanceListRequest {
  /**
   * 流程名称
   */
  processName?: string;
  /**
   * 流程key
   */
  processKey?: string;
  /**
   * 流程实例名称（PRD 任务名称）
   */
  instanceName?: string;
  /**
   * 流程实例id（PRD 任务id）
   */
  instanceId?: string;
  /**
   * 0： 进行中 1:已完成 2:取消
   */
  status?: string;
  /**
   * 发起人ID
   */
  launcherUserId?: string;
  /**
   * 流程发起时间
   */
  startLauncherTime?: string;
  /**
   * 流程结束时间
   */
  endLauncherTime?: string;
  /**
   * 完成时间开始
   */
  finishStartTime?: string;
  /**
   * 完成时间结束
   */
  finishEndTime?: string;
  page: number;
  size: number;
}

/**
 * 接口 [流程列表↗](http://yapi.eastbuy.com/project/3115/interface/api/198785) 的 **返回类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * * @请求头 `POST /flow/instance/list`
 * @更新时间 `2023-06-29 14:32:46`
 */
export interface postFlowInstanceListResponse {
  content: {
    /**
     * 流程名
     */
    processName: string;
    /**
     * 流程key
     */
    processKey: string;
    /**
     * 流程实例名称
     */
    instanceName: string;
    /**
     * 流程实例id
     */
    instanceId: string;
    /**
     * 版本
     */
    version: string;
    /**
     * 状态 与入参一致
     */
    status: string;
    /**
     * 发起人
     */
    launcherInfo: {
      /**
       * 用户id
       */
      userId: string;
      /**
       * 用户名称
       */
      userName: string;
    };
    /**
     * 发起时间（时间戳）
     */
    launcherTime: number;
    /**
     * 完成时间（时间戳）
     */
    finishTime: number;
    /**
     * 当前审批人
     */
    currentApprove: {
      userId: string;
      userName: string;
    };
    taskName: string;
    /**
     * 当前任务信息
     */
    curTaskList?: {
      /**
       * 任务id
       */
      taskId?: string;
      /**
       * 节点id
       */
      taskDefId?: string;
      /**
       * 任务名
       */
      taskName?: string;
      /**
       * 审批类型
       */
      approveType?: number;
      /**
       * 审批人或候选人
       */
      taskApproveList?: {
        userId?: string;
        userName?: string;
        source?: number;
      }[];
    }[];
  }[];
  pageTotal: number;
  current: number;
  total: number;
  hasMore?: boolean;
  cursor?: null;
}

/**
 * 接口 [流程管理员转交↗](http://yapi.eastbuy.com/project/3115/interface/api/198801) 的 **请求类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * * @请求头 `POST /flow/instance/adminReassign`
 * @更新时间 `2023-06-29 14:57:21`
 */
export interface postFlowInstanceAdminReassignRequest {
  /**
   * 转交人
   */
  assignee: {
    userId: string;
    userName: string;
  };
  /**
   * 流程实例id
   */
  processInstanceId?: string;
  /**
   * 任务节点实例id
   */
  taskId?: string;
  /**
   * 转交评论
   */
  comment: string;
  /**
   * 转交人
   */
  sourceUser?: {
    userId: string;
    userName: string;
    source: number;
  };
}

/**
 * 接口 [流程管理员转交↗](http://yapi.eastbuy.com/project/3115/interface/api/198801) 的 **返回类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * * @请求头 `POST /flow/instance/adminReassign`
 * @更新时间 `2023-06-29 14:57:21`
 */
export interface postFlowInstanceAdminReassignResponse {}

/**
 * 接口 [流程通过↗](http://yapi.eastbuy.com/project/3115/interface/api/198809) 的 **请求类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * * @请求头 `POST /flow/instance/pass`
 * @更新时间 `2023-06-29 14:58:10`
 */
export interface postFlowInstancePassRequest {
  /**
   * 流程实例id
   */
  processInstanceId: string;
  /**
   * 流程任务id
   */
  taskId: string;
  /**
   * 评论id
   */
  comment: string;
  instanceId: string;
}

/**
 * 接口 [流程通过↗](http://yapi.eastbuy.com/project/3115/interface/api/198809) 的 **返回类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * * @请求头 `POST /flow/instance/pass`
 * @更新时间 `2023-06-29 14:58:10`
 */
export interface postFlowInstancePassResponse {}

/**
 * 接口 [流程指派↗](http://yapi.eastbuy.com/project/3115/interface/api/198817) 的 **请求类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * * @请求头 `POST /flow/instance/reAssign`
 * @更新时间 `2023-06-30 17:57:52`
 */
export interface postFlowInstanceReAssignRequest {
  /**
   * 流程实例id
   */
  processInstanceId: string;
  /**
   * 流程任务id
   */
  taskId: string;
  /**
   * 评论id
   */
  comment: string;
  /**
   * 指派人id
   */
  assignee: string;
}

/**
 * 接口 [流程指派↗](http://yapi.eastbuy.com/project/3115/interface/api/198817) 的 **返回类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * * @请求头 `POST /flow/instance/reAssign`
 * @更新时间 `2023-06-30 17:57:52`
 */
export interface postFlowInstanceReAssignResponse {}

/**
 * 接口 [流程拒绝↗](http://yapi.eastbuy.com/project/3115/interface/api/198825) 的 **请求类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * * @请求头 `POST /flow/instance/refuse`
 * @更新时间 `2023-06-29 14:59:08`
 */
export interface postFlowInstanceRefuseRequest {
  /**
   * 流程实例id
   */
  processInstanceId: string;
  /**
   * 流程任务id
   */
  taskId: string;
  /**
   * 评论id
   */
  comment: string;
  instanceId: string;
}

/**
 * 接口 [流程拒绝↗](http://yapi.eastbuy.com/project/3115/interface/api/198825) 的 **返回类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * * @请求头 `POST /flow/instance/refuse`
 * @更新时间 `2023-06-29 14:59:08`
 */
export interface postFlowInstanceRefuseResponse {}

/**
 * 接口 [流程认领↗](http://yapi.eastbuy.com/project/3115/interface/api/198833) 的 **请求类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * * @请求头 `POST /flow/instance/claim`
 * @更新时间 `2023-06-30 17:57:12`
 */
export interface postFlowInstanceClaimRequest {
  /**
   * 流程实例id
   */
  processInstanceId: string;
  /**
   * 流程任务id
   */
  taskId: string;
}

/**
 * 接口 [流程认领↗](http://yapi.eastbuy.com/project/3115/interface/api/198833) 的 **返回类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * * @请求头 `POST /flow/instance/claim`
 * @更新时间 `2023-06-30 17:57:12`
 */
export interface postFlowInstanceClaimResponse {}

/**
 * 接口 [流程取消↗](http://yapi.eastbuy.com/project/3115/interface/api/198841) 的 **请求类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * * @请求头 `POST /flow/instance/cancel`
 * @更新时间 `2023-06-30 17:55:11`
 */
export interface postFlowInstanceCancelRequest {
  /**
   * 流程实例id
   */
  processInstanceId: string;
  /**
   * 流程任务id
   */
  taskId: string;
}

/**
 * 接口 [流程取消↗](http://yapi.eastbuy.com/project/3115/interface/api/198841) 的 **返回类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * * @请求头 `POST /flow/instance/cancel`
 * @更新时间 `2023-06-30 17:55:11`
 */
export interface postFlowInstanceCancelResponse {}

/**
 * 接口 [获取我的待处理↗](http://yapi.eastbuy.com/project/3115/interface/api/198849) 的 **请求类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * @请求头 `GET /flow/instance/getMyWaitProcess`
 * @更新时间 `2023-07-07 16:08:12`
 */
export interface GetMyWaitProcessRequest {
  page: string;
  size: string;
  keyword?: string;
}

/**
 * 接口 [获取我的待处理↗](http://yapi.eastbuy.com/project/3115/interface/api/198849) 的 **返回类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * @请求头 `GET /flow/instance/getMyWaitProcess`
 * @更新时间 `2023-07-07 16:08:12`
 */
export interface GetMyWaitProcessResponse {
  content?: {
    /**
     * 流程名称
     */
    processName?:
      | '打撒福建省来得及地方设答案 '
      | '多少分的'
      | '打扫房间撒砥砺奋进临时登记阿发拉卡萨打击飞拉达撒激发拉萨登记拉萨激发手打飞机'
      | '收到了块腹肌阿斯兰戴假发拉萨的飞机撒打发'
      | '发大水啦会计分录撒大家反垃圾手打拉法基老大撒';
    /**
     * 流程任务名称
     */
    processInstanceName?: string;
    processInstanceId?: string;
    taskId?: string;
    userInfo?: {
      userId?: string;
      userName?: string;
      userImg?: string;
    };
    /**
     * 时间戳
     */
    launcherTime?: string;
    /**
     * 剩余时间(时间戳) 小于等于0超时
     */
    remainTime?: 259320000 | 496800000 | 12000000 | 1980000 | 1272000 | 0;
  }[];
  pageTotal?: number;
  current: number;
  total: number;
  hasMore?: boolean;
  cursor?: null;
}

/**
 * 接口 [获取我发起的↗](http://yapi.eastbuy.com/project/3115/interface/api/198873) 的 **请求类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * @请求头 `GET /flow/instance/getMyLaunchProcess`
 * @更新时间 `2023-07-07 14:52:43`
 */
export interface GetMyLaunchProcessRequest {
  page: string;
  size: string;
  keyword?: string;
}

/**
 * 接口 [获取我发起的↗](http://yapi.eastbuy.com/project/3115/interface/api/198873) 的 **返回类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * @请求头 `GET /flow/instance/getMyLaunchProcess`
 * @更新时间 `2023-07-07 14:52:43`
 */
export interface GetMyLaunchProcessResponse {
  content: {
    processName?: string;
    /**
     * 发起时间 时间戳
     */
    launcherTime?: number;
    /**
     * 0 处理中 1完成 2 取消 3 拒绝导致完成
     */
    status?: 0 | 1 | 2 | 3;
    processInstanceName?: string;
    processInstanceId?: string;
    taskId?: string;
    userInfo?: {
      userId?: string;
      userImg?: string;
      userName?: string;
    };
    curTaskInfo?: {
      taskName?: string;
      taskApproveList?: {
        userId?: string;
        userName?: string;
        userImg?: string;
      }[];
    };
    /**
     * 剩余时间
     */
    remainTime?: number;
    /**
     * 完成时间
     */
    finishTime: number;
  }[];
  pageTotal?: number;
  current?: number;
  total: number;
  hasMore?: boolean;
  cursor?: null;
}

/**
 * 接口 [获取我处理的↗](http://yapi.eastbuy.com/project/3115/interface/api/198881) 的 **请求类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * @请求头 `GET /flow/instance/getMyHandleProcess`
 * @更新时间 `2023-07-07 14:52:20`
 */
export interface GetMyHandleProcessRequest {
  page: string;
  size: string;
  keyword?: string;
}

/**
 * 接口 [获取我处理的↗](http://yapi.eastbuy.com/project/3115/interface/api/198881) 的 **返回类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * @请求头 `GET /flow/instance/getMyHandleProcess`
 * @更新时间 `2023-07-07 14:52:20`
 */
export interface GetMyHandleProcessResponse {
  content?: {
    processName?: string;
    processInstanceName?: null;
    processInstanceId?: string;
    userInfo?: {
      userId?: string;
      userImg?: string;
      userName?: string;
    };
    remainTime?: number;
    /**
     * 0 处理中 1完成 2 取消 3 拒绝导致完成
     */
    status?: 0 | 1 | 2 | 3;
    launcherTime: number;
  }[];
  pageTotal?: number;
  current: number;
  total: number;
  hasMore?: boolean;
  cursor?: null;
}

/**
 * 接口 [详情接口↗](http://yapi.eastbuy.com/project/3115/interface/api/199201) 的 **请求类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * * @请求头 `GET /flow/instance/detail`
 * @更新时间 `2023-07-08 10:50:28`
 */
export interface getFlowInstanceDetailRequest {
  processInstanceId: string;
}

/**
 * 接口 [详情接口↗](http://yapi.eastbuy.com/project/3115/interface/api/199201) 的 **返回类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * * @请求头 `GET /flow/instance/detail`
 * @更新时间 `2023-07-08 10:50:28`
 */
export interface getFlowInstanceDetailResponse {
  /**
   * 流程名称
   */
  processName?: string;
  /**
   * 流程实例名称
   */
  processInstanceName?: string;
  /**
   * 流程实例id
   */
  processInstanceId?: string;
  /**
   * 发起人信息
   */
  launcherUserInfo?: {
    userId?: string;
    userName?: string;
  };
  /**
   * 发起时间（时间戳）
   */
  launcherTime?: number;
  /**
   * 流程负责人
   */
  processAdmin?: {
    userId?: string;
    userName?: string;
  }[];
  /**
   * 当前任务节点名称
   */
  curTaskName?: string;
  /**
   * 流程状态 0 进行中 1:已完成 2:已取消 3:拒绝完成
   */
  status?: number;
  /**
   * 剩余时间 毫秒值
   */
  remainMills?: 259320000 | 496800000 | 12000000 | 1980000 | 1272000 | 0;
  /**
   * 表单参数
   */
  displayFormItems?: {
    id?: string;
    /**
     * 表单项变量名称
     */
    fieldName: string;
    /**
     * 表单项描述
     */
    fieldDesc: string | null;
    /**
     * 是否必须（前端不用）
     */
    required: boolean | null;
    /**
     * 是否展示在详情（前端不用）
     */
    showInDetail: boolean | null;
    /**
     * 表单项实际值
     */
    value: unknown[][] | string;
    /**
     * 1:文本 2:展示文本 3:枚举 4:图片 5表格 6标题 7链接
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7;
    /**
     * 表单项为 table 时，列名集合
     */
    columns: {
      /**
       * 列名称
       */
      columnName: string;
      /**
       * 与上面的type一致
       */
      columnType: '1' | '2' | '3' | '4' | '5' | '6' | '7';
      /**
       * 列描述
       */
      columnDesc: string;
    }[];
    /**
     * 表单项为 url 时，url描述
     */
    urlDescription: null;
    /**
     * 表单项为 枚举 时，枚举集合
     */
    enumDataItems: {
      enumValue: string;
      enumText: string;
    }[];
  }[];
  /**
   * 完成时间
   */
  finishTime?: null;
  /**
   * 流程图
   */
  processElements?: {
    /**
     * 任务定义id
     */
    taskDefId?: string;
    /**
     * 任务运行id
     */
    taskId?: string;
    /**
     * 任务名称
     */
    name?: string;
    /**
     * 任务类型 0:发起节点 1:审批节点
     */
    type?: number;
    /**
     * 下一个节点
     */
    nextNodes?: {
      taskDefId?: string;
      /**
       * 任务Id
       */
      taskId?: string;
      /**
       * 节点名称
       */
      name?: string;
      /**
       * 节点类型
       */
      type?: number;
      /**
       * 0 处理中 1完成 2 取消 3 拒绝导致完成
       */
      status: number;
      nextNodes?: string[];
      users?: {
        userId?: string;
        userName?: string;
      }[];
      startTime?: number;
      endTime?: null;
      actionLogs?: {}[];
      /**
       * json字符串
       */
      comments?: string[];
      editOptions?: string;
    }[];
    /**
     * 审批人信息
     */
    users?: string[];
    /**
     * 任务开始时间
     */
    startTime?: number;
    /**
     * 任务结束时间
     */
    endTime?: number;
    /**
     * 任务操作日志（json数组）
     */
    actionLogs?: {
      operators: {
        userId: string;
        userName: string;
      }[];
      /**
       * 1:通过 2:转交 3:拒绝 4:领取
       */
      type: string;
      /**
       * 发生时间（时间戳）
       */
      occurTime: number;
    }[];
    /**
     * 任务操作备注
     */
    comments?: string[];
  };
}

/**
 * 接口 [流程任务审批可操作状态↗](http://yapi.eastbuy.com/project/3115/interface/api/199209) 的 **请求类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * * @请求头 `GET /flow/instance/queryAvailableOperation`
 * @更新时间 `2023-07-07 17:47:48`
 */
export interface getFlowInstanceQueryAvailableOperationRequest {
  processInstanceId: string;
  taskId: string;
}

/**
 * 接口 [流程任务审批可操作状态↗](http://yapi.eastbuy.com/project/3115/interface/api/199209) 的 **返回类型**
 *
 * @分类 [流程操作相关↗](http://yapi.eastbuy.com/project/3115/interface/api/cat_23418)
 * * @请求头 `GET /flow/instance/queryAvailableOperation`
 * @更新时间 `2023-07-07 17:47:48`
 */
export interface getFlowInstanceQueryAvailableOperationResponse {
  /**
   * 当前节点定义的审批样式，json
   */
  definedOptionForm: string;
  /**
   * 可执行的操作
   */
  operations: number[];
}

/* prettier-ignore-end */

import type {
  ForServerFormItemEnumData,
  ForServerFormItemColumnsData,
  ForServerNodeUserData,
  ForServerNodeNoticeData,
  ForServerNodeConditionData,
  ForServerApiConfigData,
} from './processServer';
export type ForClientBaseConfigData = {
  /**
   * 流程名称
   */
  processName?: string;
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
   * 是否带有默认分支0:没有1:有
   */
  withDefaultBranch?: number;
};

export type ForClientAdvancedConfigData = {
  /**
   * 超时时间，单位小时
   */
  timeoutHour?: number;
  /**
   * 相同审批人自动通过
   * 0:不通过
   * 1:通过
   */
  autoPass?: number;
  /**
   * 审批人参与流程
   * 0:不拦截 1:拦截
   */
  assigneeLaunch?: number;
  /**
   * 推送待办
   * 0:不推送
   * 1:推送
   */
  pushToDo?: number;
  /**
   * 是否需要鉴权
   * 0:否
   * 1:是
   */
  auth?: number;
  /**
   * 是否可撤销：0不允许，1允许
   */
  revocable?: boolean;
  revocableNodes?: string[];
};

export type ForClientFormItemData = {
  /**
   * 字段name
   */
  id?: string;
  /**
   * (前端用)跳转url
   */
  metaValue?: string;
  /**
   * 字段name
   */
  fieldName?: string;
  /**
   * 字段描述
   */
  fieldDesc?: string;
  /**
   * 1-必填,2-非必填,3-级联必填
   */
  required?: number;
  /**
   * 是否在详情页展示
   * 1-展示,2-不展示,3-空值不展示,4-级联展示
   */
  showInDetail?: number;
  /**
   * 数据值，展示文本和标题才会有这个字段，其他的类型为null
   */
  value?: string;
  /**
   * 1:文本 2:展示文本 3:枚举 4:图片 5表格 6标题 7链接
   */
  type?: number;
  /**
   * 图片类型时 用于表示最大数量
   */
  maxLen?: number;

  /**
   * 文件大小
   */
  fileSize?: number;
  /**
   * 文件类型
   */
  fileType?: string[];
  /**
   * 表格类型的列定义
   */
  columns?: ForServerFormItemColumnsData[];
  /**
   * url 类型时的描述
   */
  urlDescription?: string;
  /**
   * 枚举的定义数据
   */
  enumDataItems?: ForServerFormItemEnumData[];
  /**
   * 是否从接口取值
   */
  apiConfig?: number;
  /**
   * 接口
   */
  apiCode?: string | null;
  /**
   * 表单项名
   */
  apiMeta?: string;
  /**
   * 表单项id
   */
  apiMetaId?: string;
  /**
   * 选择值，processId
   */
  metaName?: string;
  textAttr?: number; // 属性(1-普通文本,2-多行文本)

  // 级联展示相关
  showMetaId?: string;
  showValue?: string | string[];
  showLogicType?: string;

  // 级联必填相关
  requiredMetaId?: string;
  requiredValue?: string | string[];
  requiredLogicType?: string;
  download?: boolean;
  /**
   * 1-可下载,2-不可下载
   */
  tableAutoWidth?: number;
};

export type ForClientNodeNoticeData = ForServerNodeNoticeData & {
  actionType?: number;
};

export type ForClientNodeTaskActionData = {
  /**
   * 按钮类型
   * 0-转交
   * 1-同意
   * 2-拒绝
   * 3-驳回
   */
  type?: number;
  /**
   * 驳回类型
   * 1 驳回到发起节点
   * 2 驳回到上一节点
   * 3 驳回到任意节点
   */
  backType?: number;
  /**
   * 按钮名
   */
  customName?: string;
  /**
   * 表单
   */
  items?: ForClientFormItemData[];
  check?: ForServerApiConfigData;
  actionBranch?: string;
  notice?: ForClientNodeNoticeData;
};
export type ForClientNodeData = {
  /**
   * 节点ID UUID即可
   */
  id: string;
  /**
   * 节点名称
   */
  name: string;
  /**
   * 节点类型 //0 发起节点 1审批节点 2:条件节点 3互斥路由
   */
  type: number;
  /**
   * 展示文案
   */
  showText: string;
  nodeUserList?: ForServerNodeUserData[];
  nodeAuthList?: ForServerNodeUserData[];
  /**
   * 节点
   */
  conditionNodes?: ForClientNodeData[];
  conditions?: ForServerNodeConditionData[];
  next: ForClientNodeData | null;
  /**
   * 前端字段
   */
  editOptions?: string;
  /**
   * 前端字段
   */
  selectBranch?: string;
  /**
   * 前端字段
   */
  assigneeBranch?: string | null;
  /**
   * 前端字段
   */
  defaultBranch?: boolean;
  /**
   * 前端字段
   */
  extraInfo?: string;
  /**
   * 审批人类型
   * 1-指定用户
   * 2-角色
   * 3-接口
   * 4-发起人
   */
  assigneeType?: number;
  /**
   * 驳回类型1 驳回到发起节点2 驳回到上一节点3 驳回到任意节点
   */
  backType?: number;
  /**
   * 审批类型1-或签,2-会签
   */
  approveType?: number;
  assignee?: ForServerApiConfigData;
  taskActions?: ForClientNodeTaskActionData[];
  /**
   * 是否支持撤销
   */
  revocable?: boolean;
  /**
   * 发起人类型
   */
  promoterType?: number;
};

export type ForClientDetailData = ForClientBaseConfigData &
  ForClientAdvancedConfigData & {
    /**
     * 表单参数
     */
    formDataItems?: ForClientFormItemData[];
    /**
     * 节点
     */
    rootNode?: ForClientNodeData;
    /**
     * 发起人类型
     */
    launcherSource?: number;
    /**
     * 是否升级版本号 true 升级
     */
    updateVersion?: boolean;
  };

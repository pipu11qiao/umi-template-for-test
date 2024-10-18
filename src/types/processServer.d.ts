export type ForServerApiConfigData = {
  /**
   * 接口编码
   */
  apiCode?: string | null;
  /**
   * 变量名
   */
  varName?: string | null;
};
export type ForServerBaseConfigData = {
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
   * 是否带有默认分支 0:没有 1:有
   */
  withDefaultBranch?: number;
};

export type ForServerAdvancedConfigData = {
  /**
   * 是否可撤销：0不允许，1允许
   */
  revocable?: boolean;
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
};
export type ForServerFormItemEnumData = {
  /**
   * 枚举值
   */
  enumValue?: string;
  /**
   * id
   */
  id: string;
  /**
   * 枚举文案
   */
  enumText?: string;
};

export type ForServerFormItemColumnsData = {
  /**
   * id
   */
  id?: string;
  /**
   * 列名称
   */
  columnName?: string;
  /**
   * 与上面的type一致
   */
  columnType?: number;
  /**
   * 列描述
   */
  columnDesc?: string;
  /**
   * 列宽比例
   */
  columnWidth?: number;
};
export type ForServerFormItemRefData = {
  /**
   * 表单类型
   */
  type?: number;
  /**
   * 1-主表单,2-当前子表单
   */
  refType?: number;
  /**
   * 表单项名
   */
  detail?: string;
  /**
   * 如果是文本和数字就是那个值，如果是单选和多选是选项具体的id
   */
  value?: string;
  /**
   * 条件(等于、不等于)
   */
  logicType?: string;
  /**
   * 表单项id
   */
  apiMetaId?: string;
};
export type ForServerFormItemConditionData = {
  /**
   * 表单类型
   */
  type?: number;
  /**
   * 条件(等于、不等于)
   */
  logicType?: string;
  /**
   * 如果是文本和数字就是那个值，如果是单选和多选是选项具体的enumValue
   */
  detail?: string;
  /**
   * 表单项id(引用方的)
   */
  cascadeRefId?: string;
  /**
   * 多选
   */
  options?: string[];
};
export type ForServerFormItemAttrData = {
  /**
   * 1-展示,2-不展示,3-空值不展示,4-级联展示
   */
  show?: number;
  /**
   * 1-必填,2-非必填,3-级联必填
   */
  required?: number;
  /**
   * 1-普通文本,2-多行文本
   */
  textAttr?: number;
  /**
   * 1-可下载,2-不可下载
   */
  download?: number;
  /**
   * 1-可下载,2-不可下载
   */
  tableAutoWidth?: number;
};
export type ForServerFormItemData = {
  /**
   * 字段name
   */
  id?: string;
  /**
   * 字段name
   */
  fieldName?: string;
  /**
   * 选择值，processId
   */
  metaName?: string;
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
   * 展示
   * 0:非空展示
   * 1:展示
   */
  showEmptyItem?: number;
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
   * 表格类型的列定义
   */
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
   * 级联展示引用(引用了谁)
   */
  cascadeShowRef?: ForServerFormItemRefData;
  /**
   * 级联必填引用(引用了谁)
   */
  cascadeRequiredRef?: ForServerFormItemRefData;
  /**
   * 级联展示(我被谁引用了)
   */
  cascadeShowCons?: ForServerFormItemConditionData[];
  /**
   * 级联必填(我被谁引用了)
   */
  cascadeRequiredCons?: ForServerFormItemConditionData[];
  /**
   * attr 属性
   */
  attr?: ForServerFormItemAttrData;
  /**
   * (前端用)跳转url
   */
  metaValue?: string;
  /**
   * 文件大小
   */
  fileSize?: number;
  /**
   * 文件类型
   */
  fileType?: string[];
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
   * 是否被引用
   */
  referenced?: number;
};

export type ForServerNodeUserData = {
  id: string;
  name: string;
};
export type ForServerNodeConditionData = {
  id?: string;
  name?: string;
  /**
   * 表单类型
   */
  type?: number;
  /**
   * 执行表达式
   */
  expression?: string;
  /**
   * 多个条件之间 组合关系 现阶段默认传 1
   */
  operator?: string;
  /**
   * 表达式符号
   */
  logicType?: string;
  /**
   * 值
   */
  detail?: string | number;
  /**
   * 多选值
   */
  options?: string[];
};

export type ForServerNodeNoticeData = {
  /**
   * 知悉类型
   * 1.发起人
   * 2.指定人
   * 3.角色
   */
  noticeType?: number;

  actionType?: number;
  /**
   * 知悉角色
   */
  noticeAuths?: ForServerNodeUserData[];
  /**
   * 知悉用户
   */
  noticeUsers?: ForServerNodeUserData[];
  assignee?: ForServerApiConfigData;
  /**
   * 前端字段
   */
  assigneeBranch?: string | null;
  /**
   * 前序知悉节点
   */
  prevTaskDefIds?: string[];
};

export type ForServerNodeTaskActionData = {
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
  items?: ForServerFormItemData[];
  check?: ForServerApiConfigData;
  actionBranch?: string;
  notice?: ForServerNodeNoticeData;
};
export type ForServerNodeData = {
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
  conditionNodes?: ForServerNodeData[];
  conditions?: ForServerNodeConditionData[];
  next: ForServerNodeData | null;
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
  taskActions?: ForServerNodeTaskActionData[];
  /**
   * 是否支持撤销
   */
  revocable?: boolean;
};

export type ForServerDetailData = ForServerBaseConfigData &
  ForServerAdvancedConfigData & {
    // processKey
    processKey?: string;
    /**
     * 表单参数
     */
    formDataItems?: ForServerFormItemData[];
    /**
     * 节点
     */
    rootNode?: ForServerNodeData;
    /**
     * 发起人类型
     */
    launcherSource?: number;
    /**
     * 是否升级版本号 true 升级
     */

    updateVersion?: boolean;
    /**
     * 版本号
     */
    processVersion?: number;
  };

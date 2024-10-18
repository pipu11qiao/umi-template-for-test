import {
  ForClientFormItemData,
  ForClientNodeData,
  ForClientNodeNoticeData,
  ForClientNodeTaskActionData,
} from './processClient';
import { ForServerNodeConditionData } from './processServer';

export type ServerFormDataItem = ForClientFormItemData;
export type ServerNoticeConfig = ForClientNodeNoticeData;

export type ServerTaskAction = ForClientNodeTaskActionData;

export type ServerCondition = ForServerNodeConditionData;

export type FlowNode = ForClientNodeData;

export type SelectInfoBaseItem = {
  type: ComponentType; //组件类型
  value: string; // item id
  label?: string; // 字段描述
  detail?: string; // 字段name
  isSub?: boolean;
};
export type SelectInfoItem = SelectInfoBaseItem & {
  childOption?: { id: string; enumText?: string; enumValue?: string }[]; // 选项
};

export type RecordSelectInfoItem = Record<string | number, SelectInfoItem[]>;
export type NodeSelectInfoItemItem = SelectInfoItem & {
  nodeId?: string;
  actionType?: number;
  nodeName?: string;
};

// 审批操作按钮
export type ClientApproveButtonData = {
  value: ApprovalButton;
  open: boolean;
  name: string;
  tooltipTitle: string;
  cancelAble: boolean;
  customName: string;
  list: ComponentFormConfig[];
  hasFormConfig: boolean;
  hasNoticeConfig: boolean;
  pathConfig?: {
    open: boolean;
    apiCode?: string | null;
    varName?: string | null;
    formId?: string;
  };
  rejectConfig?: {
    backType?: number;
  };
};
export type ClientApproveButtonDataRecord = Record<
  string,
  ClientApproveButtonData
>;

export type actionDataV1 = Record<
  string,
  {
    customName?: string;
    list?: {
      type?: number;
      id?: string;
      options?: {
        id?: string;
        info?: string;
      }[];
      name?: string;
      require?: boolean;
      text?: string;
    }[];
  }
>;

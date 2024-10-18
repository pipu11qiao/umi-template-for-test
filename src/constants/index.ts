import { getMapForOptions } from '@xdf/material-components';

// logo的名称
export enum AppName {
  流程中心 = '流程中心',
  任务工作台 = '任务工作台',
}
// 审批操作
export enum ApprovalButton {
  transmit, // 转交
  agree, // 同意
  refuse, // 拒绝
  reject, // 驳回
  takeBack, // 收回
}
// 组件类型
export enum ComponentType {
  'text' = 1,
  'showText',
  'select',
  'img',
  'table',
  'title',
  'url',
  'selectMulti',
  'attachment',
  'actionUrl', //10
  'user', //11
  'number', //12
}
export enum NodeType {
  // 发起人
  promoter,
  // 审批人
  approver,
  // 条件值
  conditionValue,
  // 条件节点
  condition,
  // 系统节点
  system,
}
// 条件分支添加节点的类型
export enum ConditionAddType {
  // 不移动
  default,
  // 左侧
  left = 1,
}
// fileType pdf:pdf,word:word,ppt:ppt,excel:excel
export enum FileType {
  'pdf' = 'pdf',
  'word' = 'word',
  'ppt' = 'ppt',
  'excel' = 'excel',
  'compress' = 'compress', // 压缩
  'email' = 'email', // 邮件
  'image' = 'image', // 图片
}
export const fileTypeSelectOptions = [
  { label: 'pdf', value: FileType.pdf },
  { label: 'word', value: FileType.word },
  { label: 'ppt', value: FileType.ppt },
  { label: 'excel', value: FileType.excel },
  { label: '压缩文件', value: FileType.compress },
  { label: '邮件', value: FileType.email },
  { label: '图片', value: FileType.image },
];
export const fileTypeOptionsMap: Map<FileType, string> = getMapForOptions(
  fileTypeSelectOptions,
);

const fileTypeRecord: Record<FileType, string[]> = {
  [FileType.pdf]: ['pdf'],
  [FileType.excel]: ['xls', 'xlsx', 'csv'],
  [FileType.ppt]: ['ppt', 'pptx'],
  [FileType.word]: ['doc', 'docx'],
  [FileType.compress]: ['zip', 'rar'],
  [FileType.email]: ['eml', 'msg', 'pst', 'ost', 'mbox', 'mbx'],
  [FileType.image]: ['jpg', 'jpeg', 'png'],
};
export function getFileType(filetypes: FileType[]): string[] {
  let arr: string[] = [];
  filetypes.forEach((item) => {
    arr = arr.concat(fileTypeRecord[item]);
  });
  return arr;
}

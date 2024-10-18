import { ReactNode } from 'react';

export enum ActionType {
  查看 = 'show',
  编辑 = 'edit',
  停用 = 'disable',
  启用 = 'enable',
  日志 = 'log',
  导出 = 'export',
}
export interface ActionConfig<T> {
  name: string; //按钮名称
  type: ActionType; //按钮名称
  onAction?: (reocrd: T) => void;
  showInDraft?: boolean;
  key?: string;
  render?: (record: T, actionItem: ActionConfig<T>) => ReactNode;
  checkAuth?: (allKey?: Record<string, string>) => boolean;
}

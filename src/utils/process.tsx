import { isDev } from '@/services/config';
import { NodeSelectInfoItemItem } from '@/types/process';
import { history } from '@umijs/max';

export function getSelectBranchFromJson(
  jsonString: string | undefined | null,
): NodeSelectInfoItemItem | undefined {
  let selectBranch: NodeSelectInfoItemItem | undefined;
  try {
    selectBranch = JSON.parse(jsonString || '{}');
  } catch (e) {}
  return selectBranch;
}
/**
 * 根据id返回表单的name
 * @param id
 * 1: 基本 Parent-wbltjpcayjlibzzuxujjt-download
 * 2: 选项和列 Parent-wbltjpcayjlibzzuxujjt-wmqmpoaqhdzelzargtbuv-columnWidth
 * @return field string
 *
 */

export function getFieldFromFormId(id: string): string {
  const strArr = id.split('-');
  const name = strArr[strArr.length - 1];
  return name;
}

/**
 * 从form onChange的第一参数获取改变的field
 * @param changedValues
 */
export function getFieldFromChangedValues(
  changedValues: Record<string, any>,
): string {
  let curKeys = Object.keys(changedValues);
  if (Array.isArray(curKeys) && curKeys[0]) {
    return curKeys[0];
  }
  return '';
}

type GetProcessConfigUrlOption = {
  // 流程id
  processKey: string;
  // 是否是查看
  isView?: 0 | 1;
  // 是否获取草稿 0 :草稿 1:已发布 默认是1
  status: 0 | 1;
  // 是否有草稿
  hasDraft?: 0 | 1;
  // 版本
  version?: number | string;
};
export function getProcessConfigUrl(option: GetProcessConfigUrlOption) {
  const { processKey, isView, status, hasDraft, version } = option;
  return `/process/config?processKey=${processKey}&status=${
    Number(status) === 1 ? 1 : 0
  }${!!hasDraft ? '&hasDraft' : ''}${Number(isView) === 1 ? '&show' : ''}${
    version ? `&version=${version}` : ''
  }`;
}

export function openConfigUrl(options: GetProcessConfigUrlOption) {
  const url = getProcessConfigUrl(options);
  if (isDev) {
    history.push(url);
  } else {
    window.open(url);
  }
}

import { ReactNode } from 'react';
import { message, ModalFuncProps } from 'antd';
import { useRequest } from 'ahooks';
import { Modal } from '@xdf/material-components';

type StateType = ReturnType<typeof useRequest>;
type UseModalReturn = ReturnType<typeof Modal.useModal>;

type ModalType = ArrayFirstReadOnly<UseModalReturn>;

interface Config<RecordType, RequestType> {
  modal: ModalType;
  stateObj?: StateType; // useRequest的返回
  getPrams?: (recored: RecordType, action: any) => RequestType; // 状态异步函数的参数获取
  type?: 'infoConfirm' | 'dangerConfirm';
  title?: string | ReactNode;
  titleRender?: (recored: RecordType, action: any) => string | ReactNode;
  content?: ReactNode;
  contentRender?: (recored: RecordType, action: any) => string | ReactNode;
  actionName?: string;
  actionNameRender?: (recored: RecordType, action: any) => string;
  modalConfig?: ModalFuncProps;
}
/**
 * 列表页面中action使用的modal弹框
 * @param config
 * @returns
 */
export default function getActionConfirm<RecordType, RequestType>(
  config: Config<RecordType, RequestType>,
) {
  const {
    modal,
    stateObj,
    getPrams,
    type,
    title,
    titleRender,
    content,
    contentRender,
    actionName,
    actionNameRender,
    modalConfig, // 对modal配置项进行重写
  } = config;
  const curType = type || 'infoConfirm';
  return (record: RecordType, action: any, refresh?: () => void) => {
    let curContent: string | ReactNode = content;
    if (contentRender) {
      curContent = contentRender(record, action) || curContent;
    }
    let curTitle: string | ReactNode = title || '提示';
    if (titleRender) {
      curTitle = titleRender(record, action) || curContent;
    }

    modal[curType]({
      title: curTitle,
      content: curContent,
      centered: true,
      icon: <span />,
      onOk: async () => {
        if (stateObj) {
          if (stateObj.loading) {
            return false;
          }
          let params: RequestType = {} as any;
          if (getPrams) {
            params = getPrams(record, action);
          }
          await stateObj.runAsync(params);
          let actionStr = actionName || '操作';
          if (actionNameRender) {
            actionStr = actionNameRender(record, action) || actionStr;
          }
          message.success(`${actionStr}成功`);
          if (refresh) {
            refresh();
          }
          return true;
        }
        return true;
      },
      ...modalConfig,
    });
  };
}

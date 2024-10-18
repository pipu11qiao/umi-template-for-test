import type { ColumnsType } from 'antd/es/table';
import {
  CommonPageContainer,
  CommonPageHeader,
  FilterTable,
  useFilterTable,
  Modal,
} from '@xdf/material-components';
import { Radio, Space, Button, Form, Popover, Timeline } from 'antd';
import styles from './index.less';
import { useModel, history } from '@umijs/max';
import { Badge } from 'antd/es';
import { IconPark, message } from '@xdf/material-components';
import {
  changeStatus,
  getDetail,
  getProcessList,
} from '@/services/api/process';
import dayjs from 'dayjs';
import AuthControl from '@/components/AuthControl';
import { env, isDev } from '@/services/config';
import {
  // getFlowProcessListRequest,
  getFlowProcessListResponse,
} from '@/services/api/process/model/moBanXiangGuan';
import { ActionConfig, ActionType } from './util';
import { saveAs } from 'file-saver';
import { encrypt } from '@/utils/utils';

const dateFormat = 'YYYY-MM-DD HH:mm:ss';
const ProcessStatus = [
  {
    label: '草稿',
    value: 0,
  },
  {
    label: '启用',
    value: 1,
  },
  {
    label: '停用',
    value: 2,
  },
];

type ColumnDataType = ArrayElement<
  PickKey<getFlowProcessListResponse, 'content'>
>;

const ManageListPage: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const transformValue = (val: any) => {
    const { ...rest } = val;
    const params = {
      ...rest,
    };

    return params;
  };
  const [modal, contextHolder] = Modal.useModal();
  const [checkForm] = Form.useForm();

  const { form, useAntdTableRes } = useFilterTable(getProcessList, {
    defaultPageSize: 20,
    pagePropName: 'page',
    pageSizePropName: 'size',
    contentPropName: 'list',
    transformValue,
  });
  const { refresh } = useAntdTableRes;
  const actionList: ActionConfig<ColumnDataType>[] = [
    {
      name: '查看',
      type: ActionType.查看,
      onAction: (record) => {
        const { processKey = '', status } = record;
        let detailUrl = `/process/config?show&processKey=${processKey}&status=${status}`;
        if (isDev) {
          history.push(detailUrl);
        } else {
          window.open(detailUrl);
        }
      },
    },

    {
      name: '编辑',
      type: ActionType.编辑,
      onAction: (record) => {
        const { processKey = '', status, hasDraft } = record;
        const fn = (
          processKey: string,
          status?: number,
          hasDraft?: boolean,
        ) => {
          let detailUrl = `/process/config?processKey=${processKey}&status=${status}${
            hasDraft !== undefined ? '&hasDraft' : ''
          }`;
          if (isDev) {
            history.push(detailUrl);
          } else {
            window.open(detailUrl);
          }
        };
        if (status !== 0 && hasDraft) {
          const curModal = modal.infoConfirm({
            wrapClassName: styles.confirmContentWrap,
            centered: true,
            content: (
              <div className={styles.confirmContent}>
                <div className={styles.confirmTitle}>
                  您上次暂存的草稿还未发布哦
                  <IconPark
                    name="icon-close-pop-up-16px"
                    size={16}
                    style={{
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      curModal.destroy();
                      checkForm.resetFields();
                    }}
                  />
                </div>
                <Form form={checkForm}>
                  <Form.Item
                    label=""
                    name="checkDraft"
                    rules={[{ required: true }]}
                    initialValue={0}
                  >
                    <Radio.Group>
                      <Radio value={0}>继续编辑草稿内容</Radio>
                      <Radio value={1}>忽略草稿，直接编辑</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Form>
              </div>
            ),
            icon: null,
            onOk: () => {
              const checkDraft = checkForm.getFieldValue('checkDraft');
              Promise.resolve().then(() => {
                fn(
                  processKey,
                  checkDraft === 0 ? 0 : status,

                  checkDraft === 0 ? undefined : hasDraft,
                );
                checkForm.resetFields();
              });
            },
            onCancel: () => {
              Promise.resolve().then(() => {
                checkForm.resetFields();
              });
            },
            maskClosable: true,
            autoFocusButton: null,
            cancelText: '取消',
            okText: '确定',
          });
        } else {
          fn(processKey, status);
        }
      },
      key: 'updateProcess',
      showInDraft: true,
    },
    {
      name: '停用',
      type: ActionType.停用,
      key: 'stopProcess',
      render: (record, selfItem) => {
        if (record.status === 2) {
          return null;
        }
        return (
          <span
            onClick={() => {
              selfItem.onAction?.(record);
            }}
            className={styles.actionItem}
            key={selfItem.type}
          >
            {selfItem.name}
          </span>
        );
      },
      onAction: (record) => {
        const { bizId = '' } = record;
        modal.dangerConfirm({
          autoFocusButton: null,
          title: `确认要停用吗？`,
          content: '停用后将无法发起新的任务单，已发起的不受影响',
          centered: true,
          getContainer: false,
          onOk: () =>
            changeStatus({
              bizId,
              status: 2,
            }).then(() => {
              message.success(`停用成功`);
              refresh();
            }),
          onCancel: () => Promise.resolve(),
          cancelText: '取消',
          okText: '确定',
        });
      },
    },
    {
      name: '启用',
      type: ActionType.启用,
      key: 'firingProcess',
      render: (record, selfItem) => {
        if (record.status === 1) {
          return null;
        }
        return (
          <span
            onClick={() => {
              selfItem.onAction?.(record);
            }}
            className={styles.actionItem}
            key={selfItem.type}
          >
            {selfItem.name}
          </span>
        );
      },
      onAction: (record) => {
        const { bizId = '' } = record;
        modal.infoConfirm({
          autoFocusButton: null,
          title: `确认要启用吗？`,
          content: '',
          centered: true,
          getContainer: false,
          onOk: () =>
            changeStatus({
              bizId,
              status: 1,
            }).then(() => {
              message.success(`启用成功`);
              refresh();
            }),
          onCancel: () => Promise.resolve(),
          cancelText: '取消',
          okText: '确定',
        });
      },
    },
    {
      name: '版本日志',
      type: ActionType.日志,
      render: (record) => {
        const { logItems = [] } = record;
        return (
          <Popover
            key={ActionType.日志}
            title=""
            content={
              <div className={styles.timeArea}>
                <Timeline
                  items={logItems.map((item, index) => ({
                    dot: (
                      <div
                        style={{
                          background: index === 0 ? '#00A85F' : '#C3C3C3',
                        }}
                        className={styles.dot}
                      />
                    ),

                    children: (
                      <div key={item.releaseTime} className={styles.logInfo}>
                        <div className={styles.logVersion}>
                          v{item.processVersion}
                        </div>
                        <div className={styles.versionDetail}>
                          <span>由{item.releaseUser.userName}</span>
                          <span>
                            于{dayjs(item.releaseTime).format(dateFormat)}
                            发布
                          </span>
                        </div>
                      </div>
                    ),
                  }))}
                />
              </div>
            }
            overlayClassName={styles.logArea}
          >
            <span className={styles.actionItem} key={ActionType.日志}>
              版本日志
            </span>
          </Popover>
        );
      },
      checkAuth: () => true,
    },
    {
      name: '导出配置文件',
      type: ActionType.导出,
      key: 'ProcessExport',
      onAction: (record) => {
        const { processKey = '' } = record;
        modal.infoConfirm({
          autoFocusButton: null,
          title: `你确定导出配置文件吗？`,
          content:
            '导出该流程的最新已发布版本的配置数据文件，便于在其他环境新增导入后快速更新流程配置',
          centered: true,
          getContainer: false,
          onOk: async () => {
            const detailData = await getDetail({ processKey });
            console.log(`detailData`, detailData);
            if (detailData) {
              const blob = new Blob(
                [
                  JSON.stringify({
                    ...detailData,
                    from: encrypt('export'),
                  }),
                ],
                {
                  type: 'application/json',
                },
              );
              // 直接会打开窗口
              saveAs(
                blob,
                `${env}-${record.processName}-${record.processKey}-流程配置文件导出`,
              );
            }
          },
          onCancel: () => Promise.resolve(),
          cancelText: '取消',
          okText: '确定',
        });
      },
    },
  ];
  const columns: ColumnsType<ColumnDataType> = [
    {
      title: '流程编号',
      key: 'processKey',
      dataIndex: 'processKey',
    },
    {
      title: '流程名称',
      key: 'processName',
      dataIndex: 'processName',
      render: (processName) => (
        <div style={{ minWidth: 160 }}>{processName}</div>
      ),
    },
    {
      title: '类型',
      key: 'type',
      dataIndex: 'type',
      render: () => '审批流',
    },
    {
      title: '版本',
      key: 'processVersion',
      dataIndex: 'processVersion',
      render: (processVersion, { hasDraft, status }) => (
        <div style={{ minWidth: 50 }}>
          <div>{status === 0 ? '-' : `v${processVersion}`}</div>
          {status !== 0 && hasDraft ? (
            <div className={styles.hasDraft}>有未发布内容</div>
          ) : null}
        </div>
      ),
    },
    {
      title: '流程负责人',
      key: 'admin',
      width: 112,
      dataIndex: 'admin',
      render: (admin) => (
        <div style={{ maxWidth: 88, display: 'inline-block' }}>
          <Popover
            destroyTooltipOnHide
            overlayClassName={styles.adminPopover}
            content={
              <div className={styles.admin}>
                {admin.map((item: any) => (
                  <span key={item.userId}>{item.userName}</span>
                ))}
              </div>
            }
          >
            {admin.slice(0, 2).map((item: any, index: number) => (
              <div key={item.userId}>
                {item.userName}
                {admin.length > 2 && index === 1 ? '...' : ''}
              </div>
            ))}
          </Popover>
        </div>
      ),
    },
    {
      title: '最近一次更新',
      key: 'lastUpdateTime',
      width: 190,
      dataIndex: 'lastUpdateTime',
      render: (lastUpdateTime) => dayjs(lastUpdateTime).format(dateFormat),
    },
    {
      title: '状态',
      key: 'status',
      dataIndex: 'status',
      render: (status) => {
        const color =
          status === 1 ? '#00A85F' : status === 2 ? '#C3C3C3' : '#FF4D00';
        return <Badge color={color} text={ProcessStatus[status].label} />;
      },
    },
    {
      title: '操作',
      key: 'allMenusName',
      align: 'left',
      dataIndex: 'allMenusName',
      fixed: 'right',
      width: 180,
      render: (_, record) => {
        const { status } = record;
        return (
          <Space style={{ maxWidth: 180, flexWrap: 'wrap' }} size={12}>
            {actionList.map((item) => {
              if (status === 0 && !item.showInDraft) {
                return null;
              }
              let currentKey = item.key;
              let hasAuth = true;
              if (currentKey && !initialState?.buttonPermissions[currentKey]) {
                hasAuth = false;
              }
              if (!hasAuth) {
                return null;
              }
              if (item.render) {
                return item.render(record, item);
              }
              return (
                <span
                  onClick={() => {
                    item.onAction?.(record);
                  }}
                  className={styles.actionItem}
                  key={item.type}
                >
                  {item.name}
                </span>
              );
            })}
          </Space>
        );
      },
    },
  ];
  return (
    <>
      <CommonPageContainer>
        <CommonPageHeader
          title="流程管理"
          right={
            <AuthControl currentKey="addProcess">
              <Button
                type="primary"
                icon={<IconPark name="tubiaotianjia" color="#fff" size={14} />}
                onClick={() => {
                  window.open('/process/config');
                }}
              >
                创建审批流
              </Button>
            </AuthControl>
          }
        />
        <FilterTable
          form={form}
          useAntdTableRes={useAntdTableRes}
          columns={columns}
          filterProps={{
            formProps: {
              initialValues: {},
            },
          }}
          schemas={[
            {
              type: 'input',
              itemProps: {
                name: 'keyword',
                label: '流程编号/名称',
              },
              filedProps: {
                autoComplete: 'off',
                placeholder: '请输入流程编号/名称',
              },
            },
            {
              type: 'select',
              itemProps: {
                name: 'status',
                label: '流程状态',
              },
              filedProps: {
                suffixIcon: (
                  <IconPark name="icon-arrow-nvg-down-14px-c" size={14} />
                ),
                placeholder: '请选择流程状态',
                options: ProcessStatus,
              },
            },
          ]}
          tableProps={{
            showExeed: false,
            tableLayout: 'fixed',
            header: false,
            rowKey: 'bizId',
            scroll: {
              x: 'max-content',
            },
          }}
        />
        {contextHolder}
      </CommonPageContainer>
    </>
  );
};

export default ManageListPage;

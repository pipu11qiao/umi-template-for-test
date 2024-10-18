import { Typography, notification } from 'antd';
import LoginApi from '@xdf/react-entry';
import { CopyOutlined, CheckOutlined } from '@ant-design/icons';
import logger from '@/utils/logger';
import { getServiceAxios } from '@xdf/material-components';
import { SlsLoggerError as LogError } from '@xdf/material-components';

const jump2Login = () => {
  // LoginApi.needLogin();
};

// 兼容模块联邦
const isActualFromOperate = location.hostname.includes('operate');

export const commonAjaxHeader = {
  'eb-client': isActualFromOperate ? 'o' : 'b',
  'x-eb-appid': isActualFromOperate ? 'operate' : 'business',
};

const serviceAxios = getServiceAxios({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'eb-client': 'o',
    'x-eb-appid': 'flow',
  },
  onNotLogin: () => {
    jump2Login();
  },
  onResponseError: (response) => {
    const config = response.config;
    logger.error({
      content: LogError.RESPONSE_ERROR,
      data: {
        requestUrl: config.url,
        requestBody: config.data,
        requestHeader: config.headers,
        response: response.data,
      },
    });
  },
  onServerDataError: (data) => {
    const { message, traceId } = data;
    notification.error({
      message: (
        <span>
          错误提示 (
          <Typography.Text
            copyable={{
              text: traceId,
              tooltips: ['点击复制', '已复制'],
              icon: [
                <Typography.Link key={'before'}>
                  点击复制错误ID
                  <CopyOutlined style={{ marginLeft: 4 }} />
                </Typography.Link>,
                <Typography.Link key={'after'}>
                  点击复制错误ID
                  <CheckOutlined style={{ marginLeft: 4 }} />
                </Typography.Link>,
              ],
            }}
          ></Typography.Text>
          )
        </span>
      ),
      description: message,
    });
  },
  onRejectError: (error) => {
    logger.error({
      content: LogError.NETWORK_ERROR,
      data: error,
    });
  },
  onTimeoutError: () => {
    notification.error({
      message: '错误提示',
      description: '请求超时，请检查网络',
    });
  },
  onNetworkError: () => {
    notification.error({
      message: '错误提示',
      description: '请检查您的网络连接',
    });
  },
  onOtherError: (error) => {
    notification.error({
      message: '错误提示',
      description: error.message,
    });
  },
});

export default serviceAxios;

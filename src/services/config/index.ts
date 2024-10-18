interface configEnvTye {
  auth: string;
  od: string;
  processHost: string; // 流程应用
}
// 环境 类型
interface configType {
  [key: string]: configEnvTye;
}

const config: configType = {
  qa: {
    od: '//flow-center-qa.eastbuy.com',
    auth: '//permission-test.eastbuy.com',
    processHost: 'https://workflow-test.eastbuy.com',
  },
  test: {
    od: '//flow-center-test.eastbuy.com',
    auth: '//permission-test.eastbuy.com',
    processHost: 'https://workflow-test.eastbuy.com',
  },
  dev: {
    od: '//flow-center-dev.eastbuy.com',
    auth: '//permission-dev.eastbuy.com',
    processHost: 'https://workflow-dev.eastbuy.com',
  },
  demo: {
    od: '//flow-center-demo.dfzxvip.com',
    auth: '//permission-demo.dfzxvip.com',
    processHost: 'https://cbsworkflow-demo.dfzxvip.com',
  },
  prod: {
    od: '//flow-center.eastbuy.com',
    auth: '//permission.eastbuy.com',
    processHost: 'https://workflow.eastbuy.com',
  },
};

export const getEnv = (): EnvType => {
  const hostname = window.location.hostname;
  const hostReg = /(^|\W)(dev|test|uat|demo)[.|-]/;
  const matches = hostname.match(hostReg);
  let env = matches ? matches[2] : 'prod';
  const queryReg = /\.(\w+)\./;
  const queryRegResult = location.search.match(queryReg);
  if (queryRegResult) {
    env = queryRegResult[1];
  }
  return env as EnvType;
};

export const env = getEnv();

export const isDev = process.env.NODE_ENV === 'development';

// 获取数据
const getConfig = (): configEnvTye => ({
  ...config[env],
});

export default getConfig();

export const getAuthSys = (): string => {
  const env = getEnv();
  const authUrl = {
    local: 'https://auth-dev.eastbuy.com',
    dev: 'https://auth-dev.eastbuy.com',
    qa: 'https://auth-test.eastbuy.com',
    test: 'https://auth-test.eastbuy.com',
    uat: 'https://auth-test.eastbuy.com',
    demo: 'https://auth-demo.dfzxvip.com',
    prod: 'https://auth.eastbuy.com',
  };
  return authUrl[env];
};

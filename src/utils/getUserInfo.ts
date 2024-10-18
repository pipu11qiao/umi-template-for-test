import LoginApi from '@xdf/react-entry';

export interface UserData {
  id?: number;
  name?: string;
  email?: string;
  domainAccount?: string;
  password?: string;
  activeDirectory?: string;
  chineseName?: string;
  phone?: string;
  expireTime?: string;
  status?: number;
  isDelete?: boolean;
  dn?: string;
  department?: string;
}

let userInfo: UserData | null = null;

export async function getUserInfo(): Promise<UserData | null> {
  if (userInfo) return userInfo;

  try {
    // userInfo = await LoginApi.getUserInfo();
    return {};
  } catch (error) {
    console.error('获取用户信息失败');
  }
  return userInfo;
}

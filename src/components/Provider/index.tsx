import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { getUserInfo, UserData } from '@/utils/getUserInfo';
import { initSensors } from '@/utils/sensors';
import * as Sentry from '@sentry/react';
import logger from '@/utils/logger';
import { Alert } from 'antd';

export const UserContext = createContext<{
  user: UserData;
  setUserData?: React.Dispatch<React.SetStateAction<UserData>>;
}>({
  user: {},
  setUserData: () => {},
});

export const Provider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [user, setUserData] = useState<UserData>({});
  const init = async () => {
    const userInfo = await getUserInfo();
    Sentry.setUser({ email: userInfo?.email, username: userInfo?.name });

    setUserData(userInfo as UserData);
    logger.initUid(userInfo?.domainAccount as string);
    initSensors({
      user_name: userInfo?.name,
      user_id: userInfo?.domainAccount,
      department: userInfo?.department,
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Sentry.ErrorBoundary
      fallback={
        <Alert
          message="异常"
          description="页面加载异常，请尝试刷新页面。"
          type="error"
        />
      }
    >
      <UserContext.Provider
        value={{
          user,
          setUserData,
        }}
      >
        {children}
      </UserContext.Provider>
    </Sentry.ErrorBoundary>
  );
};

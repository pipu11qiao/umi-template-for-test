import { ConfigProvider, Modal, Button, Watermark } from 'antd';
import cn from 'classnames';
import { throttle } from 'lodash';
import { Outlet, useLocation, history } from '@umijs/max';
import styles from './index.less';
import { useCallback, useEffect, useState, useRef, useMemo } from 'react';
import { useHover } from 'ahooks';
import { hideMenu } from '@/router';
import { pathToRegexp } from 'path-to-regexp';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import LoginApi from '@xdf/react-entry'; // '@/components/React-Entry';
// import Tingyun from '@tingyun-sdk/web';
import { useModel } from '@umijs/max';
import 'dayjs/locale/zh-cn';
// import CustomMenu from '@/components/CustomMenu';
import {
  CustomMenu,
  PageLayout,
  PageLayoutHeader,
  IconPark,
} from '@xdf/material-components';
import { matchRoutes } from '@umijs/max';
import NoAuthPage from '@/pages/Home/403';
import NoPage from '@/pages/Home/404';
dayjs.locale('zh-cn');
import { renderGlobalEmpty } from '@xdf/material-components';
import { NoChromeTips } from '@xdf/material-components';
import { getAuthSys } from '@/services/config';
// import { getUserStruc } from '@/services/api/base';
const authSysHost = getAuthSys();
const isMac = navigator.userAgent.indexOf('Mac') >= 0;
if (!isMac) {
  document.body.className = document.body.className + ' beautifulScroll';
}

const BasicLayout: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const location = useLocation();
  const [isLogout, setIsLogout] = useState(false);
  const { user } = useModel('user');
  const [selectedKey, setSelectedKey] = useState('');
  const [activeIndex, setActiveIndex] = useState<number>();
  const [noAuth, setNoAuth] = useState(false);
  const [isInit, setInit] = useState(false);
  const [noPage, setNoPage] = useState(false);
  // const [departmentInfo, setDepartmentInfo] = useState<{ name: string }>();
  const permissionRef = useRef<any>();
  const permissionCardRef = useRef<any>();

  const isPermissionHovered = useHover(permissionRef);
  const isPermissionCardHovered = useHover(permissionCardRef);

  const getTitle = () => {
    return (
      <div className={styles.modalTitle}>
        <IconPark size={21} name="statewarning-14px" color="#FF4D00" />
        <span className={styles.titleName}>你确定退出吗</span>
      </div>
    );
  };

  const onLogoutCancel = () => setIsLogout(false);

  const onLogoutOk = async () => {
    await LoginApi.loginOut();
    onLogoutCancel();
  };

  const onLogout = () => setIsLogout(true);

  useEffect(() => {
    if (initialState?.allControlled) {
      setInit(true);
    }
    const controlledInfo = matchRoutes(
      initialState?.allControlled,
      location.pathname,
    );
    // // 是否匹配信息
    const matchInfo = matchRoutes(initialState?.allRoutes, location.pathname);
    if (controlledInfo && !matchInfo) {
      setNoAuth(true);
    } else {
      setNoAuth(false);
    }
    // 不在受控中
    if (!controlledInfo) {
      setNoPage(true);
    } else {
      setNoPage(false);
      const activeIndex = initialState?.menuList.findIndex((item: any) =>
        location.pathname.startsWith(item.key),
      );
      setActiveIndex(activeIndex);
    }
    if (controlledInfo) {
      const { key, name, path } = controlledInfo[0].route as any;
      let currentKey = path;
      // 如果不在菜单展示，则定位到key相同的位置
      if (!name) {
        currentKey = initialState?.allControlled.find(
          (item: any) => item.key === key && item.name,
        )?.path;
      }
      if (currentKey) {
        setSelectedKey(currentKey);
      }
      if (path === '/' && !initialState?.menuList.length) {
        setNoAuth(true);
      }
    }
  }, [initialState, location.pathname]);

  const selectChange = useCallback(
    ({
      selectedKey,
      activeIndex,
    }: {
      selectedKey: string;
      activeIndex: number;
    }) => {
      setSelectedKey(selectedKey);
      history.push(selectedKey);
      setActiveIndex(activeIndex);
    },
    [],
  );

  const hasMenu = !hideMenu.some((item) => {
    const reg = pathToRegexp(item);
    return reg.exec(location.pathname);
  });
  const [date, setDate] = useState('');

  // const getMyDepartmentInfo = useCallback(() => {
  //   getUserStruc().then((res) => {
  //     setDepartmentInfo(res);
  //   });
  // }, []);

  useEffect(() => {
    setDate(dayjs().format('YYYY-MM-DD'));
    // getMyDepartmentInfo();
  }, []);

  const showPermissionCard = useMemo(() => {
    return isPermissionHovered || isPermissionCardHovered;
  }, [isPermissionHovered, isPermissionCardHovered, isLogout]);

  const handlePermissionApply = useCallback(
    throttle(() => {
      window.open(`${authSysHost}/permission/apply?appId=flow`);
    }, 1000),
    [],
  );

  return (
    <ConfigProvider
      locale={zhCN}
      renderEmpty={renderGlobalEmpty}
      form={{ colon: false }}
    >
      <NoChromeTips />
      <Watermark
        content={[user?.domainAccount as string, date]}
        font={{ color: 'rgba(0, 0, 0, 0.08)' }}
        gap={[200, 200]}
      >
        <PageLayout>
          <PageLayoutHeader
            title="流程中心"
            right={
              <div className={styles.rightHeader} ref={permissionRef}>
                <div className={styles.rightHeaderInner} ref={permissionRef}>
                  <i className={styles.img}></i>
                  <div className={styles.username}>{user.name} </div>
                  <div className={styles.logoutContainer}>
                    {showPermissionCard ? (
                      <IconPark name="iconup14px" size={14} />
                    ) : (
                      <IconPark name="icon-arrow-nvg-down-14px-c" size={14} />
                    )}
                  </div>
                  {showPermissionCard ? (
                    <div
                      className={styles.permissionCard}
                      ref={permissionCardRef}
                    >
                      <div className={styles.top}>
                        <i className={styles.img}></i>
                        <div className={styles.userInfo}>
                          <div className={styles.username}>{user.name} </div>
                          <div className={styles.departmentname}>
                            <span className={styles.mr4}>ID</span>
                            <span>{user?.domainAccount}</span>
                          </div>
                        </div>
                      </div>
                      <div className={styles.divider}></div>
                      <div className={styles.footer}>
                        <span
                          className={styles.text}
                          onClick={handlePermissionApply}
                        >
                          权限申请
                        </span>
                        <div className={styles.line}></div>
                        <span
                          className={cn(styles.text, styles.logoutText)}
                          onClick={onLogout}
                        >
                          退出
                        </span>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            }
          ></PageLayoutHeader>
          {isInit ? (
            noPage ? (
              <NoPage />
            ) : (
              <CustomMenu
                hasMenu={hasMenu}
                selectedKey={selectedKey}
                activeIndex={activeIndex}
                onMainClick={selectChange}
                onSubMenuClick={selectChange}
                menuList={initialState?.menuList}
              >
                {noAuth ? <NoAuthPage /> : <Outlet />}
              </CustomMenu>
            )
          ) : null}
        </PageLayout>
        <Modal
          title={getTitle()}
          open={isLogout}
          centered={true}
          closable={false}
          width={420}
          footer={[
            <Button key="cancel" loading={false} onClick={onLogoutCancel}>
              取消
            </Button>,
            <Button
              key="ok"
              loading={false}
              type="primary"
              danger={true}
              onClick={onLogoutOk}
            >
              确定
            </Button>,
          ]}
        />
      </Watermark>
    </ConfigProvider>
  );
};

export default BasicLayout;

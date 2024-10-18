import { getAllRoles } from '@/services/api/auth';
import { getAllPathList } from '@/services/api/process';
import { useRequest } from 'ahooks';

export default () => {
  const { data: roleList, run: requestRoleList } = useRequest(getAllRoles, {
    manual: true,
  });
  const { data: allPathList, run: requestAllPathList } = useRequest(
    getAllPathList,
    {
      manual: true,
    },
  );

  function getAllOptions() {
    requestRoleList();
    requestAllPathList();
  }

  return {
    roleList,
    requestRoleList,
    allPathList,
    approverPathList: allPathList?.filter((item) => item.type === 1),
    agreePathList: allPathList?.filter((item) => item.type === 2),
    itemPathList: allPathList?.filter((item) => item.type === 3),
    getAllOptions,
    noticePathList: allPathList?.filter((item) => item.type === 4),
  };
};

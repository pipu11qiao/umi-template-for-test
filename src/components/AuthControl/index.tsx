import React from 'react';
import { useModel } from '@umijs/max';

/**
 * 使用参考
 * <AuthControl currentKey='demo'>
 *    <button>demo</button>
 * </AuthControl>
 */

const AuthControl: React.FC<{
  children: any;
  // 当前控件key
  currentKey: string;
}> = (props) => {
  const { currentKey, children } = props;
  const { initialState } = useModel('@@initialState');
  if (!initialState?.buttonPermissions[currentKey]) {
    return null;
  }
  return children;
};

export default AuthControl;

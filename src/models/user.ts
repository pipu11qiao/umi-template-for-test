/*
 * @Author: wangli
 * @Date: 2023-04-07 15:58:44
 * @LastEditors: wangli
 * @LastEditTime: 2023-04-07 16:12:24
 */
import { UserContext } from '@/components/Provider';
import { useContext } from 'react';
export default () => {
  return useContext(UserContext);
};

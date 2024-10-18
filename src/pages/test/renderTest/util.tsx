import { CommonData } from '@/utils/commonUtils';
import { getMapForOptions } from '@xdf/material-components';

// testStatus 佣金:1,服务费:2,保证金扣款:3,营销补贴:4
export enum TestStatus {
  '佣金' = 1,
  '服务费' = 2,
  '保证金扣款' = 3,
  '营销补贴' = 4,
}
export const testStatusSelectOptions = [
  { label: '佣金', value: TestStatus.佣金 },
  { label: '服务费', value: TestStatus.服务费 },
  { label: '保证金扣款', value: TestStatus.保证金扣款 },
  { label: '营销补贴', value: TestStatus.营销补贴 },
];
export const testStatusOptionsMap: Map<TestStatus, string> = getMapForOptions(
  testStatusSelectOptions,
);

type TestRenderClientData = {
  name?: string;
};
type TestRenderServerData = {
  name?: string;
};
export const testRender: CommonData<
  TestRenderClientData,
  TestRenderServerData
> = {
  getData() {
    return Promise.resolve();
  },
  setData() {
    return Promise.resolve();
  },
  checkData() {
    return Promise.resolve();
  },
};

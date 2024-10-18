interface IMENU {
  key?: string;
  label?: string;
  path?: string;
  children?: IMENU[];
}

type EnvType = 'local' | 'dev' | 'qa' | 'demo' | 'uat' | 'prod';

/**
 * 获取对象某一个Key的类型
 */
type PickKey<T, K extends keyof T> = T[K];

/**
 * 获取数组项的类型
 */
type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

/**
 * 获取数组第一项的内容
 */
type ArrayFirst<T extends any[]> = T extends [infer U, ...any[]] ? U : never;
/**
 * 获取数组第一项的内容 readonly
 */
type ArrayFirstReadOnly<T> = T extends readonly [infer U, ...any[]] ? U : never;

/**
 * 获取函数第一个参数类型
 */
type FunctionFirstParam<T> = T extends (arg: infer P, ...others: any[]) => void
  ? P
  : never;
type NotNull<T> = T extends null | undefined ? never : T;

type Primitive = undefined | null | boolean | string | number;

type SelectOptions = { label: any; value: any; disabled?: boolean }[];

type ErrorItem = {
  key: string;
  messageLabel: string;
  message?: string;
  flag?: 'some' | 'all';
  check?: (val: any, params: any) => boolean;
};

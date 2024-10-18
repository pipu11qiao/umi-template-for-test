/**
 * 获取数组第一项的内容
 */
type ArrayFirst<T extends any[]> = T extends [infer U, ...any[]] ? U : never;

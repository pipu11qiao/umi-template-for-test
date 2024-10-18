import { RuleItem, Rules } from 'async-validator';

// RuleItem['validator']

// 非空
export function getEmptyRuleValidator(
  label: string,
): RuleItem['asyncValidator'] {
  return (rule, value) => {
    if (typeof value === 'undefined') {
      return Promise.reject(`${label}不能为空`);
    } else if (typeof value === 'string' && !value.trim()) {
      return Promise.reject(`${label}不能为空`);
    }
    return Promise.resolve();
  };
}
export function getEmptyArrayValidator(
  label: string,
): RuleItem['asyncValidator'] {
  return (rule, value) => {
    if (!Array.isArray(value) || value.length === 0) {
      return Promise.reject(`${label}不能为空`);
    }
    return Promise.resolve();
  };
}
const letterOrNumberRegex = /^[A-Za-z0-9]+$/;

// 字母或数字
export function getLetterOrNumberRuleValidator(
  label: string,
): RuleItem['asyncValidator'] {
  return (rule, value) => {
    if (typeof value === 'undefined') {
      return Promise.reject(`${label}不能为空`);
    } else if (typeof value === 'string' && !value.trim()) {
      return Promise.reject(`${label}不能为空`);
    }
    if (!letterOrNumberRegex.test(value)) {
      return Promise.reject(`${label}只能有字母或数字组成`);
    }
    return Promise.resolve();
  };
}

// RuleItem
export const getEmptyRuleItem = (label: string): RuleItem => {
  return { asyncValidator: getEmptyRuleValidator(label) };
};
export const getLetterOrNumberRuleItem = (label: string): RuleItem => {
  return { asyncValidator: getLetterOrNumberRuleValidator(label) };
};
export const getEmptyArrayRuleItem = (label: string): RuleItem => {
  return { asyncValidator: getEmptyArrayValidator(label) };
};

// 示例

export const exampleDescriptor: Rules = {
  name: getEmptyRuleItem('名字'),
  age: {
    asyncValidator: getEmptyRuleValidator('年龄'),
  },
  // 图片['url1','url2']
  iamges: {
    type: 'array',
    required: true,
    len: 2,
    0: {
      type: 'string',
      required: true,
    },
    1: {
      type: 'string',
      required: true,
    },
  },
  enumDataItems: {
    type: 'array',
    required: true,
    len: 2,
    fields: {
      0: {
        type: 'object',
        required: true,
        fields: {
          enumText: { type: 'string', required: true },
          enumValue: { type: 'string', required: true },
        },
      },
      1: {
        type: 'object',
        required: true,
        fields: {
          enumText: { type: 'string', required: true },
          enumValue: { type: 'string', required: true },
        },
      },
    },
  },
};

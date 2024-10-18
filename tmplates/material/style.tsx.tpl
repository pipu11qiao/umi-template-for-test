import type { CSSInterpolation } from '@ant-design/cssinjs';
import type React from 'react';
import type { FullToken } from 'antd/es/theme/internal';
import { mergeToken } from 'antd/es/theme/internal';
import type { CSSObject } from '@ant-design/cssinjs';
import { genComponentStyleHook } from '@xdf/material-theme';

// import { resetComponent } from 'antd/es/style';
interface {{UpperFirstName}}Token extends FullToken<'Tag'> {
  titleFontSize: number;
  descFontSize: number;
}

// ============================== Styles ==============================

const genBaseStyle = (token: {{UpperFirstName}}Token): CSSInterpolation => {
  const { componentCls, titleFontSize, descFontSize } = token;

  return {
    // Result
    [componentCls]: {
      position: 'relative',
      backgroundColor: '#fff',
      fontSize: titleFontSize,
    },
  };
};
// ============================== Export ==============================
export default genComponentStyleHook('{{UpperFirstName}}Box' as 'Tag', (token) => {
  // const { fontSize } = token;
  const titleFontSize = 16;
  const descFontSize = 12;

  const tagToken = mergeToken<{{UpperFirstName}}Token>(token, {
    titleFontSize,
    descFontSize,
  });

  return [genBaseStyle(tagToken)];
});

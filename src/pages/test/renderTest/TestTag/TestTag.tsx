import React, { FC } from 'react';

import { prefix } from './util';
import type { TestTagProps } from './util';
import classNames from 'classnames';
import './style.less';

const InnerTestTag: FC<TestTagProps> = (props) => {
  const { className, style } = props;
  return (
    <div className={classNames([className, `${prefix}`])} style={style}>
      <div>TestTag outer</div>
      <div className={`${prefix}-content`}>TestTag inner</div>
    </div>
  );
};

export default InnerTestTag;

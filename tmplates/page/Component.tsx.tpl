import React, { FC } from 'react';

import { prefix } from './util';
import type { {{UpperFirstName}}Props } from './util';
import classNames from 'classnames';
import './style.less';

const Inner{{UpperFirstName}}: FC<{{UpperFirstName}}Props> = (props) => {
  const { className, style } = props;
  return (
    <div className={classNames([className, `${prefix}`])} style={style}>
      <div>{{UpperFirstName}} outer</div>
      <div className={`${prefix}-content`}>{{UpperFirstName}} inner</div>
    </div>
  );
};

export default Inner{{UpperFirstName}};

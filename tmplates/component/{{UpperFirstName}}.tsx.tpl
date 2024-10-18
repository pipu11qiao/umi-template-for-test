import React, { FC } from 'react';

import { prefix } from './util';
import type { {{upperFirstName}}Props } from './util';
import classNames from 'classnames';
import './style.less';

const Inner{{upperFirstName}}: FC<{{upperFirstName}}Props> = (props) => {
  const { className, style } = props;
  return (
    <div className={classNames([className, `${prefix}`])} style={style}>
      <div>{{upperFirstName}} outer</div>
      <div className={`${prefix}-content`}>{{upperFirstName}} inner</div>
    </div>
  );
};
console.log(3);

export default Inner{{upperFirstName}};

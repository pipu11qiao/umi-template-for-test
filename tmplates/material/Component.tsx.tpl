import React, { FC } from 'react';
import useStyle from './style';
import { prefix } from './util';
import type { {{UpperFirstName}}Props } from './util';
import classNames from 'classnames';

const Inner{{UpperFirstName}}: FC<{{UpperFirstName}}Props> = (props) => {
  const { className, style } = props;
  const [wrapSSR, hashId] = useStyle(prefix);
  const curClassName = classNames(prefix, className, hashId);
  return (
    <div className={curClassName} style={style}>
      <div>{{UpperFirstName}} outer</div>
      <div className={`${prefix}-content`}>{{UpperFirstName}} inner</div>
    </div>
  );
};

export default Inner{{UpperFirstName}};
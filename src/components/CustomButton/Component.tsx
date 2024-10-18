import React, { FC } from 'react';
import { Button } from 'antd';

import { prefix } from './util';
import type { CustomButtonProps } from './util';
import classNames from 'classnames';
import './style.less';

const InnerCustomButton: FC<CustomButtonProps> = (props) => {
  const { className, ...rest } = props;
  return <Button className={classNames([className, `${prefix}`])} {...rest} />;
};

export default InnerCustomButton;

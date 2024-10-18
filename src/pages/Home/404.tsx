import React from 'react';
import { Button } from 'antd';
import { history } from '@umijs/max';
import { IconPark } from '@xdf/material-components';

const App: React.FC = () => (
  <div
    style={{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
  >
    <IconPark name="IMemptycategory" size={160} />
    <span style={{ margin: '16px 0', color: '#414141' }}>页面不存在</span>
    <Button
      type="primary"
      onClick={() => {
        history.push('/');
      }}
    >
      返回首页
    </Button>
  </div>
);

export default App;

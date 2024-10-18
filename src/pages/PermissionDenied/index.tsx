import React from 'react';
import { IconPark } from '@xdf/material-components';

const App: React.FC = () => (
  <div
    style={{
      background: '#FFFFFF',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
  >
    <IconPark name="emptyaddress-1" size={120} />
    <span style={{ marginTop: '16px', color: '#989898' }}>
      当前页面无权限，请联系管理员
    </span>
  </div>
);

export default App;

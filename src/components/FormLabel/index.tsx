import React from 'react';
import styles from './index.less';

const FormLabel: React.FC<{
  children: JSX.Element;
  label: string;
  className?: string;
}> = (props) => {
  const { children, label, className } = props;

  return (
    <div className={`${styles.formItem} ${className}`}>
      <label className={styles.formLabel}>{label}</label>
      <div className={styles.formInfo}>{children}</div>
    </div>
  );
};

export default FormLabel;

import { Component } from './types';
import Link from 'next/link';
import styles from './styles.module.scss';

export const ReactCommonLayout: Component = (props) => {
  const { children, hookName } = props;

  return (
    <>
      <div className={styles.to_home}>
        <Link href={'/'} className={styles.link}></Link>
      </div>

      <h1 className={styles.title}>{hookName}</h1>
      {children}
    </>
  );
};

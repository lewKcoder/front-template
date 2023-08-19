import { FunctionComponent } from 'react';
import { ReactCommonLayout } from '../react-common-layout';
import styles from './styles.module.scss';

export const UseState: FunctionComponent = () => {
  return (
    <ReactCommonLayout hookName={'useState'}>
      <div className={styles.container}>fwe</div>
    </ReactCommonLayout>
  );
};

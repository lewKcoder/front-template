import { FunctionComponent } from 'react';
import { inputNames } from './data';
import styles from './styles.module.scss';
import { ElementLayout } from '@/layouts/elements-layout';

export const Inputs: FunctionComponent = () => {
  return (
    <ElementLayout>
      <div className={styles.container}></div>
    </ElementLayout>
  );
};

import { FunctionComponent } from 'react';
import { inputNames } from './data';
import { ElementLayout } from '@/layouts/elements-layout';
import styles from './styles.module.scss';

export const Inputs: FunctionComponent = () => {
  return (
    <ElementLayout>
      <div className={styles.container}>
        <input type="text" className={styles.form_1} placeholder="Hello!!" />
        <input type="text" className={styles.form_2} placeholder="Hello!!" />
        <input type="text" className={styles.form_3} placeholder="Hello!!" />
        <input type="text" className={styles.form_4} placeholder="Hello!!" />
        <input type="text" className={styles.form_5} placeholder="Hello!!" />
        <input type="text" className={styles.form_6} placeholder="Hello!!" />
      </div>
    </ElementLayout>
  );
};

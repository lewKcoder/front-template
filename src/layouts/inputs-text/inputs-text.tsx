import { FunctionComponent } from 'react';
import { inputNames } from './data';
import { ElementsCommonLayout } from '@/layouts/elements-common-layout';
import styles from './styles.module.scss';

export const InputsText: FunctionComponent = () => {
  return (
    <ElementsCommonLayout>
      <div className={styles.container}>
        <input type="text" className={styles.form_1} placeholder="form_1" />
        <input type="text" className={styles.form_2} placeholder="form_2" />
        <input type="text" className={styles.form_3} placeholder="form_3" />
        <input type="text" className={styles.form_4} placeholder="form_4" />
        <input type="text" className={styles.form_5} placeholder="form_5" />
        <input type="text" className={styles.form_6} placeholder="form_6" />
        <input type="text" className={styles.form_7} placeholder="form_7" />
        <input type="text" className={styles.form_8} placeholder="form_8" />
        <input type="text" className={styles.form_9} placeholder="form_9" />
        <input type="text" className={styles.form_10} placeholder="form_10" />
        <input type="text" className={styles.form_11} placeholder="form_11" />
        <input type="text" className={styles.form_12} placeholder="form_12" />
        <input type="text" className={styles.form_13} placeholder="form_13" />
        <div className={styles.form_14}>
          <input type="text" id="Form14" placeholder="form_14" className={styles.input} />
          <label htmlFor="Form14" className={styles.label}>
            form_14
          </label>
        </div>
        <div className={styles.form_15}>
          <input type="text" id="Form15" placeholder="form_15" className={styles.input} />
          <label htmlFor="Form15" className={styles.label}>
            form_15
          </label>
        </div>
        <div className={styles.form_16}>
          <input type="text" placeholder="form_16" className={styles.input} />
          <i className={styles.icon} aria-hidden="true"></i>
        </div>
        <div className={styles.form_17}>
          <i className={styles.icon} aria-hidden="true"></i>
          <input type="text" placeholder="form_17" className={styles.input} />
        </div>
        <div className={styles.form_18}>
          <input type="text" id="Form18" className={styles.input} />
          <label htmlFor="Form18" className={styles.label}>
            form_18
          </label>
        </div>
        <div className={styles.form_19}>
          <input type="text" placeholder="form_19" className={styles.input} />
          <span className={styles.underline} />
        </div>
        <div className={styles.form_20}>
          <input type="text" className={styles.input} />
          <label className={styles.label}>form_20</label>
          <span className={styles.bg}></span>
        </div>
        <div className={styles.form_21}>
          <input type="text" className={styles.input} />
          <label className={styles.label}>form_21</label>
          <span className={styles.border}>
            <i></i>
          </span>
        </div>
        <div className={styles.form_22}>
          <input type="text" id="Form22" className={styles.input} />
          <label htmlFor="Form22" className={styles.label}>
            form_22
          </label>
        </div>
        <div className={styles.form_23}>
          <input type="text" placeholder="form_23" className={styles.input} />
          <span className={styles.underline} />
        </div>
        <input type="text" placeholder="form_24" className={styles.form_24} />
        <input type="text" placeholder="form_25" className={styles.form_25} />
      </div>
    </ElementsCommonLayout>
  );
};

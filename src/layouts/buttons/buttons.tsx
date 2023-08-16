import { FunctionComponent } from 'react';
import { buttonNames, withSpanButtonNames } from './data';
import styles from './styles.module.scss';

export const Buttons: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      {buttonNames.map((name) => (
        <button key={name} className={styles[`button_${name}`]}>
          button_{name}
        </button>
      ))}

      {withSpanButtonNames.map((name) => (
        <button key={name} className={styles[`button_${name}`]}>
          <span>button_{name}</span>
        </button>
      ))}

      <button className={styles.button_icon_animation}>
        <i>icon</i>button_icon_animation
      </button>
      <button className={styles.button_text_change}>
        <span className={styles.original}>button_text_change</span>
        <span className={styles.hover}>Hello!</span>
      </button>
    </div>
  );
};

import { FunctionComponent } from 'react';
import styles from './styles.module.scss';

export const Buttons: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button_simple}>button_simple</button>
      <button className={styles.button_gradient}>button_gradient</button>
      <button className={styles.button_outline}>button_outline</button>
      <button className={styles.button_fade_hover}>button_fade_hover</button>
      <button className={styles.button_shadow}>button_shadow</button>
      <button className={styles.button_3d}>button_3d</button>
      <button className={styles.button_text_shadow}>button_text_shadow</button>
      <button className={styles.button_double_border}>button_double_border</button>
      <button className={styles.button_groove_border}>button_groove_border</button>
      <button className={styles.button_inset_border}>button_inset_border</button>
      <button className={styles.button_dashed_border}>button_dashed_border</button>
      <button className={styles.button_border_3d}>
        <span>button_border_3d</span>
      </button>
      <button className={styles.button_stripe}>button_stripe</button>
      <button className={styles.button_neon}>button_neon</button>
      <button className={styles.button_left_to_right_line}>button_left_to_right_line</button>
      <button className={styles.button_icon_animation}>
        <i>icon</i>button_icon_animation
      </button>
      <button className={styles.button_border_hover}>button_border_hover</button>
      <button className={styles.button_text_animation}>
        <span>button_text_animation</span>
      </button>
      <button className={styles.button_click_animation}>button_click_animation</button>
    </div>
  );
};

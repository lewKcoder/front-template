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
      <button className={styles.button_left_to_right_line}>button_left_to_right_line</button>
      <button className={styles.button_icon_animation}>
        <i>icon</i>button_icon_animation
      </button>
      <button className={styles.button_border_hover}>button_border_hover</button>
      <button className={styles.button_text_animation}>
        <span>button_text_animation</span>
      </button>
      <button className={styles.button_ripple_animation}>button_ripple_animation</button>
      <button className={styles.button_rotate_hover}>button_rotate_hover</button>
      <button className={styles.button_color_change}>button_color_change</button>
      <button className={styles.button_scale_hover}>button_scale_hover</button>
      <button className={styles.button_text_change}>
        <span className={styles.original}>button_text_change</span>
        <span className={styles.hover}>Hello!</span>
      </button>
      <button className={styles.button_blur_hover}>button_blur_hover</button>
      <button className={styles.button_flip_hover}>button_flip_hover</button>
      <button className={styles.button_zigzag}>button_zigzag</button>
      <button className={styles.button_wavy}>button_wavy</button>
      <button className={styles.button_blink}>button_blink</button>
      <button className={styles.button_diagonal_slide}>button_diagonal_slide</button>
      <button className={styles.button_diagonal_slide_reverse}>
        button_diagonal_slide_reverse
      </button>
      <button className={styles.button_bounce}>button_bounce</button>
      <button className={styles.button_neon}>button_neon</button>
      <button className={styles.button_color_shift}>button_color_shift</button>
      <button className={styles.button_spin}>button_spin</button>
      <button className={styles.button_shake}>button_shake</button>
      <button className={styles.button_burn}>button_burn</button>
      <button className={styles.button_glitch}>button_glitch</button>
      <button className={styles.button_3d_shadow}>button_3d_shadow</button>
      <button className={styles.button}>button</button>
      <button className={styles.button}>button</button>
      <button className={styles.button}>button</button>
      <button className={styles.button}>button</button>
      <button className={styles.button}>button</button>
      <button className={styles.button}>button</button>
      <button className={styles.button}>button</button>
      <button className={styles.button}>button</button>
    </div>
  );
};

import { FunctionComponent } from 'react';
import styles from './styles.module.scss';

const buttonNames = [
  'simple',
  'gradient',
  'outline',
  'fade_hover',
  'shadow',
  '3d',
  'text_shadow',
  'double_border',
  'groove_border',
  'inset_border',
  'dashed_border',
  'stripe',
  'left_to_right_line',
  'border_hover',
  'ripple_animation',
  'rotate_hover',
  'color_change',
  'scale_hover',
  'blur_hover',
  'flip_hover',
  'zigzag',
  'wavy',
  'blink',
  'diagonal_slide',
  'diagonal_slide_reverse',
  'neon',
  'color_shift',
  'spin',
  'shake',
  'burn',
  'glitch',
  '3d_shadow',
  'pulse',
  'swing',
  'tada',
  'wobble',
  'jello',
  'heart_beat',
  'flip',
  'gradient_border',
  'gradient-text',
];

export const Buttons: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      {buttonNames.map((name) => (
        <button key={name} className={styles[`button_${name}`]}>
          button_{name}
        </button>
      ))}
      <button className={styles.button_border_3d}>
        <span>button_border_3d</span>
      </button>
      <button className={styles.button_icon_animation}>
        <i>icon</i>button_icon_animation
      </button>
      <button className={styles.button_text_change}>
        <span className={styles.original}>button_text_change</span>
        <span className={styles.hover}>Hello!</span>
      </button>
      <button className={styles.button_text_pop}>
        <span>button_text_pop</span>
      </button>
      <button className={styles.button_flat_1}>
        <span>button_flat_1</span>
      </button>
      <button className={styles.button_flat_2}>
        <span>button_flat_2</span>
      </button>
      <button className={styles.button_round_corner}>button_round_corner</button>
      <button className={styles.button_two_cross_border}>button_two_cross_border</button>
    </div>
  );
};

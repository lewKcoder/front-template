import { FunctionComponent } from 'react';
import { ElementLayout } from '../elements-layout';
import styles from './styles.module.scss';

export const InputsCheckbox: FunctionComponent = () => {
  return (
    <ElementLayout>
      <div className={styles.container}>
        <div className={styles.checkbox_1}>
          <input id="Checkbox1" className={styles.checkbox} type="checkbox" aria-hidden="true" />
          <label htmlFor="Checkbox1">Checkbox 1</label>
        </div>
        <div className={styles.checkbox_2}>
          <input type="checkbox" className={styles.checkbox} />
        </div>
        <div className={styles.checkbox_3}>
          <input type="checkbox" id="Checkbox3" className={styles.checkbox} />
          <label htmlFor="Checkbox3" className={styles.toggle}>
            <span></span>
          </label>
        </div>
        <div className={styles.checkbox_4}>
          <input type="checkbox" className={styles.checkbox} id="Checkbox4" />
          <label className={styles.label} htmlFor="Checkbox4">
            <span>
              <svg width="12px" height="10px">
                <use xlinkHref="#check-4"></use>
              </svg>
            </span>
            <span>Morning</span>
          </label>
          <svg className={styles.svg}>
            <symbol id="check-4" viewBox="0 0 12 10">
              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
            </symbol>
          </svg>
        </div>
        <div className={styles.checkbox_5}>
          <input type="checkbox" className={styles.checkbox} id="Checkbox5" />
          <label
            className={styles.label}
            data-tg-off="OFF"
            data-tg-on="ON"
            htmlFor="Checkbox5"
          ></label>
        </div>
        <div className={styles.checkbox_6}>
          <input type="checkbox" id="Checkbox6" className={styles.checkbox} />
          <label htmlFor="Checkbox6" className={styles.label}>
            To-do
          </label>
        </div>
        <div className={styles.checkbox_7}>
          <div className={styles.checkbox_content}>
            <input type="checkbox" id="Checkbox7" className={styles.checkbox} />
            <label htmlFor="Checkbox7"></label>
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
              <path d="M2 8.36364L6.23077 12L13 2"></path>
            </svg>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo-12">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"></feGaussianBlur>
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                  result="goo-12"
                ></feColorMatrix>
                <feBlend in="SourceGraphic" in2="goo-12"></feBlend>
              </filter>
            </defs>
          </svg>
        </div>
        <div className={styles.checkbox_8}>
          <div className={styles.checkbox_content}>
            <input type="checkbox" id="Checkbox8" className={styles.checkbox} />
            <label htmlFor="Checkbox8"></label>
          </div>
        </div>
        <div className={styles.checkbox_9}>
          <label className={styles.label} htmlFor="Checkbox9">
            <input type="checkbox" id="Checkbox9" className={styles.checkbox} />
            <div className={styles.slider}></div>
          </label>
        </div>
        <div className={styles.checkbox_10}>
          <input type="checkbox" id="Checkbox10" className={styles.checkbox} />
          <label htmlFor="Checkbox10" className={styles.label}>
            <span></span>Checkbox
          </label>
        </div>
        <div className={styles.checkbox_11}>
          <input type="checkbox" id="Checkbox11" className={styles.checkbox} />
          <label htmlFor="Checkbox11" className={styles.label}>
            <div className={styles.item}></div>
          </label>
        </div>
        <div className={styles.checkbox_12}>
          <input id="Checkbox12" type="checkbox" className={styles.checkbox} />
          <svg>
            <use xlinkHref="#checkmark-28" />
          </svg>
          <label htmlFor="Checkbox12" className={styles.label}>
            Checkbox
          </label>
          <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
            <symbol id="checkmark-28" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-miterlimit="10"
                fill="none"
                d="M22.9 3.7l-15.2 16.6-6.6-7.1"
              ></path>
            </symbol>
          </svg>
        </div>
        <div className={styles.checkbox_13}>
          <span className={styles.checkbox_content}>
            <input type="checkbox" className={styles.checkbox} />
            <svg>
              <use xlinkHref="#Checkbox13" className={styles.checkbox_content}></use>
            </svg>
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
            <symbol id="Checkbox13" viewBox="0 0 22 22">
              <path
                fill="none"
                stroke="currentColor"
                d="M5.5,11.3L9,14.8L20.2,3.3l0,0c-0.5-1-1.5-1.8-2.7-1.8h-13c-1.7,0-3,1.3-3,3v13c0,1.7,1.3,3,3,3h13 c1.7,0,3-1.3,3-3v-13c0-0.4-0.1-0.8-0.3-1.2"
              />
            </symbol>
          </svg>
        </div>
        <div className={styles.checkbox_14}>
          <input type="checkbox" className={styles.checkbox} />
          <svg viewBox="0 0 35.6 35.6">
            <circle className={styles.background} cx="17.8" cy="17.8" r="17.8"></circle>
            <circle className={styles.stroke} cx="17.8" cy="17.8" r="14.37"></circle>
            <polyline
              className={styles.check}
              points="11.78 18.12 15.55 22.23 25.17 12.87"
            ></polyline>
          </svg>
        </div>
        <div className={styles.checkbox_15}>
          <label className={styles.label}>
            <input type="checkbox" className={styles.checkbox} />
            <span className={styles.svg_content}>
              <svg
                aria-hidden="true"
                className={styles.icon_checkbox}
                width="28px"
                height="28px"
                viewBox="0 0 28 28"
                version="1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 14l8 7L24 7"></path>
              </svg>
            </span>
            <p className={styles.checkbox_textwrapper}>Checkbox</p>
          </label>
        </div>
        <div className={styles.checkbox_16}>
          <input type="checkbox" className={styles.checkbox} id="Checkbox16" />
          <label className={styles.label} htmlFor="Checkbox16"></label>
        </div>
        <div className={styles.checkbox_17}>
          <label className={styles.label}>
            <input type="checkbox" className={styles.checkbox} />
            <span className={styles.span}></span>
          </label>
        </div>
        <div className={styles.checkbox_18}>
          <label className={styles.label}>
            <input type="checkbox" className={styles.checkbox} />
          </label>
        </div>
        <div className={styles.checkbox_19}>
          <label className={styles.label}>
            <input type="checkbox" className={styles.checkbox} />
            <div>
              <svg viewBox="0 0 44 44">
                <path
                  d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758"
                  transform="translate(-2.000000, -2.000000)"
                ></path>
              </svg>
            </div>
          </label>
        </div>
        <div className={styles.checkbox_20}>
          <input type="checkbox" id="Checkbox20" className={styles.checkbox} />
          <label className={styles.label} htmlFor="Checkbox20">
            <span>
              <svg width="12px" height="10px" viewBox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
              </svg>
            </span>
            <span>Checkbox</span>
          </label>
        </div>
        <div className={styles.checkbox_21}>
          <input type="checkbox" id="Checkbox21" className={styles.checkbox} />
          <label htmlFor="Checkbox21" className={styles.label}>
            <svg width="18px" height="18px" viewBox="0 0 18 18">
              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
              <polyline points="1 9 7 14 15 4"></polyline>
            </svg>
          </label>
        </div>
        <div className={styles.checkbox_22}>
          <input type="checkbox" id="Checkbox22" className={styles.checkbox} />
          <label htmlFor="Checkbox22" className={styles.label}>
            Check this
          </label>
        </div>
        <div className={styles.checkbox_23}>
          <label className={styles.label}>
            <input type="checkbox" className={styles.checkbox} />
          </label>
        </div>
        <div className={styles.checkbox_24}>
          <div className={styles.block}>
            <input type="checkbox" id="Checkbox24" className={styles.checkbox} />
            <label htmlFor="Checkbox24" className={styles.label}></label>
          </div>
        </div>
        <div className={styles.checkbox_25}>
          <input type="checkbox" id="Checkbox25" className={styles.checkbox} />
          <label htmlFor="Checkbox25" className={styles.toggle}>
            <span>
              <svg width="10px" height="10px" viewBox="0 0 10 10">
                <path d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"></path>
              </svg>
            </span>
          </label>
        </div>
      </div>
    </ElementLayout>
  );
};
import { FunctionComponent } from "react";
import { ElementsCommonLayout } from "../elements-common-layout";
import styles from "./styles.module.scss";

export const Cards: FunctionComponent = () => {
  return (
    <ElementsCommonLayout>
      <div className={styles.container}>
        <div className={styles.card_1}>
          <img src="/sumple.jpg" alt="Card Image" />
          <h2>Card 1</h2>
          <p>Card description goes here.</p>
          <button>Action</button>
        </div>
        <div className={styles.card_2}>
          <img src="/sumple.jpg" alt="Card Image" />
          <h2>Card 2</h2>
          <p>Card description goes here.</p>
          <button>Action</button>
        </div>
        <div className={styles.card_3}>
          <div className={styles.media_content}>
            <img src="/sumple.jpg" alt="Card Image" />
          </div>
          <h2>Card 3</h2>
          <p>Card description goes here.</p>
        </div>
        <div className={styles.card_4}>
          <img src="/sumple.jpg" alt="Card Image" />
          <h2>Card 4</h2>
          <p>Card description goes here.</p>
          <button>Action</button>
        </div>
        <div className={styles.card_5}>
          <img src="/sumple.jpg" alt="Card Image" />
          <h2>Card 5</h2>
          <p>Card description goes here.</p>
          <div className={styles.actions}>
            <button>Action 1</button>
            <button className={styles.button2}>Action 2</button>
          </div>
        </div>
        <div className={styles.card_6}>
          <div className={styles.feature_icon}>
            <img src="/sumple.jpg" alt="Feature Icon" />
          </div>
          <h2>Card 6</h2>
          <p>Card description goes here.</p>
        </div>
        <div className={styles.card_7}>
          <img src="/sumple.jpg" alt="Card Image" />
          <div className={styles.overlay}>
            <h2>Card 7</h2>
            <p>Card description goes here.</p>
          </div>
        </div>
        <div className={styles.card_8}>
          <div className={styles.profile_image}>
            <img src="/sumple.jpg" alt="Profile Image" />
          </div>
          <h2>Card 8</h2>
          <p>Card description goes here.</p>
          <button>Action</button>
        </div>
        <div className={styles.card_9}>
          <img src="/sumple.jpg" alt="Product Image" />
          <h2>Card 9</h2>
          <p>Card description goes here.</p>
          <div className={styles.price}>$99.99</div>
          <button>Action</button>
        </div>
        <div className={styles.card_10}>
          <img src="/sumple.jpg" alt="Event Image" />
          <h2>Card 10</h2>
          <p>Card description goes here.</p>
          <div className={styles.date}>2000/01/01</div>
          <button>Action</button>
        </div>
        <div className={styles.card_11}>
          <div className={styles.media_content}>
            <div className={styles.img} />
          </div>
          <div className={styles.text_content}>
            <h2>Card 11</h2>
            <p>Card description goes here.</p>
          </div>
        </div>
        <div className={styles.card_12}>
          <div className={styles.action_image}>
            <div className={styles.img} />
          </div>
          <div className={styles.action_content}>
            <h2>Card 12</h2>
            <p>Card description goes here.</p>
            <button>Action</button>
          </div>
        </div>
        <div className={styles.card_13}>
          <div className={styles.product_image}>
            <div className={styles.img} />
          </div>
          <div className={styles.product_content}>
            <h2>Card 13</h2>
            <p>Card description goes here.</p>
            <div className={styles.price}>$99.99</div>
            <button>Action</button>
          </div>
        </div>
        <div className={styles.card_14}>
          <div className={styles.profile_image}>
            <img src="/sumple.jpg" alt="Profile Image" />
          </div>
          <div className={styles.profile_content}>
            <h2>Card 14</h2>
            <p>Card description goes here.</p>
            <button>Action</button>
          </div>
        </div>
        <div className={styles.card_15}>
          <img src="/sumple.jpg" alt="Card Image" />
          <h2>Card 15</h2>
          <p>Card description goes here.</p>
          <button>Action</button>
        </div>
        <div className={styles.card_16}>
          <h2>Card 16</h2>
        </div>
        <div className={styles.card_17}>
          <h2>Card 17</h2>
          <p>Card description goes here.</p>
        </div>
        <div className={styles.card_18}>
          <img src="/sumple.jpg" alt="Card Image" />
          <div className={styles.overlay_text}>
            <h2>Card 18</h2>
            <p>Card description goes here.</p>
          </div>
        </div>
        <div className={styles.card_19}>
          <div className={styles.sidebar}>
            <img src="/sumple.jpg" alt="Icon" />
          </div>
          <div className={styles.content}>
            <h2>Card 19</h2>
            <p>Card description goes here.</p>
          </div>
        </div>
        <div className={styles.card_20}>
          <div className={styles.rounded_image}>
            <img src="/sumple.jpg" alt="Card Image" />
          </div>
          <h2>Card 20</h2>
          <p>Card description goes here.</p>
        </div>
        <div className={styles.card_21}>
          <div className={styles.top_image}>
            <img src="/sumple.jpg" alt="Top Image" />
          </div>
          <div className={styles.bottom_image}>
            <img src="/sumple.jpg" alt="Bottom Image" />
          </div>
          <h2>Card 21</h2>
          <p>Card description goes here.</p>
        </div>
        <div className={styles.card_22}>
          <div className={styles.side_text}>
            <h2>Card 22</h2>
            <p>Card description goes here.</p>
          </div>
          <div className={styles.main_content}>
            <div className={styles.img} />
          </div>
        </div>
        <div className={styles.card_23}>
          <img src="/sumple.jpg" alt="Card Image" />
          <div className={styles.floating_button}>
            <button>Action</button>
          </div>
        </div>
        <div className={styles.card_24}>
          <div className={styles.ribbon}>Ribbon</div>
          <img src="/sumple.jpg" alt="Card Image" />
          <h2>Card 24</h2>
          <p>Card description goes here.</p>
        </div>
      </div>
    </ElementsCommonLayout>
  );
};

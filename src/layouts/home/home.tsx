import { FunctionComponent } from 'react';
import { elementsMenuItems } from '@/const/urls';
import { Inter } from 'next/font/google';
import styles from './styles.module.scss';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const Home: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <p>各種要素のスタイリングやReact, Nextjsをハンズオンで確認するためのプロジェクト</p>
        <div>
          <a href="https://twitter.com/lew_yumei" target="_blank" rel="noopener noreferrer">
            By @lew_yumei
          </a>
        </div>
      </div>

      <div className={styles.content}>
        <p className={`${inter.className} ${styles.content_title}`}>Elements</p>
        <div className={styles.grid}>
          {elementsMenuItems.map(({ href, label, description }) => (
            <Link key={label} href={href} className={styles.card}>
              <h2 className={inter.className}>
                {label} <span>-&gt;</span>
              </h2>
              <p className={inter.className}>{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

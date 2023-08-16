import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import Link from 'next/link';
import { menuItems } from '@/const/urls';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Front template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>サイトレイアウトで使うテンプレートやReact,Nextjsのハンズオンのためのプロジェクト</p>
          <div>
            <a href="https://twitter.com/lew_yumei" target="_blank" rel="noopener noreferrer">
              By @lew_yumei
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.grid}>
            {menuItems.map(({ href, label, description }) => (
              <Link key={label} href={href} className={styles.card}>
                <h2 className={inter.className}>
                  {label} <span>-&gt;</span>
                </h2>
                <p className={inter.className}>{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

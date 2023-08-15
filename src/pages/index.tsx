import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';

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
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Elements <span>-&gt;</span>
              </h2>
              <p className={inter.className}>様々なスタイルのボタンやフォームなどを要素単位で。</p>
            </a>

            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Templates <span>-&gt;</span>
              </h2>
              <p className={inter.className}>いくつかの要素を組み込んだテンプレート単位で。</p>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

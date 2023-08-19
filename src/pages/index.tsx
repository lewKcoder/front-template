import Head from 'next/head';
import { Home as HomeLayout } from '@/layouts/home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Front template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout />
    </>
  );
}

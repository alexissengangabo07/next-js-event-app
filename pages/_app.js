import NextNProgress from 'nextjs-progressbar';
import MainLayout from '../layout/MainLayout';
import '../styles/globals.scss';
import '../styles/app-style.scss';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

import NextNProgress from 'nextjs-progressbar';
import MainLayout from '../layout/MainLayout';
// import '../styles/globals.css'

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

import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import nProgress from 'nprogress';
import { Header } from '../components/Header';
import HeaderCellphone from '../components/HeaderCellphone';
import { GlobalStyle } from '../styles/global';
import '../styles/nprogress.css';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <HeaderCellphone />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default App;

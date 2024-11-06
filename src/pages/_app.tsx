import type { AppProps } from 'next/app';
import '@/styles/globals.scss';
import '@/styles/reset.css';
import Header from '@/components/Layout/Header';
import { useRouter } from 'next/router';
import GNB from '@/components/Layout/GNB';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const hideGNB = ['/', '/login'].includes(router.pathname);
  const hideHeader = ['/', '/login'].includes(router.pathname);

  return (
    <div className="body">
      <div className="appContainer">
        {!hideHeader && <Header />}
        <Component {...pageProps} />
        {!hideGNB && <GNB />}
      </div>
    </div>
  );
}

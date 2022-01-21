import '../styles/styles.scss';

import { FC } from 'react';
import type { AppProps } from 'next/app';
import { ManagedUIContext } from '@components/ui/context';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, fas, faSearch, faSun } from '@fortawesome/free-solid-svg-icons';

library.add(fas, faSun, faMoon, faSearch);

const Noop: FC = ({ children }) => <>{children}</>;

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <ManagedUIContext>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </ManagedUIContext>
  );
}

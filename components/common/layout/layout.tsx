import * as React from 'react';
import { Header } from '../header';

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="site-wrap">
      <Header />
      <div className="main">{children}</div>
    </div>
  );
};

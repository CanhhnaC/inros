import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemedImage } from '@components/ui/themed-image';

export const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  const isLight = theme === 'light';
  // When mounted on client, now we can show the UI
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return <ThemedImage />;

  return (
    <header className="site-header">
      <div className="header-inner flex justify-space-between">
        <div className="header-logo flex">
          <Link href="/">
            <a className={`logo-img ${isLight ? 'theme-light-logo' : 'theme-dark-logo'}`}>
              <Image
                src={isLight ? '/assets/light-theme-logo.svg' : '/assets/dark-theme-logo.svg'}
                alt="Inros"
                height={40}
                width={130}
              />
            </a>
          </Link>
        </div>
        <input id="mobile-menu-toggle" className="mobile-menu-checkbox" type="checkbox" />
        <label htmlFor="mobile-menu-toggle" className="mobile-menu-icon" aria-label="menu toggle button">
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <span className="sr-only">Menu toggle button</span>
        </label>
        <nav className="nav-wrap flex" role="navigation" aria-label="Main navigation">
          <ul className="nav-left no-style-list" role="menu">
            <li className="nav-item" role="menuitem">
              <a href="/features/" className="nav-link">
                Features
              </a>
            </li>
            <li className="nav-item" role="menuitem">
              <a href="/elements/" className="nav-link">
                Elements
              </a>
            </li>
            <li className="nav-item" role="menuitem">
              <a href="/membership/" className="nav-link">
                Membership
              </a>
            </li>
            <li className="nav-item" role="menuitem">
              <a href="/tags/" className="nav-link">
                Tags
              </a>
            </li>
            <li className=" has-dropdown">
              <a href="#" className="nav-link more-link">
                More{' '}
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                  <path d="M12 18c-.39 0-.78-.132-1.097-.398L.617 9.03a1.713 1.713 0 112.194-2.633l9.208 7.673 9.192-7.397a1.715 1.715 0 012.15 2.671l-10.286 8.277A1.714 1.714 0 0112 18z" />
                </svg>
              </a>
              <ul className="no-style-list dropdown-menu">
                <li className="nav-item" role="menuitem">
                  <a href="/authors/">Authors</a>
                </li>
                <li className="nav-item" role="menuitem">
                  <a href="/monthly-archive/">Monthly archive</a>
                </li>
                <li className="nav-item" role="menuitem">
                  <a href="/monthly-archive-paginated/">Monthly archive 2</a>
                </li>
                <li className="nav-item" role="menuitem">
                  <a href="/yearly-archive/">Yearly archive</a>
                </li>
                <li className="nav-item" role="menuitem">
                  <a href="/yearly-archive-paginated/">Yearly archive 2</a>
                </li>
                <li className="nav-item" role="menuitem">
                  <a href="/contact/">Contact</a>
                </li>
                <li className="nav-item" role="menuitem">
                  <a href="https://gbjsolution.com/documentation/ghost-themes/inros/">Documentation</a>
                </li>
                <li className="nav-item" role="menuitem">
                  <a href="https://1.envato.market/inros">Get theme</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="nav-right no-style-list" role="menu">
            <li className="nav-item" role="menuitem">
              <a className="nav-link" href="/signin/">
                Sign in
              </a>
            </li>
            <li className="nav-item" role="menuitem">
              <a className="btn btn-sm" href="/signup/">
                Sign Up
              </a>
            </li>
          </ul>
          <div className="icons-wrap">
            <a className="nav-icon search-icon flex js-search-button" aria-label="Open search">
              <FontAwesomeIcon icon="search" />
            </a>

            <a
              className="nav-icon theme-icon flex"
              aria-label="Toggle theme"
              onClick={() => setTheme(isLight ? 'dark' : 'light')}
            >
              <FontAwesomeIcon icon={isLight ? 'moon' : 'sun'} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

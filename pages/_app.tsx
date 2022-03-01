import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    //Enable dark theme
    document.documentElement.classList.add('dark');
    //Set default background color
    document.body.classList.add('bg-white', 'dark:bg-neutral-800');
  }, []);

  return (
    <div className={'text-slate-900 dark:text-white'}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

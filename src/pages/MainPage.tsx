import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from 'static/svgs';

import styles from './MainPage.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Logo className={styles.logo} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className={styles.link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Link className={styles.link} to="/sampletest">
          To test page
        </Link>
      </header>
    </div>
  );
};

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

import SampleTest from 'components/sampletest/SampleTest';

import styles from './SampleTestPage.module.css';

const Test: React.FC = () => (
  <div className={styles.row}>
    <SampleTest title="Test Title" />
    <Link to="/" className={styles.card}>
      <h3>go Home</h3>
    </Link>
  </div>
);

export default Test;

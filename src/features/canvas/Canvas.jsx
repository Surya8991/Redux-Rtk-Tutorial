import React from 'react';

import Color from './Color';
import Font from './Font';
import styles from './Canvas.module.css';

export default function Canvas() {
  return (
    <>
     <h1>Redux RTK Demo</h1>
    <div className={styles.canvas}>
      <Color />
      <Font />
    </div>
    </>
    
  )
}
import React from 'react'
import styles from './page.module.css';

const layout = ({children}) => {
  return (
    <div>
      <h1 className={styles.mainTilte}>My Works</h1>
      {children}
    </div>
  )
}

export default layout
import React from 'react'
import { Container, Button } from 'react-bootstrap'
import styles from './index.module.css'

export const Footer = () => {
  return(
    <Container>
      <div className={styles.div}>
        <p className={styles.p}> Subtotal <span className={styles.span}>₦2,497.00</span></p>
        <p className={styles.p}>Estimated Tax <span className={styles.span}>₦119.64</span></p>
        <p className={styles.p}>Promotional Code: <span className={styles.spanP}>Z4KXLM9A</span><span className={styles.span}>₦-60.00</span></p>
      </div>
      <div>
        <p><Button className={styles.button}>Complete payment</Button><span className={styles.spanButton}> TOTAL: ₦2556.64</span></p>
      </div>
    </Container>
  )
}
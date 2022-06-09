import React from 'react'
import { Row, Image } from 'react-bootstrap'
import picture from '../../images/pictures.jpg'
import styles from './index.module.css'

export const Navbar = () => {
  return(
    <Row>
      <ul className={styles.ul}>
        <li><Image src={picture} fluid roundedCircle alt='img' className={styles.image}/></li>
        <li><a href="#bookings">BOOKINGS</a></li>
        <li><a href="#recent">RECENTLY VIEWED</a></li>
        <li><a href="#trips">TRIPS</a></li>
      </ul>
    </Row>
  )
}
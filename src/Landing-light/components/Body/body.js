import React, { useState } from 'react'
import { Col,Card, Container, Row, Form, Button } from 'react-bootstrap'
import { ReactComponent as Paypal } from '../../images/paypal.svg'
import { ReactComponent as Chip } from'../../images/creditCardChip.svg'
import { ReactComponent as Discover } from '../../images/discover.svg'
import { ReactComponent as MasterCard } from '../../images/master.svg'
import { ReactComponent as Visa } from  '../../images/visa.svg'
import { ReactComponent as Wifi } from '../../images/wifi.svg'
import { usePaymentInputs } from 'react-payment-inputs'
import styles from './index.module.css'



export const Body = () => {
  const [cardNumber, setCardNumber ] = useState('0000 0000 0000 0000')
  const [ expiryDate , setExpiryDate] = useState('01/09')
  const [cvc, setCvc] = useState('')
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs()
  const { erroredInputs, touchedInputs } = meta
  const handleChangeCardNumber = (event) => {
    setCardNumber(event.target.value)
  }
  const handleChangeExpiryDate = (event) => {
    setExpiryDate(event.target.value)
  }
  const handleChangeCVC = (event) => {
    setCvc(event.target.value)
  }
  const cardNumberFocus = () => {
    setCardNumber(' ')
  }
  const expiryDateFocus = () => {
    setExpiryDate(' ')
  }
  return(
    <Container className={styles.container}>
      <Row className={styles.row}>
        <Col md ={8} className={styles.col}>
          <h3 className={styles.h1}>Payment Information</h3>
          <p className={styles.p}>Choose your payment Information</p>
        </Col>
        <Col md ={4}>
          <Visa className={styles.visa}/>
          <Discover className={styles.discover}/>
          <span className={styles.span}>
            <input type='radio'/>
            <Paypal className={styles.paypal}/>
          </span>
        </Col>
      </Row>
      <Row>
        <Col md = {5}>
          <Card className={styles.card}>
            <Card.Body>
              <p className={styles.cardP}>CARD NUMBER</p>
              <p className={styles.cardP}>{cardNumber}</p>
              <Wifi className={styles.wifi}/>
              <Chip className={styles.chip}/>
              <p  className={styles.cardP}>EXPIRATION DATE  </p>
              <p className={styles.cardP}>{expiryDate}</p>
              <div className={styles.div}>
                <span className={styles.cardP}>John Doe</span>
                <MasterCard className={styles.masterCard}/>
              </div>

            </Card.Body>
          </Card>
        </Col>
        <Col md={1}></Col>
        <Col md ={6}>
          <Form>
            <Row className={styles.form}>
              <Form.Group as={Col} >
                <Form.Label>Credit card number</Form.Label>
                <Form.Control
                  { ...getCardNumberProps( { onChange: handleChangeCardNumber })}
                  onFocusCapture={cardNumberFocus}
                  isInvalid={touchedInputs.cardNumber && erroredInputs.cardNumber}
                  value = {cardNumber}
                />
                <Form.Control.Feedback type="invalid">{erroredInputs.cardNumber}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Expiration date</Form.Label>
                <Form.Control
                  {...getExpiryDateProps({ onChange: handleChangeExpiryDate })}
                  isInvalid={touchedInputs.expiryDate && erroredInputs.expiryDate}
                  onFocusCapture={expiryDateFocus}
                  value = {expiryDate}
                />
                <Form.Control.Feedback type="invalid">{erroredInputs.expiryDate}</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className={styles.form}>
              <Form.Group as={Col}>
                <Form.Label>Security code</Form.Label>
                <Form.Control
                  {...getCVCProps({ onChange: handleChangeCVC })}
                  isInvalid={touchedInputs.cvc && erroredInputs.cvc}
                  placeholder="123"
                  value={cvc}
                />
                <Form.Control.Feedback type="invalid">{erroredInputs.cvc}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Postal code</Form.Label>
                <Form.Control
                  type='text'
                  placeholder ='1234'
                />
              </Form.Group>
            </Row>
            <Form.Group className={styles.form}>
              <Form.Check type='radio' label ='use this card for next time purchase'/>
            </Form.Group>
            <Button className={styles.button}> Add card</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
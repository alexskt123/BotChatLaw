import { Fragment } from 'react'
import { contactUs } from '../config/contactUs'

export default function ContactUs() {

  return (
    <Fragment>
      <p>{contactUs.emailintro}</p>
      <a href={`mailto:${contactUs.email}`}>{contactUs.email}</a>
    </Fragment>
  )
}

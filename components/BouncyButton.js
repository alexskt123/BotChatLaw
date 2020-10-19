import { Fragment } from 'react'
import styles from '../styles/bouncybutton.module.css'

export default function BouncyButton({ children, href, target }) {
  return (
    <Fragment>
      <a
        className={styles.bouncybutton}
        href={href}
        target={target}
      >
        {{ ...children }}
      </a>
    </Fragment>
  )
}

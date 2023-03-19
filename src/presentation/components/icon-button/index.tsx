import * as React from 'react'
import Styles from './styles.scss'

interface IProps {
  label?: string
  icon: JSX.Element
  href: string
  openNewPage?: boolean
}

const IconButton = (props: IProps): JSX.Element => {
  return (
    <div className={Styles.container}>
      <a
        href={props.href}
        role="link"
        target={props.openNewPage ? '_blank' : '_self'}
        rel="noreferrer"
      >
        <div className={`${Styles.icon} ${props.label ? Styles.mr : ''}`}>
          {props.icon}
        </div>
        {props.label && <div className={Styles.label}>{props.label}</div>}
      </a>
    </div>
  )
}

export default IconButton

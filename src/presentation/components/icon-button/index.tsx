/* eslint-disable @typescript-eslint/consistent-type-assertions */
import type { IconType } from '@/domain/models/profile-data-model'
import { getIcon } from '@/presentation/utils/fa-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import Styles from './styles.scss'

interface IProps {
  label?: string
  icon: IconType
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
          <FontAwesomeIcon key={6} size="2x" icon={getIcon(props.icon)} />
        </div>
        {props.label && <div className={Styles.label}>{props.label}</div>}
      </a>
    </div>
  )
}

export default IconButton

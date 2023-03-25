/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { IconType } from '@/domain/models/profile-data-model'
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
  type IconDefinition
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import Styles from './styles.scss'

interface IProps {
  label?: string
  icon: IconType
  href: string
  openNewPage?: boolean
}

const availableIcons = new Map<IconType, IconDefinition>([
  [IconType.Github, faGithub],
  [IconType.LinkedIn, faLinkedin],
  [IconType.Facebook, faFacebook],
  [IconType.Instagram, faInstagram],
  [IconType.Youtube, faYoutube],
  [IconType.Twitter, faTwitter]
])

const getIcon = (icon: IconType): IconDefinition => {
  return availableIcons.get(icon) ?? ({} as IconDefinition)
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

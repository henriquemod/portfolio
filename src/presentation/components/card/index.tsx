import {
  faFolder,
  type IconDefinition
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import Tag from '../tag'
import Styles from './styles.scss'
import Box from '../box'

export type Action = {
  url: string
  icon: IconDefinition
}

interface IProps {
  title: string
  message: string
  tags: string[]
  actions?: Action[]
}

const Card = (props: IProps): JSX.Element => {
  const newMessage =
    props.message.length > 100
      ? `${props.message.substring(0, 100)}...`
      : props.message

  return (
    <Box size="medium">
      <div className={Styles.header}>
        <FontAwesomeIcon
          size="2x"
          icon={faFolder}
          className={Styles.cardIcon}
        />
        <div className={Styles.actions}>
          {props.actions?.map((action, i) => (
            <a key={i} href="">
              <FontAwesomeIcon size="xl" icon={action.icon} />
            </a>
          ))}
        </div>
      </div>
      <div className={Styles.content}>
        <div className={Styles.title}>
          <h1>{props.title}</h1>
        </div>
        <div className={Styles.message}>
          <p>{newMessage}</p>
        </div>
      </div>
      <div className={Styles.tags}>
        {props.tags.map((tag, i) => (
          <Tag key={i} label={tag} />
        ))}
      </div>
    </Box>
  )
}

export default Card

import { type IconType } from '@/domain/models/profile-data-model'
import { getIcon } from '@/presentation/utils/fa-icons'
import { faFolder } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import Box from '../box'
import Tag from '../tag'
import Styles from './styles.scss'

export type Action = {
  url: string
  icon: IconType
}

interface IProps {
  title: string
  message: string
  tags: string[]
  actions?: Action[]
  id?: string
  mb?: 1 | 2 | 3 | 4
}

const Card = (props: IProps): JSX.Element => {
  return (
    <Box size="card" id={props.id} mb={props.mb}>
      <div className={Styles.header}>
        <FontAwesomeIcon
          size="2x"
          icon={faFolder}
          className={Styles.cardIcon}
        />
        <div className={Styles.actions}>
          {props.actions?.map((action, i) => (
            <a key={i} href={action.url} target="_blank" rel="noreferrer">
              <FontAwesomeIcon size="xl" icon={getIcon(action.icon)} />
            </a>
          ))}
        </div>
      </div>
      <div className={Styles.content}>
        <div className={Styles.title}>
          <h1>{props.title}</h1>
        </div>
        <div className={Styles.message}>
          <p>{props.message}</p>
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

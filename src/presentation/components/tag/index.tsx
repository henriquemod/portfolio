import * as React from 'react'
import Styles from './styles.scss'

interface IProps {
  label: string
}

const Tag = (props: IProps): JSX.Element => {
  return (
    <div className={Styles.container}>
      <span>{props.label}</span>
    </div>
  )
}

export default Tag

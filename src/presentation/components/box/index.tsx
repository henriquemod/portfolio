import * as React from 'react'
import Styles from './styles.scss'

interface IProps {
  children: React.ReactNode
  size: 'small' | 'medium' | 'large' | 'full-width'
}

const Box = (props: IProps): JSX.Element => {
  let size = Styles.small
  switch (props.size) {
    case 'small':
      size = Styles.small
      break
    case 'medium':
      size = Styles.medium
      break
    case 'large':
      size = Styles.large
      break
    case 'full-width':
      size = Styles.fullWidth
      break
  }
  return <div className={`${Styles.container} ${size}`}>{props.children}</div>
}

export default Box

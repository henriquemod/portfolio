import * as React from 'react'
import Styles from './styles.scss'

interface IProps {
  label: string
  disabled?: boolean
  handleClick: () => void
}

const Button = (props: IProps): JSX.Element => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.handleClick}
      className={`${Styles.button} ${props.disabled ? Styles.disabled : ''}`}
      data-testid="component-button"
    >
      {props.label.toUpperCase()}
    </button>
  )
}

export default Button

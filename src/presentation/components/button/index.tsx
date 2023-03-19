import * as React from 'react'
import Styles from './styles.scss'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  disabled?: boolean
  handleClick: () => void
  size?: 'small' | 'medium' | 'large'
}

const Button = (props: IProps): JSX.Element => {
  const { disabled, handleClick, label, size, ...rest } = props
  const sizeStyle = Styles[size ?? 'small']

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={`${Styles.button} ${sizeStyle} ${
        disabled ? Styles.disabled : ''
      }`}
      data-testid="component-button"
      {...rest}
    >
      {label.toUpperCase()}
    </button>
  )
}

export default Button

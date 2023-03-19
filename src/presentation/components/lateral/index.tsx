import * as React from 'react'
import Styles from './styles.scss'

interface IProps {
  content: string | JSX.Element[]
}

const Lateral = (props: IProps): JSX.Element => {
  const isString = typeof props.content === 'string'
  return (
    <div className={Styles.container}>
      <div className={`${Styles.itens} ${isString ? Styles.verticalText : ''}`}>
        {isString ? <h3>{props.content}</h3> : props.content}
      </div>
      <div className={Styles.line}>
        <div />
        <div />
      </div>
    </div>
  )
}

export default Lateral

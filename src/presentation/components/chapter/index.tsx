import * as React from 'react'
import Styles from './styles.scss'

interface IProps {
  id: number
  title: string
  description?: string
  children?: React.ReactNode
}

const Chapter = (props: IProps): JSX.Element => {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <span>{`${props.id.toString().padStart(2, '0')}.`}</span>
        <h2>{`<${props.title}>`}</h2>
      </div>
      <div className={Styles.content}>
        <p>{props.description}</p>
        {props.children && (
          <div data-testid="child-box" className={Styles.children}>
            {props.children}
          </div>
        )}
      </div>
      <div className={Styles.footer}>
        <h2>{`</${props.title}>`}</h2>
      </div>
    </div>
  )
}

export default Chapter

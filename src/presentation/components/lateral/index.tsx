import * as React from 'react'
import Styles from './styles.scss'

interface IProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  content: string | JSX.Element[]
  rotateIcons?: boolean
}

const Lateral = (props: IProps): JSX.Element => {
  const { content, rotateIcons, ...rest } = props
  const isString = typeof content === 'string'
  return (
    <div {...rest} className={Styles.containerA}>
      <div className={Styles.line}>
        <div />
        <div />
      </div>
      <div
        className={`${Styles.itens} ${
          isString ? Styles.verticalText : Styles.verticalIcons
        } ${rotateIcons ? Styles.rotateIcons : ''}`}
      >
        {isString ? <h3>{content}</h3> : content}
      </div>
    </div>
  )
}

export default Lateral

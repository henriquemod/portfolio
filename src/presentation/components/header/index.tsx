import * as React from 'react'
import Styles from './styles.scss'

export interface IMenuItem {
  label: string
  url: string
  active?: boolean
}

interface IProps {
  align?: 'left' | 'center' | 'right'
  menuItens: IMenuItem[]
}

const renderListItem = (
  index: number,
  label: string,
  url: string,
  active: boolean = false
): JSX.Element => {
  const activeStyle = active ? Styles.active : ''
  return (
    <li className={`${Styles.listItem} ${activeStyle}`}>
      <a href={url} target="_self">
        <span>{`${index.toString().padStart(2, '0')}. `}</span>
        {`<${label} />`}
      </a>
    </li>
  )
}

const Header = (props: IProps): JSX.Element => {
  const alignStyle = Styles[props.align ?? 'center']
  return (
    <div className={`${Styles.container} ${alignStyle}`}>
      <ul className={Styles.list}>
        {props.menuItens.map((item, index) =>
          renderListItem(index + 1, item.label, item.url, item.active)
        )}
      </ul>
    </div>
  )
}

export default Header

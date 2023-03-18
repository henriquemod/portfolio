import * as React from 'react'
import Styles from './styles.scss'

const MAX_BLOCKS = 5

const Block = (): JSX.Element => {
  return <div className={Styles.block} />
}

const BlockNone = (): JSX.Element => {
  return <div className={`${Styles.block} ${Styles.colorNone}`} />
}

interface IProps {
  label: string
  level: number
}

const SkillLevel = (props: IProps): JSX.Element => {
  const correctLevel = props.level > 5 ? 5 : props.level
  const blocks: JSX.Element[] = []

  for (let i = 1; i <= MAX_BLOCKS; i++) {
    if (i <= correctLevel) {
      blocks.push(<Block key={i} />)
    } else {
      blocks.push(<BlockNone key={i} />)
    }
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.skill}>
        <h2>{props.label}</h2>
      </div>
      <div className={Styles.rank}>{blocks}</div>
    </div>
  )
}

export default React.memo(SkillLevel)

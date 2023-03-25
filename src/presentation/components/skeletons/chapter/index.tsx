import * as React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Styles from './styles.scss'

interface IProps {
  id: string
  title: string
}

const ChapterSkeleton = (props: IProps): JSX.Element => {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <span>{`${props.id.toString().padStart(2, '0')}.`}</span>
        <h2>{`<${props.title}>`}</h2>
      </div>
      <div className={Styles.content}>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </div>
      <div className={Styles.footer}>
        <h2>{`</${props.title}>`}</h2>
      </div>
    </div>
  )
}

export default ChapterSkeleton

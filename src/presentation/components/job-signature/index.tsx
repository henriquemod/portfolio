import * as React from 'react'
import Styles from './styles.scss'

interface IProps {
  jobTitle: string
  companyName: string
  period: string
}
const JobSignature = (props: IProps): JSX.Element => {
  return (
    <div className={Styles.container}>
      <h3>{props.jobTitle}</h3>
      <p>{`@ ${props.companyName} - ${props.period}`}</p>
    </div>
  )
}

export default JobSignature

import * as React from 'react'
import Button from '../button'
import Styles from './styles.scss'

interface IProps {
  name: string
  job: string
  message: string
  avatarUrl: string
  handleContactClick: () => void
}

const ProfileBanner = (props: IProps): JSX.Element => {
  return (
    <div className={Styles.container}>
      <div className={Styles.top}>
        <div className={Styles.title}>
          <h2 className={Styles.main}>
            <span>{`Hi i'm `}</span>
            {props.name}
          </h2>
          <h3 className={Styles.main}>{props.job}</h3>
        </div>
        <div className={Styles.profilePic}>
          <div className={Styles.profileBlock} />
          <img src={props.avatarUrl} alt="Profile Picture" />
        </div>
      </div>
      <div className={Styles.bottom}>
        <p>{props.message}</p>
        <Button
          size="medium"
          label="Contact Me"
          handleClick={props.handleContactClick}
        />
      </div>
    </div>
  )
}

export default ProfileBanner

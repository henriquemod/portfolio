import * as React from 'react'
import Styles from './styles.scss'
import Skeleton from '@mui/material/Skeleton'

const ProfileSkeletonBanner = (): JSX.Element => {
  return (
    <div className={Styles.skeletonContainer}>
      <div className={Styles.skeletonTop}>
        <Skeleton variant="text" />
        <Skeleton variant="rectangular" width={175} height={175} />
      </div>
      <div className={Styles.skeletonBottom}>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </div>
    </div>
  )
}

export default ProfileSkeletonBanner

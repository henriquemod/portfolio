import { type ProfileDataModel } from '@/domain/models/profile-data-model'
import { type GetProfileData } from '@/domain/usecases'
import Board from '@/presentation/components/board'
import Card from '@/presentation/components/card'
import Chapter from '@/presentation/components/chapter'
import Header, { type IMenuItem } from '@/presentation/components/header'
import IconButton from '@/presentation/components/icon-button'
import JobSignature from '@/presentation/components/job-signature'
import Lateral from '@/presentation/components/lateral'
import ProfileBanner from '@/presentation/components/profile-banner'
import ChapterSkeleton from '@/presentation/components/skeletons/chapter'
import ProfileSkeletonBanner from '@/presentation/components/skeletons/profile-banner'
import * as React from 'react'
import Styles from './styles.scss'

const LEFT_LATERAL_STYLE: React.CSSProperties = {
  position: 'absolute',
  left: '-550px',
  top: '-30px'
}

const RIGHT_LATERAL_STYLE: React.CSSProperties = {
  position: 'absolute',
  right: '60px',
  top: '70px'
}

const options: IMenuItem[] = [
  {
    label: 'About',
    url: '#bout-me-chapter'
  },
  {
    label: 'Skills',
    url: '#my-skills-chapter'
  },
  {
    label: 'Portfolio',
    url: '#my-portfolio-chapter'
  },
  {
    label: 'Career',
    url: '#my-work-career-chapter'
  },
  {
    label: 'Contact',
    url: '/'
  }
]

interface IProps {
  firebaseClient: GetProfileData
}

const Home = (props: IProps): JSX.Element => {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [profileData, setProfileData] = React.useState<ProfileDataModel>()

  React.useEffect(() => {
    async function loadProfile(): Promise<void> {
      const profile = await props.firebaseClient.get('profileData')
      setProfileData(profile)
      setLoading(false)
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadProfile()
  }, [])

  const ProfileBannerComponent = React.useCallback(() => {
    return loading || !profileData ? (
      <ProfileSkeletonBanner />
    ) : (
      <ProfileBanner
        avatarUrl={profileData.profileBannerData.avatarUrl}
        handleContactClick={() => {}}
        name={profileData.profileBannerData.name}
        job={profileData.profileBannerData.job}
        message={profileData.profileBannerData.message}
      />
    )
  }, [loading, profileData])

  const LateralLeft = React.useCallback(() => {
    return profileData ? (
      <div className={Styles.sideBlock}>
        <Lateral
          rotateIcons
          style={LEFT_LATERAL_STYLE}
          content={profileData.socialMediaData.map((social, i) => (
            <IconButton
              openNewPage
              key={i}
              icon={social.icon}
              href={social.url}
            />
          ))}
        />
      </div>
    ) : (
      <></>
    )
  }, [profileData])

  const LateralRight = React.useCallback(() => {
    return profileData ? (
      <div className={Styles.sideBlock}>
        <Lateral style={RIGHT_LATERAL_STYLE} content={profileData.email} />
      </div>
    ) : (
      <></>
    )
  }, [profileData])

  const AboutMe = React.useCallback(() => {
    return loading ? (
      <ChapterSkeleton id="1" title="About me" />
    ) : (
      <Chapter title="About me" description={profileData?.aboutMe} id={1} />
    )
  }, [loading, profileData])

  const MySkills = React.useCallback(() => {
    return loading ? (
      <ChapterSkeleton id="2" title="My Skills" />
    ) : (
      <Chapter
        id={2}
        title="My Skills"
        description="I little bit about my skills and what I can do for you."
      >
        <div className={Styles.row}>
          <Board skills={profileData?.skillList ?? []} />
        </div>
      </Chapter>
    )
  }, [loading, profileData])

  const MyPortfolio = React.useCallback(() => {
    return loading ? (
      <ChapterSkeleton id="3" title="My Portfolio" />
    ) : (
      <Chapter
        title="My Portfolio"
        description="Some of my projects and works."
        id={3}
      >
        <div className={`${Styles.row} ${Styles.grid}`}>
          {profileData?.projects.map((portfolio, i) => (
            <Card
              key={i}
              title={portfolio.title}
              message={portfolio.message}
              tags={portfolio.tags}
              actions={portfolio.actions}
            />
          ))}
        </div>
      </Chapter>
    )
  }, [loading, profileData])

  const MyWorkCareer = React.useCallback(() => {
    return loading ? (
      <ChapterSkeleton id="4" title="My Work Career" />
    ) : (
      <Chapter id={4} title="My Work Career">
        {profileData?.jobSignatures.map((jobSignature) => (
          <JobSignature
            key={jobSignature.id}
            companyName={jobSignature.company}
            jobTitle={jobSignature.job}
            period={jobSignature.period}
          />
        ))}
      </Chapter>
    )
  }, [loading, profileData])

  return (
    <div className={Styles.container}>
      <div className={Styles.headerContainer}>
        <div className={`${Styles.lateralContainer}`}>
          <LateralLeft />
          <Header align="right" menuItens={options} />
          <LateralRight />
        </div>
      </div>
      <div className={Styles.row}>
        <ProfileBannerComponent />
      </div>
      <AboutMe />
      <MySkills />
      <MyPortfolio />
      <MyWorkCareer />
    </div>
  )
}

export default Home

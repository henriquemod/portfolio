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
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import Styles from './styles.scss'

const options: IMenuItem[] = [
  {
    label: 'About',
    url: '/'
  },
  {
    label: 'Skills',
    url: '/'
  },
  {
    label: 'Portfolio',
    url: '/'
  },
  {
    label: 'Career',
    url: '/'
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

  return (
    <div className={Styles.container}>
      <div className={Styles.headerContainer}>
        <div className={`${Styles.lateralContainer}`}>
          <div className={Styles.sideBlock}>
            <Lateral
              rotateIcons
              style={{
                position: 'absolute',
                left: '-550px',
                top: '-30px'
              }}
              content={[
                <IconButton
                  key={1}
                  icon={<FontAwesomeIcon size="2x" icon={faGithub} />}
                  href=""
                />,
                <IconButton
                  key={2}
                  icon={<FontAwesomeIcon size="2x" icon={faGithub} />}
                  href=""
                />,
                <IconButton
                  key={3}
                  icon={<FontAwesomeIcon size="2x" icon={faGithub} />}
                  href=""
                />,
                <IconButton
                  key={4}
                  icon={<FontAwesomeIcon size="2x" icon={faGithub} />}
                  href=""
                />
              ]}
            />
          </div>
          <Header align="right" menuItens={options} />
          <div className={Styles.sideBlock}>
            <Lateral
              style={{
                position: 'absolute',
                right: '60px',
                top: '70px'
              }}
              className={Styles.lateralLeft}
              content="beltrano@gmail.com"
            />
          </div>
        </div>
      </div>
      <div className={Styles.row}>
        {loading || !profileData ? (
          <ProfileSkeletonBanner />
        ) : (
          <ProfileBanner
            avatarUrl={profileData.profileBannerData.avatarUrl}
            handleContactClick={() => {}}
            name={profileData.profileBannerData.name}
            job={profileData.profileBannerData.job}
            message={profileData.profileBannerData.message}
          />
        )}
      </div>

      {loading ? (
        <ChapterSkeleton id="1" title="About me" />
      ) : (
        <div className={Styles.row}>
          <Chapter title="About me" description={profileData?.aboutMe} id={1} />
        </div>
      )}

      {loading ? (
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
      )}

      <Chapter
        title="My Portfolio"
        description="Some of my projects and works."
        id={3}
      >
        <div className={`${Styles.row} ${Styles.grid}`}>
          <Card
            title='Project "X"'
            message='Description of project "X"'
            tags={[]}
            actions={[]}
          />
          <Card
            title='Project "X"'
            message='Description of project "X"'
            tags={[]}
            actions={[]}
          />
          <Card
            title='Project "X"'
            message='Description of project "X"'
            tags={[]}
            actions={[]}
          />
          <Card
            title='Project "X"'
            message='Description of project "X"'
            tags={[]}
            actions={[]}
          />
        </div>
      </Chapter>
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
    </div>
  )
}

export default Home

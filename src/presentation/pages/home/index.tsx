import { type ProfileDataModel } from '@/domain/models/profile-data-model'
import { type FirebaseClient } from '@/infra/firebase/firebase-get-data'
import Board from '@/presentation/components/board'
import Card from '@/presentation/components/card'
import Chapter from '@/presentation/components/chapter'
import Header, { type IMenuItem } from '@/presentation/components/header'
import IconButton from '@/presentation/components/icon-button'
import JobSignature from '@/presentation/components/job-signature'
import Lateral from '@/presentation/components/lateral'
import ProfileBanner from '@/presentation/components/profile-banner'
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
  firebaseClient: FirebaseClient
}

const Home = (props: IProps): JSX.Element => {
  const [profileData, setProfileData] = React.useState<ProfileDataModel>()

  React.useEffect(() => {
    async function loadProfile(): Promise<void> {
      const profile = await props.firebaseClient.get('profileData')
      console.log(profile)
      setProfileData(profile)
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadProfile()
  }, [])

  return (
    <div className={Styles.container}>
      <Header align="right" menuItens={options} />
      {profileData && (
        <div className={`${Styles.lateralContainer}`}>
          <div className={Styles.sideBlock}>
            <Lateral
              rotateIcons
              style={{
                position: 'absolute',
                left: '-225px',
                top: '160px'
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
          <ProfileBanner
            avatarUrl={profileData.bannerProfileData.avatarUrl}
            handleContactClick={() => {}}
            name={profileData.bannerProfileData.name}
            job={profileData.bannerProfileData.job}
            message={profileData.bannerProfileData.message}
          />
          <div className={Styles.sideBlock}>
            <Lateral
              style={{
                position: 'absolute',
                right: '-260px',
                top: '280px'
              }}
              className={Styles.lateralLeft}
              content="beltrano@gmail.com"
            />
          </div>
        </div>
      )}
      <div className={Styles.row}>
        <Chapter
          title="About me"
          description="I am a Java Developer with 10 years of experience in the IT area. I have worked with several technologies, such as Java, Spring, Angular, React, Node, AWS, and others. I am passionate about technology and I am always looking for new challenges and opportunities to learn and grow professionally."
          id={1}
        />
      </div>
      <Chapter
        title="My Skills"
        description="I little bit about my skills and what I can do for you."
        id={2}
      >
        <div className={Styles.row}>
          <Board
            skills={[
              {
                title: 'Java',
                level: 5
              },
              {
                title: 'Spring',
                level: 5
              },
              {
                title: 'Angular',
                level: 4
              },
              {
                title: 'React',
                level: 4
              },
              {
                title: 'Node',
                level: 4
              },
              {
                title: 'AWS',
                level: 3
              }
            ]}
          />
        </div>
      </Chapter>
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
        <JobSignature
          companyName="Microsoft"
          jobTitle="Software Engineer"
          period="2020 - Present"
        />
        <JobSignature
          companyName="Microsoft"
          jobTitle="Software Engineer"
          period="2020 - Present"
        />
        <JobSignature
          companyName="Microsoft"
          jobTitle="Software Engineer"
          period="2020 - Present"
        />
        <JobSignature
          companyName="Microsoft"
          jobTitle="Software Engineer"
          period="2020 - Present"
        />
      </Chapter>
    </div>
  )
}

export default Home

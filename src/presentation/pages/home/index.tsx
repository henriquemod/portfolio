import Board from '@/presentation/components/board'
import Card from '@/presentation/components/card'
import Chapter from '@/presentation/components/chapter'
import Header, { type IMenuItem } from '@/presentation/components/header'
import ProfileBanner, {
  type ProfileBannerProps
} from '@/presentation/components/profile-banner'
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
  getProfile: () => Promise<{
    avatarUrl: string
    name: string
    job: string
    message: string
  }>
}

const Home = (props: IProps): JSX.Element => {
  const [bannerData, setBannerData] =
    React.useState<Omit<ProfileBannerProps, 'handleContactClick'>>()

  React.useEffect(() => {
    async function loadProfile(): Promise<void> {
      const profile = await props.getProfile()
      setBannerData(profile)
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadProfile()
  }, [])

  return (
    <div className={Styles.container}>
      <Header align="right" menuItens={options} />
      {bannerData && (
        <div className={Styles.row}>
          <ProfileBanner
            avatarUrl={bannerData.avatarUrl}
            handleContactClick={() => {}}
            name={bannerData.name}
            job={bannerData.job}
            message={bannerData.message}
          />
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
    </div>
  )
}

export default Home

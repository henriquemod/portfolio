export type JobSignature = {
  id: string
  job: string
  company: string
  period: string
}

export type Score = 0 | 1 | 2 | 3 | 4 | 5

export interface Skill {
  title: string
  score: Score
}

export type Action = {
  url: string
  icon: IconType
}

export enum IconType {
  Github = 'github',
  LinkedIn = 'linkedin',
  Facebook = 'facebook',
  Instagram = 'instagram',
  Youtube = 'youtube',
  Twitter = 'twitter',
  ArrowUpRightFromSquare = 'arrow-up-right-from-square'
}

export interface Project {
  title: string
  message: string
  tags: string[]
  actions: Action[]
}

export interface SocialMedia {
  icon: IconType
  url: string
}

export type ProfileDataModel = {
  email: string
  profileBannerData: {
    name: string
    job: string
    avatarUrl: string
    message: string
  }
  aboutMe: string
  jobSignatures: JobSignature[]
  skillList: Skill[]
  socialMediaData: SocialMedia[]
  projects: Project[]
}

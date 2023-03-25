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

export type ProfileDataModel = {
  profileBannerData: {
    name: string
    job: string
    avatarUrl: string
    message: string
  }
  aboutMe: string
  jobSignatures: JobSignature[]
  skillList: Skill[]
}

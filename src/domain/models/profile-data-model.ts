export type JobSignature = {
  id: string
  job: string
  company: string
  period: string
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
}

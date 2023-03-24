import { type JobSignature } from '@/domain/models/profile-data-model'

export type FirebaseResponse = {
  profileBannerData: {
    name: string
    job: string
    avatarUrl: string
    message: string
  }
  jobSignatures: JobSignature[]
}

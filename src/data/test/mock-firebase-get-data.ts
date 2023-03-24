import { type FirebaseGetDataClient } from '@/data/protocols/firebase'
import { type ProfileDataModel } from '@/domain/models/profile-data-model'

export class FirebaseGetDataSpy implements FirebaseGetDataClient {
  response: ProfileDataModel

  async get(path: string): Promise<ProfileDataModel> {
    return Promise.resolve({
      profileBannerData: {
        name: 'any_name',
        job: 'any_job',
        avatarUrl: 'any_avatar_url',
        message: 'any_message'
      },
      jobSignatures: []
    })
  }
}

import {
  type FirebaseResponse,
  type FirebaseGetDataClient
} from '@/data/protocols/firebase'

export class FirebaseGetDataSpy implements FirebaseGetDataClient {
  response: FirebaseResponse

  async get(path: string): Promise<FirebaseResponse> {
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

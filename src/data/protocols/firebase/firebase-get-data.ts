import { type ProfileDataModel } from '@/domain/models/profile-data-model'

export interface FirebaseGetDataClient {
  get: (path: string) => Promise<ProfileDataModel>
}

import type { ProfileDataModel } from '../models/profile-data-model'

export interface GetProfileData {
  get: (path: string) => Promise<ProfileDataModel>
}

import type { ProfileDataModel } from '../models/profile-data-model'

export interface GetData {
  get: (path: string) => Promise<ProfileDataModel>
}

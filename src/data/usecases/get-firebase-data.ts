import { type ProfileDataModel } from '@/domain/models/profile-data-model'
import { type GetProfileData } from '@/domain/usecases'
import { type FirebaseGetDataClient } from '../protocols/firebase'

export class GetFirebaseData implements GetProfileData {
  constructor(private readonly firebase: FirebaseGetDataClient) {}

  async get(path: string): Promise<ProfileDataModel> {
    return this.firebase.get(path)
  }
}

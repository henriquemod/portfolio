import { GetFirebaseData } from '@/data/usecases/get-firebase-data'
import { type GetProfileData } from '@/domain/usecases'
import { type Database } from 'firebase/database'
import { makeFirebaseClient } from '../firebase/firebase-client-factory'

export const makeGetDataClient = (database: Database): GetProfileData => {
  return new GetFirebaseData(makeFirebaseClient(database))
}

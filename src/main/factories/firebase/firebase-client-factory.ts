import { FirebaseClient } from '@/infra/firebase/firebase-get-data'
import type { Database } from 'firebase/database'

export const makeFirebaseClient = (database: Database): FirebaseClient => {
  return new FirebaseClient(database)
}

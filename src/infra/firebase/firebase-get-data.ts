import type { FirebaseGetDataClient } from '@/data/protocols/firebase/firebase-get-data'
import type { FirebaseResponse } from '@/data/protocols/firebase/firebase-response'
import { ref, child, get, type Database } from 'firebase/database'

export class FirebaseClient implements FirebaseGetDataClient {
  constructor(private readonly database: Database) {}
  async get(path: string): Promise<FirebaseResponse> {
    const data = await get(child(ref(this.database), path))

    return data.val()
  }
}

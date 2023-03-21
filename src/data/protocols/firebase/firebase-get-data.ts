import type { FirebaseResponse } from '@/data/protocols/firebase/firebase-response'

export interface FirebaseGetDataClient {
  get: (path: string) => Promise<FirebaseResponse>
}

import { get } from 'firebase/database'

export const mockFirebaseGetData = (): jest.Mocked<typeof get> => {
  return get as jest.Mocked<typeof get>
}

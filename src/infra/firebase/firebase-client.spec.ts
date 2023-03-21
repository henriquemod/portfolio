import { FirebaseClient } from '@/infra/firebase/firebase-get-data'
import { type get, getDatabase } from 'firebase/database'
import { mockFirebaseGetData } from '../test/mock-firebase'

jest.mock('firebase/database', () => ({
  getDatabase: jest.fn(),
  ref: jest.fn(),
  child: jest.fn(),
  get: jest.fn().mockResolvedValue({
    val: jest.fn().mockReturnValue({
      bannerProfileData: {
        name: 'Henrique',
        description: "I'm a software developer"
      }
    })
  })
}))

type SutTypes = {
  sut: FirebaseClient
  mockedFirebaseGetData: jest.Mocked<typeof get>
}

const makeSut = (): SutTypes => {
  const database = getDatabase()
  const sut = new FirebaseClient(database)
  const mockedFirebaseGetData = mockFirebaseGetData()

  return {
    sut,
    mockedFirebaseGetData
  }
}

describe('Firebase Client', () => {
  test('should call get data', async () => {
    const { sut, mockedFirebaseGetData } = makeSut()
    await sut.get('valid-path')
    expect(mockedFirebaseGetData).toHaveBeenCalledTimes(1)
  })
})

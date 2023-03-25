import { FirebaseGetDataSpy } from '../test/mock-firebase-get-data'
import { GetFirebaseData } from './get-firebase-data'

type SutTypes = {
  sut: GetFirebaseData
  firebaseGetDataClientSpy: FirebaseGetDataSpy
}

const makeSut = (): SutTypes => {
  const firebaseGetDataClientSpy = new FirebaseGetDataSpy()
  const sut = new GetFirebaseData(firebaseGetDataClientSpy)
  return {
    sut,
    firebaseGetDataClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('should call FirebaseGetDataClient with correct path', async () => {
    const { sut, firebaseGetDataClientSpy } = makeSut()
    const spy = jest.spyOn(firebaseGetDataClientSpy, 'get')
    await sut.get('any_path')
    expect(spy).toHaveBeenCalledWith('any_path')
  })

  test('should call return profile data if FirebaseGetDataClient returns', async () => {
    const { sut } = makeSut()
    const data = await sut.get('any_path')
    expect(data).toEqual({
      profileBannerData: {
        avatarUrl: 'any_avatar_url',
        job: 'any_job',
        message: 'any_message',
        name: 'any_name'
      },
      aboutMe: 'any_about_me',
      jobSignatures: [],
      skillList: []
    })
  })
})

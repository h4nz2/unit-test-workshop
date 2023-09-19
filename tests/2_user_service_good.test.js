import updateUser, { RecordNotFound, UserCRUD, deleteUser } from "../files/2_user_service"

describe('updateUser()', () => {
  describe('when user does not exist', () => {
    // make sure that the user is never found
    const staticMethodMock = jest
      .spyOn(UserCRUD, 'findUserById')
      .mockImplementation(() => null)

    it('raises an error', () => {
      expect(() => updateUser(1000, {})).toThrow(RecordNotFound)
    })
  })

  describe('when the user exists', () => {
    const mockedUser = {
      id: 10,
      name: 'John Wick',
      job: 'retiree',
      email: 'baba@yaga.com'
    }
    let findUserByIdMock
    let updateUserMock
    const updateParams = { job: 'revenge seeker' }

    // we have configured jest cleanup mocks after each test
    beforeEach(() => {
      // make sure that the user is found
      findUserByIdMock = jest
        .spyOn(UserCRUD, 'findUserById')
        .mockImplementation(() => mockedUser)

      updateUserMock = jest
        .spyOn(UserCRUD, 'updateUser')
    })

    it('updates the user', () => {
      updateUser(mockedUser.id, updateParams)
      expect(updateUserMock).toHaveBeenCalledWith(updateParams);
    })
  })
})

describe('deleteUser()', () => {
  let deleteUserMock
  const userId = 10

  beforeEach(() => {
    deleteUserMock = jest.spyOn(UserCRUD, 'deleteUser')
  })

  it('deletes the user', () => {
    deleteUser(userId)
    expect(deleteUserMock).toHaveBeenCalledWith(userId)
  })
})

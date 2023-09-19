import updateUser, { RecordNotFound, UserCRUD } from "../files/2_user_service"

describe('when user does not exist', () => {
  it('raises an error', () => {
    // what could be wrong with this?
    // suppose we do/don't clean up database?
    expect(() => updateUser(1000, {})).toThrow(RecordNotFound)
  })
})

describe('when the user exists', () => {
  const userId = 10

  beforeAll(() => {
    UserCRUD.createUser({
      id: userId,
      name: 'John Wick',
      job: 'retiree',
      email: 'baba@yaga.com'
    })
  })

  // what are we actually testing here?
  it('updates the user', () => {
    updateUser(userId, { job: 'revenge seeker' })
    const userAfterUpdate = UserCRUD.findUserById(userId)
    expect(userAfterUpdate).toMatchObject({
      name: 'John Wick',
      job: 'revenge seeker',
      email: 'baba@yaga.com'
    })
  })
})



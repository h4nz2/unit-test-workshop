export class RecordNotFound extends Error {}

function updateUser(userId, userData) {
  const user = UserCRUD.findUserById(userId)
  if (!user) {
    throw new RecordNotFound(`User with id=${userId} not found`)
  }

  UserCRUD.updateUser(userData)
  // synchronize with third party
  // noitfy user when email changes
}
export default updateUser

export function deleteUser(userId) {
  UserCRUD.deleteUser(userId)
}

export class UserCRUD {
  static #user = { id: 5, name: 'Johnny Cash', job: 'singer', email: 'johnny@cash.com' }

  // mocking database fetching
  static findUserById(id) {
    // pretend that we only have users with ids 1..999
    if (id > 0 && id < 1000) {
      return this.#user
    }

    return null
  }

  static updateUser(user) {
    this.#user = {
      ...this.#user,
      ...user
    }
  }

  static createUser(userData) {
    this.#user = userData
  }

  static deleteUser(_user_id) {
    this.#user = null
  }
}

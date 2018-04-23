
import Fixtures from 'App/Fixtures/Auth'

export default {
  login: (credentials) => {
    const loginOk = (credentials.email === Fixtures.credentials.email &&
      credentials.password === Fixtures.credentials.password
    )
    return {
      ok: loginOk,
      data: loginOk ? Fixtures.login.response : Fixtures.login.error
    }
  }
}

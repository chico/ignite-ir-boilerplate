import { API, FixtureAPI } from 'App/Services/Auth'
import R from 'ramda'

import Fixtures from 'App/Fixtures/Auth'

test('All fixtures map to actual API', () => {
  const fixtureKeys = R.keys(FixtureAPI).sort()
  const apiKeys = R.keys(API.create())

  const intersection = R.intersection(fixtureKeys, apiKeys).sort()

  // There is no difference between the intersection and all fixtures
  expect(R.equals(fixtureKeys, intersection)).toBe(true)
})

test('login', () => {
  expect(FixtureAPI.login(Fixtures.credentials)).toEqual({
    ok: true,
    data: Fixtures.login.response
  })
})

test('login with invalid user', () => {
  const errorResponse = {
    ok: false,
    data: Fixtures.login.error
  }
  expect(FixtureAPI.login(
    {
      email: 'invalid@example.com',
      password: Fixtures.credentials.password
    }
  )).toEqual(errorResponse)
  expect(FixtureAPI.login(
    {
      email: Fixtures.credentials.email,
      password: 'invalid'
    }
  )).toEqual(errorResponse)
})

import { AccessTokenType } from '../../ts/user/user'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { clearLocalStorage, persistLocalStorage } from '../../utilities'
import { UserInfo, DataLogin } from '../../ts/user'
import { Role } from '../../ts/roles'

export const EmptyUserState: UserInfo = {
  accessToken: undefined,
  email: undefined,
  id: undefined,
  name: undefined,
  role: Role.NOT_AUTH
}

const userInitializer = () => {
  // const user = localStorage.getItem('user')
  // if (user)
  //   // In order to be more secure, in the future, this is going to make a request to auth
  //   return JSON.parse(user)
  return EmptyUserState
}

export const UserKey = 'user'

export const userSlice = createSlice({
  initialState: userInitializer(),
  name: 'user',
  reducers: {
    clearUser: () => {
      // clearLocalStorage(UserKey)
      return EmptyUserState
    },
    createUser: (state, action:PayloadAction<DataLogin>) => {
      // persistLocalStorage<UserInfo>(UserKey, action.payload.email)
      state.accessToken = action.payload.accessToken
      state.email = action.payload.email
      state.id = action.payload.userId
      state.name = action.payload.name
      state.role = action.payload.role
    },
    updateAccessToken: (state, action:PayloadAction<AccessTokenType>) => {
      state.accessToken = action.payload
    }
  }
})

export const { createUser, updateAccessToken, clearUser } = userSlice.actions

export default userSlice.reducer

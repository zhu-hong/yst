import { defineStore } from 'pinia'
import { basicAxios } from '@/apis'

const ToLogin = () => {
  window.location.href = `${HOME_URL}/pc/platform2/#/login`
}

const GetMe = async () => {
  const { data } = await basicAxios(`${ACCOUNT_URL}`).get('/Account/User/GetMe')

  return data
}

const Logout = () => {
  sessionStorage.clear()
  localStorage.clear()
  ToLogin()
}

export const useMeStore =  defineStore('me', {
  state: () => {
    return {
      me: {
        accountName: '',
        birthday: -1,
        city: '',
        email: '',
        id: '',
        isOnDesktop: false,
        memberId: '',
        mood: 0,
        name: '',
        orgId: '',
        phone: '',
        profilePicture: '',
        siteName: '',
        sitePostcode: '',
        state: '',
        type: 1,
        userType: 0,
      },
    }
  },
  actions: {
    async getMe() {
      const me = await GetMe()

      Object.keys(me).forEach((key) => {
        this.me[key] = me[key]
      })
    },
    logOut: Logout,
  },
})
import WQRequest from '../index'
import { IAccount } from './type'
enum loginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}
export const accountLoginRequest = (account: IAccount) => {
  return WQRequest.post({
    url: loginAPI.AccountLogin,
    data: account
  })
}
export const requestUserInfoById = (id: number) => {
  return WQRequest.get({
    url: loginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export const requestUserMenusByRoleId = (id: number) => {
  return WQRequest.get({
    url: loginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}

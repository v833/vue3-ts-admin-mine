import WQRequest from '../index'
import { IAccount } from './type'
enum loginAPI {
  AccountLogin = '/login'
}
export const accountLoginRequest = (account: IAccount) => {
  return WQRequest.post({
    url: loginAPI.AccountLogin,
    data: account
  })
}

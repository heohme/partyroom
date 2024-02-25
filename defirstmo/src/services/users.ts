import { http } from '@xhs/launcher'

interface IUser {
  id: string
  name: string
}

export function getUsers(): Promise<IUser[]> {
  return http.get('USERS')
}

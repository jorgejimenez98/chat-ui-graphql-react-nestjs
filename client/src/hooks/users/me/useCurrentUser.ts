import { gql, useQuery } from '@apollo/client'
import { User } from 'lib/models'

const GET_ME = gql`
  query Me {
    me {
      _id
      email
    }
  }
`

export const useCurrentUser = () => {
  return useQuery<{ me: User }>(GET_ME)
}

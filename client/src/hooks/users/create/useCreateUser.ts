import { gql, useMutation } from '@apollo/client'

import { User } from '@/lib/models'

interface CreateUserInput {
  createUserInput: {
    email: string
    password: string
  }
}

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
    }
  }
`

export const useCreateUser = () => {
  return useMutation<User, CreateUserInput>(CREATE_USER)
}

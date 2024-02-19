
const capitalize = (errorMessage: string) => {
  if (!errorMessage) return ''
  return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const extractErrorMessage = (err: any) => {
  const errorMessage = err?.graphQLErrors[0]?.extensions?.originalError?.message
  const finalError = Array.isArray(errorMessage) ? errorMessage[0] : errorMessage
  return capitalize(finalError)
}

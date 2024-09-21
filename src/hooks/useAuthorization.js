export const getToken = (tokenName = 'adminToken') => {
  return localStorage.getItem(tokenName) ?? null
}

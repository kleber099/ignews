import {NextApiRequest, NextApiResponse} from 'next'

// JWT (Storage)
// Next Auth
// Cognito, Auth0

export default(request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Kleber'},
    { id: 2, name: 'João'},
    { id: 3, name: 'Pedro'},
  ]

  return response.json(users);
}
//Código para estudos

import {NextApiRequest, NextApiResponse} from 'next'


export default(request: NextApiRequest, response: NextApiResponse) => {
  const { id } = request.query;

  const res = {
    users: [
      { id: 1, name: 'Kleber'},
      { id: 2, name: 'João'},
      { id: 3, name: 'Pedro'}
    ],
    id
  }

  return response.json(res);
}
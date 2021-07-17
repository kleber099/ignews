import {NextApiRequest, NextApiResponse} from 'next'


export default(request: NextApiRequest, response: NextApiResponse) => {
  const { params } = request.query;

  

  return response.json(params);
}
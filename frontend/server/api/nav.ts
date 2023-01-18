import type { IncomingMessage, ServerResponse } from 'http'
export default async (req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200
  res.end('Works!')
}

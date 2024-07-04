import * as http from 'http'

import {
  getFilterEpisodes,
  getListEpisodes,
} from './controllers/podcasts-controller'
import { Routes } from './routes/routes'
import { HttpMethod } from './utils/http-method'

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  //queryString
  const [baseUrl, queryString] = request.url?.split('?') ?? ['', '']

  // list podcasts
  if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response)
  }

  if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
    await getFilterEpisodes(request, response)
  }
}

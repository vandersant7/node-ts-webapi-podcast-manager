import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { respositoryPodcast } from "../repositories/podcasts-repository";
import { HttpStatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {

  //define contrato
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
}

    const data = await respositoryPodcast()

    //verifica o tipo de resposta
    responseFormat = {
      statusCode: data.length !== 0 ? HttpStatusCode.OK : HttpStatusCode.NoContent,
      body: data,
    }

      return responseFormat;
}
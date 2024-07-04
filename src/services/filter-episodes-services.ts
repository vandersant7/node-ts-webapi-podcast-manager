import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { respositoryPodcast } from "../repositories/podcasts-repository";
import { HttpStatusCode } from "../utils/status-code";

const servicesFilterEpisodes = async (
    podcastName: string | undefined
): Promise<PodcastTransferModel> => {

    //definindo a interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }

    //buscando os dados
    const queryString = podcastName?.split("?p=")[1] ?? "";
    const data = await respositoryPodcast(queryString)

    //verifico se tem conteúdo
    responseFormat.statusCode =
        data.length !== 0 ? HttpStatusCode.OK : HttpStatusCode.NoContent

    responseFormat.body = data;

    return responseFormat;
}

 
export default servicesFilterEpisodes;
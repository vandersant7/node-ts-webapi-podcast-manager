# Podcast Manager

## Descrição

Podcast Manager é um aplicativo ao estilo Netflix, onde é possível centralizar diferentes episódios de podcasts separados por categoria.

### Domínio

Podcasts feitos em vídeo.

### Feature:

- Listar os episódios por categorias.

- **Endpoint:** `GET /api/episode?p={nome-do-podcast}`
    - **Descrição:** Retorna uma lista de episódios por Podcast de um determinado autor

### Implementação:

Retornar em uma API REST (JSON) o nome do podcast, nome do episódio, imagem de capa, link, e categorias.

**GET:** Retorna lista de episódios.

**Response:**
```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "categories": ["saúde", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/hq720.jpg",
    "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    "categories": ["esporte", "corrida"]
  }
]
```

### Código de Exemplo

#### app.ts

```typescript
import * as http from 'http';
import {
  getFilterEpisodes,
  getListEpisodes,
} from './controllers/podcasts-controller';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-method';

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  const baseUrl = request.url?.split('?')[0];

  if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response);
  }

  if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
    await getFilterEpisodes(request, response);
  }
};
```
## Estrutura do Projeto

### Pastas e Arquivos

- `controllers/`
  - `podcasts-controller.ts`: Contém os controladores para manipulação das requisições relacionadas aos podcasts.
- `routes/`
  - `routes.ts`: Define as rotas da aplicação.
- `utils/`
  - `http-method.ts`: Define os métodos HTTP usados na aplicação.
- `app.ts`: Ponto de entrada da aplicação.

### Rotas

- **GET /list**: Retorna uma lista de episódios de podcasts.
- **GET /episode**: Filtra episódios de podcasts pelo nome do podcast.

### Exemplo de Implementação do Controller

#### controllers/podcasts-controller.ts

```typescript
import { IncomingMessage, ServerResponse } from 'http';

export const getListEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const episodes = [
    {
      podcastName: 'flow',
      episode: 'CBUM - Flow #319',
      videoId: 'pQSuQmUfS30',
      cover: 'https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg',
      link: 'https://www.youtube.com/watch?v=pQSuQmUfS30',
      categories: ['saúde', 'bodybuilder'],
    },
    {
      podcastName: 'flow',
      episode: 'RUBENS BARRICHELLO - Flow #339',
      videoId: '4KDGTdiOV4I',
      cover: 'https://i.ytimg.com/vi/4KDGTdiOV4I/hq720.jpg',
      link: 'https://www.youtube.com/watch?v=4KDGTdiOV4I',
      categories: ['esporte', 'corrida'],
    },
  ];

  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(episodes));
};

export const getFilterEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const query = new URL(request.url!, `http://${request.headers.host}`).searchParams;
  const podcastName = query.get('podcastName');

  const episodes = [
    {
      podcastName: 'flow',
      episode: 'CBUM - Flow #319',
      videoId: 'pQSuQmUfS30',
      cover: 'https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg',
      link: 'https://www.youtube.com/watch?v=pQSuQmUfS30',
      categories: ['saúde', 'bodybuilder'],
    },
    {
      podcastName: 'flow',
      episode: 'RUBENS BARRICHELLO - Flow #339',
      videoId: '4KDGTdiOV4I',
      cover: 'https://i.ytimg.com/vi/4KDGTdiOV4I/hq720.jpg',
      link: 'https://www.youtube.com/watch?v=4KDGTdiOV4I',
      categories: ['esporte', 'corrida'],
    },
  ];

  const filteredEpisodes = episodes.filter(episode => episode.podcastName === podcastName);

  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(filteredEpisodes));
};
```

### Como Rodar o Projeto

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/podcast-manager.git
   cd podcast-manager
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Inicie o servidor**:

   ```bash
   npm run start:dev
   ```

4. **Acesse a aplicação**:

   Abra o navegador e vá para `http://localhost:3333/api/episode`.

## Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)**: Plataforma de desenvolvimento JavaScript server-side.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript que adiciona tipagem estática ao código.
- **[Tsup](https://tsup.egoist.dev/)**: Ferramenta de bundling para TypeScript, utilizada para empacotar e otimizar o código.
- **[Tsx](https://github.com/esbuild-kit/tsx)**: Ferramenta para executar arquivos TypeScript diretamente, sem necessidade de transpilar para JavaScript primeiro.
- **[@types/node](https://www.npmjs.com/package/@types/node)**: Tipos TypeScript para Node.js, proporcionando tipagem para os módulos do Node.js.

### Dependências de Desenvolvimento

- **[@types/node](https://www.npmjs.com/package/@types/node)**: `^20.14.9`
- **[tsup](https://tsup.egoist.dev/)**: `^8.1.0`
- **[tsx](https://github.com/esbuild-kit/tsx)**: `^4.16.0`
- **[typescript](https://www.typescriptlang.org/)**: `^5.5.2`

### Scripts

- **start:dev**: Inicia o servidor em ambiente de desenvolvimento com `tsx` e carrega variáveis de ambiente do arquivo `.env`.
- **start:watch**: Inicia o servidor em modo watch, recompilando automaticamente com `tsx` e carregando variáveis de ambiente do arquivo `.env`.
- **dist**: Empacota o código fonte utilizando `tsup`.
- **start:dist**: Empacota o código fonte e inicia o servidor utilizando `node`, carregando variáveis de ambiente do arquivo `.env`.

## Como contribuir com esse projeto

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Crie um novo Pull Request.
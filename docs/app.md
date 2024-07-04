# Podcast Manager

### Descrição

Um app ao estilo netflix, onde possar centralizar diferentes episódios separados por categoria.

### Domínio

Podcasts feitos em vídeo

### Features

- Listar os episódios em sessões de categorias
  - [saúde, bodybuilder, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como

#### Feature:

- Listar os episódios em sessões de categorias

  ```js

  ```

#### Como vou implementar:

Vou retornar em uma api rest (json) o nome do podcast, nome do episódio, imagem de capa, link, category

GET: retona lista de episódios

response
```js
[
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
  }
]
```

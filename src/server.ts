import * as http from 'http' // Para criar o nosso server estamos importando o módulo http nativo do NodeJs. Visto que estamos trabalhando com typescript, e o NodeJs não reconhece typescript, mas sim, Javascript. A própria IDE vai sugerir uma correção rápida - vai sugerir para baixar a tipagem para NodeJs
import { app } from './app'


//A constante abaixo criamos o nosso servidor com o método request e response
const server = http.createServer(app)

// Agora precisaremos criar a nossa porta que ficará ouvindo o nosso servidor, para poder se comunicar com o nosso servidor.

//Vamos criar as variáveis de ambiente
//Por padrão, o navegador só realiza o método GET
const port = process.env.PORT

server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`)
})

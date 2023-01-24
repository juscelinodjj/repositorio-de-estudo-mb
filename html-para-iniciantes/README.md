# HTML para iniciantes
#### [HTML para iniciantes](https://www.youtube.com/watch?v=SV7TL0hxmIQ)

#### Tópicos
- **O que é HTML?**
  - Acrônico para Hypertext Markup Language.
  - Uma linguagem para estruturar o layout das páginas web.
  - Não podemos realizar:
    - if/else
    - loops
    - funções
  - Faz parte da tríade web: HTML, CSS e JS.
  - Pode ser executada diretamente no navegador, não precisa de um setup.
  - Toda página web tem na sua composição HTML.
- **O que forma a estrutura?**
  - Vamos criar elementos que são parecidos com os do Word, onde estruturamos um texto, exemplos:
    - Títulos
    - Parágrafos
    - Listas
    - Tabelas
    - Imagens
- **Como executar HTML?**
  - Para executar HTML basta um navegador.
  - Vamos criar o nosso código em algum editor de código, sugestão, VS Code.
  - Salvar o arquivo do projeto com a extensão .html.
  - Abrir este arquivo pelo navegador, copiando o seu caminho relativo.
- **O que são tags?**
  - Os elementos do HTML são escritos através de tags.
  - Temos uma sintaxe semelhante para quase todas elas.
  - Sintaxe é a forma como é codificado algo em uma linguagem.
  - Exemplo:
    - Tag de parágrafo.
    - ```html
        <p>lorem ipsum</p>
      ```
- **Os atributos do HTML**
  - Atributos são como opções especiais para configurar determinadas tags.
  - Exemplo:
    - Tag de âncora.
    - ```html
        <a href="https://www.google.com.br">Ir para o Google</a>
      ```
    - O link de destino é determinado pelo atributo href.
- **Encadeamento (nesting)**
  - Encadeamento, também chamado de nesting, é quando adicionamos um elemento dentro do outro.
  - Uma técnica importante do HTML, para criar sessões.
    - ```html
        <div>
          <h1>Título</h1>
          <p>Parágrafo</p>
        </div>
      ```
    - Aqui temos uma div com um título e um parágrafo, ambos encadeados.
- **Tags sem fechamento**
  - Há tags que não possuem fechamento.
  - Geralmente é quando ela não tem conteúdo.
  - Um exemplo é a tag de imagem:
    - ```html
        <img src="link-da-imagem.jpg" alt="Texto descritivo da imagem">
      ```
  - Os atributos configuram a tag completamente.
  - Inserindo o caminho da imagem (src) e uma descrição (alt).
- **Estrutura básica do HTML**
  - Todo documento HTML tem uma estrutura muito semelhante, composta por tags essenciais.
    - ```html
        <!DOCTYPE html>
        <html lang="pt-BR">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
          </head>
          <body>
          </body>
        </html>
      ```
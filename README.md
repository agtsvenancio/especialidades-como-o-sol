# Especialidades Como o Sol

# Páginas de especialidades — Como o Sol

## Objetivo

Criar o índice `/especialidades` e uma página dinâmica para cada uma das 21 áreas do documento, sem páginas por estado nesta etapa.

## Implementação

- Centralizar nomes, endereços, títulos, descrições, textos editoriais, chamadas e avisos das 21 especialidades em uma única fonte de dados.

- Criar o índice com as 21 áreas, navegação clara e espaços circulares demarcados para as futuras fotografias, incluindo formato e descrição da imagem esperada.

- Criar a rota dinâmica `/especialidades/{especialidade}` com validação do endereço e página não encontrada para valores inválidos.

- Montar cada página com caminho de navegação, título, introdução, “O que é”, “Quando buscar”, “Como escolher um profissional”, aviso de segurança quando necessário e chamada final.

- Interligar páginas ao índice e oferecer navegação entre áreas.

## Direção visual

- Reproduzir a linguagem da referência: fundo claro, verde profundo, terracota, tipografia editorial acolhedora e composição arejada.

- Usar o logotipo enviado no cabeçalho e derivar dele o ícone do site.

- Não incorporar a captura de tela nem gerar fotografias; os espaços de imagem terão proporção, formato e orientação do conteúdo claramente identificados.

- Adaptar a leitura e navegação para celular e computador.

## Metadados e validação

- Adicionar título, descrição, Open Graph, Twitter Card, canonical e BreadcrumbList em cada página.

- Conferir as 21 ligações do índice, algumas páginas representativas, endereço inválido, metadados, legibilidade e ausência de erros em telas grandes e pequenas.

# Páginas das áreas de atuação

## Resultado

- Criar uma página índice em `/especialidades` com as 21 áreas apresentadas no material.

- Criar uma página própria para cada área em `/especialidades/{especialidade}`.

- Manter a identidade visual do Como o Sol: fundo claro, verde profundo, terracota e tipografia editorial acolhedora.

## Conteúdo e navegação

- Usar os nomes, endereços, títulos, descrições e textos editoriais do documento enviado.

- Cada página terá: caminho de navegação, título principal, introdução, “O que é”, “Quando buscar”, “Como escolher um profissional” e chamada final.

- Interligar todas as áreas pelo índice e incluir acesso de retorno às especialidades.

- Exibir avisos de segurança e limites de atuação onde o documento recomenda, especialmente em saúde mental, urgência e práticas complementares.

## Visual

- Usar o logotipo enviado no cabeçalho.

- Reproduzir a organização visual da referência sem incorporar as capturas de tela como conteúdo.

- Criar uma apresentação consistente e responsiva para celular e computador, com ilustrações fotográficas circulares por especialidade e leitura confortável.

## Detalhes técnicos

- Usar uma rota dinâmica para atender as 21 páginas, validando cada endereço e mostrando página não encontrada para endereços inválidos.

- Centralizar os dados das especialidades para manter textos, links e metadados consistentes.

- Adicionar título, descrição, Open Graph, Twitter Card e breadcrumbs estruturados em cada página.

- Não criar páginas por estado nesta etapa, conforme o escopo do documento.

## Verificação

- Conferir o índice e amostras de páginas em telas grandes e pequenas.

- Validar links, página inexistente, metadados, legibilidade e ausência de erros.

(crie as paginas de cada area de atuaçõa( NÃO PRECISA CREIAR AS IMAGENS POIS EU JA TENHO, AONDE FOE COLOCR IMAGEM DEIXE O ESPAÇO VAZIO E DIZENDO QUAL IMAGEM DEVE POR POR EXEPLO " INMAGEM DE MEDICO EXAMINANCO PACIENTE" E INFORME O FORMATO

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f4ca1ee7-5772-46e4-8a97-038d08915fa2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

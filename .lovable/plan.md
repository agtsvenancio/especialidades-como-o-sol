# Páginas de especialidades — Como o Sol

## Resultado
- Criar `/especialidades` com as 21 áreas do documento, em ordem editorial, com navegação clara e cartões circulares reservados para imagens futuras.
- Criar uma única página dinâmica em `/especialidades/$especialidade`, validando os 21 endereços e exibindo uma página não encontrada para qualquer valor inválido.
- Não criar páginas por estado nesta etapa.

## Conteúdo centralizado
- Reunir em uma única fonte os nomes, endereços, títulos, descrições, introduções, seções editoriais, chamadas, avisos e instruções das imagens.
- Usar os textos do documento como fonte principal e corrigir apenas inconsistências evidentes da extração, preservando a intenção editorial.
- Incluir avisos destacados nas áreas de urgência, saúde mental, obstetrícia/neonatologia e práticas complementares.

## Estrutura visual
- Aplicar fundo claro, verde profundo e terracota, com tipografia editorial acolhedora e bastante espaço entre blocos.
- Usar o logotipo enviado no cabeçalho e criar o favicon a partir dele.
- Não incorporar as capturas de referência nem gerar fotografias.
- Exibir, em cada lugar reservado à fotografia, um círculo demarcado com a descrição da imagem esperada, enquadramento, proporção 1:1 e orientação recomendada.
- Adaptar cabeçalho, grade, textos e navegação relacionada para celular e computador.

## Páginas individuais
- Exibir caminho de navegação, título, introdução, “O que é”, “Quando buscar”, “Como escolher um profissional”, aviso quando necessário e chamada final.
- Incluir retorno ao índice e navegação anterior/próxima entre áreas.

## Metadados e validação
- Adicionar título, descrição, Open Graph, Twitter Card, canonical autorreferente e `BreadcrumbList` no índice e nas páginas individuais.
- Conferir as 21 ligações, páginas representativas, endereço inválido, metadados e ausência de erros.
- Verificar visualmente em tela grande e celular, incluindo legibilidade, alinhamento e ausência de sobreposição.

## Detalhes técnicos
- Usar as rotas nativas do projeto e `notFound()` para endereços inválidos.
- Manter um único H1 por página, HTML semântico e textos alternativos/instruções acessíveis nos espaços reservados às futuras imagens.

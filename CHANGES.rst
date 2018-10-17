Changelog
---------

2.0b5 (2018-10-17)
^^^^^^^^^^^^^^^^^^

- Limita movimentação dos ícones de redes sociais para não invadir o rodapé do site.
  [rodfersou]
- Corrige inserção dos links do portal actions.
  [rodfersou]

- Atualiza configuração do webpack.
  [rodfersou]

- Corrige inserção de viewlet de redes para permitir internacionalização.
  [rodfersou]

- Move link para voltar para o topo em um viewlet no brasil.gov.portal para permitir internacionalização.
  [rodfersou]

- Corrige cabeçalho expandido (fecha `#543 <https://github.com/plonegovbr/brasil.gov.temas/issues/543>`_).
  [rodfersou, agnogueira]

- Move texto da licença de uso para um viewlet no brasil.gov.portal para permitir internacionalização.
  [rodfersou]

- Corrige posição dos botões de compartilhamento da notícia.
  [agnogueira, rodfersou]


2.0b4 (2018-10-05)
^^^^^^^^^^^^^^^^^^

- Alteração na largura do menu.
  [agnogueira, rodfersou]

- Corrige altura da linha de destaque no topo.
  [agnogueira, rodfersou]


2.0b3 (2018-09-28)
^^^^^^^^^^^^^^^^^^

- Adiciona estilo para controlar degrade do destaque topo.
  [agnogueira]

- Altera a cor de fundo básica dos temas.
  [agnogueira]

- Adiciona estilos para permitir uma imagem de fundo para o topo de uma capa.
  [agnogueira]

- Corrige icone do estilo tile vinculado.
  [agnogueira]

- Evita a emissão de source maps dos recursos estáticos.
  [hvelarde]


2.0b2 (2018-09-04)
^^^^^^^^^^^^^^^^^^

.. warning::
    Este release atualiza as dependências do processamento de recursos estáticos.
    Em ambiente de desenvolvimento pode ser necessário remover as pastas ``parts`` e ``webpack/node_modules`` para efetivar a atualização de ambiente.

- Estilos iniciais para permitir a utilização de uma capa com fundo colorido.
  Para que o estilo funcione, o usuário deve criar um modelo de capa com o nome "Capa fundo destacado".
  [agnogueira]

- Corrige largura do tile de navegação.
  [agnogueira]

- Corrige largura na tela de configuração (fecha `#211 <https://github.com/plonegovbr/brasil.gov.temas/issues/211>`_).
  [agnogueira]

- Atualiza versões do `Node.js <https://nodejs.org/>`_ e sc.recipe.staticresources.
  [rodfersou]

- Altera a cor do header de noticias no tema padrão.
  [agnogueira]

- Correção de estilos para o funcionamento do share dos tiles
  [agnogueira]

- Novas variações de tamanho para a foto sobreposta
  [agnogueira]

- Novo título grande para notícias destacadas
  [agnogueira]

- Deixa skip links visíveis quando acessados via teclado.
  [agnogueira]

- Adiciona retorno visual para a navegação via teclado.
  [agnogueira]


2.0b1 (2018-08-31)
^^^^^^^^^^^^^^^^^^

- Adiciona visäo de Filtro de resultados.
  [rodfersou]

- Adiciona visão de Central de conteúdo.
  [rodfersou]

- Novos estilos para a variação do header
  [agnogueira]

- Adiciona novo tema branco.
  [agnogueira, rodfersou]

- Corrige SCSS para que o tema funcione a partir de variáveis.
  [agnogueira, rodfersou]

- Novos estilos para os tiles
  [agnogueira]

- Adiciona template adicional ao diazo para variação do header
  [agnogueira]

- Remove duplicidade de ID nos icones de redes sociais
  [agnogueira]

- Utiliza logos do rodapé a partir da barra
  [agnogueira]

- Adiciona novas variações da fonte principal.
  [agnogueira]

- Revisão geral de fontes no header, footer, conteúdo e tiles.
  [agnogueira]

- Altera a largura geral do Portal.
  [agnogueira]

- Novo estilo para as tags.
  [agnogueira]

- Ajustes visuais para as visões de coleção e filtro.
  [agnogueira]

- Altera o ícone de contraste.
  [agnogueira]

- Corrige o texto da licença do site e exibe em todas as páginas (ref. `#190 <https://github.com/plonegovbr/brasil.gov.temas/issues/190>`_).
  [hvelarde, agnogueira]

- Corrige a exibição dos scripts para suporte a estatísticas web (fecha `#188 <https://github.com/plonegovbr/brasil.gov.temas/issues/188>`_).
  [agnogueira]


2.0a6 (2018-07-06)
^^^^^^^^^^^^^^^^^^

- Ajusta a largura da página, cor de fundo e fontes.
  [agnogueira]

- Revisa as fontes do topo do portal.
  [agnogueira]

- Revisa estilos para brasil.gov.agenda.
  [agnogueira]


2.0a5 (2018-06-06)
^^^^^^^^^^^^^^^^^^

- Revisa view de Galleria de Fotos.
  [rodfersou]

- Revisão dos estilos para o topo do portal.
  [agnogueira]

- Criação de estilos para os tiles do portal
  [agnogueira]

- Criação de estilos para os tiles destacados no topo do portal
  [agnogueira]

- Adiciona comportamento Flex por padrao aos tiles
  [agnogueira]

- Variação na cor do header para seções específicas
  [agnogueira]

- Evolução de estilos para o responsivo
  [agnogueira]

- Variações visuais para linhas e colunas
  [agnogueira]

- Estilos gerais para texto em notícias e páginas
  [agnogueira]


2.0a4 (2018-02-08)
^^^^^^^^^^^^^^^^^^

- Corrige o path padrão do tema para não iniciar com "/".
  [rodfersou]

- Não esconde o titulo do portal para dispositivos móveis.
  [rodfersou]


2.0a3 (2018-01-11)
^^^^^^^^^^^^^^^^^^

- Corrige release quebrado.
  [hvelarde]


2.0a2 (2018-01-11)
^^^^^^^^^^^^^^^^^^

- Ajustes do responsivo.
  [agnogueira]

- Ajusta a busca.
  [rodfersou, agnogueira]

- Adiciona favicon.
  [rodfersou]

- Corrige funcionamento do contraste.
  [rodfersou, agnogueira]

- Formatação básica dos conteúdos.
  [agnogueira]

- Adiciona icones de redes sociais no topo e no rodapé.
  [agnogueira]

- Adiciona estilos para os tiles.
  [agnogueira]

- Corrige título e logo do portal.
  [agnogueira]


2.0a1 (2017-12-27)
^^^^^^^^^^^^^^^^^^

- Release inicial.
  [agnogueira, rodfersou, hvelarde]

Histórico de Alterações
------------------------

1.1 (2015-09-03)
^^^^^^^^^^^^^^^^^^

* Reduzindo imagens pelo tinypng. Redução em 59% do total.
  [caduvieira]
* Muda o nome de brasil.png para forçar envio de nova imagem (closes `#121`_).
  [caduvieira]
* Atualiza a imagem do Brasil do rodapé para imagem 'Brasil Pátria Educadora' (closes `#109`_).
  [caduvieira]
* Adiciona cores nos links dos tiles e retira o azul dos chapéus.
  [caduvieira]
* Corrigi erro em que as telas de 'Preferências Pessoais', 'Informação Pessoal'
  e 'Painel Pessoal' apareciam vazias. (closes `#113`_)
  [idgserpro]
* Adicionadas regras para inserir as traduções das viewlets de copyright do
  Plone, "Voltar para o topo" e seção de acessibilidade de brasil.gov.portal
  no tema.
  [idgserpro]
* Adicionada estrutura nas regras de Diazo permitindo inserção de links de
  línguas como actions em "site_actions": basta criar com o mesmo id hoje
  presente nas regras css (language-en e language-es). Dessa forma, evita-se
  customização do tema apenas para inserção desses links.
  [idgserpro]
* Ajuste na ordem da barra e dos links de acessibilidade
  [caduvieira]

1.0.7 (2014-12-05)
^^^^^^^^^^^^^^^^^^

* Ajuste de id 'footer-brasil' para preparação para o rodapé dinâmico.
  [caduvieira]
* Adiciona estilo básico para comentários do Plone.
  [dbarbato]
* Retorna a marca do Governo Federal no rodapé.
  [dbarbato]
* Adiciona estilos para portlet Centrais de Conteúdos em inglês e espanhol.
  [dbarbato]
* Ajusta para alterar estilo da primeira navegação apenas quando título for
  Menu de relevância.
  [dbarbato]
* Adiciona estilo nos quatro temas para botões do Banner Rotativo.
  [dbarbato]
* Adiciona ícone de Dados Abertos para Centrais de Conteúdos nos quatro temas.
  [dbarbato]


1.0.6 (2014-11-01)
^^^^^^^^^^^^^^^^^^

* Ajusta ícones de redes sociais para tema amarelo e branco.
  [dbarbato]
* Inverte ícones de publicações e infográficos de central de conteúdos.
  [dbarbato]
* Ajuste de largura de campo de upload múltiplo com duas colunas aplicadas.
  [dbarbato]
* Acerto de 1px no icone de publicações do centrais de conteúdos do tema branco.
  [dbarbato]


1.0.5 (2014-06-11)
^^^^^^^^^^^^^^^^^^

* Corrige identificador da barra de identidade (agora usamos #barra-identidade, que engloba também o javascript)
  [ericof]


1.0.4 (2014-06-10)
^^^^^^^^^^^^^^^^^^

* Acerta lupa de busca responsiva nos 4 temas.
  [dbarbato]
* Remove a marca do Governo Federal. (closes `#106`_)
  [ericof]
* Adiciona testes funcionais.
  [ericof]
* Acerta imagem de menu responsivo para cada cor de tema.
  [dbarbato]
* Inclui estatísticas web nas regras dos temas azul, amarelo e branco.
  [dbarbato]


1.0.3 (2014-03-11)
^^^^^^^^^^^^^^^^^^

* Corrige cor do link do menu de apoio de verde para azul no tema Amarelo.
  [taniaa]


1.0.2 (2014-02-28)
^^^^^^^^^^^^^^^^^^
* Adiciona ícones de redes sociais Tumblr e Instagram (closes `#103`_).
  [rodfersou][rennanrodrigues]
* Ajusta estilo de Menu de idiomas em cada cor de tema.
  [taniaa]
* Ajusta texto para atalho ao site de idiomas no topo de cada cor de tema.
  [taniaa]
* Corrige o nome dos temas para Portal Padrão.
  [dbarbato]
* Ajusta alinhamento em páginas onde tem legenda de imagens à esquerda (closes `#101`_).
  [dbarbato]
* Adiciona os ícones da visão folder_summary_view para cada cor de tema (closes `#99`_).
  [felipeduardo]


1.0.1 (2013-12-12)
^^^^^^^^^^^^^^^^^^
* Padronização nas cores de Header e Footer (closes `#97`_).
  [felipeduardo]


1.0 (2013-10-29)
^^^^^^^^^^^^^^^^^^^
* Registro dos icones das redes sociais (closes `#94`_).
  [rennanrodrigues]


1.0rc2 (2013-10-24)
^^^^^^^^^^^^^^^^^^^
* Revisão dos ícones de reportar erro (closes `#69`_).
  [rennanrodrigues]
* Agrupado seletores css dos icones das centrais de conteudo por tema com o
  sprite principal (closes `#65`_).
  [felipeduardo]
* Revisão dos ícones de redes sociais (closes `#85`_).
  [rodfersou]
* Movido arquivo javascript dos temas para brasil.gov.portal (closes `#87`_).
  [rodfersou]
* Adicionado ancoras no html dos temas e alterado os links de acessibiliade (closes `#83`_).
  [felipeduardo]
* Revisão de ícones de redes sociais para escolher cor por tema (closes `#78`_).
  [rodfersou]
* Movido main.css para brasil.gov.portal - será mantido no tema somente para
  previsualizacao do tema (closes `#77`_).
  [rodfersou]
* Padronização do css e separação dos atributos especificos para outros temas (closes `#65`_).
  [felipeduardo]
* Alteração da cor da barra de acessibilidade (closes `#74`_).
  [rennanrodrigues]
* Movidas customizacoes nitf do portal brasil para portal modelo (closes `#60`_).
  [rodfersou]
* Adicionada regra diazo para mapear viewlet plone.analytics (closes `#71`_).
  [rodfersou]
* Revisão de alinhamento e espaçamento no social like (closes `#58`_).
  [rennanrodrigues]
* Revisão da fonte no breadcrumb (closes `#40`_).
  [rodfersou]
* Removidas customizações da pasta overrides to tema, e movidas para brasil.gov.portal
  (closes `#49`_).
  [rodfersou]
* Revisão de espaçamento em conteúdo NITF (closes `#52`_). [rennanrodrigues]
* Correção de espaçamento em conteúdo NITF (closes `#52`_). [rodfersou]
* Ajustes nas regras de fontes em conteúdo NITF (closes `#51`_). [rennanrodrigues]
* Correção para ocultar portlets estaticos no menu lateral (closes `#46`_)
  [felipeduardo]
* Ajuste de css no layout do menu lateral (closes `#43`_). [felipeduardo]
* Realizadas modificações sugeridas para breadcrumbs (closes `#40`_). [rodfersou]
* Correção das larguras das grid, conforme solicitado em imagem de referência (closes `#38`_).
* Revisão de regra para fonte nos títulos (closes `#35`_). [rodfersou]
* Inserção de font-face manual (closes `#35`_). [rennanrodrigues]
  [rodfersou]
* Revisão de tamanho de fontes e espaçamentos no footer `#34`_). [rennanrodrigues]
* Ajustes de layout nos espaçamentos e fontes do cabeçalho (header) do portal (closes `#32`_).
  [felipeduardo]
* Revisão de fontes com fallbacks definidos (closes `#30`_). [rodfersou]
* Correção de css no tamanho de fonts e espaçamentos da homepage
  (closes `#26`_). [felipeduardo]
* Correção de fontes e cores no Menu  (closes `#23`_). [rodfersou]
* Revisão de estilos da capa de editoria (closes `#25`_). [rennanrodrigues]
* Correção de layout / css no rodapé da pagina  (closes `#19`_).
  [felipeduardo]
* Realizado diversas alterações no estilo do tipo NITF (fonte, espaçamento, alinhamento e tamanho de quebra de linha) (closes `#18`_).
  [rennanrodrigues, rodfersou]
* Correções de layout para o cabecalho do portal.  (closes `#17`_).
  [felipeduardo]
* Correção do bug no click dos links para Firefox.  (closes `#11`_).
  [felipeduardo]
* Alteração textual na barra de acessibilidade e no form de busca
  (closes `#9`_). [felipeduardo]
* Alterada a posição do botão fechar nos overlays.  (closes `#7`_).
  [rodfersou]
* Adicionados novos estilos CSS para o Tile New Basic Article (closes `#5`_).
  [felipeduardo]


1.0rc1 (2013-08-26)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Atividade 320: Ajuste Estilo - Listagem Vertical [rennanrodrigues]
* Criação de Estilos para Tile Header [felipeduardo]
* Alteração na Posição do BreadCrumbs [felipeduardo]
* Ajustar largura das grids do collective cover no portal brasil
  [felipeduardo]
* Ajuste de CSS no Portlet Texto Estático de Centrais de Conteudo
  [felipeduardo]
* Correção de CSS na altura Mínima Header [felipeduardo]
* Ajustar CSS da Visão Sumária para folders [felipeduardo]
* Aplicação de CSS para o Box de serviços [felipeduardo]
* Ajuste de CSS na visão sumária para coleções [felipeduardo]
* Ajustar CSS da listagem horizontal [felipeduardo]
* Ajustar CSS da barra social Like [felipeduardo]
* Ajuste de css no portlet collection ("Políticas") [felipeduardo]
* Atividade 316: Novo estilo para Linha Fina do Tile Header [rennanrodrigues]
* Atividade 305: Visualização de Tags VCGE [rennanrodrigues]
* Atividade 317: Gestão de Itens Relacionados - Quebra de linha automática
  [rodfersou]
* Acerto estilo de filtro de busca avancada [dbarbato]


1.0a1 (2013-07-22)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Primeira versão [ericof]


.. _`#5`: https://github.com/plonegovbr/brasil.gov.temas/issues/5
.. _`#7`: https://github.com/plonegovbr/brasil.gov.temas/issues/7
.. _`#9`: https://github.com/plonegovbr/brasil.gov.temas/issues/9
.. _`#11`: https://github.com/plonegovbr/brasil.gov.temas/issues/11
.. _`#17`: https://github.com/plonegovbr/brasil.gov.temas/issues/17
.. _`#18`: https://github.com/plonegovbr/brasil.gov.temas/issues/18
.. _`#19`: https://github.com/plonegovbr/brasil.gov.temas/issues/19
.. _`#23`: https://github.com/plonegovbr/brasil.gov.temas/issues/23
.. _`#25`: https://github.com/plonegovbr/brasil.gov.temas/issues/25
.. _`#26`: https://github.com/plonegovbr/brasil.gov.temas/issues/26
.. _`#30`: https://github.com/plonegovbr/brasil.gov.temas/issues/30
.. _`#32`: https://github.com/plonegovbr/brasil.gov.temas/issues/32
.. _`#34`: https://github.com/plonegovbr/brasil.gov.temas/issues/34
.. _`#35`: https://github.com/plonegovbr/brasil.gov.temas/issues/35
.. _`#38`: https://github.com/plonegovbr/brasil.gov.temas/issues/38
.. _`#40`: https://github.com/plonegovbr/brasil.gov.temas/issues/40
.. _`#43`: https://github.com/plonegovbr/brasil.gov.temas/issues/43
.. _`#46`: https://github.com/plonegovbr/brasil.gov.temas/issues/46
.. _`#49`: https://github.com/plonegovbr/brasil.gov.temas/issues/49
.. _`#51`: https://github.com/plonegovbr/brasil.gov.temas/issues/51
.. _`#52`: https://github.com/plonegovbr/brasil.gov.temas/issues/52
.. _`#58`: https://github.com/plonegovbr/brasil.gov.temas/issues/58
.. _`#60`: https://github.com/plonegovbr/brasil.gov.temas/issues/60
.. _`#65`: https://github.com/plonegovbr/brasil.gov.temas/issues/65
.. _`#69`: https://github.com/plonegovbr/brasil.gov.temas/issues/69
.. _`#71`: https://github.com/plonegovbr/brasil.gov.temas/issues/71
.. _`#74`: https://github.com/plonegovbr/brasil.gov.temas/issues/74
.. _`#77`: https://github.com/plonegovbr/brasil.gov.temas/issues/77
.. _`#78`: https://github.com/plonegovbr/brasil.gov.temas/issues/78
.. _`#83`: https://github.com/plonegovbr/brasil.gov.temas/issues/83
.. _`#85`: https://github.com/plonegovbr/brasil.gov.temas/issues/85
.. _`#87`: https://github.com/plonegovbr/brasil.gov.temas/issues/87
.. _`#94`: https://github.com/plonegovbr/brasil.gov.temas/issues/94
.. _`#97`: https://github.com/plonegovbr/brasil.gov.temas/issues/97
.. _`#99`: https://github.com/plonegovbr/brasil.gov.temas/issues/99
.. _`#101`: https://github.com/plonegovbr/brasil.gov.temas/issues/101
.. _`#103`: https://github.com/plonegovbr/brasil.gov.temas/issues/103
.. _`#106`: https://github.com/plonegovbr/brasil.gov.temas/issues/106
.. _`#109`: https://github.com/plonegovbr/brasil.gov.temas/issues/109
.. _`#113`: https://github.com/plonegovbr/brasil.gov.temas/issues/113
.. _`#121`: https://github.com/plonegovbr/brasil.gov.temas/issues/121

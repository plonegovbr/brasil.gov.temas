***********************
.gov.br: Temas para IDG
***********************

.. contents:: Conteúdo
   :depth: 2

Introdução
----------

Este pacote provê quatro temas (Diazo) modelo do Governo Federal para uso em sites Plone do Governo da República Federativa do Brasil.

O desenvolvimento deste pacote foi feito como parte da iniciativa `Portal Padrão <http://portalpadrao.plone.org.br>`_ da comunidade `PloneGov.Br <http://www.softwarelivre.gov.br/plone>`_.

Temas
-----

Tema Verde
^^^^^^^^^^

.. image:: https://raw.githubusercontent.com/plonegovbr/brasil.gov.temas/master/src/brasil/gov/temas/themes/verde/preview.png
       :height: 150px
       :width: 200px

Tema Azul
^^^^^^^^^

.. image:: https://raw.githubusercontent.com/plonegovbr/brasil.gov.temas/master/src/brasil/gov/temas/themes/azul/preview.jpg
       :height: 150px
       :width: 200px

Tema Amarelo
^^^^^^^^^^^^

.. image:: https://raw.githubusercontent.com/plonegovbr/brasil.gov.temas/master/src/brasil/gov/temas/themes/amarelo/preview.jpg
       :height: 150px
       :width: 200px

Tema Branco
^^^^^^^^^^^

.. image:: https://raw.githubusercontent.com/plonegovbr/brasil.gov.temas/master/src/brasil/gov/temas/themes/branco/preview.jpg
       :height: 150px
       :width: 200px

Estado deste pacote
-------------------

O **brasil.gov.temas** conta testes automatizados e, a cada alteração em seu
código os testes são executados pelo serviço `Travis <https://travis-ci.org/>`_.

O estado atual dos testes, a cobertura de código e o número de downloads deste pacote podem ser vistos nas imagens a seguir:

.. image:: http://img.shields.io/pypi/v/brasil.gov.temas.svg
    :target: https://pypi.python.org/pypi/brasil.gov.temas

.. image:: https://img.shields.io/travis/plonegovbr/brasil.gov.temas/master.svg
    :target: http://travis-ci.org/plonegovbr/brasil.gov.temas

.. image:: https://img.shields.io/coveralls/plonegovbr/brasil.gov.temas/master.svg
    :target: https://coveralls.io/r/plonegovbr/brasil.gov.temas

Instalação
----------

Para habilitar a instalação deste produto em um ambiente que utilize o buildout:

1. Editar o arquivo buildout.cfg (ou outro arquivo de configuração) e adicionar o pacote ``brasil.gov.temas`` à lista de eggs da instalação:

.. code-block:: ini

    [buildout]
    ...
    eggs =
        brasil.gov.temas

2. Após alterar o arquivo de configuração é necessário executar ''bin/buildout'', que atualizará sua instalação.

3. Reinicie o Plone

4. Acesse o painel de controle e na opção **Temas** você verá os temas providos por este pacote listados.

Desenvolvimento
---------------

Passo a passo
^^^^^^^^^^^^^

1. Abrir um terminal, entrar na pasta do projeto, rodar buildout e iniciar a instancia;

2. Abrir outro terminal, entrar na pasta do projeto, iniciar o comando ``bin/watch-brasilgovtemas``;

3. Alterar os arquivos na pasta ``webpack``.

Mais detalhes
^^^^^^^^^^^^^

Utilizamos `webpack <https://webpack.js.org/>`_ para gerenciar o conteúdo estático do tema,
tomando vantagem das diversas ferramentas e plugins disponíveis para suprir nossas necessidades.

Utilizamos a receita de buildout `sc.recipe.staticresources <https://github.com/simplesconsultoria/sc.recipe.staticresources>`_ para integrar o `webpack`_ no Plone.

Ao desenvolver os temas iniciamos o watcher do `webpack`_ e trabalhamos somente na pasta "webpack" alterando os arquivos;
o `webpack`_ se encarrega de processar e gerar os arquivos em seu endereço final.

Segue uma lista dos principais arquivos:

.. code-block:: console

    $ tree webpack/app
    webpack/app
    ├── brasilgovtemas.js
    ├── favicons
    │   └── Lista de imagens para o Favicon
    ├── fonts
    │   └── Lista de Fontes utilizadas no site
    ├── index.html
    ├── js
    │   └── Lista de módulos Javascript
    ├── rules.xml
    ├── scss
    │   └── Lista de módulos Scss
    ├── tema-1
    │   ├── brasilgovtemas.scss
    │   ├── favicons
    │   │   ├── browserconfig.xml
    │   │   └── manifest.json
    │   ├── img
    │   │   └── sprite.png
    │   ├── manifest.cfg
    │   ├── preview.png
    │   ├── sprite
    │   │   └── Lista de Imagens para criação do sprite
    │   └── _sprite.scss
    ├── tema-2
    │   └── Arquivos do tema 2
    └── tema-3
        └── Arquivos do tema 3


Na estrutura atual, existem alguns arquivos comuns a todos os temas e alguns arquivos diferentes para cada tema.
Os arquivos globais ficam na pasta ``webpack/app`` enquanto os demais arquivos ficam dentro da pasta de cada tema.

Foi adotada a estratégia pouco comum ao Plone de não registrar os arquivos CSS e JS no ``portal_css`` e ``portal_javascripts``;
Ao invés disso, deixamos o trabalho de gerar um novo nome desses arquivos para o `webpack`_.

O arquivo ``brasilgovtemas.js`` é escrito em ES6 e, ao processar,
cria um arquivo ``brasilgovtemas-[hash].js`` transformado em ES5 através do compilador `Babel <https://babeljs.io/>`_,
e é criada uma cópia por tema desse arquivo.

Na pasta ``favicons`` existem as imagens necessárias para incluir o favicon do site para todas as plataformas.

Na pasta ``fonts`` possui as web fontes utilizadas nos temas deste pacote.

O arquivo ``index.html`` da pasta do Diazo não está no controlador de versões.
Ao invés disso, existe um ``index.html`` na pasta "webpack" que é processado a cada execução do buildout ou do `webpack`_,
e gera arquivos JS, CSS e ``index.html`` na pasta do Diazo.
Os arquivos JS e CSS possuem nomes especiais com um hash que é renovados a cada execução do buildout.

O arquivo ``rules.xml`` é copiado para cada tema, e a princípio é igual para todos os temas.

Na pasta ``scss`` existem os arquivos de estilos propriamente dito,
é la que devemos alterar alguma estrutura de CSS compartilhada por todos os temas,
e uma alteração nessa pasta repercurte em alteração me todos os temas após execução do `webpack`_.

Existe um arquivo ``brasilgovtemas.scss`` para cada tema;
nele existem definições de variáveis do que muda em cada tema, fontes, tamanhos e cores,
e importa os arquivos da pasta "scss" para processar cada tema.
Esse arquivo é transformado em ``brasilgovtemas-[hash].css`` após processamento.

Na pasta ``favicons`` dentro do tema possui arquivos de configuração relacionados ao favicon para algumas plataformas.
Estes arquivos foram criados um para cada tema pois precisam ser alterados em cada tema.

Existem ainda os arquivos ``manifest.cfg`` e ``preview.png`` que são únicos para cada tema, e são necessários pelo Diazo.

Cada tema ainda possui uma pasta "sprite", onde são adicionados os ícones utilizados no tema.
Esses ícones são processados gerando os arquivos ``_sprite.scss`` e ``img/sprite.png`` no tema.
O primeiro arquivo cria mixins utilizados no tema para facilitar a inserção de regras do sprite,
e o segundo arquivo é o sprite propriamente dito, que junta todas as imagens existens na pasta "sprite".

Foi adicionado um plugin para remover os arquivos antigos gerados com hash, para não acumular arquivos CSS e JS na pasta.

Este pacote adiciona os seguintes comandos na pasta bin do buildout para processar automaticamente os recursos estáticos:

.. code-block:: console

    $ bin/env-brasilgovtemas

Este comando adiciona no terminal o node do buildout no PATH do sistema, dessa forma voce pode trabalhar com webpack conforme a documentação oficial.

.. code-block:: console

    $ bin/watch-brasilgovtemas

Este comando instrui ao Webpack para esperar por qualquer mudança nos arquivos SASS e gera a versão minificada do CSS para a aplicação.

.. code-block:: console

    $ bin/dev-brasilgovtemas

Este comando faz o mesmo que o comando watch, mas não minifica o CSS final.  Utilizado para debugar a geração do CSS.

.. code-block:: console

    $ bin/build-brasilgovtemas

Este comando cria o CSS minificado, mas não espera por mudanças.

Links de línguas no topo (Internacionalização)
----------------------------------------------

Hoje nos arquivos CSS existem regras para mostrar links de línguas,
como as classes ``language-en`` e ``language-es``.
Para adicionar links dessas línguas sem precisar customizar o tema,
adicione em ``site_actions`` actions com esse mesmo id e as regras do Diazo pegarão os links renderizados das actions posicionando corretamente na lista de línguas no tema.

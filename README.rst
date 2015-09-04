*************************************
.gov.br: Temas para Portal Padrão
*************************************

.. contents:: Conteúdo
   :depth: 2

Introdução
----------

Este pacote provê quatro temas (Diazo) modelo do Governo Federal para uso em sites Plone do Governo da República Federativa do Brasil.

O desenvolvimento deste pacote foi feito como parte da iniciativa `Portal Padrão <http://portalpadrao.plone.org.br>`_ da comunidade `PloneGov.Br <http://www.softwarelivre.gov.br/plone>`_.

Temas
-----------------

Tema Verde
^^^^^^^^^^^^

.. image:: https://raw.githubusercontent.com/plonegovbr/brasil.gov.temas/master/src/brasil/gov/temas/themes/verde/preview.png
       :height: 150px
       :width: 200px


Tema Azul
^^^^^^^^^^^^

.. image:: https://raw.githubusercontent.com/plonegovbr/brasil.gov.temas/master/src/brasil/gov/temas/themes/azul/preview.jpg
       :height: 150px
       :width: 200px

Tema Amarelo
^^^^^^^^^^^^

.. image:: https://raw.githubusercontent.com/plonegovbr/brasil.gov.temas/master/src/brasil/gov/temas/themes/amarelo/preview.jpg
       :height: 150px
       :width: 200px

Tema Branco
^^^^^^^^^^^^

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

Para habilitar a instalação deste produto em um ambiente que utilize o
buildout:

1. Editar o arquivo buildout.cfg (ou outro arquivo de configuração) e
   adicionar o pacote ``brasil.gov.temas`` à lista de eggs da instalação:

.. code-block:: ini

    [buildout]
    ...
    eggs =
        brasil.gov.temas

2. Após alterar o arquivo de configuração é necessário executar
   ''bin/buildout'', que atualizará sua instalação.

3. Reinicie o Plone

4. Acesse o painel de controle e na opção **Temas** você verá os temas
providos por este pacote listados.

Links de línguas no topo (Internacionalização)
----------------------------------------------

Hoje nos arquivos css existem regras para mostrar links de línguas, como as classes ``language-en`` e ``language-es``. Para adicionar links dessas línguas sem precisar customizar o tema, adicione em ``site_actions`` actions com esse mesmo id e as regras do Diazo pegarão os links renderizados das actions posicionando corretamente na lista de línguas no tema.

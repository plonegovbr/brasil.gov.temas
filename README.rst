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

Rodando o buildout de uma tag antiga do pacote
----------------------------------------------

Para atender ao relato de ter vários jobs de integração contínua em pacotes brasil.gov.* (ver https://github.com/plonegovbr/portalpadrao.release/issues/11), no fim da seção extends do buildout.cfg de todos os pacotes brasil.gov.* temos a seguinte linha:

.. code-block:: cfg

    https://raw.githubusercontent.com/plonegovbr/portal.buildout/master/buildout.d/versions.cfg

Hoje, esse arquivo contém sempre as versões pinadas de um release a ser lançado. Por esse motivo, quando é feito o checkout de uma tag mais antiga provavelmente você não conseguirá rodar o buildout. Dessa forma, após fazer o checkout de uma tag antiga, recomendamos que adicione, na última linha do extends, o arquivo de versões do IDG compatível com aquela tag, presente no repositório https://github.com/plonegovbr/portalpadrao.release/.

Exemplo: você clonou o repositório do brasil.gov.portal na sua máquina, e deu checkout na tag 1.0.5. Ao editar o buildout.cfg, ficaria dessa forma, já com a última linha adicionada:

.. code-block:: cfg

    extends =
        https://raw.github.com/collective/buildout.plonetest/master/test-4.3.x.cfg
        https://raw.github.com/collective/buildout.plonetest/master/qa.cfg
        http://downloads.plone.org.br/release/1.0.4/versions.cfg
        https://raw.githubusercontent.com/plonegovbr/portal.buildout/master/buildout.d/versions.cfg
        https://raw.githubusercontent.com/plone/plone.app.robotframework/master/versions.cfg
        https://raw.githubusercontent.com/plonegovbr/portalpadrao.release/master/1.0.5/versions.cfg
        
Para saber qual arquivo de versões é compatível, no caso do brasil.gov.portal, é simples pois é a mesma versão (no máximo um bug fix, por exemplo, brasil.gov.portal é 1.1.3 e o arquivo de versão é 1.1.3.1). Para os demais pacotes, recomendamos comparar a data da tag do pacote e a data nos changelog entre uma versão e outra para adivinhar a versão compatível.

Links de línguas no topo (Internacionalização)
----------------------------------------------

Hoje nos arquivos css existem regras para mostrar links de línguas, como as classes ``language-en`` e ``language-es``. Para adicionar links dessas línguas sem precisar customizar o tema, adicione em ``site_actions`` actions com esse mesmo id e as regras do Diazo pegarão os links renderizados das actions posicionando corretamente na lista de línguas no tema.

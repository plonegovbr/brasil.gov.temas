***************************
Brasil.gov.br: Temas Modelo
***************************

.. contents:: Conteúdo
   :depth: 2

Introdução
----------

Este pacote provê temas (Diazo) modelo do Governo Federal para uso em
sites Plone do Governo da República Federativa do Brasil.

Requisitos
----------

Para uso deste pacote, seu site deve ter sido construído com:

    * Plone 4.3 ou superior (http://plone.org/products/plone)

Captura de tela
---------------

.. image:: https://raw.github.com/plonegovbr/brasil.gov.temas/master/screenshot.png


Estado deste pacote
-------------------

O **brasil.gov.temas** tem testes automatizados e, a cada alteração em seu
código os testes são executados pelo serviço Travis. 

O estado atual dos testes pode ser visto na imagem a seguir:

.. image:: https://secure.travis-ci.org/plonegovbr/brasil.gov.temas.png?branch=master
    :target: http://travis-ci.org/plonegovbr/brasil.gov.temas

Instalação
----------

Para habilitar a instalação deste produto em um ambiente que utilize o
buildout:

1. Editar o arquivo buildout.cfg (ou outro arquivo de configuração) e
   adicionar o pacote ``brasil.gov.temas`` à lista de eggs da instalação::

        [buildout]
        ...
        eggs =
            brasil.gov.temas

2. Após alterar o arquivo de configuração é necessário executar
   ''bin/buildout'', que atualizará sua instalação.

3. Reinicie o Plone

4. Acesse o painel de controle e na opção **Temas** você verá os temas
providos por este pacote listados.

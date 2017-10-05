# -*- coding: utf-8 -*-
from brasil.gov.temas.testing import FUNCTIONAL_TESTING
from plone.app.theming.interfaces import IThemeSettings
from plone.app.theming.utils import applyTheme
from plone.app.theming.utils import getTheme
from plone.registry.interfaces import IRegistry
from plone.testing.z2 import Browser
from zope.component import getUtility

import Globals
import transaction
import unittest


class LinksAcessibilidadeTestCase(unittest.TestCase):

    layer = FUNCTIONAL_TESTING

    def setUp(self):
        Globals.DevelopmentMode = True
        self.portal = self.layer['portal']
        self.settings = getUtility(IRegistry).forInterface(IThemeSettings)
        self.browser = Browser(self.layer['app'])
        transaction.commit()

    def base_test(self, cor):
        """Teste base dos temas."""
        theme = getTheme(cor)
        applyTheme(theme)
        self.settings.enabled = True
        transaction.commit()

        self.browser.open(self.portal.absolute_url())

        # Testa se a âncora para o conteúdo aparece.
        self.assertIn(
            '<a name="acontent" id="acontent" class="anchor">',
            self.browser.contents,
        )

        # Testa se a âncora para o menu aparece.
        self.assertIn(
            '<a name="anavigation" id="anavigation" class="anchor">',
            self.browser.contents,
        )

        # Testa se o input para a busca aparece.
        self.assertIn(
            'name="SearchableText"',
            self.browser.contents,
        )

        # Testa se a âncora para o rodapé aparece.
        self.assertIn(
            '<a name="afooter" id="afooter" class="anchor">',
            self.browser.contents,
        )

    def test_link_para_conteudo_tema_amarelo(self):
        self.base_test('amarelo')

    def test_link_para_conteudo_tema_azul(self):
        self.base_test('azul')

    def test_link_para_conteudo_tema_branco(self):
        self.base_test('branco')

    def test_link_para_conteudo_tema_verde(self):
        self.base_test('verde')

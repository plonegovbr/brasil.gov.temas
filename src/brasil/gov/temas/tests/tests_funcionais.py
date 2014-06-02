# -*- coding: utf-8 -*-
from brasil.gov.temas.testing import FUNCTIONAL_TESTING
from plone.app.theming.interfaces import IThemeSettings
from plone.app.theming.utils import applyTheme
from plone.app.theming.utils import getTheme
from plone.registry.interfaces import IRegistry
from plone.testing.z2 import Browser
from zope.component import getUtility

import Globals
import unittest


class TransformsTestCase(unittest.TestCase):

    layer = FUNCTIONAL_TESTING

    def setUp(self):
        Globals.DevelopmentMode = True
        self.portal = self.layer['portal']
        self.settings = getUtility(IRegistry).forInterface(IThemeSettings)
        import transaction
        transaction.commit()

    def test_tema_verde(self):
        theme = getTheme('verde')
        applyTheme(theme)
        self.settings.enabled = True
        import transaction
        transaction.commit()
        browser = Browser(self.layer['app'])
        browser.open(self.portal.absolute_url())

        # Acesso a Informacao deve estar disponivel
        self.assertIn("acesso-a-infornacao.png", browser.contents)

        # Removido logo do governo federal
        self.assertNotIn("brasil.png", browser.contents)

    def test_tema_amarelo(self):
        theme = getTheme('amarelo')
        applyTheme(theme)
        self.settings.enabled = True
        import transaction
        transaction.commit()
        browser = Browser(self.layer['app'])
        browser.open(self.portal.absolute_url())

        # Acesso a Informacao deve estar disponivel
        self.assertIn("acesso-a-infornacao.png", browser.contents)

        # Removido logo do governo federal
        self.assertNotIn("brasil.png", browser.contents)

    def test_tema_branco(self):
        theme = getTheme('branco')
        applyTheme(theme)
        self.settings.enabled = True
        import transaction
        transaction.commit()
        browser = Browser(self.layer['app'])
        browser.open(self.portal.absolute_url())

        # Acesso a Informacao deve estar disponivel
        self.assertIn("acesso-a-infornacao.png", browser.contents)

        # Removido logo do governo federal
        self.assertNotIn("brasil.png", browser.contents)

    def test_tema_azul(self):
        theme = getTheme('azul')
        applyTheme(theme)
        self.settings.enabled = True
        import transaction
        transaction.commit()
        browser = Browser(self.layer['app'])
        browser.open(self.portal.absolute_url())

        # Acesso a Informacao deve estar disponivel
        self.assertIn("acesso-a-infornacao.png", browser.contents)

        # Removido logo do governo federal
        self.assertNotIn("brasil.png", browser.contents)

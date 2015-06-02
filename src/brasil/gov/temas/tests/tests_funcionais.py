# -*- coding: utf-8 -*-
from brasil.gov.temas.testing import FUNCTIONAL_TESTING
from plone.app.testing import SITE_OWNER_NAME
from plone.app.testing import SITE_OWNER_PASSWORD
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

    def login_browser(self, browser):
        """Autentica usuário de teste no browser"""
        browser.handleErrors = False
        basic_auth = 'Basic {0}'.format(
            '{0}:{1}'.format(SITE_OWNER_NAME, SITE_OWNER_PASSWORD)
        )
        browser.addHeader('Authorization', basic_auth)

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
        self.assertIn("brasil.png", browser.contents)

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
        self.assertIn("brasil.png", browser.contents)

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
        self.assertIn("brasil.png", browser.contents)

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
        self.assertIn("brasil.png", browser.contents)

    def test_tema_verde_autenticado(self):
        theme = getTheme('verde')
        applyTheme(theme)
        self.settings.enabled = True
        import transaction
        transaction.commit()
        browser = Browser(self.layer['app'])
        self.login_browser(browser)

        # Testa se elementos do dashboard aparecem.
        browser.open('{0}/dashboard'.format(self.portal.absolute_url()))
        self.assertIn('id="kssPortalMessage"', browser.contents)
        self.assertIn('dashboard</h1>', browser.contents)

        # Testa se elementos da 'Informação Pessoal' aparecem.
        browser.open('{0}/@@user-information?userid=admin'.format(
            self.portal.absolute_url()))
        self.assertIn('id="kssPortalMessage"', browser.contents)
        self.assertIn('Change your personal information', browser.contents)

        # Testa se elementos da 'Preferências Pessoais' aparecem.
        browser.open('{0}/@@user-preferences?userid=admin'.format(
            self.portal.absolute_url()))
        self.assertIn('id="kssPortalMessage"', browser.contents)
        self.assertIn('Your personal settings', browser.contents)

    def test_tema_amarelo_autenticado(self):
        theme = getTheme('amarelo')
        applyTheme(theme)
        self.settings.enabled = True
        import transaction
        transaction.commit()
        browser = Browser(self.layer['app'])
        self.login_browser(browser)

        # Testa se elementos do dashboard aparecem.
        browser.open('{0}/dashboard'.format(self.portal.absolute_url()))
        self.assertIn('id="kssPortalMessage"', browser.contents)
        self.assertIn('dashboard</h1>', browser.contents)

        # Testa se elementos da 'Informação Pessoal' aparecem.
        browser.open('{0}/@@user-information?userid=admin'.format(
            self.portal.absolute_url()))
        self.assertIn('id="kssPortalMessage"', browser.contents)
        self.assertIn('Change your personal information', browser.contents)

        # Testa se elementos da 'Preferências Pessoais' aparecem.
        browser.open('{0}/@@user-preferences?userid=admin'.format(
            self.portal.absolute_url()))
        self.assertIn('id="kssPortalMessage"', browser.contents)
        self.assertIn('Your personal settings', browser.contents)

    def test_tema_branco_autenticado(self):
        theme = getTheme('branco')
        applyTheme(theme)
        self.settings.enabled = True
        import transaction
        transaction.commit()
        browser = Browser(self.layer['app'])
        self.login_browser(browser)

        # Testa se elementos do dashboard aparecem.
        browser.open('{0}/dashboard'.format(self.portal.absolute_url()))
        self.assertIn('id="kssPortalMessage"', browser.contents)
        self.assertIn('dashboard</h1>', browser.contents)

        # Testa se elementos da 'Informação Pessoal' aparecem.
        browser.open('{0}/@@user-information?userid=admin'.format(
            self.portal.absolute_url()))
        self.assertIn('id="kssPortalMessage"', browser.contents)
        self.assertIn('Change your personal information', browser.contents)

        # Testa se elementos da 'Preferências Pessoais' aparecem.
        browser.open('{0}/@@user-preferences?userid=admin'.format(
            self.portal.absolute_url()))
        self.assertIn('id="kssPortalMessage"', browser.contents)
        self.assertIn('Your personal settings', browser.contents)

    def test_tema_azul_autenticado(self):
        theme = getTheme('azul')
        applyTheme(theme)
        self.settings.enabled = True
        import transaction
        transaction.commit()
        browser = Browser(self.layer['app'])
        self.login_browser(browser)

        # Testa se elementos do dashboard aparecem.
        browser.open('{0}/dashboard'.format(self.portal.absolute_url()))
        self.assertIn('id="kssPortalMessage"', browser.contents)
        self.assertIn('dashboard</h1>', browser.contents)

        # Testa se elementos da 'Informação Pessoal' aparecem.
        browser.open('{0}/@@user-information?userid=admin'.format(
            self.portal.absolute_url()))
        self.assertIn('id="kssPortalMessage"', browser.contents)
        self.assertIn('Change your personal information', browser.contents)

        # Testa se elementos da 'Preferências Pessoais' aparecem.
        browser.open('{0}/@@user-preferences?userid=admin'.format(
            self.portal.absolute_url()))
        self.assertIn('id="kssPortalMessage"', browser.contents)
        self.assertIn('Your personal settings', browser.contents)

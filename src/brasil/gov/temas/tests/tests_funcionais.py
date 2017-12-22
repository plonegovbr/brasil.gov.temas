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
        registry = getUtility(IRegistry)
        self.settings = registry.forInterface(IThemeSettings)  # noqa: P001
        self.browser = Browser(self.layer['app'])
        self.touch_icon = '<link rel="apple-touch-icon" href="/plone/++theme++{0}/img/touch_icon.png">'
        self.style = '<link media="all" href="/plone/++theme++{0}/css/style.css" type="text/css" rel="stylesheet">'
        import transaction
        transaction.commit()

    def base_test(self, cor):
        """Teste base dos temas"""
        theme = getTheme(cor)
        applyTheme(theme)
        self.settings.enabled = True
        import transaction
        transaction.commit()
        self.browser.open(self.portal.absolute_url())
        self.assertIn(
            '<div id="footer-brasil" class="footer-logos"></div>',
            self.browser.contents
        )

    @unittest.expectedFailure
    def test_tema_verde(self):
        self.base_test('verde')
        self.assertIn(self.touch_icon.format('verde'), self.browser.contents)

    @unittest.expectedFailure
    def test_tema_amarelo(self):
        self.base_test('amarelo')
        self.assertIn(self.touch_icon.format('amarelo'), self.browser.contents)

    @unittest.expectedFailure
    def test_tema_branco(self):
        self.base_test('branco')
        self.assertIn(self.touch_icon.format('branco'), self.browser.contents)

    @unittest.expectedFailure
    def test_tema_azul(self):
        self.base_test('azul')
        self.assertIn(self.touch_icon.format('azul'), self.browser.contents)


class AuthenticatedTestCase(unittest.TestCase):
    """Teste funcionais com usuário autenticado"""

    layer = FUNCTIONAL_TESTING

    def setUp(self):
        Globals.DevelopmentMode = True
        self.portal = self.layer['portal']
        registry = getUtility(IRegistry)
        self.settings = registry.forInterface(IThemeSettings)  # noqa: P001
        self.browser = Browser(self.layer['app'])
        self.login_browser()
        import transaction
        transaction.commit()

    def login_browser(self):
        """Autentica usuário de teste no browser"""
        self.browser.handleErrors = False
        basic_auth = 'Basic {0}'.format(
            '{0}:{1}'.format(SITE_OWNER_NAME, SITE_OWNER_PASSWORD)
        )
        self.browser.addHeader('Authorization', basic_auth)

    def base_test(self, cor):
        """Teste base dos temas"""
        theme = getTheme(cor)
        applyTheme(theme)
        self.settings.enabled = True
        import transaction
        transaction.commit()

        # Testa se elementos do dashboard aparecem.
        self.browser.open('{0}/dashboard'.format(self.portal.absolute_url()))
        self.assertIn('id="kssPortalMessage"', self.browser.contents)
        self.assertIn('dashboard</h1>', self.browser.contents)

        # Testa se elementos da 'Informação Pessoal' aparecem.
        self.browser.open('{0}/@@user-information?userid=admin'.format(
            self.portal.absolute_url()))
        self.assertIn('id="kssPortalMessage"', self. browser.contents)
        self.assertIn('Change your personal information',
                      self.browser.contents)

        # Testa se elementos da 'Preferências Pessoais' aparecem.
        self.browser.open('{0}/@@user-preferences?userid=admin'.format(
            self.portal.absolute_url()))
        self.assertIn('id="kssPortalMessage"', self.browser.contents)
        self.assertIn('Your personal settings', self.browser.contents)

    def test_tema_verde_autenticado(self):
        self.base_test('verde')

    def test_tema_amarelo_autenticado(self):
        self.base_test('amarelo')

    def test_tema_branco_autenticado(self):
        self.base_test('branco')

    def test_tema_azul_autenticado(self):
        self.base_test('azul')

# -*- coding: utf-8 -*-

from brasil.gov.temas.testing import INTEGRATION_TESTING
from plone.app.theming.utils import getAvailableThemes
from plone.app.theming.utils import getTheme

import unittest


class InstallTestCase(unittest.TestCase):

    layer = INTEGRATION_TESTING

    def setUp(self):
        self.portal = self.layer['portal']

    def test_temas_disponiveis(self):
        themes = getAvailableThemes()
        # Nosso tema + os dois do Plone
        self.assertEqual(len(themes), 6)

    def test_tema_verde_disponivel(self):
        theme = getTheme('verde')
        self.assertTrue(theme is not None)
        self.assertEqual(theme.__name__, 'verde')
        self.assertEqual(theme.title, 'Portal Padrão - Tema Verde')
        self.assertEqual(theme.description,
                         'Tema para Portal Padrão do Governo Federal')
        self.assertEqual(theme.rules, '/++theme++verde/rules.xml')
        self.assertEqual(theme.absolutePrefix, '/++theme++verde')
        self.assertEqual(theme.doctype, '<!DOCTYPE html>')

    def test_tema_amarelo_disponivel(self):
        theme = getTheme('amarelo')
        self.assertTrue(theme is not None)
        self.assertEqual(theme.__name__, 'amarelo')
        self.assertEqual(theme.title, 'Portal Padrão - Tema Amarelo')
        self.assertEqual(theme.description,
                         'Tema para Portal Padrão do Governo Federal')
        self.assertEqual(theme.rules, '/++theme++amarelo/rules.xml')
        self.assertEqual(theme.absolutePrefix, '/++theme++amarelo')
        self.assertEqual(theme.doctype, '<!DOCTYPE html>')

    def test_tema_branco_disponivel(self):
        theme = getTheme('branco')
        self.assertTrue(theme is not None)
        self.assertEqual(theme.__name__, 'branco')
        self.assertEqual(theme.title, 'Portal Padrão - Tema Branco')
        self.assertEqual(theme.description,
                         'Tema para Portal Padrão do Governo Federal')
        self.assertEqual(theme.rules, '/++theme++branco/rules.xml')
        self.assertEqual(theme.absolutePrefix, '/++theme++branco')
        self.assertEqual(theme.doctype, '<!DOCTYPE html>')

    def test_tema_azul_disponivel(self):
        theme = getTheme('azul')
        self.assertTrue(theme is not None)
        self.assertEqual(theme.__name__, 'azul')
        self.assertEqual(theme.title, 'Portal Padrão - Tema Azul')
        self.assertEqual(theme.description,
                         'Tema para Portal Padrão do Governo Federal')
        self.assertEqual(theme.rules, '/++theme++azul/rules.xml')
        self.assertEqual(theme.absolutePrefix, '/++theme++azul')
        self.assertEqual(theme.doctype, '<!DOCTYPE html>')

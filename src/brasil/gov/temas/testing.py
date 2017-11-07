# -*- coding: utf-8 -*-
from plone.app.testing import FunctionalTesting
from plone.app.testing import IntegrationTesting
from plone.app.testing import PLONE_FIXTURE
from plone.app.testing import PloneSandboxLayer


class Fixture(PloneSandboxLayer):

    defaultBases = (PLONE_FIXTURE,)

    def setUpZope(self, app, configurationContext):
        import brasil.gov.temas
        self.loadZCML(package=brasil.gov.temas)

    def setUpPloneSite(self, portal):
        self.applyProfile(portal, 'plone.app.theming:default')


FIXTURE = Fixture()

INTEGRATION_TESTING = IntegrationTesting(
    bases=(FIXTURE,), name='brasil.gov.temas:Integration')

FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(FIXTURE,), name='brasil.gov.temas:Functional')

# -*- coding: utf-8 -*-

from setuptools import find_packages
from setuptools import setup

version = '2.0b1'
long_description = (
    open('README.rst').read() + '\n' +
    open('CONTRIBUTORS.rst').read() + '\n' +
    open('CHANGES.rst').read()
)

setup(
    name='brasil.gov.temas',
    version=version,
    description='Temas para o Portal Padrao do Governo Federal',
    long_description=long_description,
    classifiers=[
        'Development Status :: 2 - Pre-Alpha',
        "Environment :: Web Environment",
        "Framework :: Plone",
        "Framework :: Plone :: 4.3",
        "Intended Audience :: Developers",
        "Intended Audience :: System Administrators",
        "License :: OSI Approved :: GNU General Public License v2 (GPLv2)",
        "Operating System :: OS Independent",
        "Programming Language :: Python",
        "Programming Language :: Python :: 2.7",
        "Topic :: Internet :: WWW/HTTP",
        "Topic :: Internet :: WWW/HTTP :: Dynamic Content",
        "Topic :: Software Development :: Libraries :: Python Modules",
    ],
    keywords='diazo theme ',
    author='PloneGov.BR',
    author_email='gov@plone.org.br',
    url='https://github.com/plonegovbr/brasil.gov.temas',
    license='GPLv2',
    packages=find_packages('src'),
    package_dir={'': 'src'},
    namespace_packages=['brasil', 'brasil.gov'],
    include_package_data=True,
    zip_safe=False,
    install_requires=[
        'brasil.gov.portal',
        'plone.app.themingplugins',
        'plone.resource',
        'Products.CMFPlone >=4.3',
        'setuptools',
    ],
    extras_require={
        'test': [
            'plone.app.testing',
            'plone.app.theming',
            'plone.registry',
            'plone.testing',
            'transaction',
            'zope.component',
        ]
    },
    entry_points="""
    [z3c.autoinclude.plugin]
    target = plone
    """,
)

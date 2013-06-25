View Cuscomization
===================

This plugin can be used to register any number of browser views from
a directory containing page templates.

If a directory ``views`` is found inside the theme directory and this
contains one or more ``.pt`` files, these will be registered as browser
views for a theme-specific layer. By default, this layer is the dynamic
one created by the ``browserlayer`` plugin.

Both the (relative) directory name and the layer (dotted) name can be
override in the manifest if required::

    [theme:views]
    directory = view-templates
    layer = beyondskins.cartacapital.portal.interfaces.ISomeLayer

Each template is registered as a view using the following configuration
by default::

* The view name is the name of the page template, minus the ``.pt``
  extension.
* The view is registered for all contexts (``for="*"``)
* The view requires the permission ``zope2.View``

These defaults can be overridden by placing a file ``views.cfg`` in the
``views`` directory. This should contain one section per template, where
the section name is the template name minus the ``.pt`` extension. The
valid options in each section are:

* ``name``, to change the view name
* ``permission``, to give a different permission name
* ``for``, to change the view's context
* ``class``, to let the view re-use an existing class

For example::

    # for my-view.pt:
    [my-view]
    name = my-view-at-root
    for = Products.CMFCore.interfaces.ISiteRoot
    permission = cmf.ManagePortal
    class = some.package.browser.MyView

All options are optional, as is the ``views.cfg`` file itself.

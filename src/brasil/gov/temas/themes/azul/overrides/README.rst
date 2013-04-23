Templates overrides
====================

This plugin automatically registers a ``z3c.jbot`` style template
overrides directory for the theme.

By default, it looks for a directory ``overrides`` in the theme directory,
and registers that with ``z3c.jbot`` using the default browser layer
created by the ``browserlayer`` plugin.

This directory can then contain template overrides using ``z3c.jbot``
naming conventions, e.g. ``beyondskins.cartacapital.portal.browser.some_template.pt`` will
override the file ``some_template.pt`` in
``beyondskins.cartacapital.portal.browser`` when
the theme is in effect.

The directory and layer can be overriden in the manifest if required::

    [theme:overrides]
    directory = template-overrides
    layer = beyondskins.cartacapital.portal.interfaces.ISomeLayer

The directory name is relative to the theme directory. The layer interface
must already exist.

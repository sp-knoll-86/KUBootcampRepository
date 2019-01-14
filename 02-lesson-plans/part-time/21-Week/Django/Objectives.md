# Django Objectives

The first section below enumerates learning objectives specific to working with Django.

The second section contains broader learning objectives pertaining to design and best practices generally.

### Django learning Objectives

Learning objectives for the Django unit are given below. After each objective appears the number 1; 2; or 3. The number indicates the "level" of the objective, with 1 being "fundamental/essential to homework" (e.g., mapping views to urls); 2 being "practical but not _absolutely_ essential" (e.g., using form builder instead of HTML forms); and 3 being "relatively advanced" (e.g., many-to-many relationships with cascading deletes).

* Given a development environment with Python 3.4.x+ and Django 1.10.x, students should be able to:

  * create a new project on the command line with `django-admin makeproject` (1)

  * run the application locally with `./manage.py runserver` (1)

  * create "apps" within a project using `./manage.py startapp $app` (1)

    * define views in `$app/views.py` (1)

      * handle either `get` or `post` requests in the appropriate views (1)

      * handle `doesnotexist` exceptions with either `try/except` or `get_object_or_404` (2)

      * use the `render` method to compile templates with context information (1)

      * use the `httpresponse` method to create stub view methods (1)

    * wire views to urls in `$app/urls.py` (1)

      * `include` those urls in `$project/urls.py` (1)

    * define models using the django orm in `$app/models.py` (1)

      * provide custom `__str__` methods for models (1)

      * provide an overridden `save` method to save `created` and `modified` timestamps (3)

        * apply the logic of such an override to modify built-in behavior (3)

    * define and use app-specific templates in `$app/templates/$app` (1)

      * extend "base" layout files (1)

      * use blocks to modularize templates (1)

      * use filters to modify dynamic data in templates (2)

    * link manually built forms to django views (1) 

    * use built-in form helpers to avoid having to write html forms by hand (2)

    * use generic views to "scaffold" typical resource views (2)

    * manage static files according to django best-practices...

      * in a development environment (2)

      * in a production environment via, e.g., `whitenoise` (3)

    * deploy a django application to heroku (1)

    * configure and use the built-in django admin interface (1)

### Design Learning Objectives

* When working on arbitrary projects involving object-oriented design patterns, students should:

  * Implement an MVC-like architecture, even when one is not provided (e.g., raw PHP or in ground-up Node CRUD applications) (3)

  * Sanitize user-input used to create and save models (2)

  * Preempt and handle errors in processing forms, and in development in general, with `try`/`except` clauses (3)

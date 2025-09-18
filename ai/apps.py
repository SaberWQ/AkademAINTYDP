import flask

ai = flask.Blueprint(
    name = "ai",
    import_name = "ai",
    static_folder = "static",
    static_url_path = "/ai/static",
    template_folder = "templates"
)
import flask

quize = flask.Blueprint(
    name = "quize",
    import_name = "quize",
    static_folder = "static",
    static_url_path = "/quize/static",
    template_folder = "templates"
)
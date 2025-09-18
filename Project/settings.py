import flask, os


project = flask.Flask(
    import_name= "Project",
    static_folder= "static",
    static_url_path= "/static",
    template_folder= "templates",
    instance_path= os.path.abspath(os.path.join(__file__, "..", "instance"))
)
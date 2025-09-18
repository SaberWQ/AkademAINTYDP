import flask
from flask_login import current_user
from Project.config_page import config_page

@config_page(template_name= 'quize.html')
def render_quize():
    return {}


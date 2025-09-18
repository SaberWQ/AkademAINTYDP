from .urls import *
from .settings import project
from .db import *
from .loadenv import load_env
from .login_manager import *

from user.models import User

project.register_blueprint(blueprint = home.home)
project.register_blueprint(blueprint = user.user)
project.register_blueprint(blueprint = ai.ai)
project.register_blueprint(blueprint = quize.quize)

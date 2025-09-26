import home, user, ai, quize
from ai.views import bot_response, get_chat_history, clear_chat_history

home.home.add_url_rule(rule= '/', view_func= home.render_home)
user.user.add_url_rule(rule= '/logout', view_func= user.logout)
quize.quize.add_url_rule(rule= '/quize', view_func= quize.render_quize)
ai.ai.add_url_rule(rule= '/ai', view_func= ai.render_ai)


user.user.add_url_rule(
    rule= "/registration",
    view_func= user.render_registration,
    methods = ["POST", "GET"]
)

user.user.add_url_rule(
    rule= "/authorization",
    view_func= user.render_authorization,
    methods= ["POST", "GET"]
)

ai.ai.add_url_rule(
    rule= "/ai",
    view_func= ai.render_ai,
    methods= ["POST", "GET"]
)

ai.ai.add_url_rule(
    rule='/bot-response',
    view_func= bot_response,
    methods=['POST']
)

ai.ai.add_url_rule(
    rule='/api/chat-history',
    view_func= get_chat_history,
    methods=['GET']
)

ai.ai.add_url_rule(
    rule='/api/clear-history',
    view_func= clear_chat_history,
    methods=['POST']
)
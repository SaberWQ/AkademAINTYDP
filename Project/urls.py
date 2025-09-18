import home, user, ai, quize

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

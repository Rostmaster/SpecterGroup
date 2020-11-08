import os

from flask import Flask

def create_app(test_config=None):
    #Create and configure app
    app = Flask(__name__,instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY = 'dev', 
        DATABASE = os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        #Load instance config, if exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        #Load test config if passed
        app.config.from_mapping(test_config)
    
    #ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route('/hello')
    def hello():
        return 'Hello'
    
    from . import db
    db.init_app(app)

    return app
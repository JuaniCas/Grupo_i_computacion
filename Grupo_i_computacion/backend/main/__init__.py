from flask import Flask
from flask_restful import Api
from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_mail import Mail
from flask_cors import CORS

import os

api = Api()

db = SQLAlchemy()

jwt = JWTManager()

mailsender=Mail()


def create_app():
    app = Flask(__name__)
    load_dotenv()

    CORS(app)
    
    if not os.path.exists(os.getenv("DATABASE_PATH")):
        os.makedirs(os.getenv("DATABASE_PATH"))
    
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///"+os.getenv("DATABASE_PATH")+os.getenv("DATABASE_NAME")

    db.init_app(app)

    
    import main.resources as resources

    api.add_resource(resources.UsuariosResource, "/usuarios")     
    api.add_resource(resources.UsuarioResource, "/usuario/<int:id>")  
    api.add_resource(resources.ProductosResource, "/productos")   
    api.add_resource(resources.ProductoResource, "/producto/<int:id>")  
    api.add_resource(resources.PedidosResource, "/pedidos")       
    api.add_resource(resources.PedidoResource, "/pedido/<int:id>")            
    api.add_resource(resources.NotificacionResource, "/notificacion/<int:id>")  
    api.add_resource(resources.NotificacionesResource, "/notificaciones")
    api.add_resource(resources.ValoracionesResource, "/valoraciones")
    api.add_resource(resources.ValoracionResource, "/valoracion/<int:id>")
    api.add_resource(resources.CategoriasResource, "/categorias")
    api.add_resource(resources.CategoriaResource, "/categoria/<int:id>")
    api.add_resource(resources.vinculacionResource, "/vinculacion")

    api.init_app(app)
    
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')

    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = int(os.getenv('JWT_ACCESS_TOKEN_EXPIRES'))
    
    app.config['JWT_REFRESH_TOKEN_EXPIRES'] = int(os.getenv('JWT_REFRESH_TOKEN_EXPIRES'))
    
    jwt.init_app(app)

    from main.auth import rutas
    app.register_blueprint(rutas.auth)


    app.config['MAIL_HOSTNAME'] = os.getenv('MAIL_HOSTNAME')
    app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER')
    app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT'))
    app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS')
    app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
    app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
    app.config['FLASKY_MAIL_SENDER'] = os.getenv('FLASKY_MAIL_SENDER')

    mailsender.init_app(app)

    
    return app

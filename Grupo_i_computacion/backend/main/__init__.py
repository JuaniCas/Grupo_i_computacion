from flask import Flask
from flask_restful import Api
from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy


import os

api = Api()

db = SQLAlchemy()



def create_app():
    app = Flask(__name__)
    load_dotenv()

    if not os.path.exists(os.getenv("DATABASE_PATH") + os.getenv("DATABASE_NAME")):
        os.makedirs(os.getenv("DATABASE_PATH") + os.getenv("DATABASE_NAME"))
    
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////" + os.getenv("DATABASE_PATH") + os.getenv("DATABASE_NAME")
    db.init_app(app)
    
    import main.resources as resources
    # Rutas
    api.add_resource(resources.UsuariosResource, "/usuarios")     
    api.add_resource(resources.UsuarioResource, "/usuario/<int:id>")  
    api.add_resource(resources.ProductosResource, "/productos")   
    api.add_resource(resources.ProductoResource, "/producto/<int:id>")  
    api.add_resource(resources.PedidosResource, "/pedidos")       
    api.add_resource(resources.PedidoResource, "/pedido/<int:id>")    
    api.add_resource(resources.LoginResource, "/login")           
    api.add_resource(resources.LogoutResource, "/logout")         
    api.add_resource(resources.NotificacionResource, "/notificacion")  
    api.add_resource(resources.ValoracionResource, "/valoracion") 

    api.init_app(app)
    return app

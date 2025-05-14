from flask import Flask
from flask_restful import Api
from dotenv import load_dotenv

import main.resources as resources
api = Api()

def create_app():
    app = Flask(__name__)
    load_dotenv()

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

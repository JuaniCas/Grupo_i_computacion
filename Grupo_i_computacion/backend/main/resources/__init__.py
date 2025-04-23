from flask import Flask
from dotenv import load_dotenv

from flask_restful import Api

import main.resources as resources

#Inicializamos restful
api = Api()

def create_app():
    #Inicializar flask
    app = Flask(__name__)
    #cargamos variables de entorno
    load_dotenv()
       
    #cargar los recursos
    api.add_resource(resources.recursos, '/Usuario/<id>')
    api.add_resource(resources.recursos, '/Usuarios')
    api.add_resource(resources.recursos, '/Producto/<id>')
    api.add_resource(resources.recursos, '/Productos')
    api.add_resource(resources.recursos, '/Pedido/<id>')
    api.add_resource(resources.recursos, '/Pedidos')
    api.add_resource(resources.recursos, '/Login')
    api.add_resource(resources.recursos, '/Logout')
    api.add_resource(resources.recursos, '/Notificacion')
    api.add_resource(resources.recursos, '/Valoracion')
    
    api.init_app(app)
    return app
    
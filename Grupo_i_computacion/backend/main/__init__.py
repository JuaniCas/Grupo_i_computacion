from flask import Flask
from flask_restful import Api
from dotenv import load_dotenv

from .resources.recursos import Usuarios, Usuario, Productos, Producto, Pedidos, Pedido, Login, Logout, Notificacion, Valoracion
api = Api()

def create_app():
    app = Flask(__name__)
    load_dotenv()

    # Rutas
    api.add_resource(Usuarios, "/usuarios")     # lista todos
    api.add_resource(Usuario, "/usuario/<int:id>")  # un solo animal
    api.add_resource(Productos, "/productos")   # lista todos
    api.add_resource(Producto, "/producto/<int:id>")  # un solo animal
    api.add_resource(Pedidos, "/pedidos")       # lista todos
    api.add_resource(Pedido, "/pedido/<int:id>")    # un solo animal
    api.add_resource(Login, "/login")           # login
    api.add_resource(Logout, "/logout")         # logout
    api.add_resource(Notificacion, "/notificacion")  # notificaciones
    api.add_resource(Valoracion, "/valoracion")  # valoraciones

    api.init_app(app)
    return app

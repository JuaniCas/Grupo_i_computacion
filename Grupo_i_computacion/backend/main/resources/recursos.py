from flask_restful import Resource
from flask import request

USUARIOS = {
    1:{'nombre':'Pepe', 'rol':'ADMIN'},
    2:{'nombre':'Juanchi', 'rol':'ENCARGADO'},
}
PRODUCTOS = {
    1:{'nombre':'Empanada', 'precio': 100},
    2:{'nombre':'Pizza', 'precio': 500},
}

PEDIDOS = {
    1:{'Pepe': 1, 'productos': [1, 2], 'total': 600},
    2:{'Juanchi': 2, 'productos': [1], 'total': 100},
}

VALORACION = {
    1:{'usuario': 'Pepe', 'producto': 1, 'valoracion': 5},
    2:{'usuario': 'Juanchi', 'producto': 2, 'valoracion': 4},
}

class Usuario(Resource):
    def get(self, id):
        if int(id) in USUARIOS:
            return USUARIOS[int(id)]
        
        return 'El id es inexistente', 404
        
    def delete(self, id):
        if int(id) in USUARIOS:
            del USUARIOS[int(id)]
            return 'Eliminado con exito', 200
        
        return 'El id a eliminar es inexistente', 404
    
    def put(self, id):
        if int(id) in USUARIOS:
            Usuario = USUARIOS[int(id)]
            data = request.get_json()
            Usuario.update(data)
            return 'Usuario editado con exito', 201
        
        return 'El id que intenta editar es inexistente', 404

class Usuarios(Resource):
    def get(self):
        return USUARIOS

    def post(self):
        usuario = request.get_json()
        id = int(max(USUARIOS.keys())) + 1
        USUARIOS[id] = usuario
        return USUARIOS[id], 201

class Producto(Resource):
    def get(self, id):
        if int(id) in PRODUCTOS:
            return PRODUCTOS[int(id)]
        return 'El id es inexistente', 404

    def put(self, id):
        if int(id) in PRODUCTOS:
            producto = PRODUCTOS[int(id)]
            data = request.get_json()
            producto.update(data)
            return 'Producto editado con éxito', 201
        return 'El id que intentan editar es inexistente', 404

    def delete(self, id):
        if int(id) in PRODUCTOS:
            del PRODUCTOS[int(id)]
            return 'Producto eliminado con éxito', 200
        return 'El id a eliminar es inexistente', 404
    
class Productos(Resource):
    def get(self):
        return PRODUCTOS

    def post(self):
        producto = request.get_json()
        id = int(max(PRODUCTOS.keys())) + 1
        PRODUCTOS[id] = producto
        return PRODUCTOS[id], 201

class Pedido(Resource):
    def get(self, id):
        if int(id) in PEDIDOS:
            return PEDIDOS[int(id)]
        return 'El id es inexistente', 404

    def put(self, id):
        if int(id) in PEDIDOS:
            pedido = PEDIDOS[int(id)]
            data = request.get_json()
            pedido.update(data)
            return 'Pedido modificado con éxito', 201
        return 'El id que intentan editar es inexistente', 404

    def delete(self, id):
        if int(id) in PEDIDOS:
            del PEDIDOS[int(id)]
            return 'Pedido eliminado con éxito', 200
        return 'El id a eliminar es inexistente', 404

class Pedidos(Resource):
    def get(self):
        return PEDIDOS

    def post(self):
        pedido = request.get_json()
        id = int(max(PEDIDOS.keys())) + 1 if PEDIDOS else 1
        PEDIDOS[id] = pedido
        return PEDIDOS[id], 201

class Login(Resource):
    def post(self):
        data = request.get_json()
        # Lógica para autenticar usuario
        return 'Usuario logueado con éxito', 200


class Logout(Resource):
    def post(self):
        # Lógica para invalidar el token actual
        return 'Token invalidado con éxito', 200


# Recursos para notificaciones
class Notificacion(Resource):
    def post(self):
        data = request.get_json()
        # Lógica para enviar notificación
        return 'Notificación enviada con éxito', 200


# Recursos para valoraciones
class Valoracion(Resource):
    def post(self):
        data = request.get_json()
        id = int(max(VALORACION.keys(), default=0)) + 1
        VALORACION[id] = data
        return {'message': 'Valoración agregada', 'data': data}, 201

    def get(self):
        # Lógica para obtener valoración 
        return VALORACION , 200
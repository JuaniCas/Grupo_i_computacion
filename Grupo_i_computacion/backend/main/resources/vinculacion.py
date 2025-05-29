from flask_restful import Resource
from flask import request, jsonify
from main.models import ProductosPedidosModel, PedidosModel, ProductosModel
from .. import db

class Vinculacion(Resource):
    def post(self):
        id_pedido = request.get_json().get('id_pedido')
        id_producto = request.get_json().get('id_producto')
        
        if id_pedido is None:
            print('El pedido no existe o no se ha proporcionado un id_pedido')
        if id_producto is None:
            print('El producto no existe o no se ha proporcionado un id_producto')
        
        pedido = db.session.query(PedidosModel).get(id_pedido)
        if not pedido:
            return 'El pedido no existe', 404
        
        producto = db.session.query(ProductosModel).get(id_producto)
        if not producto:
            return 'El producto no existe', 404
        
        
        
        query = ProductosPedidosModel.insert().values(id_producto=id_producto, id_pedido=id_pedido)
        try:
            db.session.execute(query)
            db.session.commit()
        except:
            return 'formato incorrecto', 400
        return 'vinculacion exitosa', 201

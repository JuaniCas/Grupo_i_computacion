from flask_restful import Resource
from flask import request, jsonify
from main.models import PedidosModel, ProductosModel
from .. import db
from datetime import datetime
from sqlalchemy import desc, func

class Pedido(Resource):
    def get(self, id):
        pedido = db.session.query(PedidosModel).get_or_404(id)
        
        return pedido.to_json()

    def put(self, id):
        pedido = db.session.query(PedidosModel).get_or_404(id)
        data = request.get_json().items()
        
        for key, value in data:
            if key == 'horario':
                try:
                    value = datetime.fromisoformat(value)
                except ValueError:
                    return 'Error: horario tiene que ser una fecha válida en formato ISO AAAA-MM-DD+T+HH-MM-SS', 400
            setattr(pedido, key, value)
        db.session.add(pedido)
        db.session.commit()
        
        return pedido.to_json(), 201


    def delete(self, id):
        pedido = db.session.query(PedidosModel).get_or_404(id)
        db.session.delete(pedido)
        db.session.commit()
        
        return '', 204



class Pedidos(Resource):
    def get(self):
        
        page = 1
        per_page = 10
        
        argumentos = request.args
        pedidos = db.session.query(PedidosModel)
        
        if argumentos.get('page'):
            page = int(argumentos.get('page'))
        if argumentos.get('per_page'):
            per_page = int(argumentos.get('per_page'))
            
        
        if 'id_usuario' in argumentos:
            pedidos = pedidos.filter(PedidosModel.id_usuario == int(argumentos['id_usuario']))
        if argumentos.get('ordenar_por_usuario') == 'desc':
            pedidos = pedidos.order_by(desc(PedidosModel.id_usuario))    
        if argumentos.get('ordenar_por_precio') == 'desc':
            pedidos = pedidos.order_by(desc(PedidosModel.precio_total))
        if argumentos.get('ordenar_por_precio') == 'asc':
            pedidos = pedidos.order_by(PedidosModel.precio_total)
        
        pedidos = pedidos.paginate(page=page, per_page=per_page, error_out=False)
        
        return jsonify([pedido.to_json_short() for pedido in pedidos],
                       {
                           'total': pedidos.total,
                           'pages': pedidos.pages,
                           'page': page
                       })

    def post(self):
        productos_ids = request.get_json().get('productos')
        pedido = PedidosModel.from_json(request.get_json())
        
        if productos_ids:
            productos = ProductosModel.query.filter(ProductosModel.id_producto.in_(productos_ids)).all()
            pedido.productos.extend(productos)
        
        db.session.add(pedido)
        db.session.commit()
        return pedido.to_json(), 201


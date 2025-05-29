from flask_restful import Resource
from flask import request, jsonify
from main.models import ProductosModel
from .. import db


class Producto(Resource):
    def get(self, id):
        producto = db.session.query(ProductosModel).get_or_404(id)
        return producto.to_json_complete()


    def put(self, id):
        producto = db.session.query(ProductosModel).get_or_404(id)
        data = request.get_json()
        
        for key, value in data.items():
            setattr(producto, key, value)
        db.session.add(producto)
        db.session.commit()
        
        return producto.to_json(), 201


    def delete(self, id):
        producto = db.session.query(ProductosModel).get_or_404(id)
        db.session.delete(producto)
        db.session.commit()
        return '', 204

        

class Productos(Resource):
    def get(self):
        
        page = 1
        per_page = 10
        
        argumentos = request.args
        productos = db.session.query(ProductosModel)
        
        if argumentos.get('page'):
            page = int(argumentos.get('page'))
        if argumentos.get('per_page'):
            per_page = int(argumentos.get('per_page'))
        
        if 'id_categoria' in argumentos:
            productos = productos.filter(ProductosModel.id_categoria == argumentos['id_categoria'])
        if 'nombre' in argumentos:
            productos = productos.filter(ProductosModel.nombre.ilike(f"%{argumentos['nombre']}%"))
        if argumentos.get('ordenar_por_nombre') == 'asc':
            productos = productos.order_by(ProductosModel.nombre)
        
        productos = productos.paginate(page=page, per_page=per_page, error_out=False)
        
        return jsonify([producto.to_json_short() for producto in productos],
                       {
                        'total': productos.total,
                       'pages': productos.pages,
                       'page': page
                       })


    def post(self):
        producto = ProductosModel.from_json(request.get_json())
        db.session.add(producto)
        db.session.commit()
        
        return producto.to_json(), 201

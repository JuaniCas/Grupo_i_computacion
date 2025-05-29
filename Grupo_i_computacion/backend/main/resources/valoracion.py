from flask_restful import Resource
from flask import request, jsonify
from main.models import ValoracionesModel
from .. import db


#VALORACIONES = {
#        1: { 'id_valoracion': 8, 'id_usuario': 9, 'id_producto': 10, 'valoracion': 10, 'descripcion': 'excelente comida', 'fecha': '10/10/2025' },
#        2: { 'id_valoracion': 11, 'id_usuario': 12, 'id_producto': 13, 'valoracion': 1, 'descripcion': 'muy quemado el pan', 'fecha': '11/11/2025' }
#}

class Valoraciones(Resource):
    def post(self):
        valoracion = ValoracionesModel.from_json(request.get_json())
        db.session.add(valoracion)
        db.session.commit()
        
        return valoracion.to_json(), 201
        
        #data = request.get_json()
        #id = int(max(VALORACION.keys(), default=0)) + 1
        #VALORACION[id] = data
        #return {'message': 'Valoración agregada', 'data': data}, 201

    def get(self):
        
        page = 1
        per_page = 10
        
        argumentos = request.args
        valoraciones = db.session.query(ValoracionesModel)
        
        if argumentos.get('page'):
            page = int(argumentos.get('page'))
        if argumentos.get('per_page'):
            per_page = int(argumentos.get('per_page'))
        
        if 'id_usuario' in argumentos:
            valoraciones = valoraciones.filter(ValoracionesModel.id_usuario == int(argumentos['id_usuario']))
        if 'id_producto' in argumentos:
            valoraciones = valoraciones.filter(ValoracionesModel.id_producto == int(argumentos['id_producto']))
        if 'valoracion' in argumentos:
            valoraciones = valoraciones.filter(ValoracionesModel.valoracion == int(argumentos['valoracion']))
        if argumentos.get('ordenar_por_id') == 'asc':
            valoraciones = valoraciones.order_by(ValoracionesModel.nombre)
        
        valoraciones = valoraciones.paginate(page=page, per_page=per_page, error_out=False)
        
        return jsonify([valoracion.to_json_short() for valoracion in valoraciones],
                       {
                        'total': valoraciones.total,
                        'pages': valoraciones.pages,
                        'page': page
                       })
    
class Valoracion(Resource):
    def get(self, id):
        valoracion = db.session.query(ValoracionesModel).get_or_404(id)
        return valoracion.to_json()
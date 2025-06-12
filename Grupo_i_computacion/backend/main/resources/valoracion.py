from flask_restful import Resource
from flask import request, jsonify
from main.models import ValoracionesModel
from .. import db
from main.auth.decoradores import role_required
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt


class Valoraciones(Resource):
    @jwt_required()
    def post(self):
        valoracion = ValoracionesModel.from_json(request.get_json())
        db.session.add(valoracion)
        db.session.commit()
        
        return valoracion.to_json(), 201
        
    @jwt_required()
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
    @jwt_required()
    def get(self, id):
        valoracion = db.session.query(ValoracionesModel).get_or_404(id)
        return valoracion.to_json()
from flask_restful import Resource
from flask import request, jsonify
from main.models import NotificacionesModel
from .. import db
from datetime import datetime
from sqlalchemy import func, desc

class Notificacion(Resource):
    
    def get(self, id):
        notificacion = NotificacionesModel.query.get_or_404(id)
        return notificacion.to_json_complete()

class Notificaciones(Resource):
    
    def get(self):
        
        page = 1
        per_page = 10
        
        notificaciones = db.session.query(NotificacionesModel)
        argumentos = request.args
        
        if argumentos.get('page'):
            page = int(argumentos.get('page'))
        if argumentos.get('per_page'):
            per_page = int(argumentos.get('per_page'))

        
        if 'id_usuario' in argumentos:
            notificaciones = notificaciones.filter(NotificacionesModel.id_usuario == int(argumentos['id_usuario']))
        if 'titulo' in argumentos:
            notificaciones = notificaciones.filter(NotificacionesModel.titulo == str(argumentos['titulo']))
        if 'tipo' in argumentos:
            notificaciones = notificaciones.filter(NotificacionesModel.tipo == str(argumentos['tipo']))
        if argumentos.get('ordenar_por_usuario') == 'desc':
            notificaciones = notificaciones.order_by(desc(NotificacionesModel.id_usuario))        
        
        notificaciones = notificaciones.paginate(page=page, per_page=per_page, error_out=False)
        
        return jsonify([notificacion.to_json_short() for notificacion in notificaciones],
                       {
                           'total': notificaciones.total,
                           'pages': notificaciones.pages,
                           'page': page
                       })
        
    def post(self):
        notificacion = NotificacionesModel.from_json(request.get_json())
        db.session.add(notificacion)
        db.session.commit()
        return notificacion.to_json(), 201

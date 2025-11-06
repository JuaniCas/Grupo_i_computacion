from flask_restful import Resource
from flask import request, jsonify
from main.models import UsuariosModel
from .. import db
from main.auth.decoradores import role_required
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt


class Usuario(Resource):
    @role_required(roles=['admin', 'cliente'])
    def get(self, id):
        Usuario = db.session.query(UsuariosModel).get_or_404(id)
        rol = get_jwt().get('rol')
        if rol == 'cliente' and Usuario.id_usuario != get_jwt_identity():
            return {'message': 'No tienes permiso para ver este usuario.'}, 403
        return Usuario.to_json_complete()
       
        
    @role_required(roles=['admin', 'cliente'])
    def delete(self, id): 
        usuario = db.session.query(UsuariosModel).get_or_404(id)
        rol = get_jwt().get('rol')
        if rol == 'cliente' and usuario.id_usuario != get_jwt_identity():
            return {'message': 'No tienes permiso para eliminar este usuario.'}, 403
        db.session.delete(usuario)
        db.session.commit()
        return '', 204
    
    
    @role_required(roles=['admin', 'cliente'])
    def put(self, id):
        usuario = db.session.query(UsuariosModel).get_or_404(id)
        data = request.get_json()
        rol = get_jwt().get('rol')
        if rol == 'cliente' and usuario.id_usuario != get_jwt_identity():
            return {'message': 'No tienes permiso para modificar este usuario.'}, 403
        nueva_contraseña = data.pop('contraseña', None)
        for key, value in data.items():
            setattr(usuario, key, value)
        if nueva_contraseña and nueva_contraseña != '':
            usuario.contraseña_plana = nueva_contraseña
        db.session.add(usuario)
        db.session.commit()
        return usuario.to_json_complete(), 201

        
        
class Usuarios(Resource):
    @role_required(roles = ["admin"])
    def get(self):
        
        page = 1
        per_page = 5
        
        argumentos = request.args
        usuarios = db.session.query(UsuariosModel)
        
        if argumentos.get('page'):
            page = int(argumentos.get('page'))
        if argumentos.get('per_page'):
            per_page = int(argumentos.get('per_page'))
        
        
        if 'rol' in argumentos:
            usuarios = usuarios.filter(UsuariosModel.rol == str(argumentos['rol']))
        if 'nombre' in argumentos:
            usuarios = usuarios.filter(UsuariosModel.nombre.ilike(f"%{argumentos['nombre']}%"))
        if 'apellido' in argumentos:
            usuarios = usuarios.filter(UsuariosModel.apellido.ilike(f"%{argumentos['apellido']}%"))
        if 'habilitado' in argumentos:
            usuarios = usuarios.filter(UsuariosModel.habilitado == (argumentos['habilitado'].lower() == 'true'))
        if argumentos.get('ordenar_por_nombre') == 'asc':
            usuarios = usuarios.order_by(UsuariosModel.nombre)
        
        usuarios = usuarios.paginate(page=page, per_page=per_page, error_out=False)
        
        return jsonify([usuario.to_json_short() for usuario in usuarios],
                       {
                        'total': usuarios.total,
                        'pages': usuarios.pages,
                        'page': page
                       })

    #lo borramos porque esto lo hariamos en la funcion register de auth.py?
    def post(self):
        usuario = UsuariosModel.from_json(request.get_json())
        db.session.add(usuario)
        db.session.commit()
        return usuario.to_json(), 201

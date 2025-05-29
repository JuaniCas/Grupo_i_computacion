from flask_restful import Resource
from flask import request, jsonify
from main.models import UsuariosModel
from .. import db


#USUARIOS = {
#    1:{ 'id_usuario': 1, 'rol': 'CLIENTE', 'nombre': 'Diego', 'apellido': 'Maradona', 'email': 'diegomaradona@gmail.com', 'contraseña': 'pelusa123','direccion': 'UM', 'celular': 4526088, 'habilitado': True},
#    2:{ 'id_usuario': 2, 'rol': 'ENCARGADO', 'nombre': 'Juan', 'apellido': 'Riquelme', 'email': 'juanriquelme@gmail.com', 'contraseña': 'roman123','direccion': 'Las Catitas', 'celular': 2634589045, 'habilitado': False}
#    }


class Usuario(Resource):
    def get(self, id):
        Usuario = db.session.query(UsuariosModel).get_or_404(id)
        return Usuario.to_json_complete()
        
        #if int(id) in USUARIOS:
        
        #    return USUARIOS[int(id)]
        
        #return 'El id es inexistente', 404
        
    def delete(self, id): 
        usuario = db.session.query(UsuariosModel).get_or_404(id)
        db.session.delete(usuario)
        db.session.commit()
        return '', 204
    
        #if int(id) in USUARIOS:
        #    del USUARIOS[int(id)]
        #    return 'Eliminado con exito', 200
        
        #return 'El id a eliminar es inexistente', 404
    
    def put(self, id):
        usuario = db.session.query(UsuariosModel).get_or_404(id)
        data = request.get_json()
        for key, value in data.items():
            setattr(usuario, key, value)
        db.session.add(usuario)
        db.session.commit()
        return usuario.to_json(), 201
    
    
        #if int(id) in USUARIOS:
        #    Usuario = USUARIOS[int(id)]
        #    data = request.get_json()
        #    Usuario.update(data)
        #    return 'Usuario editado con exito', 201
        
        #return 'El id que intenta editar es inexistente', 404
        
        
class Usuarios(Resource):
    def get(self):
        
        page = 1
        per_page = 10
        
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

    def post(self):
        usuario = UsuariosModel.from_json(request.get_json())
        db.session.add(usuario)
        db.session.commit()
        return usuario.to_json(), 201
        
        #usuario = request.get_json()
        #id = int(max(USUARIOS.keys())) + 1
        #USUARIOS[id] = usuario
        #return USUARIOS[id], 201
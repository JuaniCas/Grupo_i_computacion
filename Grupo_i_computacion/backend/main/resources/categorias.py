from flask_restful import Resource
from flask import request, jsonify
from main.models import CategoriasModel
from .. import db
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt
from main.auth.decoradores import role_required


class Categorias(Resource):
    
    def get(self):
        
        argumentos = request.args
        query = db.session.query(CategoriasModel)
        
        if 'nombre' in argumentos:
            query = query.filter(CategoriasModel.nombre == str(argumentos['nombre']))
        
        
        
        return jsonify([categoria.to_json() for categoria in query])

    @role_required(roles = ['admin'])
    def post(self):
        categoria = CategoriasModel.from_json(request.get_json())
        db.session.add(categoria)
        db.session.commit()
        return categoria.to_json(), 201

class Categoria(Resource):
    
    def get(self, id):
        categoria = db.session.query(CategoriasModel).get_or_404(id)
        return categoria.to_json_complete()
    
    @role_required(roles = ['admin'])
    def delete(self, id):
        categoria = db.session.query(CategoriasModel).get_or_404(id)
        db.session.delete(categoria)
        db.session.commit()
        return '', 204
    
    @role_required(roles = ['admin'])
    def put(self, id):
        categoria = db.session.query(CategoriasModel).get_or_404(id)
        data = request.get_json()
        categoria.nombre = data.get('nombre', categoria.nombre)
        for key, value in data.items():
            setattr(categoria, key, value)
        db.session.add(categoria)
        db.session.commit()
        return categoria.to_json(), 200
    
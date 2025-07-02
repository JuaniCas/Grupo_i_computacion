from flask import request, jsonify, Blueprint
from .. import db
from main.models import UsuariosModel
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token, create_refresh_token
from main.mail.funciones import sendMail


auth=Blueprint("auth",__name__, url_prefix="/auth")


@auth.route('/login', methods=['POST'])
def login():
    usuario = db.session.query(UsuariosModel).filter(UsuariosModel.email == request.get_json().get('email')).first()
    
    if (usuario is None) or not (usuario.verificar_contraseña(request.get_json().get('contraseña'))):
        return 'usuario o contraseña invalida', 401

    
    access_token = create_access_token(identity=usuario.id_usuario)
    refresh_token = create_refresh_token(identity=usuario.id_usuario)
   
    data = {
        'id': str(usuario.id_usuario),
        'email': usuario.email,
        'access_token': access_token,
        'refresh_token': refresh_token
    }

    return data, 200

@auth.route('/refresh', methods=['POST'])
@jwt_required(refresh=True)
def refresh():
    identity = get_jwt_identity()
    access_token = create_access_token(identity=identity)
    return jsonify(access_token=access_token), 200

@auth.route('/register', methods=['POST'])
def register():
    
    usuario = UsuariosModel.from_json(request.get_json())
    
    exists = db.session.query(UsuariosModel).filter(UsuariosModel.email == usuario.email).scalar() is not None
    if exists:
        return 'email duplicado', 409
    else:
        try:
            
            db.session.add(usuario)
            db.session.commit()
            sendMail([usuario.email], "Bienvenido", "register", usuario=usuario)
        except Exception as error:
            db.session.rollback()
            return str(error), 409
        return usuario.to_json() , 201

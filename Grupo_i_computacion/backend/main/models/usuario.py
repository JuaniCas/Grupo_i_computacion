from .. import db

class usuarios(db.Model):
    id_usuario = db.Column(db.Integer, primary_key=True)
    rol = db.Column(db.String(50))
    nombre = db.Column(db.String(50))
    apellido = db.Column(db.String(50))
    email = db.Column(db.String(50))
    contraseña = db.Column(db.String(50))
    direccion = db.Column(db.String(50))
    celular = db.Column(db.Integer)
    habilitado = db.Column(db.Boolean, default=False)
    
    valoraciones = db.relationship('valoraciones', back_populates='usuarios', cascade='all, delete-orphan')
    notificaciones = db.relationship('notificaciones', back_populates='usuarios', cascade='all, delete-orphan')
    pedidos = db.relationship('pedidos', back_populates='usuarios', cascade='all, delete-orphan')
    
    def __repr__(self):
        return '<usuarios %r >' % (self.nombre)
    
    def to_json(self):
        usuarios_json = {
            'id_usuario': self.id_usuario,
            'rol': str(self.rol),
            'nombre': str(self.nombre),
            'apellido': str(self.apellido),
            'email': str(self.email),
            'contraseña': str(self.contraseña),
            'direccion': str(self.direccion),
            'celular': self.celular,
            'habilitado': self.habilitado
        }
        
        return usuarios_json
    
    def to_json_short(self):
        usuarios_json = {
            'id_usuario': self.id_usuario,
            'rol': str(self.rol),
            'nombre': str(self.nombre),
            'apellido': str(self.apellido),
        }
        
        return usuarios_json
    
    def to_json_complete(self):
        valoreciones = [valoracion.to_json() for valoracion in self.valoraciones]
        notificaciones = [notificacion.to_json() for notificacion in self.notificaciones]
        pedidos = [pedido.to_json() for pedido in self.pedidos]
        usuarios_json = {
            'id_usuario': self.id_usuario,
            'rol': str(self.rol),
            'nombre': str(self.nombre),
            'apellido': str(self.apellido),
            'email': str(self.email),
            'contraseña': str(self.contraseña),
            'direccion': str(self.direccion),
            'celular': self.celular,
            'habilitado': self.habilitado,
            'valoraciones': valoreciones,
            'notificaciones': notificaciones,
            'pedidos': pedidos
        }
        return usuarios_json
    
    @staticmethod
    def from_json(json_usuarios):
        id_usuario = json_usuarios.get('id_usuario')
        rol = json_usuarios.get('rol')
        nombre = json_usuarios.get('nombre')
        apellido = json_usuarios.get('apellido')
        email = json_usuarios.get('email')
        contraseña = json_usuarios.get('contraseña')
        direccion = json_usuarios.get('direccion')
        celular = json_usuarios.get('celular')
        habilitado = json_usuarios.get('habilitado')
        
        return usuarios(id_usuario=id_usuario, rol=rol, nombre=nombre, apellido=apellido, email=email, contraseña=contraseña, direccion=direccion, celular=celular, habilitado=habilitado)
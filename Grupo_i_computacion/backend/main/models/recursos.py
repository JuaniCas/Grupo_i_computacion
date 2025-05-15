from .. import db

class usuarios(db.Model):
    id_usuario = db.Column(db.Integer, primary_key=True)
    rol = db.Column(db.String(50))
    nombre = db.Column(db.String(50))
    apellido = db.Column(db.String(50))
    email = db.Column(db.String(50))
    contraseña = db.Column(db.String(50))
    celular = db.Column(db.Integer)
    
    def to_json(self):
        usuarios_json = {
            'id_usuario': self.id_usuario,
            'rol': str(self.rol),
            'nombre': str(self.nombre),
            'apellido': str(self.apellido),
            'email': str(self.email),
            'contraseña': str(self.contraseña),
            'celular': self.celular,
        }
        
        return usuarios_json


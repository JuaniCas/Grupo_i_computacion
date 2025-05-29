from .. import db
from datetime import datetime

class notificaciones(db.Model):
    id_notificacion = db.Column(db.Integer, primary_key = True)
    id_usuario = db.Column(db.Integer,db.ForeignKey ('usuarios.id_usuario') , nullable = False)
    titulo = db.Column(db.String(50))
    tipo = db.Column(db.String(50))
    mensaje = db.Column(db.String(50))
    fecha = db.Column(db.DateTime)
    leido = db.Column(db.Boolean, default=False)
    
    usuarios = db.relationship('usuarios', back_populates='notificaciones', uselist=False, single_parent=True)
    
    def __repr__(self):
        return '<notificaciones %r >' % (self.titulo)
    
    def to_json(self):
        notificaciones_json = {
            'id_notificacion': self.id_notificacion,
            'id_usuario': self.id_usuario,
            'titulo': str(self.titulo),
            'tipo': str(self.tipo),
            'mensaje': str(self.mensaje),
            'fecha': self.fecha.strftime('%Y-%m-%d') if self.fecha else None,
            'leido': self.leido
        }
        
        return notificaciones_json
    
    def to_json_short(self):
        notificaciones_json = {
            'id_notificacion': self.id_notificacion,
            'titulo': str(self.titulo),
            'tipo': str(self.tipo),
        }
        
        return notificaciones_json
    
    def to_json_complete(self):
        usuarios = [usuario.to_json() for usuario in self.usuarios]
        notificaciones_json = {
            'id_notificacion': self.id_notificacion,
            'id_usuario': self.id_usuario,
            'titulo': str(self.titulo),
            'tipo': str(self.tipo),
            'mensaje': str(self.mensaje),
            'fecha': self.fecha.strftime('%Y-%m-%d') if self.fecha else None,
            'leido': self.leido,
            'usuarios': usuarios
        }
        return notificaciones_json
    
    
    @staticmethod
    def from_json(json_notificacion):
        id_notificacion = json_notificacion.get('id_notificacion')
        id_usuario = json_notificacion.get('id_usuario')
        titulo = json_notificacion.get('titulo')
        tipo = json_notificacion.get('tipo')
        mensaje = json_notificacion.get('mensaje')
        fecha_str = json_notificacion.get('fecha')
        fecha = datetime.strptime(fecha_str, '%Y-%m-%d') if fecha_str else None
        leido = json_notificacion.get('leido')
        
        return notificaciones(id_notificacion=id_notificacion, id_usuario=id_usuario, titulo=titulo, tipo=tipo, mensaje=mensaje, fecha=fecha, leido=leido)
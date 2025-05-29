from .. import db  
from datetime import datetime

class valoraciones(db.Model):
    id_valoracion = db.Column(db.Integer, primary_key = True)
    id_usuario = db.Column(db.Integer,db.ForeignKey('usuarios.id_usuario') , nullable = False)
    id_producto = db.Column(db.Integer, db.ForeignKey('productos.id_producto') , nullable = False)
    valoracion = db.Column(db.Integer)
    descripcion = db.Column(db.String(50))
    fecha = db.Column(db.DateTime)

    productos = db.relationship('productos', back_populates='valoraciones', uselist=False, single_parent=True)
    usuarios = db.relationship('usuarios', back_populates='valoraciones', uselist=False, single_parent=True)
    
    def __repr__(self):
        return '<valoraciones %r >' % (self.id_valoracion)
    
    def to_json(self):
        valoraciones_json = {
            'id_valoracion': self.id_valoracion,
            'id_usuario': self.id_usuario,
            'id_producto': self.id_producto,
            'valoracion': self.valoracion,
            'descripcion': str(self.descripcion),
            'fecha': self.fecha.strftime('%Y-%m-%d') if self.fecha else None
        }
        
        return valoraciones_json
    
    def to_json_short(self):
        valoraciones_json = {
            'id_valoracion': self.id_valoracion,
            'id_usuario': self.id_usuario,
            'id_producto': self.id_producto,
        }
        
        return valoraciones_json
    
    
    @staticmethod
    def from_json(json_valoraciones):
        id_valoracion = json_valoraciones.get('id_valoracion')
        id_usuario = json_valoraciones.get('id_usuario')
        id_producto = json_valoraciones.get('id_producto')
        valoracion = json_valoraciones.get('valoracion')
        descripcion = json_valoraciones.get('descripcion')
        fecha_str = json_valoraciones.get('fecha')
        fecha = datetime.strptime(fecha_str, '%Y-%m-%d') if fecha_str else None
        
        return valoraciones(id_valoracion=id_valoracion, id_usuario=id_usuario, id_producto=id_producto, valoracion=valoracion, descripcion=descripcion, fecha=fecha)
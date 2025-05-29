from .. import db
from datetime import datetime

class pedidos(db.Model):
    id_pedido = db.Column(db.Integer, primary_key = True)
    id_usuario = db.Column(db.Integer, db.ForeignKey('usuarios.id_usuario') , nullable = False)
    precio_total = db.Column(db.Integer, nullable = False)
    descripcion = db.Column(db.String(50))
    horario = db.Column(db.DateTime, nullable = False)
    estado = db.Column(db.String(50))
    
    usuarios = db.relationship('usuarios', back_populates='pedidos', uselist=False, single_parent=True)
    
    
    def __repr__(self):
        return '<pedidos %r >' % (self.descripcion)
    
    def to_json(self):
        pedidos_json = {
            'id_pedido': self.id_pedido,
            'id_usuario': self.id_usuario,
            'precio_total': self.precio_total,
            'descripcion': str(self.descripcion),
            'horario': str(self.horario.strftime('%Y-%m-%d %H:%M:%S')) if self.horario else None,
            'estado': str(self.estado),
            'productos': [producto.to_json() for producto in self.productos]
        }
        
        return pedidos_json
    
    def to_json_short(self):
        pedidos_json = {
            'id_pedido': self.id_pedido,
            'id_usuario': self.id_usuario,
        }
        
        return pedidos_json
    
    @staticmethod
    def from_json(json_pedido):
        id_pedido = json_pedido.get('id_pedido')
        id_usuario = json_pedido.get('id_usuario')
        precio_total = json_pedido.get('precio_total')
        descripcion = json_pedido.get('descripcion')
        horario_str = json_pedido.get('horario')
        horario = datetime.strptime(json_pedido.get('horario'), '%Y-%m-%d %H:%M:%S') if horario_str else None
        estado = json_pedido.get('estado')
        
        return pedidos(id_pedido=id_pedido, id_usuario=id_usuario, precio_total=precio_total, descripcion=descripcion, horario=horario, estado=estado)
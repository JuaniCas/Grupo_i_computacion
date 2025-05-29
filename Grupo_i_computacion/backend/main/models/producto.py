from .. import db

productos_pedidos = db.Table('productos_pedidos',
    db.Column('id_producto', db.Integer, db.ForeignKey('productos.id_producto'), primary_key=True),
    db.Column('id_pedido', db.Integer, db.ForeignKey('pedidos.id_pedido'), primary_key=True)
)

class productos(db.Model):
    id_producto = db.Column(db.Integer, primary_key = True)
    id_categoria = db.Column(db.Integer, db.ForeignKey("categorias.id_categoria") , nullable = False)
    nombre = db.Column(db.String(50))
    descripcion = db.Column(db.String(50))
    precio = db.Column(db.Integer)
    stock = db.Column(db.Integer)
    
    categorias = db.relationship('categorias', back_populates='productos', uselist=False, single_parent=True)
    valoraciones = db.relationship('valoraciones', back_populates='productos', cascade='all, delete-orphan')
    pedidos = db.relationship('pedidos', secondary=productos_pedidos, backref='productos', lazy='dynamic')
    
    def __repr__(self):
        return '<productos %r >' % (self.nombre)
    
    def to_json(self):
        productos_json = {
            'id_producto': self.id_producto,
            'id_categoria': self.id_categoria,
            'nombre': str(self.nombre),
            'descripcion': str(self.descripcion),
            'precio': self.precio,
            'stock': self.stock
        }
        
        return productos_json
    
    def to_json_complete(self):
        valoraciones_json = [valoracion.to_json() for valoracion in self.valoraciones]
        productos_json = {
            'id_producto': self.id_producto,
            'id_categoria': self.id_categoria,
            'nombre': str(self.nombre),
            'descripcion': str(self.descripcion),
            'precio': self.precio,
            'stock': self.stock,
            'valoraciones': valoraciones_json
        }
        return productos_json
    
    def to_json_short(self):
        productos_json = {
            'id_producto': self.id_producto,
            'id_categoria': self.id_categoria,
            'nombre': str(self.nombre),
            'precio': self.precio
        }
        
        return productos_json
    
    @staticmethod
    def from_json(json_productos):
        id_producto = json_productos.get('id_producto')
        id_categoria = json_productos.get('id_categoria')
        nombre = json_productos.get('nombre')
        descripcion = json_productos.get('descripcion')
        precio = json_productos.get('precio')
        stock = json_productos.get('stock')
        
        return productos(id_producto=id_producto, id_categoria=id_categoria, nombre=nombre, descripcion=descripcion, precio=precio, stock=stock)
from .. import db  
import json
    
class categorias(db.Model):
    id_categoria = db.Column(db.Integer, primary_key = True)
    nombre = db.Column(db.String(50))

    productos = db.relationship('productos', back_populates='categorias', cascade='all, delete-orphan')
    
    def __repr__(self):
        return '<categoria: %r >' % (self.nombre)
    
    def to_json(self):
        categorias_json = {
            'id_categoria': self.id_categoria,
            'nombre': str(self.nombre)
        }
        
        return categorias_json
    
    def to_json_complete(self):
        productos = [producto.to_json_short() for producto in self.productos]
        categorias_json = {
            'id_categoria': self.id_categoria,
            'nombre': str(self.nombre),
            'productos': productos
        }
        return categorias_json
    
    @staticmethod
    def from_json(categorias_json):
        id_categoria = categorias_json.get('id_categoria')
        nombre = categorias_json.get('nombre')
        
        return categorias(id_categoria=id_categoria, nombre=nombre)
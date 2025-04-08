from flask import Flask
from flask_restful import Api
from dotenv import load_dotenv

from main.resources.animal import Animal, Animales

api = Api()

def create_app():
    app = Flask(__name__)
    load_dotenv()

    # Rutas
    api.add_resource(Animales, "/animales")     # lista todos
    api.add_resource(Animal, "/animal/<int:id>")  # un solo animal

    api.init_app(app)
    return app

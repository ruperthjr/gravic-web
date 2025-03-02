from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import openai
import os

app = Flask(__name__)
CORS(app)

# Load Configuration
class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv("SQLALCHEMY_DATABASE_URI", "sqlite:///database.db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "your_jwt_secret")
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "your_openai_api_key")

app.config.from_object(Config)

# Initialize Extensions
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# Set OpenAI API key
openai.api_key = app.config["OPENAI_API_KEY"]

# Import models **AFTER** initializing db to avoid circular import
from models import User, JobListing

# Routes
@app.route("/")
def home():
    return jsonify({"message": "Welcome to Gravic API!"})

# Run the App
if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)

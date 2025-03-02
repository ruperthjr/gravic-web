import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv("SQLALCHEMY_DATABASE_URI", "sqlite:///database.db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "your_jwt_secret")
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "your_openai_api_key")

os.environ["OPENAI_API_KEY"] = Config.OPENAI_API_KEY

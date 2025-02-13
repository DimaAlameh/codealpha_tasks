import os

class Config:
    SECRET_KEY = os.urandom(24)
    SQLALCHEMY_DATABASE_URI = 'sqlite:///site.db'  # Set the URI for SQLite database
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # Disable unnecessary overhead

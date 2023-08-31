from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4

db = SQLAlchemy()

def get_uuid():
    return uuid4().hex

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    username = db.Column(db.String(345), unique=True)
    password = db.Column(db.Text, nullable=False)

class Courses(db.Model):
    __tablename__ = "courses"
    course_id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    course_title = db.Column(db.String(30),unique=True)
    course_price = db.Column(db.Float,nullable=False)
    description = db.Column(db.Text)
    instructor = db.Column(db.String(32))
    course_group = db.Column(db.String(30))

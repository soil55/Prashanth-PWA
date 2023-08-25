from flask import Flask, request,jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

hostname='localhost'
database = 'DB-AAA'
username = 'postgres'
pwd = 'postgres'
port_id = 5432

# Initialize Flask app
app = Flask(__name__)
CORS(app)
# Configure database
app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://{username}:{pwd}@{hostname}:{port_id}/{database}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.VARCHAR, unique=True, nullable=False)
    password = db.Column(db.VARCHAR, nullable=False)

# Basic route to print users
@app.route('/signin', methods=['POST'])
def print_users():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')    
    
    user = users.query.filter_by(username=username).first()

    if user:
        return jsonify({'message':'successfully signed in'}),200
    else:
        return jsonify({'message':'invalid credentials'}),401

# Run the server
if __name__ == '__main__':
    app.run(debug=True)
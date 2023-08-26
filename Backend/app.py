from flask import Flask, request,jsonify,session
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
userid=0

# Configure database
app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://{username}:{pwd}@{hostname}:{port_id}/{database}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key="5568sadfwej23uyiue542"

db = SQLAlchemy(app)
ma = Marshmallow(app)


#databse models
class users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.VARCHAR, unique=True, nullable=False)
    password = db.Column(db.VARCHAR, nullable=False)

# Basic route to print users
@app.route('/signin', methods=['POST'])
def login_users():
    global userid
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')    
    
    user = users.query.filter_by(username=username).first()

    if user:
        return jsonify({'message':'success'}),200
    else:
        return jsonify({'message':'invalid credentials'}),401  

    session["user_id"] = userid



@app.route('/register',methods=['POST'])
def register_users():
    data = request.get_json()
    username = data.get('username')
    password = data.get('pass') 

    user_exists = users.query.filter_by(username=username).first()

    if user_exists:
        return jsonify({"error": "User already exists"}), 409
    new_user = users(id=8,username=username, password=password)
    db.session.add(new_user)
    db.session.commit()
    
    session["user_id"] = userid
    userid+=1;

    return jsonify({
        "id": new_user.id,
        "username":new_user.username
    })       

# Run the server
if __name__ == '__main__':
    app.run(debug=True)
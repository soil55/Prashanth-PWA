from flask import Flask, request, jsonify, session,json
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from flask_session import Session
from config import ApplicationConfig
from models import db, User,Courses
from sqlalchemy.orm import sessionmaker
from twilio.rest import Client
import random

app = Flask(__name__)
app.config.from_object(ApplicationConfig)

bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)
server_session = Session(app)

db.init_app(app)

with app.app_context():
    db.create_all()

@app.route("/@me",methods=['GET'])
def get_current_user():
    user_id = session["user_id"]
    # user_id = "9ee1197adf2d435eada32543ba2dde99"
    print(f"user id is {user_id}")
    
    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401
    
    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        "id": user.id,
        "username": user.username,
        "password":user.password
    }) 

@app.route("/register", methods=["POST"])
def register_user():
    username = request.json["username"]
    password = request.json["pass"]
    email = request.json["email"]
    number = request.json["number"]

    user_exists = User.query.filter_by(username=username).first() is not None

    if user_exists:
        return jsonify({"error": "User already exists"}), 409
    # hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(username=username, password=password, email=email, number=number)
    db.session.add(new_user)
    db.session.commit()
    
    session["user_id"] = new_user.id

    return jsonify({
        "id": new_user.id,
        "username": new_user.username,
        "password": new_user.password,
    })

@app.route("/login", methods=["POST"])
def login_user():
    username = request.json["username"]
    password = request.json["pass"]

    user = User.query.filter_by(username=username).first()

    if user is None:
        return jsonify({"error": "Unauthorized"}), 401

    # if not bcrypt.check_password_hash(user.password, password):
    #     return jsonify({"error": "Unauthorized"}), 401
    
    session["user_id"] = user.id

    return jsonify({
        "id": user.id,
        "username": user.username,
    })

@app.route("/logout", methods=["POST"])
def logout_user():
    session.pop("user_id")
    return "200"

@app.route("/course_list",methods=['GET'])
def get_courses():
    all_courses = Courses.query.all()
    course_object = []
    for course in all_courses:
        course_object.append({
            'id':course.course_id,
           'title':course.course_title,
           'price':course.course_price,
           'Category':course.course_group,
           'Instructor':course.instructor,
           'Description':course.description
        })
    print(course_object)
    return jsonify(course_object)


#for getting details of one particular course    
@app.route("/course_details/<cid>",methods=['GET'])
def get_one_course(cid):
    result = Courses.query.filter_by(course_id=cid).first()
    return jsonify({
        "title":result.course_title,
        "description":result.description,
        "price":result.course_price,

    })

#for getting otp code for registration
@app.route("/getOtp",methods=['POST'])
def getOtp():

    number = request.json["number"]
    otp = getOtpapi(number)
    return jsonify({
        "number":number,
        "otp": otp
    })

def generateOTP():
    return random.randrange(100000,999999)

def getOtpapi(number):
    account_sid = 'ACce35a6feb4e1a1e6ec61ad3fbb9074cb'
    auth_token = 'c33c283d823a802e34071f18dd4f6d87'
    client = Client(account_sid,auth_token)
    otp = generateOTP()
    body = 'Your OTP is ' + str(otp)
    message = client.messages.create(
        body = body,
        from_ = "+18645280853",
        to = number,

    )
    return otp

if __name__ == "__main__":
    app.run(debug=True)


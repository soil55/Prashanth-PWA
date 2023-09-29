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
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['CORS_ORIGIN_ALLOW_ALL'] = True

server_session = Session(app)
CORS(app, supports_credentials=True)

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
        "password":user.password,
        "number":user.number
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
        "number":new_user.number
    })
def Aadharverify(aadhar_number):
    d = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
    [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
    [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
    [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
    [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
    [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
    [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
    [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    ]

    p = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
    [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
    [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
    [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
    [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
    [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
    [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
    ]
    c = 0
    inverted_list = list(map(int, reversed(str(aadhar_number))))

    for i, val in enumerate(inverted_list):
        c = d[c][p[i % 8][val]]

    return c == 0


@app.route("/login", methods=["POST"])
def login_user():
    username = request.json["username"]
    password = request.json["pass"]
    aadhar = request.json["aadhar"]
    result = Aadharverify(aadhar)
    if result is False:
        return jsonify({"error":"Unidentified Aadhar Number"}),401
  

    user = User.query.filter_by(username=username,password=password).first()

    if user is None:
        return jsonify({"error": "Unauthorized"}), 401

    # if not bcrypt.check_password_hash(user.password, password):
    #     return jsonify({"error": "Unauthorized"}), 401
    
    session["user_id"] = user.id

    return jsonify({
        "id": user.id,
        "username": user.username,
    })
@app.route("/loginWithEmail", methods=["POST"])
def login_user_email():
    email = request.json["email"]
    password = request.json["pass"]
    aadhar = request.json["aadhar"]
    result = Aadharverify(aadhar)
    if result is False:
        return jsonify({"error":"Unidentified Aadhar Number"}),401

    # user = User.query.filter_by(password=password).first()

    # if user is None:
    #     return jsonify({"error": "Unauthorized"}), 401

    user = User.query.filter_by(email=email,password=password).first()

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

@app.route("/sendmessage",methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def sendNotification():
    user_id = session["user_id"]
    print(f"user id is {user_id}")
    
    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401
    
    user = User.query.filter_by(id=user_id).first()
    print("The user number is " + user.number)
    number = '+91'+ user.number
    account_sid = 'ACce35a6feb4e1a1e6ec61ad3fbb9074cb'
    auth_token = 'c33c283d823a802e34071f18dd4f6d87'
    client = Client(account_sid,auth_token)
    body = 'Check Out the Courses and improve your skills'
    message = client.messages.create(
        body = body,
        from_ = "+18645280853",
        to = number,

    )
    return jsonify({
        "message":body
    })




if __name__ == "__main__":
    app.run(debug=True)


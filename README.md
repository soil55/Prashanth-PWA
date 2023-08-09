# Prashanth-PWA

# Task -2 

# Web Page Routing, Form Validation, and Error Handling Documentation

1. Introduction
This documentation provides guidelines for adding routing to web pages, implementing form validation, and handling errors effectively. These features are crucial for creating a user-friendly and robust web application.

2. Route Library
We have used React router dom v6 for the routing between the pages.

```
<Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/Email" element={<Email/>}/>
      <Route exact path="/Signup" element={<Signup/>}/>
      <Route exact path="/UserDetails" element={<UserDetails/>}/>
      <Route exact path="/Welcome" element={<Welcome/>}/>
      <Route exact path="/Academic" element={<Academic/>}/>
      <Route exact path="/NewPassword" element={<NewPassword/>}/>
      <Route exact path="/Final" element={<Final/>}/>
      <Route exact path="/Landing" element={<Landing/>}/>
      <Route exact path="/Forgotpass" element={<Forgotpass/>}/>
      <Route exact path="/VerifyEmail" element={<VerifyEmail/>}/>
    </Routes>
```

3. Error Handling in Forms
We have validated and handled the related errors of the forms are shown in following snippet
Example - for login page component

```
 const [pass1,setpass1] = useState('');
  const [pass2,setpass2] = useState('');

  const [error,seterror] = useState(null);

  const navigate  = useNavigate();
  const handlechange1 = event =>{
    const value = event.target.value;
    setpass1(value);

    if(pass1.length<8){
      seterror("password must be of 8 characters");
    }else seterror(null);
  }
  const handlechange2 = event =>{
    const value = event.target.value;
    setpass2(value);

    if(pass1.length<8){
      seterror("password must be of 8 characters");
    }else seterror(null);
  }
  const navigatetoEmail = (event)=>{
    event.preventDefault();
    if(pass1.length<8 || pass2.length<8){
      seterror("password must be of 8 characters in length");
    }
    else if(pass1.length!=pass2.length){
      seterror("passwords must be same");
    }
    else navigate('/Email')
  }
```
4. Demonstration
   https://github.com/soil55/Prashanth-PWA/assets/94616578/1382a67b-c30f-40e8-9469-0829a7fdf778

# Task-3
1. Adding Dashboard Functionality
We have added the User Dashboard Along with the necessary Routings through which the user can access his/her profile along with the choice of courses he/she wants.
Following Screenshots illustrates the same

![image](https://github.com/soil55/Prashanth-PWA/assets/94616578/0afff59b-20e4-4efc-8b92-d13424081b01)

![image](https://github.com/soil55/Prashanth-PWA/assets/94616578/e8b9c1e7-db49-4352-ab36-5adecac2b45b)
![image](https://github.com/soil55/Prashanth-PWA/assets/94616578/888ada09-fdf4-418e-82de-51f21d778ed9)
![image](https://github.com/soil55/Prashanth-PWA/assets/94616578/75fa533b-2d9e-420a-8046-052baf119b91)
![image](https://github.com/soil55/Prashanth-PWA/assets/94616578/8a210074-789b-4c4a-8ff1-d695f20891f2)



import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './../../firebase.config';


firebase.initializeApp(firebaseConfig);
const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        password: ''
    })
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser);
                console.log(displayName, photoURL, email);
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            });
    };
    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photo: '',
                    error: '',
                    success: false
                }
                setUser(signOutUser);
                // console.log(res)
            })
            .catch(error => {
                console.log(error);
                console.log(error.message);
            });
    }
    const handleBlur = (e) => {
        // console.log(e.target.name, e.target.value);
        let isFieldValid = true;
        if (e.target.name === 'email') {
            // const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            // console.log(isEmailValid)
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            // console.log(isPasswordValid && passwordHasNumber)
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    // console.log(res)
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                })
                .catch(error => {
                    // var errorCode = error.code;
                    // var errorMessage = error.message;
                    // console.log(errorCode, errorMessage);
                    const newUserInfo = { ...user };
                    newUserInfo = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    console.log('Sign in user info', res.user);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        }).then(function () {
            console.log('user updated successfully')
        }).catch(function (error) {
            console.log(error)
        });
    }

    var fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleFbLogin = () => {
        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    return (
        <div className="">
            <h1 className="">Login / Register</h1>
            <br/>
            <p style={{ color: 'red' }}>{user.error}</p>



            <form action="" className="bg-white w-25 mx-auto border shadow p-5">
                {newUser && <input type="text" name="name" className="form-control" onBlur={handleBlur} placeholder="Your name" required />}
                <br />
                <input type="text" name="email" className="form-control" onBlur={handleBlur} placeholder="Your email" required /><br />
                <input type="password" name="password" className="form-control" onBlur={handleBlur} placeholder="Your password" required /><br />
                <input type="submit" onClick={handleSubmit} className="btn btn-warning btn-lg" value={newUser ? 'sign up' : 'sign in'} />
                <br/><br/>
                <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
            <label htmlFor="newUser" className="form-check-label p-2"> New here ? Register now</label>
            </form>

            <br />

            {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged in'} Successfully</p>}
            <br/><br/>
            {
                user.isSignedIn ? <button onClick={handleSignOut} >Sign out</button> : <button onClick={handleSignIn} className="btn btn-danger"><i class="fab fa-google-plus-g p-1"></i> Sign in with google</button>
            }
            <br/><br/>
            {
                user.isSignedIn ? <button onClick={handleSignOut} >Sign out</button> : <button onClick={handleFbLogin} className="btn btn-primary"><i class="fab fa-facebook-f p-1"></i> Sign in with Facebook</button>
            }
            {
                user.isSignedIn && <div>
                    <p>Welcome {user.name} you are successfully logged in</p>
                </div>
            }
            <br />

        </div>
    );
};

export default Login;
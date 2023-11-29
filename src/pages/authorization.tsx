import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {API, checkResponse} from "../api";

function Auth() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onLogin(e) {
        e.preventDefault();
        if (!email || !password) {
            alert("No email or password!");
            return;
        }

        API.post("/login", { email, password })
            .then((res) => {
                if (checkResponse(res)) {
                    navigate("/");
                } else {
                    alert("Invalid email or password");
                }
            })
            .catch(e => alert(e));
    }

    function onRegister(e) {
        e.preventDefault();
        if (!email || !password) {
            alert("No email or password!");
            return;
        }

        API.post("/register", {
            email,
            password,
            firstName: name,
            lastName: ""
        })
            .then((res) => {
                if (checkResponse(res)) {
                    navigate("/");
                } else {
                    alert("Invalid email or password");
                }
            })
            .catch(e => alert(e));
    }

    return (
        <>
        <NavMenu></NavMenu>
        <div className="titleBlock">
            <div className="content">
                <div className="header">
                    <p>Welcome to the Omnicars dealership</p>
                    <div className="line"></div>
                    <div className="links">    
                        <a className="hover-underline-animation" href="/car">Toyota</a>
                        <a className="hover-underline-animation" href="">Ford Mustang</a>
                        <a className="hover-underline-animation" href="">Aston Martin</a>
                        <br />
                        <a className="hover-underline-animation" href="">About us</a>
                        <a href="/" className="button">Continue as Guest</a>
                    </div>
                </div>
                <div className="authBlock">
                    <input type="radio" name="auth" id="toLogin" hidden/>
                    <input type="radio" name="auth" id="toRegister" hidden/>
                    <div className="login">
                        <h1>Login</h1>
                        <h3>to gain access for more functions</h3>
                        <form action="">
                            <label htmlFor="loginEmail">Email:</label>
                            <input onChange={e => setEmail(e.target.value)} type="email" id="loginEmail"/>
                            <input type="checkbox" name="showPass" id="showPass" hidden/>
                            <label htmlFor="loginPass">Password:</label>
                            <input onChange={e => setPassword(e.target.value)} type="text" id="loginPass" />
                            <label htmlFor="showPass" id="showPassLabel">Show password</label>
                            <label htmlFor="showPass" id="hidePassLabel" hidden>Hide password</label>
                            <input onClick={onLogin} type="button" value="Login" />
                        </form>
                        <div className="toRegisterBlock">
                            <p>Don't have an account yet?</p>
                            <label htmlFor="toRegister">Register now!</label>
                        </div>
                    </div>
                    <div className="register">
                        <h1>Register</h1>
                        <h3>to gain access for more functions</h3>
                        <form action="">
                            <label htmlFor="regName">Name:</label>
                            <input onChange={e => setName(e.target.value)} type="text" id="regName"/>
                            <label htmlFor="regEmail">Email:</label>
                            <input onChange={e => setEmail(e.target.value)} type="email" id="regEmail"/>
                            <input type="checkbox" name="showRegPass" id="showRegPass" hidden/>
                            <label htmlFor="regPass">Password:</label>
                            <input onChange={e => setPassword(e.target.value)} type="password" id="regPass" />
                            <label htmlFor="confRegPass">Confirm password:</label>
                            <input type="password" id="confRegPass" />
                            <label htmlFor="showRegPass" id="showPassLabel2">Show passwords</label>
                            <label htmlFor="showRegPass" id="hidePassLabel3" hidden>Hide passwords</label>
                            <input onClick={onRegister} type="button" value="Submit" />
                        </form>
                        <div className="toRegisterBlock">
                            <p>Already have an account?</p>
                            <label htmlFor="toLogin">Go to login</label>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Auth;
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

function Auth() {
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
                            <input type="email" id="loginEmail"/>
                            <input type="checkbox" name="showPass" id="showPass" hidden/>
                            <label htmlFor="loginPass">Password:</label>
                            <input type="text" id="loginPass" />
                            <label htmlFor="showPass" id="showPassLabel">Show password</label>
                            <label htmlFor="showPass" id="hidePassLabel" hidden>Hide password</label>
                            <input type="submit" value="Login" />
                        </form>
                        <div className="toRegisterBlock">
                            <p>Don't have an account yet?</p>
                            <label htmlFor="toRegister">Register now!</label>
                        </div>
                    </div>
                    <div className="register">
                        <label htmlFor="toLogin">Login</label>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Auth;
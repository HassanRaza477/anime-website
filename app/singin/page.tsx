export default function Singin(){
    return(
        <div className="login">
           <div className="wrapper">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box-2">
                        <input type="text" placeholder="UserName" required></input>
                    </div>
                    <div className="input-box-2">
                        <input type="password" placeholder="Password" required></input>
                    </div>

                    <div className="remember-forget">
                        <label><input type="checkbox"></input>Remember me</label>
                        <a href="#">Forget Password</a>
                    </div>

                    <button type="submit" className="login-btn">Login</button>

                    <div className="register">
                        <p>Don't have an account?</p><a href="#">Register</a>
                    </div>
                </form>
           </div>
           </div>
    )
}
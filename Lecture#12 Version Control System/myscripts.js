// komponen login box
const LogBox = () => {
    return (
        <form className="LoginBox" border="1" cellPadding="10" style={{width: "100%", textAlign: "center"}}>
            <h1>Login</h1> <br></br>
            <label>Username </label>
            <p> </p>
            <input type="username" name="your_username" id="your_username"></input> <br></br>

            <p> </p>

            <label>Password </label>
            <p> </p>
            <input type="password" name="your_password" id="your_password"></input> <br></br>

            <p> </p>

            <button type="login">Log in</button> <br></br>

            <p> </p>

            <p>Or sign in with:</p>
            <img src="fb_logo.png" alt="Facebook Logo"></img>
            <img src="twitter_logo.png" alt="Facebook Logo"></img>
            <img src="gplus_logo.png" alt="Facebook Logo"></img>

        </form>
    );
};

// Komponen Utama
const Login = () => {
    return (
        <div class="login-box">
            <LogBox />
        </div>
    );
};

// render elemen ke DOM
ReactDOM.render(<Login />, document.getElementById('login'))
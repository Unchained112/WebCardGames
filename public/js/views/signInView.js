function SignInView(props){
    return (<div class="w3-container w3-display-center w3-half">
    <h1>Sign in for Web Card Games</h1>
        <input class="w3-input w3-border" placeholder="Enter email" onChange={e=>props.onEmail(e.target.value)}></input>
        <input id="password" class="w3-input w3-border" placeholder="Enter password" onChange={e=>props.onPassword(e.target.value)}
            onkeyup={e=>{ //Enter from Keyboard
                if (e.key === 'Enter' || e.keyCode === 13) {
                    props.signIn();
                    document.getElementById('password').value = "";
                }}}></input>
    <button class="w3-button" onClick={r=>{props.signIn(); document.getElementById('password').value = '';}}>Sign In</button>
    <p>If you do not have an account yet, click Sign Up to creat an account.</p>
    <button class="w3-button" onClick={r=>{props.GoSignUp(); document.getElementById('password').value = '';}}>Sign Up</button>
    <a onClick={r=>{props.goHome();}}>Continue without sign in.</a>
    </div>)
}
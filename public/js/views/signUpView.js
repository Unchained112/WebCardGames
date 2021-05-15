function SignUpView(props){
    return (<div class="w3-card w3-container w3-center w3-display-middle w3-card w3-casino-green" style="width:50%">
    <h1>Create an account for Web Card Games</h1>
        <input class="w3-input w3-border" placeholder="Enter email" onChange={e=>props.onEmail(e.target.value)}></input>
        <p> </p> 
        <input id="password" class="w3-input w3-border" placeholder="Enter password" onChange={e=>props.onPassword(e.target.value)}></input>
        <p> </p> 
        <input id="passwordAgain" class="w3-input w3-border" placeholder="Verify password" onChange={e=>props.onPasswordAgain(e.target.value)}
            onkeyup={e=>{ //Enter from Keyboard
                if (e.key === 'Enter' || e.keyCode === 13) {
                    props.signUp();
                }}}></input>
    <p> </p> 
    <button class="w3-button w3-green" onClick={r=>{
        props.signUp(); 
        document.getElementById('password').value = '';
        document.getElementById('passwordAgain').value = '';
        }}>Sign Up</button>
    <p>Already have an account? Click Back to sign in.</p>
    <button class="w3-button w3-green" onClick={r=>{props.goSign()}}>Back</button>
    <p> </p> 
    </div>)
}
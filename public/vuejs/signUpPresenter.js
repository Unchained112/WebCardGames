function SignUpPresenter(props){
    console.log("SU");
    var email;
    var password;
    var passwordA;
    return <SignUpView 
        onEmail={r=>{email = r;}}
        onPassword={r=>{password = r;}}
        onPasswordAgain={r=>{passwordA = r;}}
        signUp={r=>{
            if(passwordA !== password){
                alert("The passwords you enter are not the same!");
            }
            else{
                UserAuthen.signUp(email,password)
                .then(u=>{
                    //user
                })
                .catch(er=>{
                    alert("Error: " + er.message);
                });
            }
        }}
        goSign={r=>{window.location.hash = "#signIn";}}
    />
}
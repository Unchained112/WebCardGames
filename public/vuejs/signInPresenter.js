function SignInPresenter(props){
    var email;
    var password;
    return <SignInView onEmail={r=>{email = r;}}
        onPassword={r=>{password = r;}}
        signIn={r=>{
            UserAuthen.SignIn(email, password)
            .then(u=>{
                //user
            })
            .catch(er=>{
                alert("Error: " + er.message);
            });
        }}
        goHome={r=>{window.location.hash = "#home";}}
    />
}
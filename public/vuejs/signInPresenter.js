function SignInPresenter(props){
    var email;
    var password;
    return <SignInView onEmail={r=>{email = r;}}
        onPassword={r=>{password = r;}}
        signIn={r=>{
            UserAuthen.SignIn(email, password)
            .then(u=>{
                //user
                console.log(u);
                props.model.userID = u.user.uid;
                props.model.userEmail = u.user.email;
                //persistModel(props.model);
                window.location.hash = "#home";
            })
            .catch(er=>{
                alert("Error: " + er.message);
            });
        }}
        GoSignUp={r=>{
            console.log("si"); 
            window.location.hash = "#signUp";
        }}
        goHome={r=>{window.location.hash = "#home";}}
    />
}
function SignInPresenter(props){
    var email;
    var password;
    return <SignInView onEmail={r=>{email = r;}}
        onPassword={r=>{password = r;}}
        signIn={r=>{
            UserAuthen.SignIn(email, password)
            .then(u=>{
                //user
                props.model.userID = u.user.uid;
                props.model.userEmail = u.user.email;
                // console.log(props.model.userID);
                persistModel(props.model);
                LastGameState = []; //Reload the global value that stores the FreeCell GameStates
                window.location.hash = "#home";
            })
            .catch(er=>{
                alert("Error: " + er.message);
            });
        }}
        GoSignUp={r=>{
            // console.log("si"); 
            window.location.hash = "#signUp";
        }}
        goHome={r=>{window.location.hash = "#home";}}
    />
}
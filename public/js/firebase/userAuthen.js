const UserAuthen = {
    SignUp(email, password){
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    },
    SignIn(email, password){
        return firebase.auth().signInWithEmailAndPassword(email, password);
    },
    SignOut(){
        firebase.auth().signOut();
    },
    isSignIn(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                return true;
            }
            else{
                return false;
            }
        })
    }
}
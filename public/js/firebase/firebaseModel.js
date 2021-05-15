function persistModel(model){
    var strModel = JSON.stringify(model);//Store the whole model as json string
    let loadingFromFirebase = false;
    model.addObserver(function(){
            if(loadingFromFirebase) return;
         	firebase.database().ref('users/' + model.userId).set({
			model: strModel});
    });
    firebase.database().ref('users/' + model.userId).on("value", function(data){
        loadingFromFirebase = true;
        if(data.val()){
            model.setModel(data.val().model);
        }
        loadingFromFirebase = false;
    });
}
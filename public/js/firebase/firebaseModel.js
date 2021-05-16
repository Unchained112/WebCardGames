function persistModel(model){ 
    model.freeCellModel.addObserver(function(){
        if(model.loadingFromFirebase) return;
        if(model.userID === 0){
            return;
        }
        else{
            console.log(model.freeCellModel);
            var strfreecellModel = JSON.stringify(model.freeCellModel);//Store the whole model as json string
            console.log("Store Data: "+ model.userID);
            firebase.database().ref('users/' + model.userID + "/freecell").set({
            freeCellModel: strfreecellModel
            });
        }
    });
    console.log("loading? " + model.loadingFromFirebase);
    if(model.userID === 0){
        return;
    }
    else{
        console.log(model.userID);
        firebase.database().ref('users/' + model.userID + "/freecell").on("value", function(data){
            model.loadingFromFirebase = true;
            console.log(data.val());
            if(data.val()){
                console.log("Read Data")
                var tempfModel = JSON.parse(data.val().freeCellModel);
                model.freeCellModel.setModel(tempfModel);
            }
            model.loadingFromFirebase = false;
        });
    }
}
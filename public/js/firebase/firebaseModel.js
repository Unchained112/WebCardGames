function persistModel(model){ 
    model.freeCellModel.addObserver(function(){
        if(model.loadingFromFirebase) return;
        if(model.userID === 0){
            return;
        }
        else{
            //console.log(model.freeCellModel);
            var strfreecellModel = JSON.stringify(model.freeCellModel);//Store the whole model as json string
            var strLGS = JSON.stringify(LastGameState);
            var strSG = JSON.stringify(SingleState);
            //console.log("Store Data: "+ model.userID);
            firebase.database().ref('users/' + model.userID + "/freecell").set({
            freeCellModel: strfreecellModel,
            LGS: strLGS,
            SG: strSG
            });
        }
    });
    //console.log("loading? " + model.loadingFromFirebase);
    if(model.userID === 0){
        return;
    }
    else{
        //console.log(model.userID);
        firebase.database().ref('users/' + model.userID + "/freecell").on("value", function(data){
            model.loadingFromFirebase = true;
            if(data.val()){
                var tempfModel = JSON.parse(data.val().freeCellModel);
                model.freeCellModel.setModel(tempfModel);
                LastGameState = JSON.parse(data.val().LGS);
                SingleState = JSON.parse(data.val().SG);
            }
            model.loadingFromFirebase = false;
        });
    }
}
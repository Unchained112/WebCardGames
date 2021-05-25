const FreeCellPresenter = {
    props:["model"],
    data(){ return {promise:null, data:null, error:null};},
	created(){ 
        this.promise = Promise.all([CardSource.drawCards(DECK_ID_BREAKOUT_2, 52), CardSource.reShuffle(DECK_ID_BREAKOUT_2)]);
    },          // lifecycle 1, execute at creation
	watch:{
        'promise': {   // note: not this.promise! 
            immediate:true,  
            handler(){ 
		        this.data = this.error = null;
                if(this.promise){
			        const p = this.promise;
                    this.promise
                    .then(dt=>{
                        if(this.promise===p){
                            this.data = dt[0];
                            //console.log(this.data)
                        } 
                    })
                    .catch(er=>{
                        if(this.promise===p){
                            console.log(er + " Resolving");
                            this.promise = Promise.all([CardSource.drawCards(DECK_ID_BREAKOUT_2, 52), CardSource.reShuffle(DECK_ID_BREAKOUT_2)]);
                        }
                    });
                }
            }
        }
    },
    render(){ 
        return <div>
            {promiseNoData(this.promise, this.data, this.error) || 
            <FreeCellView model={this.model} 
                startFreeCell={r=>{
                    this.model.startGame(this.data.cards);
                    LastGameState = [];
                    SingleState = 0; // Clean up this var
                    storeState(JSON.parse(JSON.stringify(this.model)));
                }}
                restartFreeCell={r=>{
                    LastGameState = [];
                    SingleState = 0; // Clean up this var
                    this.model.restartGame();
                    storeState(JSON.parse(JSON.stringify(this.model)));
                }}
                cellChosen={(r,i)=>{
                    //console.log(r);
                    if(this.model.cells[i].code === "" && this.model.currentCard.code !== ""){
                        // console.log(i);
                        var int = i;
                        this.model.addCardtoCell(int);
                        this.model.emptyCurrentCard();
                        storeState(JSON.parse(JSON.stringify(this.model)));
                    }
                    else if(this.model.cells[i].code !== "" && this.model.currentCard.code === ""){
                        var card = this.model.removeCardtoCell(i);
                        this.model.setCurrentCard(card);
                        this.model.setPreviousLocation(i);
                        storeState(JSON.parse(JSON.stringify(this.model)));
                    }
                    else{
                        return;
                    }
                }}
                foundationChosen={(r,i)=>{
                    // console.log(r);
                    // console.log(i); 
                    if(this.model.currentCard.code !== ""){
                        if(r.code === "" && r.suit === this.model.currentCard.suit){
                            var c_v = this.model.strToValue(this.model.currentCard.value);
                            if(c_v === 1){
                                this.model.addCardtoFoundation(i);
                                this.model.emptyCurrentCard();
                                storeState(JSON.parse(JSON.stringify(this.model)));
                            }
                            else{
                                alert("Illegal move!");
                                return;
                            }
                        }
                        else if(r.suit === this.model.currentCard.suit){
                            var r_v = this.model.strToValue(r.value);
                            var c_v = this.model.strToValue(this.model.currentCard.value);
                            if(r_v === c_v - 1){
                                this.model.addCardtoFoundation(i);
                                this.model.emptyCurrentCard();
                                storeState(JSON.parse(JSON.stringify(this.model)));
                            }
                            else{
                                alert("Illegal move!");
                                return;
                            }
                        }
                    }
                    else{
                        return;
                    }
                }}
                pileChosen={(r,i)=>{
                    // console.log(r);
                    // console.log(i); 
                    if(this.model.currentCard.code === ""){
                        var card = this.model.removeCardtoPile(i);
                        if(card.code === ""){
                            return;
                        }
                        else{
                            this.model.setCurrentCard(card);
                            this.model.setPreviousLocation(i);
                        }
                        storeState(JSON.parse(JSON.stringify(this.model)));
                    }
                    else{
                        if(this.model.previousLocation === i){
                            this.model.addCardtoPile(i);
                            this.model.emptyCurrentCard();
                            storeState(JSON.parse(JSON.stringify(this.model)));
                        }
                        else{
                            var flag = this.model.pileLegalCheck(i, this.model.currentCard);
                            if(flag){
                                this.model.addCardtoPile(i);
                                this.model.emptyCurrentCard();
                                storeState(JSON.parse(JSON.stringify(this.model)));
                            }
                            else{
                                alert("Illegal move!");
                                return;
                            }
                        }
                    }
                }}
                cancelSelect={r=>{
                    if(LastGameState.length <= 1){
                        LastGameState = [];
                        SingleState = 0;
                        this.model.restartGame();
                        storeState(JSON.parse(JSON.stringify(this.model)));
                    }
                    else{
                        try{
                            var temp = popState();
                            this.model.setModel(temp);
                            SingleState = JSON.parse(JSON.stringify(this.model));
                        }
                        catch(er){
                            console.log(er);
                        }
                    }
                }}
                Undo={r=>{
                    // console.log(LastGameState);
                    try{
                        var temp = popState();
                        this.model.setModel(temp);
                        SingleState = JSON.parse(JSON.stringify(this.model));
                    }
                    catch(er){
                        console.log(er);
                    }
                }}
            />}
        </div>
        
    }
}


function storeState(model){
    if(SingleState !== undefined && SingleState !== 0){
        LastGameState.push(SingleState);
    }
    SingleState = model;
}

function popState(){
    var ls;
    if(LastGameState){
        if(LastGameState.length >= 1){
            ls = LastGameState.pop();
            SingleState = ls;
            return ls;
        }
    }
    else{
        throw new Error("LastGameState Error");
    }
}